export type ResumeType = {
    birth:string; // 1998-03-21
    finalEducation:string;
    phone:string; // 010-7607-9182
    certification:string[];
    channel:string[]; // https://github.com/bookhabit
    technology:string[];
    career:carrerType[];
    acitivity:acitivityType[];
    myselfSentence:string;
    reasonForCoding:string;
    coverLetter:string;
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