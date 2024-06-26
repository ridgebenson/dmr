const Disaster = require('../models/Disaster');
//const nodemailer = require('nodemailer');

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

        // //send email notification 
        // const transporter = nodemailer.createTransport({
        //     host: 'smtp.gmail.com',
        //     port: 587,
        //     secure: false,
        //     auth: {
        //         user: process.env.EMAIL,
        //         pass: process.env.PASSWORD
        //     }
        // });

        // await transporter.nodemailer({
        //     from: 'ridgemuturi@gmail.com',
        //     to: 'bbitclass25@gmail.com',
        //     subject: 'New Disaster Reported',
        //     text: `A new disaster was reported at ${reportedat}. Type: ${disasterType}`,
        //  });
            
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

const getDisasterById = async(req, res) => {
    try {
        const disaster = await Disaster.findById(req.params.id);
        if(!disaster) {
            return res.status(404).json({message: 'Disaster not found'});
        }
        res.json(disaster);
    } catch (err) {
        res.status(500).json({message: 'Server Error'});
    }
}

module.exports = {
    reportDisaster,
    getDisasters,
    getDisasterById
};
    