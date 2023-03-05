const express = require('express');
const { update } = require('../model/model');
const Model = require('../model/model');
const router = express.Router()

module.exports = router;

//Post method 
router.post('/post', async (req, res) => {
    const data = new Model({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        Weight: req.body.Weight,
        Hometown: req.body.Hometown,
        College: req.body.College,
        Age: req.body.Age,
        Wins: req.body.Wins
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

/*


5 queries



*/
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
        console.log(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
    
    
})

router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById('6404fa0fdd96ddbcc48ee6ec');
        console.log(data)
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.get('/getWeight', async (req, res) => {
    try{
        const data = await Model.findOne({Weight: {$gte:"70KG"} });
        console.log(data)
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.get('/getCollege', async (req, res) => {
    try{
        const data = await Model.find({College: "Penn State" });
        console.log(data)
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.get('/getWins', async (req, res) => {
    try{
        const data = await Model.find({Wins: {$gte:"111"} });
        console.log(data)
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

/*


ADD/UPDATE/DELETE



*/ 



router.patch('/update', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


router.delete('/delete', async (req, res) => {
    try {console.log('error')
        const id = req.params.id;
        const data = await Model.findByIdAndDelete("63fe2dd6d5fb2b01d272cc98")
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        
        res.status(400).json({ message: error.message })
    }
})

