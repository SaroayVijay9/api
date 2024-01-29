const express = require('express')
const router = express.Router()
const Aliens = require('../models/aliens');
const { error } = require('console');


router.post('/add',async (req,res)=>{
try{
    const {name, tech, sub} = req.body;
    const newtodo = new Aliens({ name, tech ,sub})
    await newtodo.save();
    res.status(200).json(newtodo)
}catch{
    res.status(500).json({message: error.message})
}

})

router.get('/show',async(req,res)=>{
    try{
        const aliens = await Aliens.find()
        res.json(aliens)
    }catch(err){
        res.send('Error' +err)

    }
})

module.exports = router