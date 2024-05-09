const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const port = 3002;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose
    .connect("mongodb+srv://pierreantoniutti:glrhhenxlicd4DQR@cluster.oqescy3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster")
    .then(() => {
        console.log("Connected to database!");
    })
    .catch((err)=> {
        console.log("Fail to Connect to MongoDB Atlat",err);
    });

    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    })

const Project = require("./model/project");
const Experience = require("./model/experience");

    // Recup projet par ID
app.get("/v01/project/:id", async(req, res) => {
    try{
        const id = req.params.id;

        const project = await Project.findById(id);

        if(!project){
            res.status(404).json({message:"Projet non trouvé"});
        }
        
        res.status(200).json(project);

    }catch(err){
        console.log("Error",err);
        res.status(500).json({message:"Erreur en récupérant le projet"});
    }
})

    //Recup dernier projet
    // Not working

app.get("/v01/project/last", async(req, res) => {
    try{
        const project = await Project.aggregate([
            {
                $sort: {createAt: -1}
            },
            {
                $limit: 1
            }
        ]);

        if(!project){
            res.status(404).json({message:"Aucun projet trouvé"});
        }
        res.status(200).json(project);
    }
    catch(err){
        console.log("Error",err);
        res.status(500).json({message:"Erreur en récupérant le dernier projet"});
    }
})
   // Not working


    // Recup tous les projets

app.get("/v01/projects/all", async(req, res) => {
    try{
        const projects = await Project.find();

        if(!projects){
            res.status(404).json({message:"Aucun projet trouvé"});
        }
        res.status(200).json(projects);

    }catch(err){
        console.log("Error",err);
        res.status(500).json({message:"Erreur en récupérant les projets"});
    }
})


    // Recup experience par ID
app.get("/v01/experience/:id", async(req, res) => {
    try{
        const id = req.params.id;

        const experience = Experience.findById(id);

        if(!experience){
            res.status(404).json({message:"Experience non trouvé"});
        }

        res.status(200).json(experience);

    }catch(err){
        console.log("Error",err);
        res.status(500).json({message:"Erreur en récupérant l'experience"});
    }
})

    // Recup tous les experiences

    app.get("/v01/experiences/all", async (req,res) => {
        try{
            const experiences = await Experience.find();

            if(!experiences || experiences.length === 0){
                res.status(404).json({message:"Aucune expérience trouvé"});
            }

            res.status(200).json(experiences);

        }catch(err){
            console.log("Error",err);
            res.status(500).json({message:"Erreur en récupérant les experiences"});
        }
    })