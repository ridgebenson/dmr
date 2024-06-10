const mongoose = require('mongoose');

const disasterSchema = new mongoose.Schema(
    {
        // user: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     required: true,
        //     ref:'User'
        // },
        location: {
          latitude: Number,
          longitude: Number,
          
        },
          reportedat: String,
          disasterType: String,
          description: String,
          severity: String,
          image: String
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Disaster', disasterSchema);
  