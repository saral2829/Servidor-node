const express= require("express");

const clientesSchema=require("../models/clientes");

const router=express.Router();


//crear clientes
router.post("/clientes", (req,res)=> {
    const cliente= clientesSchema(req.body);
    cliente
    .save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});

//get all users
router.get("/clientes", (req,res)=> {
    clientesSchema
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});

//get a users
router.get("/clientes/:id", (req,res)=> {
    const {id}=req.params;
    clientesSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});


//update a users
router.put("/clientes/:id", (req,res)=> {
    const {id}=req.params;
    const {name,age,email}=req.body;
    clientesSchema
    .updateOne({ _id: id},{ $set: {name,age,email}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});

//delete a users
router.delete("/clientes/:id", (req,res)=> {
    const {id}=req.params;
    clientesSchema
    .remove({ _id: id})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});

module.exports=router;