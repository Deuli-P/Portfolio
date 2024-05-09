const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cover:{
        image:{
            type: String,
            required: true
        },
        alt:{
            type: String,
            required: true
        }
    },
    description: {
        type: String,
        required: true
    },
    tags:{
        mission:{ 
            type: String,
            required: true
        },
        strategie: {
            type: String,
            required: true
        },
        client:{
            type: String,
        },
        designer:{
            type: String,
        }
    },
    job : {
        type: String,
        required: true
    },
    mockup:{
        type:{
            type: String,
            required: true
        },
        url:{
            type: String,
            required: true
        },
        alt:{
            type: String,
            required: true
        }
    },
    pictures: [
        {
            images:{
                type: Array,
                required: true
            },
            alt:{
                type: String,
                required: true
            }
        }
    ],
    link: {
        type: String,
        required: true
    },
    technologies: [
        {
            type: String,
            required: true
        }
    ],
    entreprise:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Experience'
    },
    reseau:[
        {
            link: {
                type: String,
            },
            icon: {
                type: String,
            },
            name:{
                type: String,
            }
        }
    ],
    createAt: {
        type: Date,
        default: Date.now
    }
});


const Project = mongoose.model('Project', projectSchema);

module.exports = Project;