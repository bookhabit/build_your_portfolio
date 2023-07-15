import { PortfolioDetailType } from "../../Types/PortfolioType";
import { styles } from "../UserInfoUI/UserUI_3D";
import ComputersCanvas from "../canvas/Computers";
import { staggerContainer } from "../utils/motion";
import { motion } from 'framer-motion';
import About from "../UserInfoUI/user3d/About";
import ImportantFunc from "./scrollUI/ImportantFunc";
import TimeLine from "./scrollUI/TimeLine";
import IntroduceCard from "./scrollUI/IntroduceCard";
import FinishCard from "./scrollUI/FinishCard";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { gsap } from "gsap";
import axios from "axios";
import { UserInfoType } from "../../Types/userType";
import { useSetRecoilState } from "recoil";
import { userAtom } from "../../recoil/userAtom";
import Swal from "sweetalert2";

interface IProps{
    portfolio:PortfolioDetailType
    userPage:boolean
}

const UI_3D = ({portfolio,userPage}:IProps) => {
    const router = useNavigate();
    const setUser = useSetRecoilState(userAtom);
    
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
        <div className='relative z-0 bg-black font-portfolioD'>
            {/* 페이지1 : 유저 소개부분 - 이름,자기소개 */}
            <div className='bg-user3dBG bg-cover bg-no-repeat bg-center'>
                <div className={`relative w-full h-screen mx-auto `}>
                    <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
                        <div className='flex flex-col justify-center items-center mt-5'>
                        <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                        <div className='bg-gradient-to-b from-violet-900 via-violet-900 to-transparent w-1 sm:h-80 h-40' />
                        </div>

                        <div>
                        <h1 className={`${styles.heroHeadText} text-white flex flex-col gap-5`}>
                            My Project name is <br/>
                            <span className='text-[#915EFF] hover:text-white'>{portfolio.PortfolioDoc.title}</span>
                        </h1>
                        <p className={`${styles.heroSubText} mt-5 text-white-100 hover:text-[#915EFF]`}>
                            {portfolio.author_name}
                        </p>
                        </div>
                    </div>
                    <ComputersCanvas/>
                </div>
            </div>
            {/* 페이지2 - 프로젝트 목적 */}
            <IntroduceCard
                title="프로젝트 목적"
                src={portfolio?.PortfolioDoc.photos[0]&&portfolio?.PortfolioDoc.photos[0]}
                portfolioTitle={portfolio?.PortfolioDoc.title}
                desc={portfolio.PortfolioDoc.purpose}
            />
            {/* 페이지2 - 프로젝트 소개 */}
            <IntroduceCard
                title="프로젝트 소개"
                src={portfolio?.PortfolioDoc.photos[1]&&portfolio?.PortfolioDoc.photos[1]}
                portfolioTitle={portfolio?.PortfolioDoc.title}
                desc={portfolio.PortfolioDoc.introduce}
            />
            <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                
                {/* 페이지3 -work Timeline >> 개발과정 배운점 */}
                <TimeLine 
                    learned={portfolio.PortfolioDoc.learned} 
                    process={portfolio.PortfolioDoc.process} />
                
                {/* 페이지4 -about >> 기술스택 */}
                {portfolio.PortfolioDoc.usedTechnology
                && <About 
                        skills={portfolio.PortfolioDoc.usedTechnology} 
                        title={"Skills"} />}

                {/* 페이지5 - 핵심기능 소개  */}
                <ImportantFunc
                    important_functions={portfolio.PortfolioDoc.important_functions} />
            </motion.section>
            {/* 마무리 - 카테고리 , date, demo link */}
            <FinishCard
                period={portfolio.PortfolioDoc.developPeriod}
                category={portfolio.PortfolioDoc.category}
                demoLink={portfolio.PortfolioDoc.demoLink}
            />
            <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto flex flex-col items-center">
                {userPage && 
                    <div className="flex gap-5">
                        <button className="bg-white text-tertiary p-5 rounded-xl hover:bg-tertiary hover:text-white" onClick={()=>router(`/portfolio/update/${portfolio.PortfolioDoc._id}`)}>포트폴리오 수정하기</button>
                        <button className="bg-white text-tertiary p-5 rounded-xl hover:bg-tertiary hover:text-white" onClick={()=>
                            axios.delete(`/portfolio/delete/${portfolio.PortfolioDoc._id}`)
                            .then((response)=>{
                                if(response.status===200){
                            Swal.fire('성공','포트폴리오를 삭제하였습니다.','success')
                            axios.get('/profile')
                            .then(({data}:{data:UserInfoType}) => {
                                setUser(data);
                            });
                            router("/account")
                        }
                    }).catch(()=>{
                        Swal.fire('실패','포트폴리오를 삭제하는 데 실패하였습니다','error')
                    })
                    }>
                        포트폴리오 삭제하기
                </button>
                </div>
                }
            </div>
        </div>
    );
};

export default UI_3D;