const { ObjectId } = require("mongodb");
const mongoose= require("mongoose");
const Orderschema = new mongoose.Schema({
    username:{type:String,required:true,unique:true,text:true},
    avatar:{type:String,},
    email:{type:String,required:true},
    password:{type:String,required:true},
    Name:{type:String,required:true},
    bio:{type:"string"},
    followers:{type:[ObjectId],ref:"Member"},
    following:{type:[ObjectId],ref:"Member"},
    Posts:{type:[ObjectId],ref:"Posts"},
    saved:{type:[ObjectId],ref:"Posts"},
    interests:{type:[ObjectId],ref:"Topic"},
    liked:{type:[ObjectId],ref:"Posts"},
    isDeleted:{type:Boolean,default:false},
    registeredDate:{type:Date,default:Date.now},
    dob:{value:Date,display:{type:Boolean,default:false}}, 
    website:{url:String,altText:String},
    contact:{value:String,altText:String},
    Links:{fb:String,insta:String,linkedIn:String} ,
    gender:{value:String,display:{type:Boolean,default:false}},
    });
module.exports = mongoose.model("Member", Orderschema);