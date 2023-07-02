
import emailIcon from "../assets/email.svg"
import computerIcon from "../assets/computer.svg"
import linkIcon from "../assets/resume/linkIcon.svg"
import phoneIcon from "../assets/resume/phoneIcon.svg"
import TechBorder from "./common/TechBorder";
import { UserInfoType } from "../Types/userType"
import PortfolioImage from "./PortfolioImage"
import { useState,useContext,useEffect,ChangeEvent } from "react"
import ShowModal from "./ShowModal"
import { ShowArray } from "../pages/ResumeFormPage";
import PortfolioCategory from "./PortfolioCategory";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router";
import { ResumeType } from "../Types/ResumeType";
import { PortfolioType } from "../Types/PortfolioType";
import axios from "axios";

const defaultProfileImg = "https://png.pngtree.com/png-vector/20191115/ourmid/pngtree-beautiful-profile-line-vector-icon-png-image_1990469.jpg"

const UserInfo = ({user}:{user:UserInfoType|null|undefined}) => {
    // 자신의 게시글인지 구분하기
    const {user:loggedUser,setUser} = useContext(UserContext)
    const [isAuthor,setIsAuthor]=useState<boolean>(false)
    const router = useNavigate();
    const userResume = user?.userResumeDoc as ResumeType
    
    useEffect(()=>{
        if(user&&loggedUser){
            if(user?._id === loggedUser?._id){
                setIsAuthor(true)
            }else if(user?._id !== loggedUser?._id){
                setIsAuthor(false)
            }
        }
    },[])
    console.log(isAuthor ?'이 user정보의 주인입니다' :'이 user정보의 주인이 아닙니다')
    // state
    const [showResumeCard,setShowResumeCard] = useState<boolean>(false)
    const [showCoverLetter,setShowCoverLetter] = useState<boolean>(false)
    const [profileImg,setProfileImg] = useState('')
    const [showUpdateProfile,setShowUpdateProfile] = useState(false)
    
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

    // 이미지 onChange이벤트
    function uploadPhoto(ev: ChangeEvent<HTMLInputElement>) {
        const files = ev.target.files;
        if (!files) return;
        const data = new FormData();
        for (let i = 0; i < files.length; i++) {
          data.append('photos', files[i]);
        }
        axios.post<string[]>('/upload', data, {
          headers: { 'Content-type': 'multipart/form-data' },
        }).then(response => {
          const { data: filenames } = response;
          setProfileImg(filenames[0])
        });
      }

    // 프로필 이미지 수정하기 api
    const updateProfileImg = async ()=>{
        try{
            const response = await axios.put('/profile-image',{
                profileImg:profileImg
            })
            if(response.status===200){
                alert("프로필 이미지 수정 완료")
                setShowUpdateProfile(false)
                setProfileImg('')
                window.location.reload();
            }
        }catch(err:any){
            console.log(err)
        }
    }
    

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
                        <div className="relative right-0 top-0 lg:absolute flex flex-col gap-3 items-end">
                            <img className="w-72 h-72 bg-slate-50" src={user?.profileImg ? 'http://localhost:4000/uploads/'+user.profileImg : defaultProfileImg} alt="테스트"/>
                            {isAuthor?
                            <p className="cursor-pointer text-md text-gray-400 hover:text-zinc-300" onClick={()=>setShowUpdateProfile(!showUpdateProfile)}>
                                프로필 이미지 수정하기
                            </p> 
                            :null}
                            {showUpdateProfile && 
                            <div className="flex gap-5">
                                <label className="h-32 cursor-pointer flex items-center gap-1 justify-center border border-gray-500 bg-transparent rounded-2xl p-2 text-2xl text-gray-600 hover:bg-gray-300">
                                <input onChange={uploadPhoto} type="file" multiple className="hidden" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                </svg>
                                    Upload
                                </label>
                                {profileImg && 
                                    <img className="w-32 h-32" src={'http://localhost:4000/uploads/'+profileImg} alt="선택한 이미지"/>
                                }
                                <button className="p-3 w-32 h-32 hover:bg-gray-300 bg-slate-100" onClick={updateProfileImg}>수정완료</button>
                            </div>
                            }
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
                        <h3 className={subTitleText()}>Channel</h3>
                        {user?.userResumeDoc?.channel.map((channel)=>(
                            <div className={flexRowInfo()} key={channel.channelURL}>
                                <img src={linkIcon} alt="이메일 아이콘"/>
                                <p className={"mx-2"}>{channel.channelName} :</p>
                                <p>{channel.channelURL}</p>
                            </div>
                        ))}
                    </div>
                    <div className={"my-10"}>
                        <h3 className={subTitleText()}>Skills</h3>
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
                        {isAuthor ? 
                        <span className="cursor-pointer" onClick={()=>router(`/resume/update/${userResume._id}`)}>
                            수정하기
                        </span> :
                        <span className="cursor-pointer" onClick={()=>setShowResumeCard(true)}>
                            펼쳐보기
                        </span>}
                    </div>
                    {userResume ? 
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
                    :
                    <p className="mt-10 cursor-pointer text-center" onClick={()=>router("/resume/create")}>
                        이력서를 작성해주세요
                    </p>}
                </div>
                <div className="coverLetter-div w-full md:w-1/2 bg-resume_card_BG bg-bl p-5 h-full">
                    <div className="flex justify-between">
                        <h2 className={titleCard()}>자기소개서</h2>
                        {isAuthor ? 
                        <span className="cursor-pointer" onClick={()=>router(`/resume/update/${userResume._id}`)}>
                            수정하기
                        </span> :
                        <span className="cursor-pointer" onClick={()=>setShowCoverLetter(true)}>펼쳐보기</span>
                        }
                    </div>
        
                    {/* 글자수 제한으로 미리보기로 냅두고 펼쳐보기로 전체보여주기 */}
                    {user?.userResumeDoc?.coverLetter ? 
                    <div className="content py-5">
                            <p className="text-base leading-10">
                                {user?.userResumeDoc?.coverLetter}
                            </p>
                    </div>
                    :
                    <p className="mt-10 cursor-pointer text-center" onClick={()=>router("/resume/create")}>
                        자기소개서를 작성해주세요
                    </p>
                    }
                </div>
            </div>
            <div className="portfolio-div w-full bg-UI_portfolio_card_bg flex flex-col items-center pt-16 pb-36">
                    <h2 className="text-white bg-neutral-400 p-3 rounded-lg font-bold text-3xl">Portfolio</h2>
                    <div className="protfoilo-group w-full flex flex-col justify-evenly gap-6 md:flex-row mt-20">
                        {user?.userPortfolio?.length===0 && <p>포트폴리오를 등록해주세요</p>}
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