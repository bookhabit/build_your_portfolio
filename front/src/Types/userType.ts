import { PortfolioType, SelectedUI } from "./PortfolioType";
import { ResumeType } from "./ResumeType";

export type UserType = {
    email:string;
    password:string;
    name:string;
    _id:String
}

export type UserProfileType = {
    email:string;
    name:string;
    _id:String;
    userResumeDoc:ResumeType|null
}

export type UserInfoType = {
    selectedUserUI:userUI
    email:string;
    name:string;
    _id:String;
    userResumeDoc:ResumeType|null
    userPortfolio:PortfolioType[]|null
    profileImg?:string;
}

export type userUI = "Basic" | "3D"