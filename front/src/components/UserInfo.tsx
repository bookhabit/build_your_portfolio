import { UserInfoType } from "../pages/UserPage";
import emailIcon from "../assets/email.svg"
import computerIcon from "../assets/computer.svg"
import githubIcon from "../assets/auth/github.svg"
import linkIcon from "../assets/resume/linkIcon.svg"
import phoneIcon from "../assets/resume/phoneIcon.svg"
import TechBorder from "./common/TechBorder";
import { ShowArray } from "../pages/ResumeFormPage";

const UserInfo = ({user}:{user:UserInfoType|undefined}) => {
    console.log('props ',user)

    // css
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
    return (
        <div className="w-full">
            <div className="profile-div w-full bg-UI_user_profile_bg p-6">
                <div className="profile-card p-5">

                    <h2 className={titleCard()}>{user?.name}</h2>
                    <p className="my-5 font-bold text-lg">' {user?.userResumeDoc?.myselfSentence} '</p>
                    <div className="flex items-center my-6">
                        <img src={computerIcon} alt="컴퓨터아이콘"/>
                        <p className={mx2()+" font-bold"}>개발을 하는 이유 :</p>
                        <p className="font-bold text-lg">{user?.userResumeDoc?.reasonForCoding}</p>
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
                                <TechBorder key={skill} sort="portfolio" techName={skill}/>
                            ))}
                        </ShowArray>
                    </div>
                </div>
            </div>
            <div className="middle-div w-full flex flex-col gap-4 md:flex-row items-center mt-8 ">
                <div className="resume-div w-1/2 bg-UI_resume_card_bg p-5">
                    <div className="flex justify-between">
                        <h2 className={titleCard()}>이력서</h2>
                        <span>펼쳐보기</span>
                    </div>
                    <div className="content">
                        내용
                    </div>
                </div>
                <div className="coverLetter-div w-1/2 bg-UI_resume_card_bg p-5">
                    <div className="flex justify-between">
                        <h2 className={titleCard()}>자기소개서</h2>
                        <span>펼쳐보기</span>
                    </div>
                    <div className="content">
                        내용
                    </div>
                </div>
            </div>
            <div className="portfolio-div w-full bg-UI_portfolio_card_bg flex flex-col items-center mt-8 py-10 px-16">
                    <h2 className="text-white bg-neutral-400 p-3 rounded-lg font-bold">Portfolio</h2>
                    <div className="protfoilo-group flex flex-col items-center justify-center gap-6 md:flex-row mt-12">
                        <div className="flex flex-col items-center category-clone gap-4">
                            <p>클론코딩</p>
                            <div className="bg-black rounded-full w-40 h-40"></div>
                        </div>
                        <div className="flex flex-col items-center  category-clone gap-4">
                            <p>개인프로젝트</p>
                            <div className="bg-black rounded-full w-40 h-40"></div>
                        </div>
                        <div className="flex flex-col items-center  category-clone gap-4">
                            <p>협업프로젝트</p>
                            <div className="bg-black rounded-full w-40 h-40"></div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default UserInfo;