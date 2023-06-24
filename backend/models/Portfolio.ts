import mongoose from "mongoose";
import { Schema } from "mongoose";

const PortfolioSchema = new Schema({
    author:{type:Schema.Types.ObjectId, ref:'User'},
    title:String, 
    purpose:String,
    introduce:String, 
    process:String,
    learned:String,
    photos:[String],
    usedTechnology:[String],
    developPeriod:{
        projectURL:String,
        githubURL:String,
        designURL:String,
        documentURL:String,
    },
    demoLink:{
        start:String,
        end:String,
    },
    category:String,
    selectedUI:String,
},{
    timestamps: true,
});

const PortfolioModel = mongoose.model('Portfolio', PortfolioSchema);

export default PortfolioModel;