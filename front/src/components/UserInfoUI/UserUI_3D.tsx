import { UserInfoType } from "../../Types/userType";
import ComputersCanvas from "../canvas/Computers";
import About from "./user3d/About";
import { motion } from 'framer-motion';
import {staggerContainer } from "../utils/motion";
import Experience from "./user3d/Experience";
import Projects from "./user3d/Projects";
import ImageUI from "../common/ImageUI";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import BookhabitImageUI from "../common/BookhabitImageUI";

export const styles = {
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-16 py-10",
  
    heroHeadText:
      "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
    heroSubText:
      "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
  
    sectionHeadText:
      "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
    sectionSubText:
      "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
  };


const UserUI_3D = ({user}:{user:UserInfoType|null|undefined}) => {

    const location = useLocation();
    const [bookhaibtPage,setBookhabitPage] = useState<boolean>(false);

    useEffect(()=>{
        if(location.pathname==="/bookhabit"){
        setBookhabitPage(true)
        }
    },[])
        // 페이드인
        const fadeIn = (element:Element) =>{
            gsap.to(element,1,{
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
    
    return (
        <div className='relative z-0 bg-black font-user3D'>
            {/* 페이지1 : 유저 소개부분 - 이름,자기소개 */}
            <div className='bg-user3dBG bg-cover bg-no-repeat bg-center'>
                <div className={`relative w-full h-screen mx-auto `}>
                    <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
                        <div className='flex flex-col justify-center items-center mt-5'>
                        <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                        <div className='bg-gradient-to-b from-violet-900 via-violet-900 to-transparent w-1 sm:h-80 h-40' />
                        </div>

                        <div>
                        <h1 className={`${styles.heroHeadText} text-white`}>
                            Hi, I'm <span className='text-[#915EFF] hover:text-white'>{user?.name}</span>
                            <span className="text-2xl">({user?.nickName})</span>
                        </h1>
                        <p className={`${styles.heroSubText} mt-5 text-white-100 hover:text-[#915EFF]`}>
                            {user?.userResumeDoc?.myselfSentence}<br className='sm:block hidden' />
                            이 일을 하는 이유 : {user?.userResumeDoc?.reasonForCoding}
                        </p>
                        </div>
                    </div>
                    <ComputersCanvas/>
                    
                    {/* 다음 부분 개발 진행 */}
                    <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                        
                    </div>
                </div>
            </div>
            {/* 페이지2 -Testimonials>> 학력,생년월일 
                    자기소개  */}
            <div className={'fadeInContainer sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto'}>
                <h2 className={`${styles.sectionHeadText} mb-10`}>
                    자기소개
                </h2>
                <div className='bg-tertiary p-5 rounded-2xl sm:w-[660px] h-full w-full'>
                        <div className='relative w-full h-[280px] cursor-pointer flex items-center justify-center'>
                            {
                                bookhaibtPage ? 
                                user?.profileImg&& 
                                <BookhabitImageUI
                                    src={user?.profileImg}
                                    className='w-[250px] h-[250px] object-cover rounded-2xl'
                                    alt="프로필 이미지"
                                />
                                :
                                user?.profileImg&&    
                                <ImageUI
                                    src={user?.profileImg}
                                    className='w-[250px] h-[250px] object-cover rounded-2xl'
                                    alt="프로필 이미지"
                                />
                            }
                        </div>

                        <div className='mt-5'>
                            <h3 className='text-white font-bold text-[24px]'>{user?.userResumeDoc?.finalEducation}</h3>
                            <p className='mt-2 text-secondary text-[16px]'>{user?.userResumeDoc?.birth}</p>
                            <p className='mt-2 text-secondary text-[20px]'>{user?.userResumeDoc?.coverLetter}</p>
                        </div>
                </div>

            </div>

            {/* 페이지3 -work Timeline >> 자격증,대외활동,경력  */}
            <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <Experience 
                    careers={user?.userResumeDoc?.career} 
                    activities={user?.userResumeDoc?.activity} />
            </motion.section>

            {/* 페이지4 -about >> 기술스택 */}
            <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                {user?.userResumeDoc?.technology 
                && <About 
                        skills={user?.userResumeDoc?.technology} 
                        title={"Skills"} />}
            </motion.section>   
            {/* 페이지4 -about >> 자격증 */}
             <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                {user?.userResumeDoc?.certification 
                &&  <About 
                        skills={user?.userResumeDoc?.certification} title={"Certification"} />}
            </motion.section>

            {/* 페이지5 -projects >> 포트폴리오 소개 카드  */}
            <motion.section
            variants={staggerContainer()}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
                <Projects portfolios={user?.userPortfolio}/>
            </motion.section>
            
            {/* Contact >> 연락처  */}
            <div className={'fadeInContainer pb-40 sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto'}>
                <h2 className={`${styles.sectionHeadText} mb-10`}>
                    Contact
                </h2>
                <div className='bg-tertiary p-10 rounded-2xl sm:w-[660px] h-full w-full'>
                    <div>
                        <h2 className='text-white font-medium mb-4'>Name</h2>
                        <div className="py-4 px-6 text-secondary rounded-lg outline-none border-none font-medium"><p>{user?.name}</p></div>
                    </div>
                    <div>
                        <h2 className='text-white font-medium mb-4'>Email</h2>
                        <div className="py-4 px-6 text-secondary rounded-lg outline-none border-none font-medium"><p>{user?.email}</p></div>
                    </div>
                    <div>
                        <h2 className='text-white font-medium mb-4'>Phone</h2>
                        <div className="py-4 px-6 text-secondary rounded-lg outline-none border-none font-medium"><p>{user?.userResumeDoc?.phone}</p></div>
                    </div>
                    <div>
                        <h2 className='text-white font-medium mb-4'>Channel</h2>
                        <div className="py-4 px-6 text-secondary rounded-lg outline-none border-none font-medium">
                            {user?.userResumeDoc?.channel.map((channel)=>(
                                    <div className={"flex sm:flex-row flex-col items-center my-2"} key={channel.channelURL}>
                                        <p className={"mx-2"}>{channel.channelName} :</p>
                                        <Link className="demoLink text-secondary  hover:text-white" target="_blank" to={channel.channelURL}>{channel.channelURL}</Link>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UserUI_3D;