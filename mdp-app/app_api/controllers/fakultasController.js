const Fakultas = require("../models/fakultas");
const getAllFakultas = async(req,res)=>{
    try{
        const fakultas = await Fakultas.find();
        res.status(200).json(fakultas);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};
const getFakultasById = async(req,res)=>{
    try{
        const fakultas = await Fakultas.findById(req.params.id);
        if(!fakultas)
            return res.status(404).json({message:"Fakultas not found"});
        res.status(200).json(fakultas);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};
const createFakultas = async(req,res)=>{
    const fakultas = new Fakultas({
        nama : req.body.nama,
        singkatan : req.body.singkatan,
    });
    try{
        const newFakultas = await fakultas.save();
        res.status(201).json(newFakultas);
    }catch(err){
        res.status(400).json({message: err.message});
    }
};
const updateFakultas = async(req,res)=>{
    try{
        const fakultas = await Fakultas.findById(req.params.id);
        if(!fakultas)
            return res.status(404).json({message:"Fakultas Not Found"});
        if(req.body.nama != null){
            fakultas.nama = req.body.singkatan;
        }
        const updateFakultas = await fakultas.save();
        res.status(200).json(updateFakultas);
    }catch(err){
        res.status(400).json({message: err.message});
    }
};
const deleteFakultas = async(req,res)=>{
    try{
        const fakultas = await Fakultas.findById(req.params.id);
        if(!fakultas)
            return res.status(404).json({message:"Fakultas not found"});
        await fakultas.deleteOne();
        res.status(200).json({message:"Fakultas Deleted"});
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

module.exports = {
    getAllFakultas,
    getFakultasById,
    createFakultas,
    updateFakultas,
    deleteFakultas,
};
