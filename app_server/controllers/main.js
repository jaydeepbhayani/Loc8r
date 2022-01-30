const index = (req, res) => {
    res.render('index', {title: 'Happy Friday!!!!!'})
}

module.exports = {
    index
}