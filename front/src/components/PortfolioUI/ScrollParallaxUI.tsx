import { useNavigate } from "react-router";
import { PortfolioDetailType, PortfolioType } from "../../Types/PortfolioType";
import ImageUI from "../common/ImageUI";
import convertCategory from "../common/convertCategory";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useIntersection } from 'react-use';

interface IProps{
    portfolio:PortfolioDetailType
    userPage:boolean
}

const ScrollParallaxUI = ({portfolio,userPage}:IProps) => {
    console.log(portfolio)
    const router = useNavigate();
    // image-view-state
    const [showPreview,setShowPreview] = useState<boolean>(false)
    const [showPreviewSrc,setShowPreviewSrc] = useState<string>("")


    // image-view 전체보기
    if (showPreview&&showPreviewSrc!=="") {
        // 포트폴리오의 form에 채워진 데이터를 UI에 넘겨준다
          return (
            <div className="absolute inset-0 bg-black text-white min-h-screen">
            <div className="bg-black p-8 grid justify-center gap-4">
              <div>
                <button onClick={() => setShowPreview(false)} className="fixed right-12 top-8 flex gap-1 py-2 px-4 rounded-2xl shadow shadow-black bg-white text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                  Close Preview
                </button>
              </div>
              <ImageUI src={showPreviewSrc} />
            </div>
          </div>
          );
    }

    const fadeIn = (element:Element) =>{
        gsap.to(element,1,{
            opacity:1,
            y:-30,
            ease:"power4.out",
            duration:5,
        })
    }
    
    const moveToLeft = (element:Element, distance:number) => {
        gsap.fromTo(element,{x:0},{x:-100})
      };
    
    const moveToRight = (element:Element, distance:number) => {
        gsap.fromTo(element,{x:0},{x:100})
    };
    
    const increaseTextSize = (element:Element, size:number) => {
    gsap.to(element, {
        fontSize: `+=${size}px`,
        duration: 1,
        ease: "power4.out",
    });
    };
    const decreaseTextSize = (element:Element, size:number) => {
        gsap.to(element, {
            fontSize: `-=${size}px`,
            duration: 1,
            ease: "power4.out",
        });
        };
    
    const increaseImageSize = (element:Element, scale:number) => {
    gsap.to(element, {
        scale: `${scale}`,
        duration: 1,
        ease: "power4.out",
    });
    };

    useEffect(()=>{
        // 관찰자 생성
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.8,
        };

        const translateOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1,
        };

        const increaseOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 1,
        };

        const fadeObserver = new IntersectionObserver((entries:IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return
                }
                if (entry.isIntersecting) {
                    fadeIn(entry.target);
                    fadeObserver.unobserve(entry.target)
                }
            });
        }, options);

        const leftObserver = new IntersectionObserver((entries:IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return
                }
                if (entry.isIntersecting) {
                    moveToLeft(entry.target,100);
                    leftObserver.unobserve(entry.target)
                }
            });
        }, translateOptions);

        const rightObserver = new IntersectionObserver((entries:IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return
                }
                if (entry.isIntersecting) {
                    moveToRight(entry.target,100);
                    rightObserver.unobserve(entry.target)
                }
            });
        }, translateOptions)

        const textObserver = new IntersectionObserver((entries:IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    decreaseTextSize(entry.target,25)
                    return
                }
                if (entry.isIntersecting) {
                    increaseTextSize(entry.target,25)
                    textObserver.unobserve(entry.target)
                }
            });
        }, increaseOptions)

        const imageObserver = new IntersectionObserver((entries:IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return
                }
                if (entry.isIntersecting) {
                    increaseImageSize(entry.target,2)
                    imageObserver.unobserve(entry.target)
                }
            });
        }, increaseOptions)

        // 반복문을 돌려 모든 DOM에 적용
        const fadeList = document.querySelectorAll(".fadeInContainer");
        const leftList = document.querySelectorAll(".leftMoveContainer");
        const rightList = document.querySelectorAll(".rightMoveContainer");
        const textList = document.querySelectorAll(".textContainer");
        const imageList = document.querySelectorAll(".imageContainer");
        fadeList.forEach((el) => fadeObserver.observe(el));
        leftList.forEach((el) => leftObserver.observe(el));
        rightList.forEach((el) => rightObserver.observe(el));
        textList.forEach((el) => textObserver.observe(el));
        imageList.forEach((el) => imageObserver.observe(el));

    },[])

    return (
        <div className="">
            <div className="flex flex-col gap-10 justify-center items-center bg-gray-400 h-screen">
                <h2 className="text-xl w-full text-center text-white fadeInContainer">
                    <span className="textContainer text-3xl font-bold">
                    {portfolio?.author_name}</span> 님의 포트폴리오
                </h2>
                {userPage &&
                <button className="hover:bg-cyan-100 hover:text-black text-white w-24 p-2 rounded-lg" onClick={()=>router(`/portfolio/update/${portfolio.PortfolioDoc._id}`)}>수정하기</button>
                }
            </div>
            <div className="flex justify-center w-full h-screen bg-gray-400">
                {portfolio?.PortfolioDoc.photos.length > 0 && 
                    <ImageUI className="w-96 h-96 shadow-xl aspect-square object-fill imageContainer" src={portfolio?.PortfolioDoc.photos[0]}/>
                }
            </div>
            <div className="p-10 h-full w-full flex flex-col gap-20 justify-around bg-gray-300 px-20">
                <h1 className="text-5xl mt-14 text-gray-50 font-bold text-center fadeInContainer">{portfolio.PortfolioDoc.title}</h1>
                <div className="flex flex-col justify-evenly lg:flex-row gap-8">
                    <div className="flex flex-col gap-10 w-1/2">
                        <div className="flex flex-col gap-3">
                            <p className=" text-gray-50 textContainer">프로젝트 소개</p>
                            <p className="text-lg leading-10 font-light">{portfolio.PortfolioDoc.introduce}</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className=" text-gray-50 textContainer">프로젝트 목적</p>
                            <p className="text-lg leading-10 font-light">{portfolio.PortfolioDoc.purpose}</p>
                        </div>
                        <div className="w-full text-end h-full">
                            <div className="flex items-center gap-3 h-16 fadeInContainer">
                                <p className="text-gray-50">Category</p>
                                <p className="text-gray-400 px-5">{convertCategory(portfolio.PortfolioDoc.category)}</p>
                            </div>
                            <div className="flex items-center gap-3 h-16 fadeInContainer">
                                <p className="text-gray-50">Date</p>
                                <div className="flex gap-3 text-gray-400 font-bold px-5">
                                    <span>{portfolio.PortfolioDoc.developPeriod.start}</span>
                                    <span>{"~"}</span>
                                    <span>{portfolio.PortfolioDoc.developPeriod.end}</span>
                                </div>
                            </div>
                            <ul className="flex items-center gap-3 h-16 fadeInContainer">
                                <p className="text-gray-50">Skills</p>
                                <div className="flex flex-wrap gap-3 text-gray-400 px-5 justify-start items-center">
                                    {portfolio.PortfolioDoc.usedTechnology.map((skill)=>(
                                        <li className="bg-cyan-300 p-2 rounded-xl text-white shadow-lg hover:bg-cyan-200" key={skill}>{skill}</li>
                                    ))}
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className=" flex flex-col items-center gap-5">
                        {portfolio.PortfolioDoc.photos.length>1 && portfolio.PortfolioDoc.photos.slice(1).map((photo)=>(
                            <div key={photo} className="w-full" onClick={()=>{
                                setShowPreview(true)
                                setShowPreviewSrc(photo)
                            }}>
                                <ImageUI className="w-96 h-96 object-fill border shadow-lg cursor-pointer hover:shadow-2xl fadeInContainer"  src={photo}  />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="px-0 xl:px-60 flex flex-col gap-10">
                {portfolio.PortfolioDoc.important_functions && portfolio.PortfolioDoc.important_functions.length > 0 &&
                portfolio.PortfolioDoc.important_functions.map((importantData,index)=>(
                    <div className="flex flex-col gap-3 mt-20 border shadow-xl p-10 fadeInContainer opacity-0" key={importantData.important_function_photo[0]}>
                        <h1 className="text-2xl text-gray-400 font-bold text-center mb-10 textContainer">프로젝트의 핵심기능 {index+1}</h1>
                        <div className="flex flex-col gap-10 lg:flex-row">
                            <div className="w-full lg:w-1/3 border border-gray-200 shadow-lg" 
                            onClick={()=>{
                                setShowPreview(true)
                                setShowPreviewSrc(importantData.important_function_photo[0])
                            }}>
                                <ImageUI className=" h-80 object-fill border shadow-lg cursor-pointer hover:shadow-2xl" src={importantData.important_function_photo[0]}/>
                            </div>
                            <div className="w-full lg:w-2/3">
                                <p className="text-md text-gray-600 leading-10">{importantData.important_function_desc}</p>
                            </div>
                            
                        </div>
                    </div>
                ))
                }
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="flex flex-col gap-3 border shadow-md p-5  text-black w-full lg:w-1/2">
                        <p className="text-gray-400  mb-10 textContainer">개발과정</p>
                        <p className="text-md font-light leading-10 fadeInContainer">{portfolio.PortfolioDoc.process}</p>
                    </div>
                    <div className="flex flex-col gap-3 border shadow-md p-5  text-black w-full lg:w-1/2">
                        <p className="text-gray-400  mb-10 textContainer">배운점</p>
                        <p className="text-md font-light leading-10 fadeInContainer">{portfolio.PortfolioDoc.learned}</p>
                    </div>
                </div>
                
                <div className="flex flex-col gap-5 text-sm text-gray-400 w-full mb-40">
                    <p className="text-gray-400  mb-10 textContainer">Demo Link</p>
                    {portfolio.PortfolioDoc.demoLink.projectURL&&
                        <div className="flex gap-3 w-full items-center fadeInContainer">
                            <p>Project : </p>
                            <Link target="_blank" to={portfolio.PortfolioDoc.demoLink.projectURL}>프로젝트 URL</Link>
                        </div>
                    }
                    {portfolio.PortfolioDoc.demoLink.githubURL&&
                        <div className="flex gap-3 w-full items-center fadeInContainer">
                            <p>Github : </p>
                            <Link target="_blank" to={portfolio.PortfolioDoc.demoLink.githubURL}>깃허브 URL</Link>
                        </div>
                    }
                    {portfolio.PortfolioDoc.demoLink.documentURL&&
                        <div className="flex gap-3 w-full items-center fadeInContainer">
                            <p>Document : </p>
                            <Link target="_blank" to={portfolio.PortfolioDoc.demoLink.documentURL}>관련 문서 URL</Link>
                        </div>
                    }
                    {portfolio.PortfolioDoc.demoLink.designURL&&
                        <div className="flex gap-3 w-full items-center fadeInContainer">
                            <p>Design : </p>
                            <Link target="_blank" to={portfolio.PortfolioDoc.demoLink.designURL}>디자인 관련 URL</Link>
                        </div>
                    }
                </div>
                

            </div>
        </div>
    );
};

export default ScrollParallaxUI;