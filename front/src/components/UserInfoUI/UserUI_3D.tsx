import { useNavigate } from "react-router";
import { PortfolioDetailType, PortfolioType } from "../../Types/PortfolioType";
import { UserInfoType } from "../../Types/userType";
import Computers from "../canvas/Computers";

const styles = {
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
        <div className={`relative w-full h-screen mx-auto bg-black`}>
            {/* user 소개 부분 */}
            <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
                <div className='flex flex-col justify-center items-center mt-5'>
                <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                <div className='violet-gradient w-1 sm:h-80 h-40' />
                </div>

                <div>
                <h1 className={`${styles.heroHeadText} text-white`}>
                    Hi, I'm <span className='text-[#915EFF]'>{user?.name}</span>
                </h1>
                <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                    I develop 3D visuals, user <br className='sm:block hidden' />
                    interfaces and web applications
                </p>
                </div>
            </div>
            <Computers/>
        </div>
    );
};

export default UserUI_3D;