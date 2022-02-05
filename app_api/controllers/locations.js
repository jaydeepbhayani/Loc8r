const mongoose = require('mongoose');
const Loc = mongoose.model('Location');  //model

const locationsCreate = (req, res) => {
    Loc.create({
        name: req.body.name,
        address: req.body.address,
        facilities: req.body.facilities.split(","),
        coords: {
            type: "Point",
            coordinates: [
                parseFloat(req.body.lng),
                parseFloat(req.body.lat)
            ]
        },
        openingTimes: [
            {
                days: req.body.days1,
                opening: req.body.opening1,
                closing: req.body.closing1,
                closed: req.body.closed1
            },
            {
                days: req.body.days2,
                opening: req.body.opening2,
                closing: req.body.closing2,
                closed: req.body.closed2
            }
        ]
    },
        (err, location) => {
            if (err) {
                res
                    .status(400)
                    .json(err);
            } else {
                res
                    .status(201)
                    .json(location);
            }
        });
        
    /* res.status(200)
        .json({"status": "success"}); */
};

const locationsListByDistance = (req, res) => {
    res.status(200)
        .json({"status": "success"});
};

const locationsReadOne = (req, res) => {

    Loc.findById(req.params.locationid)
        .exec((err, location) => {
            console.log("location: ", location);
            if (!location) {
                return res.status(404)
                    .json({"message": "location not found."});
            } else if (err) {
                return res.status(404)
                    .json(err);
            }

            res.status(200).json(location);
        })
    /* res.status(200)
        .json({"status": "success"}); */
};

const locationsUpdateOne = (req, res) => {
    res.status(200)
        .json({"status": "success"});
};

const locationsDeleteOne = (req, res) => {
    res.status(200)
        .json({"status": "success"});
};

module.exports = {
    locationsListByDistance,
    locationsCreate,
    locationsReadOne,
    locationsUpdateOne,
    locationsDeleteOne
};