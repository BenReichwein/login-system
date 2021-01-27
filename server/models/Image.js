const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema(
    { img: 
        { data: Buffer, contentType: String }
    }
);

module.exports = mongoose.model('images', ImageSchema);
