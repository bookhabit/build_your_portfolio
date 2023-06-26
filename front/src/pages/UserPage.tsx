import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ResumeType } from '../Types/ResumeType';
import { PortfolioType } from '../Types/PortfolioType';
import axios from 'axios';

export type UserInfoType = {
    email:string;
    name:string;
    _id:String;
    userResumeDoc:ResumeType|null
    userPortfolio:PortfolioType|null
}

const UserPage = () => {
    const {id:userId} = useParams();
    const [userInfo,setUserInfo] = useState<UserInfoType|null>();
    useEffect(()=>{
        axios.get(`/user/${userId}`).then((response)=>{
            if(response.status===200){
                const result = response.data.resultUser as UserInfoType;
                setUserInfo(result)
            }
        })
    },[])
    console.log('userInfo',userInfo)
    return (
        <div>
            유저 메인페이지
        </div>
    );
};

export default UserPage;