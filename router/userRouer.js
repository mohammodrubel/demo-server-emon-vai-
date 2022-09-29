const express = require('express')
const mongoose = require('mongoose')
const userRouer = require('../Schema/userSchema')
const User =new mongoose.model("User",userRouer)
const router = express.Router()



router.put('/:email',async(req,res)=>{
    try{
              const email = req.params.email;
              const user = req.body;
              const filter = {email:email};
              const options = {upsert:true}
              const updateDoc = {$set:user};
              const result = await User.updateOne(filter,updateDoc,options)
        res.status(200).json({"result":result})
    }
    catch(error){
        res.status(500).json({"Error":error})
    }
})

    router.put('/admin/:email',async(req,res)=>{
        try{
            const eamil = req.params.email;
            const filter = {email:eamil};
            const updateDoc = {$set:{role:'admin'}};
            const result = await User.updateOne(filter,updateDoc);
            res.status(200).json({"result":result})
        }
        catch(error){
            res.status(500).json({"error":error})
        }
    })
    router.get('/admin',async(req,res)=>{
        try{
            const admininfo = await User.find({})
            res.status(200).json({"result":admininfo})
        }
        catch(error){
            res.status(500).json({"error":error})
        }
        
    })
    router.delete('/:id',async(req,res)=>{
        try{
            const deleteInformation = await User.findByIdAndDelete(req.params.id)
            res.status(500).json({"result":deleteInformation})
        }
        catch(error){
            res.status(500).json({"Error":error})
        }
    })

    // router.get('/',async(req,res)=>{
    //     try{
    //         const userInformation = await User.find({})
    //         res.status(200).json({"result":userInformation})
    //     }
    //     catch(error){
    //         res.status(500).json({"error":error})
    //     }
    // })

    // admin 
    router.get('/:email',async(req,res)=>{
        try{
            const email = req.params.email;
            const query = {email:email}
            const user = await User.findOne(query)
            let isAdmin = false
                if(user?.role === 'admin'){
                    isAdmin = true;
                }
                res.status(200).json({admin:isAdmin})  
            }
        catch(error){
            res.status(500).json({"result":error})
        }
    })



module.exports = router