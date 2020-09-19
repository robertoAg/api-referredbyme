const util = require('util');

exports.index = function (req, res, next) {
    Link
        .find({code: req.params.code})
        .exec((err, results) => {
            if (err) {
                res.json({
                    status: "error",
                    message: err,
                });
            }
            res.json({
                status: "success",
                message: "Links retrieved successfully",
                data: results
            });
    });
};

// Handle create link actions
exports.new = function (req, res) {
    console.warn(req.body)
    var link = new Link();
    let code = new Date().valueOf();
    link.code = code;
    link.offers = req.body;
// save the link and check for errors
    link.save(function (err) {
        if (err) {
            res.json(err);
        }else{
            res.json({
                message: 'New link created!',
                data: link
            });
        }
    });
};