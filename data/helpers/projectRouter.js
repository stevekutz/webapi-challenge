const express = require('express');

const Projects = require('./projectModel.js');

const router = express.Router();

// GET all projects
router.get('/', async (req, res) =>{
    try{
        const projects = await Projects.get();
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json({
            message: `Error trying to access Projects`
        });
    }
});

// ADD new project
router.post('/', async(req, res) => {

    const newProject = req.body;

    try {
        const project = await Projects.insert(newProject);
        res.status(201).json(newProject);
    } catch (err){
        console.log("YOU GOT AN ERROR on POST", err);
        error: `There was an error adding project`
    }
});

// UPDATE project  
router.put('/:id', async(req, res) => {

    const updatedProject = req.body;
    const {id} = req.params;

    try {
        const projectUpdate = await Projects.update( id, updatedProject);

        if(projectUpdate) {
            res.status(200).json(updatedProject);
        } else {
            res.status(404).json({
                message: ` Cannot update, the project with id ${id} does not exist`
            });
        }

    } catch (err){
        console.log("YOU GOT AN ERROR on UPDATE", err);
        error: `There was an error updating project`
    }
});









module.exports = router;