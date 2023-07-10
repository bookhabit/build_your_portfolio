import { useNavigate } from "react-router";
import { PortfolioDetailType, PortfolioType } from "../../Types/PortfolioType";
import { styles } from "../UserInfoUI/UserUI_3D";
import ComputersCanvas from "../canvas/Computers";
import ImageUI from "../common/ImageUI";
import { staggerContainer } from "../utils/motion";
import { motion } from 'framer-motion';
import Experience from "../UserInfoUI/user3d/Experience";
import About from "../UserInfoUI/user3d/About";
import ImportantFunc from "./scrollUI/ImportantFunc";
import TimeLine from "./scrollUI/TimeLine";
import { Link } from "react-router-dom";
import IntroduceCard from "./scrollUI/IntroduceCard";

interface IProps{
    portfolio:PortfolioDetailType
    userPage:boolean
}
{/* <button onClick={()=>router(`/portfolio/update/${portfolio.PortfolioDoc._id}`)}>포트폴리오 수정하기</button> */}
const UI_3D = ({portfolio,userPage}:IProps) => {
    const router = useNavigate();
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
                    
                    {/* 다음 부분 개발 진행 */}
                    <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                        
                    </div>
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
                <TimeLine learned={portfolio.PortfolioDoc.learned} process={portfolio.PortfolioDoc.process} />
                
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
            <div className={'pb-40 sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto'}>
                <h2 className={`${styles.sectionHeadText} mb-10`}>
                    {portfolio.PortfolioDoc.title}
                </h2>
                <div className='bg-tertiary p-10 rounded-2xl sm:w-[660px] h-full w-full'>
                    <div>
                        <span className='text-white font-medium mb-4'>Date</span>
                        <div className="py-4 px-6 text-secondary rounded-lg outline-none border-none font-medium">
                            <p>
                                {portfolio.PortfolioDoc.developPeriod.start}
                                 ~ 
                                {portfolio.PortfolioDoc.developPeriod.end}
                            </p></div>
                    </div>
                    <div>
                        <span className='text-white font-medium mb-4'>Category</span>
                        <div className="py-4 px-6 text-secondary rounded-lg outline-none border-none font-medium"><p>{portfolio.PortfolioDoc.category}</p></div>
                    </div>
                    <div>
                        <span className='text-white font-medium mb-4'>Demo Link</span>
                        <div className="py-4 px-6 text-secondary rounded-lg outline-none border-none font-medium"><p> 
                        <div className="flex flex-col gap-5 text-sm text-gray-400  w-full  md:w-1/3">
                        <p className="text-cyan-400">Demo Link</p>
                        {portfolio.PortfolioDoc.demoLink.projectURL&&
                            <div className="flex gap-3 w-full items-center">
                                <p>Project : </p>
                                <Link target="_blank" to={portfolio.PortfolioDoc.demoLink.projectURL}>프로젝트 URL</Link>
                            </div>
                        }
                        {portfolio.PortfolioDoc.demoLink.githubURL&&
                            <div className="flex gap-3 w-full items-center">
                                <p>Github : </p>
                                <Link target="_blank" to={portfolio.PortfolioDoc.demoLink.githubURL}>깃허브 URL</Link>
                            </div>
                        }
                        {portfolio.PortfolioDoc.demoLink.documentURL&&
                            <div className="flex gap-3 w-full items-center">
                                <p>Document : </p>
                                <Link target="_blank" to={portfolio.PortfolioDoc.demoLink.documentURL}>관련 문서 URL</Link>
                            </div>
                        }
                        {portfolio.PortfolioDoc.demoLink.designURL&&
                            <div className="flex gap-3 w-full items-center">
                                <p>Design : </p>
                                <Link target="_blank" to={portfolio.PortfolioDoc.demoLink.designURL}>디자인 관련 URL</Link>
                            </div>
                        }
                    </div>
                            </p></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UI_3D;