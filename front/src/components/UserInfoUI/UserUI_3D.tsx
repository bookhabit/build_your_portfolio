import { UserInfoType } from "../../Types/userType";
import ComputersCanvas from "../canvas/Computers";
import About from "./user3d/About";
import { motion } from 'framer-motion';
import {staggerContainer } from "../utils/motion";
import Experience from "./user3d/Experience";
import Projects from "./user3d/Projects";
import ImageUI from "../common/ImageUI";

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
            {/* 페이지2 -Testimonials>> 학력,생년월일 
                    자기소개  */}
            <div className={'sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto'}>
                <h2 className={`${styles.sectionHeadText} mb-10`}>
                    자기소개
                </h2>
                <div className='bg-tertiary p-5 rounded-2xl sm:w-[660px] h-full w-full'>
                        <div className='relative w-full h-[280px] cursor-pointer flex items-center justify-center'>
                            {user?.profileImg&& 
                                <ImageUI
                                    src={user?.profileImg}
                                    className='w-[250px] h-[250px] object-cover rounded-2xl'
                                />
                            }
                        </div>

                        <div className='mt-5 w-1/2'>
                            <h3 className='text-white font-bold text-[20px]'>{user?.userResumeDoc?.finalEducation}</h3>
                            <p className='mt-2 text-secondary text-[14px]'>{user?.userResumeDoc?.birth}</p>
                            <p className='mt-2 text-secondary text-[18px]'>{user?.userResumeDoc?.coverLetter}</p>
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
                
                {/* 페이지3 -work Timeline >> 자격증,대외활동,경력  */}
                <Experience 
                    careers={user?.userResumeDoc?.career} 
                    activities={user?.userResumeDoc?.acitivity} />
                
                {/* 페이지4 -about >> 기술스택 + 자격증 */}
                {user?.userResumeDoc?.technology 
                && <About 
                        skills={user?.userResumeDoc?.technology} 
                        title={"Skills"} />}
                
                {user?.userResumeDoc?.certification 
                &&  <About 
                        skills={user?.userResumeDoc?.certification} title={"Certification"} />}

                {/* 페이지5 -projects >> 포트폴리오 소개 카드  */}
                <Projects portfolios={user?.userPortfolio}/>
            </motion.section>
            {/* Contact >> 연락처  */}
            <div className={'pb-40 sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto'}>
                <h2 className={`${styles.sectionHeadText} mb-10`}>
                    Contact
                </h2>
                <div className='bg-tertiary p-10 rounded-2xl sm:w-[660px] h-full w-full'>
                    <div>
                        <span className='text-white font-medium mb-4'>Your Name</span>
                        <div className="py-4 px-6 text-secondary rounded-lg outline-none border-none font-medium"><p>{user?.name}</p></div>
                    </div>
                    <div>
                        <span className='text-white font-medium mb-4'>Your Email</span>
                        <div className="py-4 px-6 text-secondary rounded-lg outline-none border-none font-medium"><p>{user?.email}</p></div>
                    </div>
                    <div>
                        <span className='text-white font-medium mb-4'>Your Phone</span>
                        <div className="py-4 px-6 text-secondary rounded-lg outline-none border-none font-medium"><p>{user?.userResumeDoc?.phone}</p></div>
                    </div>
                    <div>
                        <span className='text-white font-medium mb-4'>Your Channel</span>
                        <div className="py-4 px-6 text-secondary rounded-lg outline-none border-none font-medium"><p> 
                            {user?.userResumeDoc?.channel.map((channel)=>(
                                    <div className={"flex items-center my-2"} key={channel.channelURL}>
                                        <p className={"mx-2"}>{channel.channelName} :</p>
                                        <p>{channel.channelURL}</p>
                                    </div>
                                ))}
                            </p></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UserUI_3D;