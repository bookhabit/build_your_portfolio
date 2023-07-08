import { PortfolioType, SelectedUI } from "./PortfolioType";
import { ResumeType } from "./ResumeType";

export type UserType = {
    email:string;
    password:string;
    name:string;
    _id:String;
}

export type UserTokenDataType = {
    email:string;
    id:string;
    iat:number
}

export type UserProfileType = {
    selectedUserUI:"Basic"|"3D"
    email:string;
    name:string;
    _id:String;
    userResumeDoc:ResumeType|null;
    userPortfolio:PortfolioType[]|null;
    profileImg?:string;
}