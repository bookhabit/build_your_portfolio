import { useNavigate } from "react-router";
import { PortfolioDetailType, PortfolioType } from "../../Types/PortfolioType";
import { UserInfoType } from "../../Types/userType";
import ComputersCanvas from "../canvas/Computers";
import About from "./user3d/About";
import { motion } from 'framer-motion';
import { staggerContainer } from "../utils/motion";

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
                        <h1 className={`${styles.heroHeadText} text-white`}>
                            Hi, I'm <span className='text-[#915EFF] hover:text-white'>{user?.name}</span>
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
            <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                 {/* 페이지2 -Testimonials>> 학력,생년월일 
                      자기소개  */}

                {/* 페이지3 -work Timeline >> 자격증,대외활동,경력  */}

                {/* 페이지4 -about >> 기술스택  */}
                {user?.userResumeDoc?.technology && <About skills={user?.userResumeDoc?.technology} />}

                {/* 페이지5 -projects >> 포트폴리오 소개 카드  */}

                {/* Contack >> 연락처  */}
            </motion.section>
        </div>
    );
};

export default UserUI_3D;