const express = require('express');
const router = express.Router();
const disasterController = require('../controllers/disasterController');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../frontend/src/uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    }
});

const upload = multer({ storage: storage });


router.post('/reportdisaster', upload.single('image'), async (req, res) => {
    const imageName = req.file.filename;
    req.body.image = imageName;
    try {
        await disasterController.reportDisaster(req, res);
    }
    catch (err) {
        console.log(err);
    }
});

router.get('/disasters', async (req, res) => {
    try {
        await disasterController.getDisasters(req, res);
    }
    catch (err) {
        console.log(err);
    }
});

module.exports = router;