
import emailIcon from "../assets/email.svg"
import computerIcon from "../assets/computer.svg"
import githubIcon from "../assets/auth/github.svg"
import linkIcon from "../assets/resume/linkIcon.svg"
import phoneIcon from "../assets/resume/phoneIcon.svg"
import preView1 from "../assets/portfolio/Naver.png"
import preView2 from "../assets/portfolio/petfriends.png"
import preView3 from "../assets/portfolio/번개장터.png"
import TechBorder from "./common/TechBorder";
import { ShowArray } from "../pages/ResumeFormPage";
import { UserInfoType } from "../Types/userType"
import PortfolioImage from "./PortfolioImage"

const UserInfo = ({user}:{user:UserInfoType|undefined}) => {
    console.log('props ',user)
    console.log(user?.userPortfolio)
    // 포트폴리오 카테고리별로 나누기
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
        return "text-UI_subTitle text-xl mb-3"
    }
    function flexRowInfo(){
        return "flex items-center ml-2 my-2"
    }
    function mx2(){
        return "mx-2"
    }
    function subCardBox(){
        return"my-10"
    }
    function portfolioCategoryCSS(){
        return "flex flex-col items-center category-clone gap-16 p-5"
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
                        <div className="relative right-0 top-0 lg:absolute xl:relative 2xl:absolute">
                            <img src="https://png.pngtree.com/png-vector/20191115/ourmid/pngtree-beautiful-profile-line-vector-icon-png-image_1990469.jpg" alt="테스트"/>
                        </div>
                    </div>
                    <div className={subCardBox()}>
                        <h3 className={subTitleText()}>Contact</h3>
                        <div className={flexRowInfo()}>
                            <img src={emailIcon} alt="이메일 아이콘"/>
                            <p className={mx2()}>{"email : "}</p>
                            <p>{user?.email}</p>
                        </div>
                        <div className={flexRowInfo()}>
                            <img src={phoneIcon} alt="전화번호 아이콘"/>
                            <p className={mx2()}>{"phone : "}</p>
                            <p>{user?.userResumeDoc?.phone}</p>
                        </div>
                    </div>
                    <div className={subCardBox()}>
                        <h3 className={subTitleText()}>Skills</h3>
                        {user?.userResumeDoc?.channel.map((channel)=>(
                            <div className={flexRowInfo()} key={channel.channelURL}>
                                <img src={linkIcon} alt="이메일 아이콘"/>
                                <p className={mx2()}>{channel.channelName} :</p>
                                <p>{channel.channelURL}</p>
                            </div>
                        ))}
                    </div>
                    <div className={subCardBox()}>
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
                        <span>펼쳐보기</span>
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
                            <h3 className="font-bold">자격증</h3>
                            {user?.userResumeDoc?.certification.map((name,index)=>(
                              <div key={index} className="ml-4 mt-2">
                                {index+1}. {name}
                              </div>  
                            ))}
                        </div>
                        <div className="p-3">
                            <h3 className="font-bold">대외활동</h3>
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
                        <span>펼쳐보기</span>
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
                    <h2 className="text-white bg-neutral-400 p-3 rounded-lg font-bold">Portfolio</h2>
                    <div className="protfoilo-group w-full flex flex-col justify-evenly gap-6 md:flex-row mt-20">
                        {clonePortfolios && clonePortfolios?.length>0 &&
                            <div className={portfolioCategoryCSS()}>
                                <p className="text-neutral-500">클론코딩</p>
                                <div className="flex gap-8 flex-wrap">
                                    {
                                    clonePortfolios?.map((portfolio)=>(
                                        <PortfolioImage portfolio={portfolio}/>
                                    ))}
                                </div>
                            </div>
                        }
                        {individualPortfolios && individualPortfolios?.length>0 &&
                            <div className={portfolioCategoryCSS()}>
                                <p className="text-neutral-500">개인프로젝트</p>
                                <div className="flex gap-8 flex-wrap">
                                {individualPortfolios?.map((portfolio)=>(
                                        <PortfolioImage portfolio={portfolio}/>
                                    ))}
                                </div>
                            </div>
                        }
                        {cooperationPortfolios && cooperationPortfolios?.length>0 &&
                            <div className={portfolioCategoryCSS()}>
                                <p className="text-neutral-500">협업프로젝트</p>
                                <div className="flex gap-8 flex-wrap">                                
                                    {cooperationPortfolios?.map((portfolio)=>(
                                        <PortfolioImage portfolio={portfolio}/>
                                    ))}
                                </div>
                            </div>
                        }
                    </div>
            </div>
        </div>
    );
};

export default UserInfo;