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

interface IProps{
    portfolio:PortfolioDetailType
    userPage:boolean
}
{/* <button onClick={()=>router(`/portfolio/update/${portfolio.PortfolioDoc._id}`)}>포트폴리오 수정하기</button> */}
const UI_3D = ({portfolio}:IProps) => {
    return (
        <div className='relative z-0 bg-black'>
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
        </div>
    );
};

export default UI_3D;