import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ResumeType } from '../Types/ResumeType';
import { PortfolioType } from '../Types/PortfolioType';
import axios from 'axios';
import UserInfo from '../components/UserInfo';

export type UserInfoType = {
    email:string;
    name:string;
    _id:String;
    userResumeDoc:ResumeType|null
    userPortfolio:PortfolioType[]|null
}

const UserPage = () => {
    const {id:userId} = useParams();
    const [userInfo,setUserInfo] = useState<UserInfoType|undefined>();
    useEffect(()=>{
        axios.get(`/user/${userId}`).then((response)=>{
            if(response.status===200){
                const result = response.data.resultUser as UserInfoType;
                setUserInfo(result)
            }
        })
    },[])
    return (
        <div className='flex items-center justify-center py-12 px-0 sm:px-20 '>
            <UserInfo user={userInfo} />
        </div>
    );
};

export default UserPage;