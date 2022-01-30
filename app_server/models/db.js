const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost/Loc8r';
if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGODB_URI
    console.log("process.env", process.env);
}

mongoose.connect(dbURI, {
    dbName: 'Loc8r',
    useNewUrlParser: true,
    //userUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose disconnected`);
});

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};

process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});

process.once('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});

process.once('SIGTERM', () => {
    gracefulShutdown('Heroku app termination', () => {
        process.exit(0);
    });
});

require('./locations');