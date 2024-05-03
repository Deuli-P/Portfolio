const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    logo: {
        type: String,
    },
    job:{
        type: String,
        required: true
    },
    referent:{
        name: { 
            type: String,
            required: true
        },
        job: {
            type: String,
            required: true
        },
        avis: {
            type: String,
        },
        image: {
            type: String,
        }
    },
    website:{
        type: String,
    },
    location:{
        type: String,
    },
    technologies:{
        type: Array,
        required: true
    },
    startDate:
    {
        type: Number,
        required: true
    },
    endDate:
    {
        type: Number,
    },
});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;


