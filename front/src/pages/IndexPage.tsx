import { useNavigate } from "react-router"
import { UserContext } from "../Context/UserContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserInfoType } from "../Types/userType";
import UserInfo from "../components/UserInfo";
import PortfolioFormPage from "./PortfolioFormPage";

export default function IndexPage() {
  const router = useNavigate();
  const {user} = useContext(UserContext)
  const [testUserInfo,setTestUserInfo] = useState<UserInfoType|undefined>();

  useEffect(()=>{
      axios.get(`/user/649060df8f0c8613f7649b1c`).then((response)=>{
          if(response.status===200){
              const result = response.data.resultUser as UserInfoType;
              setTestUserInfo(result)
          }
      })
  },[])

  console.log(user)
  // 포트폴리오 작성이 처음이라면 이력서 form페이지로 리다이렉션 시키기
  const handleClick = ()=>{
    // api 요청 : 데이터베이스에 유저의 포트폴리오 정보가 있는지 확인
    if(user?.userResumeDoc){
      router('/protfolio/create')
    }else{
      alert('아직 이력서가 작성되지 않았습니다\n이력서를 작성해주세요')
      router('/resume/create')
    }
  }
  function subTitleCss(firstText:string,centerText:string,rightText:string):JSX.Element{
    return(
      <h2 className="text-3xl py-14 text-center">{firstText} <span className=" text-blue-500 font-bold text-5xl">{centerText}</span>{rightText}</h2>
    )
  }
  return (
    <div className="relative px-0 md:px-14">
      <div className="preView-resume">
        {subTitleCss("나만의","이력서와 포트폴리오","를 관리해보세요")}
        <p>*특정유저의 예시입니다</p>
        <div className='flex items-center justify-center px-0 2xl:px-80 '>
            <UserInfo user={testUserInfo} />
        </div>
      </div>
      <div className="preView-portfolio-form">
      {subTitleCss("나만의","포트폴리오","를 등록해보세요")}
      {/* 스크롤 인터랙션 기능 */}
        <PortfolioFormPage/>
      </div>
      {user && (
        <div className="w-48 fixed bottom-5 right-5">
          <button className="w-full bg-header_bg text-header_element p-2 rounded-full" onClick={handleClick}>
            포트폴리오 등록하기
          </button>
        </div>
      )}
    </div>
  )
}
