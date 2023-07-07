import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { UserInfoType } from '../Types/userType';
import UserInfoBasic from '../components/UserInfoUI/UserInfoBasic';
import UserScrollParallaxUI from '../components/UserInfoUI/UserScrollParallaxUI';
import UserSlideUI from '../components/UserInfoUI/UserSlideUI';
import UserUI_3D from '../components/UserInfoUI/UserUI_3D';

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
    console.log('user',userInfo)
    return (
        <section>
            {userInfo?.selectedUserUI==="A" && <UserInfoBasic user={userInfo}  />}
            {userInfo?.selectedUserUI==="B" && <UserScrollParallaxUI user={userInfo}  />}
            {userInfo?.selectedUserUI==="C" && <UserSlideUI user={userInfo}  />}
            {userInfo?.selectedUserUI==="D" && <UserUI_3D user={userInfo}  />}
        </section>
    );
};

export default UserPage;