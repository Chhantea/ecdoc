var renderHomepage = function (req, res) {
    res.render('main/index', { title: 'SOme test',});
};

module.exports.index = async function (req, res) {
        renderHomepage(req, res,"none");

};