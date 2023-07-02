import { useNavigate } from "react-router"
import { UserContext } from "../Context/UserContext";
import { useContext, useEffect, useRef, useState } from "react";
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

  // 관찰자 생성
  useEffect(() => {

    const options = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.5 // 50%가 viewport에 들어와 있어야 callback 실행
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add("inView");
        } else {
          entry.target.classList.remove("inView");
        }
      });
    }, options);

    // 반복문을 돌려 모든 DOM에 적용
    const boxList = document.querySelectorAll(".fadeInContainer");
    boxList.forEach((el) => observer.observe(el));
    
  }, []);

  // 포트폴리오 작성이 처음이라면 이력서 form페이지로 리다이렉션 시키기
  const handleClick = ()=>{
    // user가 로그인했는지 확인 
    if(!user){
      alert('로그인 먼저 진행해주세요')
      router("/register")
    }else{
      // api 요청 : 데이터베이스에 유저의 포트폴리오 정보가 있는지 확인
      if(user?.userResumeDoc){
        router('/portfolio/create')
      }else{
        alert('아직 이력서가 작성되지 않았습니다\n이력서를 작성해주세요')
        router('/resume/create')
      }
    }
  }

  // 중복 css
  function TitleCss(firstText:string,centerText:string,rightText:string):JSX.Element{
    return(
      <h2 className="text-3xl py-14 text-center">{firstText} <span className=" text-blue-500 font-bold text-5xl">{centerText}</span>{rightText}</h2>
    )
  }

  function subTitleCss(text:string):JSX.Element{
    return(
        <p className="text-xl my-5 text-gray-400">{text}</p>
    )
  }

  function imgCss(src:string,alt:string){
    return (
      <img src={src} alt={alt} className="shadow-scrollUI rounded-xl" />
    )
  }
  return (
      <div className="px-0 md:px-14 py-20">
        {/* 유저 페이지 */}
        <div className="preView-resume flex flex-col items-center gap-5">
          {TitleCss("나만의", "이력서와 포트폴리오", "를 관리해보세요")}
          <div className="profile">
            {subTitleCss("프로필 정보를 쉽게 관리할 수 있습니다")}
            <div className="user-profile">
              {imgCss(PrfofileUI, "프로필 이미지")}
            </div>
          </div>
          <div className="resume-cover fadeInContainer">
            {subTitleCss("이력서와 자기소개서를 관리할 수 있어요")}
            <div className="flex flex-col items-center justify-center gap-5 md:flex-row ">
              <img src={ResumeUI} alt="이력서 이미지" className="shadow-scrollUI md:w-1/2" />
              <img src={CoverLetterUI} alt="자기소개서 이미지" className="shadow-scrollUI md:w-1/2" />
            </div>
          </div>
          <div className="portfoils fadeInContainer">
            {subTitleCss("포트폴리오를 등록할 수 있어요")}
            <div className="user-portfolios">
              {imgCss(PortfolioUI, "포트폴리오 이미지")}
            </div>
          </div>
        </div>
          

        {/* 포트폴리오 등록 페이지 */}
        <div className="preView-portfolio-form flex flex-col items-center gap-5">
          <div className="fadeInContainer user-portfolio-form1">
            {TitleCss("나만의", "포트폴리오", "를 등록해보세요")}
            {subTitleCss("프로젝트의 설명을 적어주세요")}
            {imgCss(PortfolioForm1, "포트폴리오 폼 이미지")}
          </div>
          <div className="fadeInContainer user-portfolio-form2">
            {subTitleCss("프로젝트의 이미지와 기술스택들을 적어주세요")}
            {imgCss(PortfolioForm2, "포트폴리오 폼 이미지")}
          </div>
          <div className="fadeInContainer user-portfolio-form3">
            {subTitleCss("프로젝트의 핵심기능들을 적어주세요")}
            {imgCss(PortfolioForm3, "포트폴리오 폼 이미지")}
          </div>
          <div className="fadeInContainer user-portfolio-form3">
            {subTitleCss("프로젝트의 카테고리와 원하는 UI를 선택해주세요")}
            {imgCss(PortfolioForm4, "포트폴리오 폼 이미지")}
          </div>
        </div>

        {/* 포트폴리오 상세 페이지 */}
        
        <div className={'fadeInContainer'} >
          {TitleCss("선택하신 UI대로", "포트폴리오를", "꾸며줍니다")}
        </div>
        

        {/* 포트폴리오 등록하러 가기 버튼 - router */}
        <p
        className="fadeInContainer text-3xl py-14 text-center text-orange-500 cursor-pointer" onClick={handleClick}
        >
          포트폴리오 등록하러 가기
        </p>
        
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
