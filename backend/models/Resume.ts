import mongoose from "mongoose";
import { Schema } from "mongoose";

const ResumeSchema = new Schema({
    author:{type:Schema.Types.ObjectId, ref:'User'},
    birth:String, // 1998-03-21
    finalEducation:String,
    phone:String, // 010-7607-9182
    certification:[String],
    channel:[{
        channelName:String,
        channelURL:String
    }], // https://github.com/bookhabit
    technology:[String],
    career:[{
        companyName:String,
        period:String,
        jobDetail:String,
        mainTask:[String],
    }],
    acitivity:[{
        activityName:String,
        period:String,
        activity:[String],
    }],
    myselfSentence:String,
    reasonForCoding:String,
    coverLetter:String,
},{
    timestamps: true,
});

const ResumeModel = mongoose.model('Resume', ResumeSchema);

export default ResumeModel;