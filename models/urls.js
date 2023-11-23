// import mongoose, { Schema } from "mongoose";
import shortid from "shortid";

const { models,model, Schema } = require("mongoose");

 const UrlSchema = new Schema({
    code:{
        type : String,
        unique: true,
        default : shortid.generate
    },
    url:{type:String , require: true},
    clicked:{type:Number , default:0},

});

const Urls = models.Urls||model("Urls" , UrlSchema);

export default Urls;