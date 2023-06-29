import { useNavigate } from "react-router"
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";
import PrfofileUI from "../assets/scrollUI/profileUI.png"
import ResumeUI from "../assets/scrollUI/resumeUI.png"
import CoverLetterUI from "../assets/scrollUI/coverLetterUI.png"
import PortfolioUI from "../assets/scrollUI/PortfolioUI.png"
import PortfolioForm1 from "../assets/scrollUI/PortfolioForm1.png"
import PortfolioForm2 from "../assets/scrollUI/PortfolioForm2.png"
import PortfolioForm3 from "../assets/scrollUI/PortfolioForm3.png"
import PortfolioForm4 from "../assets/scrollUI/PortfolioForm4.png"

export default function IndexPage() {
  const router = useNavigate();
  const {user} = useContext(UserContext)
  

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
    <div className="relative px-0 md:px-14 py-20">
      {/* 유저 페이지 */}
      <div className="preView-resume flex flex-col items-center gap-5">
        {subTitleCss("나만의","이력서와 포트폴리오","를 관리해보세요")}
        <div className="user-profile">
          <img src={PrfofileUI} alt="프로필 이미지" className="shadow-xl" />
        </div>
        {subTitleCss("","이력서와 자기소개서","를 관리해보세요")}
        <div className="user-resume-coverLetter flex flex-col items-center justify-center gap-5 md:flex-row ">
          <img src={ResumeUI} alt="이력서 이미지" className="shadow-lg md:w-1/2" />
          <img src={CoverLetterUI} alt="자기소개서 이미지" className="shadow-xl md:w-1/2" />
        </div>
        {subTitleCss("","포트폴리오","를 직접 관리해보세요")}
        <div className="user-portfolios">
          <img src={PortfolioUI} alt="포트폴리오 이미지" className="shadow-xl" />
        </div>
      </div>
      {/* 포트폴리오 등록 페이지 */}
      <div className="preView-portfolio-form">
      {subTitleCss("나만의","포트폴리오","를 등록해보세요")}
        <p className="mb-5">프로젝트의 설명을 적어주세요</p>
        <div className="user-portfolio-form1">
          <img src={PortfolioForm1} alt="포트폴리오 폼 이미지" className="shadow-xl" />
        </div>
        {subTitleCss("프로젝트의","이미지와 기술스택","들을 적어주세요")}
        <div className="user-portfolio-form2">
          <img src={PortfolioForm2} alt="포트폴리오 폼 이미지" className="shadow-xl" />
        </div>
        {subTitleCss("프로젝트의","핵심기능","들을 적어주세요")}
        <div className="user-portfolio-form3">
          <img src={PortfolioForm3} alt="포트폴리오 폼 이미지" className="shadow-xl" />
        </div>
        {subTitleCss("프로젝트의","카테고리와 원하는 UI","를 선택해주세요")}
        <div className="user-portfolio-form3">
          <img src={PortfolioForm4} alt="포트폴리오 폼 이미지" className="shadow-xl" />
        </div>
      </div>
      {/* 포트폴리오 상세 페이지 */}
      {subTitleCss("선택하신 UI대로","포트폴리오를 알아서","꾸며줍니다")}

      {/* 포트폴리오 등록하러 가기 버튼 - router */}
      <p className="text-3xl py-14 text-center text-orange-500 cursor-pointer">포트폴리오 등록하러 가기</p>

      {user && (
        <div className="fixed bottom-5 right-5 w-68">
          <button className="w-full bg-header_bg text-header_element p-2 rounded-full font-bold text-xl py-5 px-5 hover:bg-gray-400" onClick={handleClick}>
            포트폴리오 등록하기
          </button>
        </div>
      )}
    </div>
  )
}
