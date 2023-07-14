import { useNavigate } from "react-router"
import { useEffect } from "react";
import userMainBasic from "../assets/mainPageImg/userMainBasic.png"
import userMainVideo from "../assets/mainPageImg/userMain3D.mp4"
import userMainVideoMobile from "../assets/mainPageImg/userMain3dMobile.mp4"
import PortfolioForm1 from "../assets/mainPageImg/PortfolioForm1.png"
import PortfolioForm2 from "../assets/mainPageImg/PortfolioForm2.png"
import PortfolioForm3 from "../assets/mainPageImg/PortfolioForm3.png"
import PortfolioForm4 from "../assets/mainPageImg/PortfolioForm4.png"
import PortfolioDesignA from "/PortfolioDesignA.png"
import PortfolioDesignB from "/PortfolioDesignB.png"
import PortfolioDesignC from "/PortfolioDesignC.png"
import PortfolioDesignD from "/PortfolioDesignD.png"

import { useRecoilValue } from "recoil";
import { userAtom } from "../recoil/userAtom";
import { gsap } from "gsap";

export default function IndexPage() {
  const router = useNavigate();
  const user = useRecoilValue(userAtom)

  // 페이드인
  const fadeIn = (element:Element) =>{
    gsap.to(element,3,{
        opacity:1,
    })
  }

  // 관찰자 생성
  useEffect(() => {

    const options = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.8 // 50%가 viewport에 들어와 있어야 callback 실행
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return
      }
      if (entry.isIntersecting) {
          fadeIn(entry.target);
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
      <img src={src} alt={alt} className="shadow-scrollUI rounded-xl object-fill" />
    )
  }
  return (
      <div className="px-0 md:px-14 py-20">
        {/* 유저 페이지 */}
        <div className="preView-resume flex flex-col items-center gap-5 mb-20 px-0 lg:px-40">
          {TitleCss("나만의", "이력서와 포트폴리오", "를 쉽게 관리해보세요")}
          <div className="profile flex flex-col lg:flex-row w-full justify-around gap-5">
            <div className="user-profile flex flex-col items-center lg:items-start">
              {subTitleCss("Basic 디자인")}
              {imgCss(userMainBasic, "유저페이지 Basic")}
            </div>
            <div className="fadeInContainer p-10 w-full lg:w-2/3 flex flex-col justify-center items-center">
              <p className="font-bold text-4xl">포트폴리오를 등록만 하면 </p>
              <p className="font-bold text-4xl mt-3"><span className="text-5xl text-red-300">디자인</span>은 알아서 꾸며줍니다</p>
            </div>
          </div>
          <div className="fadeInContainer flex flex-col lg:flex-row gap-10 w-full items-center lg:items-end">
              <div className="user-profile">
                {subTitleCss("3D 디자인 PC")}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  width="100%"
                  height="100%"
                  className="shadow-scrollUI rounded-xl"
                ><source src={userMainVideo} type="video/mp4"/></video>
              </div>
              <div className="user-profile">
                {subTitleCss("3D 디자인 Mobile")}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  width="100%"
                  height="100%"
                  className="shadow-scrollUI rounded-xl cursor-pointer"
                ><source src={userMainVideoMobile} type="video/mp4"/></video>
              </div>
            </div>
        </div>
          

        {/* 포트폴리오 등록 페이지 */}
        <div className="fadeInContainer preView-portfolio-form flex flex-col items-center gap-5">
          {TitleCss("나만의", "포트폴리오", "를 등록해보세요")}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="fadeInContainer user-portfolio-form1">
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
        </div>

        {/* 포트폴리오 상세 페이지 */}
        <div className="preView-portfolio-form flex flex-col items-center gap-5 px-0 xl:px-40 2xl:px-80">
          {TitleCss("선택하신 디자인으로", "포트폴리오를", "꾸며줍니다")}
          <div className="flex flex-col gap-4 items-center justify-center">
            <div className="fadeInContainer user-portfolio-form1 h-full">
              {subTitleCss("A - Basic 디자인")}
              {imgCss(PortfolioDesignA, "포트폴리오 폼 이미지")}
            </div>
            <div className="fadeInContainer user-portfolio-form2 h-full">
              {subTitleCss("B - Scroll 디자인")}
              {imgCss(PortfolioDesignB, "포트폴리오 폼 이미지")}
            </div>
            <div className="fadeInContainer user-portfolio-form3 h-full">
              {subTitleCss("C - PPT 디자인 ")}
              {imgCss(PortfolioDesignC, "포트폴리오 폼 이미지")}
            </div>
            <div className="fadeInContainer user-portfolio-form3 h-full">
              {subTitleCss("D - 3D 디자인")}
              {imgCss(PortfolioDesignD, "포트폴리오 폼 이미지")}
            </div>
          </div>
        </div>
        

        {/* 포트폴리오 등록하러 가기 버튼 - router */}
        <div
        className="fadeInContainer text-3xl py-14 text-center" onClick={handleClick}
        >
          <button className="p-10 rounded-lg bg-orange-500 hover:bg-orange-600 text-white cursor-pointer">포트폴리오 등록하러 가기</button>
        </div>
        
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
