const Image = require('../models/Image')
const fs = require('fs')

const image = (app) => {
    app.get('/image', async (req, res) => {
        try {
            const image = await Image.find();
            res.json(image)
        } catch (err) {
            res.send(`Error ${err}`)
        }
    });
    // Post image
    app.post('/image',function(req, res){
        try {
            let image = new Image();
            image.img.data = fs.readFileSync(req.files.userPhoto.path)
            image.img.contentType = 'image/png';
            image.save();
            res.status(200).json(image)
        } catch (err) {
            res.send(`Error ${err}`)
        }
       });
};

module.exports = image;