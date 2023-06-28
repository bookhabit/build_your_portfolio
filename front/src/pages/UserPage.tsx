import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import UserInfo from '../components/UserInfo';
import { UserInfoType } from '../Types/userType';

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
        <div className='flex items-center justify-center px-0 xl:px-80 '>
            <UserInfo user={userInfo} />
        </div>
    );
};

export default UserPage;