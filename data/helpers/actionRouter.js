const express = require('express');

const Actions = require('./actionModel.js');

const router = express.Router();

// GET all actions
router.get('/', async (req, res) =>{
    try{
        const actions = await Actions.get();
        res.status(200).json(actions);
    } catch (err) {
        res.status(500).json({
            message: `Error trying to access Actions`
        });
    }
});

// ADD new action
router.post('/', async(req, res) => {

    newAction = req.body;

    try {
        const addedAction = await Actions.insert(newAction);
        res.status(201).json(addedAction);
    } catch (err) {
        res.status(500).json({
            message: `Error trying to add to Actions`
        });
    }

})

// UPDATE action
router.put('/:project_id', async(req, res) => {
    try{
        const updatedAction = req.body;
        const action = await Actions.update(req.params.project_id, updatedAction);

        if(action) {
            res.status(200).json(updatedAction);
        } else {
            res.status(404).json({
                message: ` the action with id ${project_id} does not exist`
            })
        }
    } catch (err) {
        res.status(500).json({
            message: `Error trying to update to Actions`
        });
    }
    
})

// DELETE action
router.delete('/:project_id', async(req, res) => {
    try {
        const pid = req.params.project_id;
        const count = await Actions.remove(pid);

        if(count > 0) {
            res.status(200).json({
                messge: `The action with project id ${pid} has been removed`
            })
        }

    } catch (err) {
        res.status(500).json({
            message: `Error trying to delete from Actions`
        });
    }
    
})















module.exports = router;


