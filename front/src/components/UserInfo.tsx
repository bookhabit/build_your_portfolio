
import emailIcon from "../assets/email.svg"
import computerIcon from "../assets/computer.svg"
import linkIcon from "../assets/resume/linkIcon.svg"
import phoneIcon from "../assets/resume/phoneIcon.svg"
import TechBorder from "./common/TechBorder";
import { UserInfoType } from "../Types/userType"
import PortfolioImage from "./PortfolioImage"
import { useState } from "react"
import ShowModal from "./ShowModal"
import { ShowArray } from "../pages/ResumeFormPage";
import PortfolioCategory from "./PortfolioCategory";

const UserInfo = ({user}:{user:UserInfoType|undefined}) => {
    // state
    const [showResumeCard,setShowResumeCard] = useState<boolean>(false)
    const [showCoverLetter,setShowCoverLetter] = useState<boolean>(false)
    
    // Filter portfolios by category
    const clonePortfolios = user?.userPortfolio?.filter(
        (portfolio) => portfolio.category === 'clone'
    );
    const individualPortfolios = user?.userPortfolio?.filter(
        (portfolio) => portfolio.category === 'individual'
    );
    const cooperationPortfolios = user?.userPortfolio?.filter(
        (portfolio) => portfolio.category === 'cooperation'
    );
    

    // css ( 굳이 안해도 될것 같으면 하지말고 중복많은 것만 함수화)
    function titleCard(){
        return "font-bold text-2xl"
    }
    function subTitleText(){
        return "text-UI_subTitle text-2xl mb-3"
    }
    function flexRowInfo(){
        return "flex items-center ml-2 my-2"
    }

    // show-reumseCard
    if (showResumeCard) {
        return (
        <div className="absolute inset-0 bg-black items-center flex flex-col justify-center p-14 h-auto">
            <ShowModal data={user?.userResumeDoc} sort="resume"/>
            <div>
              <button onClick={() => setShowResumeCard(false)} className="fixed right-12 top-8 flex gap-1 py-2 px-4 rounded-2xl shadow shadow-black bg-white text-black">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
                Close Preview
              </button>
            </div>
        </div>
        );
      }
      // show-coverLetter
    if (showCoverLetter) {
        return (
        <div className="absolute inset-0 bg-black min-h-screen items-center flex flex-col justify-center">
            <ShowModal data={user?.userResumeDoc?.coverLetter} sort="coverLetter"/>
            <div>
              <button onClick={() => setShowCoverLetter(false)} className="fixed right-12 top-8 flex gap-1 py-2 px-4 rounded-2xl shadow shadow-black bg-white text-black">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
                Close Preview
              </button>
            </div>
        </div>
        );
      }
    return (
        <div className="w-full">
            <div className="profile-div w-full bg-UI_user_profile_bg px-6 py-16">
                <div className="profile-card p-5">
                    <div className="profile-header relative">
                        <div className="left">
                            <h2 className={titleCard()}>{user?.name}</h2>
                            <p className="my-5 w-2/3 font-bold text-2xl">'{user?.userResumeDoc?.myselfSentence}'</p>
                            <div className="flex items-center my-6 flex-wrap gap-2">
                                <img src={computerIcon} alt="컴퓨터아이콘"/>
                                <p className={" font-bold "}>개발을 하는 이유 :</p>
                                <p className="font-bold text-lg">{user?.userResumeDoc?.reasonForCoding}</p>
                            </div>
                        </div>
                        <div className="relative right-0 top-0 lg:absolute">
                            <img src="https://png.pngtree.com/png-vector/20191115/ourmid/pngtree-beautiful-profile-line-vector-icon-png-image_1990469.jpg" alt="테스트"/>
                        </div>
                    </div>
                    <div className={"my-10"}>
                        <h3 className={subTitleText()}>Contact</h3>
                        <div className={flexRowInfo()}>
                            <img src={emailIcon} alt="이메일 아이콘"/>
                            <p className={"mx-2"}>{"email : "}</p>
                            <p>{user?.email}</p>
                        </div>
                        <div className={flexRowInfo()}>
                            <img src={phoneIcon} alt="전화번호 아이콘"/>
                            <p className={"mx-2"}>{"phone : "}</p>
                            <p>{user?.userResumeDoc?.phone}</p>
                        </div>
                    </div>
                    <div className={"my-10"}>
                        <h3 className={subTitleText()}>Skills</h3>
                        {user?.userResumeDoc?.channel.map((channel)=>(
                            <div className={flexRowInfo()} key={channel.channelURL}>
                                <img src={linkIcon} alt="이메일 아이콘"/>
                                <p className={"mx-2"}>{channel.channelName} :</p>
                                <p>{channel.channelURL}</p>
                            </div>
                        ))}
                    </div>
                    <div className={"my-10"}>
                        <h3 className={subTitleText()}>Channel</h3>
                        <ShowArray>
                            {user?.userResumeDoc?.technology.map((skill)=>(
                                <TechBorder key={skill} sort="UI" techName={skill}/>
                            ))}
                        </ShowArray>
                    </div>
                </div>
            </div>
            <div className="middle-div w-full flex flex-col gap-4 md:flex-row items-center md:h-96">
                <div className="resume-div w-full md:w-1/2 bg-resume_card_BG p-5 min-h-full">
                    <div className="flex justify-between">
                        <h2 className={titleCard()}>이력서</h2>
                        <span className="cursor-pointer" onClick={()=>setShowResumeCard(true)}>펼쳐보기</span>
                    </div>
                    <div className="content mt-5">
                        <div className={flexRowInfo()+" gap-2"}>
                            <p>학력 :</p>
                            <p>{user?.userResumeDoc?.finalEducation}</p>
                        </div>
                        <div className={flexRowInfo()+" gap-2"}>
                            <p>생년월일 :</p>
                            <p>{user?.userResumeDoc?.birth}</p>
                        </div>
                        <div className="p-3">
                            <p>자격증</p>
                            {user?.userResumeDoc?.certification.map((name,index)=>(
                              <div key={index} className="ml-4 mt-2">
                                {index+1}. {name}
                              </div>  
                            ))}
                        </div>
                        <div className="p-3">
                            <p>대외활동</p>
                            {user?.userResumeDoc?.acitivity.map((activity,index)=>(
                              <div key={index} className="ml-4 mt-2">
                                {index+1}. {activity.activityName} - {activity.period}
                              </div>  
                            ))}
                        </div>
                    </div>
                </div>
                <div className="coverLetter-div w-full md:w-1/2 bg-resume_card_BG bg-bl p-5 h-full">
                    <div className="flex justify-between">
                        <h2 className={titleCard()}>자기소개서</h2>
                        <span className="cursor-pointer" onClick={()=>setShowCoverLetter(true)}>펼쳐보기</span>
                    </div>
                    <div className="content py-5">
                        <p className="text-base leading-10">
                            {/* 글자수 제한으로 미리보기로 냅두고 펼쳐보기로 전체보여주기 */}
                            {user?.userResumeDoc?.coverLetter}
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero itaque corrupti modi quos, laboriosam tempore nulla aut. Quae dolorem quo laborum officiis perspiciatis, culpa eaque quas facilis voluptatibus, eligendi non!
                        </p>
                    </div>
                </div>
            </div>
            <div className="portfolio-div w-full bg-UI_portfolio_card_bg flex flex-col items-center pt-16 pb-36 h-full">
                    <h2 className="text-white bg-neutral-400 p-3 rounded-lg font-bold text-3xl">Portfolio</h2>
                    <div className="protfoilo-group w-full flex flex-col justify-evenly gap-6 md:flex-row mt-20">
                        {clonePortfolios && clonePortfolios?.length>0 &&
                            <PortfolioCategory categoryName="클론코딩" portfolio={clonePortfolios}/>
                        }
                        {individualPortfolios && individualPortfolios?.length>0 &&
                            <PortfolioCategory categoryName="개인프로젝트" portfolio={individualPortfolios}/>
                        }
                        {cooperationPortfolios && cooperationPortfolios?.length>0 &&
                            <PortfolioCategory categoryName="협업프로젝트" portfolio={cooperationPortfolios}/>
                        }
                    </div>
            </div>
        </div>
    );
};

export default UserInfo;