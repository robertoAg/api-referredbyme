var mongoose = require('mongoose');
var linkSchema = mongoose.Schema({
    code: {
        type: String
    },
    offers: [
        {
            skuName: {
                type: String
            },
            title: {
                type: String
            },
            links: [{
                type: String
            }],
            description: {
                type: String
            },
            images: [{
                type: String
            }],
            categories: [{
                type: String
            }]
        }
    ]
});
module.exports = mongoose.model('Link', linkSchema);