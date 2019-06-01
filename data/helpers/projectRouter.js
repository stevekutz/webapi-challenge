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
    } catch (err) {
        res.status(500).json({
            message: `Error trying to access Projects to add`
        });
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

    } catch (err) {
        res.status(500).json({
            message: `Error trying to access Projects to update`
        });
    }
});

// DELETE project
router.delete('/:id', async(req, res) => {

    const {id} = req.params;
    console.log(">>>>>>>>> ", req.params)

    try {
        const count = await Projects.remove(id);
        if(count > 0) {
            res.status(200).json({
                message: `The project with id ${id} has been removed `
            })
        } else {
            res.status(404).json({
                message: ` Project ${id} does not exist`
            })
        }

    } catch (err) {
        res.status(500).json({
            message: `Error trying to access Projects to delete`
        });
    }
});


module.exports = router;