import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { UserInfoType } from '../Types/userType';
import UserInfoBasic from '../components/UserInfoUI/UserInfoBasic';
import UserUI_3D from '../components/UserInfoUI/UserUI_3D';
import { useRecoilState } from 'recoil';
import { SearchRedirectAtom } from '../recoil/searchAtom';
import ErrorMsg from '../components/ErrorMsg';
import ShowNullData from '../components/ShowNullData';


const UserPage = () => {
    const {id:userId} = useParams();
    const [redirect,setRedirect] = useRecoilState(SearchRedirectAtom)
    const [userInfo,setUserInfo] = useState<UserInfoType|undefined>();
    const [errorMsg,setErrorMsg] = useState<string>('');

    useEffect(()=>{
        const fetchUserData = async () => {
            try {
              const response = await axios.get(`/user/${userId}`);
              if (response.status === 200) {
                const result = response.data.resultUser as UserInfoType;
                setUserInfo(result);
                setRedirect(false);
              } else if (response.status === 404) {
                setErrorMsg(response.data);
              }
            } catch (error:any) {
              setErrorMsg(error.response.data);
            }
          };
        
          fetchUserData();
    },[])
    // 검색어 입력 후에 다시 한번 API요청
    if(redirect){
        axios.get(`/user/${userId}`).then((response)=>{
            if(response.status===200){
                const result = response.data.resultUser as UserInfoType;
                setUserInfo(result)
                setRedirect(false)
            }else if(response.status===404){
                setErrorMsg(response.data)
            }else if(response.status===500){
                setErrorMsg(response.data)
            }
        })
    }
    
    return (
        <div>
            {errorMsg && <ErrorMsg errorMsg={errorMsg} />}
            {userInfo && !userInfo?.userResumeDoc &&
              <ShowNullData message={userInfo?.name ? userInfo.name+'님은 아직 이력서를 작성하지 않았습니다' : userInfo?.nickName && userInfo?.nickName +'님은 아직 이력서를 작성하지 않았습니다' }  />
            }
            {userInfo?.selectedUserUI==="Basic" && <UserInfoBasic user={userInfo}  />}
            {userInfo?.selectedUserUI==="3D" && <UserUI_3D user={userInfo}  />}
        </div>
    );
};

export default UserPage;