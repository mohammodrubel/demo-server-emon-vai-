const express = require('express')
const mongoose = require('mongoose')
const assetSchema = require('../Schema/assetSchema')
const Asset =new mongoose.model("Asset",assetSchema)
const router = express.Router()

router.post('/',async(req,res)=>{
    const assetInfo =Asset (req.body);

    try{
        const singleAsset = await assetInfo.save()
        res.status(200).json({"result":singleAsset})
    }
    catch(error){
        res.status(500).json({"Error":error})
    }
})

router.get('/',async(req,res)=>{
    try{
        const information = await Asset.find({})
        res.status(200).json({result:information})
    }
    catch(error){
        res.status(500).json({"error":error})
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const singleInfo =await Asset.findById(req.params.id)
        res.status(200).json(singleInfo)
    }
    catch(error){
        res.status(500).json({"Error":error})
    }
})

router.put('/:id',async(req,res)=>{
    try{
        const updateinformation = await Asset.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json({"result":updateinformation})
    }
    catch(error){
        res.status(500).json({"Error":error})
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const deleteInformation = await Asset.findByIdAndDelete(req.params.id)
        res.status(500).json({"result":deleteInformation})
    }
    catch(error){
        res.status(500).json({"Error":error})
    }
})

module.exports = router