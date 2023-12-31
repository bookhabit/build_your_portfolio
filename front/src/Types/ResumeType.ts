export type ResumeType = {
    name?:string;
    nickName:string;
    birth:string; // 1998-03-21
    finalEducation:string;
    phone:string; // 010-7607-9182
    certification:string[];
    channel:ChannelType[]; // https://github.com/bookhabit
    technology:string[];
    career:carrerType[];
    activity:activityType[];
    myselfSentence:string;
    reasonForCoding:string;
    coverLetter:string;
    _id?:string;
    author?:string;
}

export type carrerType = {
    companyName:string;
    period:{
        start:string;
        end:string;
    }
    jobDetail:string;
    mainTask:string[];
}

export type activityType = {
    activityName:string;
    period:{
        start:string;
        end:string;
    }
    activity:string[]
}

export type ChannelType = {
    channelName:string
    channelURL:string
}