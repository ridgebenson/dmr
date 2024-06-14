const Disaster = require('../models/Disaster');

const reportDisaster = async(req, res) => {
    const { reportedat, disasterType, description, severity, image, locationType, locationCoordinates } = req.body;
    
    const location = {
        type: locationType,
        coordinates: JSON.parse(locationCoordinates)
    };

    if(!location ||!reportedat ||!disasterType ||!description ||!severity) {
        return res.status(400).json({message: 'All fields are required'});
    }

    try {
        const newDisaster = new Disaster({
            location: {
                type: 'Point',
                coordinates: location.coordinates
            },
            reportedat,
            disasterType,
            description,
            severity,
            image
        });

        await newDisaster.save();
        res.status(201).json({message: 'Disaster reported'});
    } catch(err) {
        res.status(500).json({message: 'Server Error'});
    }
};

const getDisasters = async(req, res) => {
    try {
        const disasters = await Disaster.find();
        res.json(disasters);
    } catch (err) {
        res.status(500).json({message: 'Server Error'});
    }
};

module.exports = {
    reportDisaster,
    getDisasters
};
    