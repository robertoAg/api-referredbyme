let router = require('express').Router();

var linkController = require('./../controller/linkController');

router.route('/link')
    .post(linkController.new);

router.route('/link/:code')
    .get(linkController.index);
    
module.exports = router;