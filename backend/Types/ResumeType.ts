export type ResumeType = {
    birth:string; // 1998-03-21
    finalEducation:string;
    phone:string; // 010-7607-9182
    certification:string[];
    channel:ChannelType[]; // https://github.com/bookhabit
    technology:string[];
    career:carrerType[];
    acitivity:acitivityType[];
    myselfSentence:string;
    reasonForCoding:string;
    coverLetter:string;
    // 백엔드 추가로직
    _id :string;
    author : string;
    createdAt: Date
    updatedAt:Date
}

export type carrerType = {
    commanyName:string;
    period:string;
}

export type acitivityType = {
    activityName:string;
    period:string;
}

export type ChannelType = {
    channelName:string
    channelURL:string
}