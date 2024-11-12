const Prodi = require("../models/prodi");
const getAllProdi = async(req,res)=>{
    try{
        const prodi = await Prodi.find().populate("fakultas_id","nama singkatan");
        res.status(200).json(prodi);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};
const getProdiById = async(req,res)=>{
    try{
        const prodi = await Prodi.findById(req.params.id);
        if(!prodi)
            return res.status(404).json({message:"Prodi not found"});
        res.status(200).json(prodi);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};
const createProdi = async(req,res)=>{
    const prodi = new Prodi({
        nama : req.body.nama,
        singkatan : req.body.singkatan,
        fakultas_id : req.body.fakultas_id,
    });
    try{
        const newProdi = await prodi.save();
        res.status(201).json(newProdi);
    }catch(err){
        res.status(400).json({message: err.message});
    }
};
const updateProdi = async(req,res)=>{
    try{
        const prodi = await Prodi.findById(req.params.id);
        if(!prodi)
            return res.status(404).json({message:"Prodi Not Found"});
        if(req.body.nama != null){
            prodi.nama = req.body.nama;
        }
        if(req.body.singkatan != null){
            prodi.singkatan = req.body.singkatan;
        }
        if(req.body.fakultas_id != null){
            prodi.fakultas_id = req.body.fakultas_id;
        }
        const updateProdi = await prodi.save();
        res.status(200).json(updateProdi);
    }catch(err){
        res.status(400).json({message: err.message});
    }
};
const deleteProdi = async(req,res)=>{
    try{
        const prodi = await Prodi.findById(req.params.id);
        if(!prodi)
            return res.status(404).json({message:"Prodi not found"});
        await prodi.deleteOne();
        res.status(200).json({message:"Prodi Deleted"});
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

module.exports = {
    getAllProdi,
    getProdiById,
    createProdi,
    updateProdi,
    deleteProdi,
};
