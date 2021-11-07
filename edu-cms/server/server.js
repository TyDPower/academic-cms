const express = require('express');
const studentsRoutes = require('./routes/studentRoutes')
const app = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');

app.set('view engine', 'ejs');

app.use(cors())
app.use(express.json());
app.use(fileUpload({
    createParentPath: true
}));
app.use('/students', studentsRoutes);

app.post('/upload', function async (req, res) {

    try {

        if(!req.files) {
            res.send({
                status: false,
                msg: "No file uploaded"
            });
        } else {

            let image = req.files.image;
            image.mv(`./uploads/${image.name}`, e => {
                if(e) {
                    return res.status(500).send(e)
                }
            });

            res.send({
                status: true,
                msg: "File is uploaded",
                data: {
                    name: image.name,
                    mimeType: image.mimetype,
                    size: image.size,
                }
            });

        }

    } catch (e) {
        res.status(500).send(e);
    }

});


app.listen(5000)