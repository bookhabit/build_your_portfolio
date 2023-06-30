import { useContext, useState,useEffect } from "react";
import { Navigate, useNavigate} from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import axios from "axios";
import { UserInfoType } from "../Types/userType";
import UserInfo from "../components/UserInfo";

export default function ProfilePage() {
    const {user,setUser} = useContext(UserContext)
    const [userData,setUserData] = useState<UserInfoType|undefined>()
    const router = useNavigate();
    // 로그아웃
    async function logout(){
        await axios.post('/logout')
        alert('로그아웃')
        setUser(null)
        router('/')
    }

    useEffect(()=>{
        axios.get(`/user/${user?._id}`).then((response)=>{
            setUserData(response.data.resultUser)
        })
    },[])

    return (
        <div className='flex flex-col items-center justify-center px-0 xl:px-80 py-20 '>
            <UserInfo user={userData}  />
            <div className="flex w-full justify-between my-8">
                <button className="bg-blue-200 w-52 px-5 py-2 text-sm font-bold rounded-lg hover:bg-blue-100">
                    포트폴리오 등록하러 가기
                </button>
                <button onClick={logout} className="bg-blue-200 w-28 px-5 py-2 text-sm font-bold rounded-lg hover:bg-blue-100">
                    로그아웃
                </button>
            </div>
        </div>
  );
}