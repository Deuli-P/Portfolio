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
    pictures: [
        {
           mockup:{
                type:String,
                required: true
           } 
        },
        {
            projet:[
                {
                    images:{
                        type: Array,
                        required: true
                    },
                    description:{
                        type: String,
                        required: true
                    }
                }
            ]
        }
    ],
    github: {
        type: String,
        required: true
    },
    url: {
        type: String,
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
});


const Project = mongoose.model('Project', projectSchema);

module.exports = Project;