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

















module.exports = router;


