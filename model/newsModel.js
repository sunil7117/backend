import mongoose from "mongoose";

const newsSchema=new mongoose.Schema({
    title:{
        required:true, 
        type:String   
    },
    author:{
        required:true, 
        type:String   
    },
    description:{
        required:true, 
        type:String   
    },
    url:{
        required:true, 
        type:String,
        unique:true   
    },
    timestamp:{
        required:true, 
        type:String   
    },
    link:{
        required:true, 
        type:String   
    },
    publisher:{
        required:true, 
        type:String   
    }
})

export const newsModel=new mongoose.model('news',newsSchema)