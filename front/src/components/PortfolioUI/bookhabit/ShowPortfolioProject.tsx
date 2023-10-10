import AuthVideo from "/bookhabit/portfolio/portfolio_project/회원가입,로그인.mp4"
import MakeResumeVideo from "/bookhabit/portfolio/portfolio_project/이력서작성.mp4"
import MakePortfolioVideo from "/bookhabit/portfolio/portfolio_project/포트폴리오등록.mp4"
import PreviewPortfolioVideo from "/bookhabit/portfolio/portfolio_project/미리보기기능.mp4"
import UserPageVideo from "/bookhabit/portfolio/portfolio_project/user페이지_디자인2개.mp4"
import PortfolioPageVideo from "/bookhabit/portfolio/portfolio_project/포트폴리오_디자인수정.mp4"
import SearchUserVideo from "/bookhabit/portfolio/portfolio_project/사용자검색기능.mp4"
import ResponsiveWebVideo from "/bookhabit/portfolio/portfolio_project/모바일반응형웹UI.mp4"
import ScrollPCVideo from "/bookhabit/portfolio/portfolio_project/userMain3D_스크롤UI.mp4"
import ScrollMobileVideo from "/bookhabit/portfolio/portfolio_project/userMain3dMobile_스크롤ui.mp4"
import { useNavigate } from "react-router"

type RightVideoPropsType = {
    title:string,desc:string,_src:string,width:number,
}
type LeftVideoPropsType = {
    title:string,desc:string,_src:string,width:number,
}

const RightVideo = ({title,desc,_src,width}:RightVideoPropsType)=>{
    return(
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-20">
            <div className="w-1/3">
                <p className="text-2xl text-zinc-600 mb-14 font-index">{title}</p>
                <p className="text-xl font-userBasic">{desc}</p>
            </div>
            <video src={_src} width={width}  muted controls className="shadow-lg h-auto"/>
        </div>
    )
}

const LeftVideo = ({title,desc,_src,width}:LeftVideoPropsType)=>{
    return(
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-20">
            <video src={_src} width={width} height={400}  muted controls className=" shadow-lg" />
            <div className="w-1/3">
                <p className="text-2xl text-zinc-600 mb-14 font-index">{title}</p>
                <p className="text-xl font-userBasic">{desc}</p>
            </div>
        </div>
    )
}

const ShowPortfolioProject = () => {
    const router = useNavigate();
    return (
        <div className="bg-neutral-100 p-48">
            <h2 className="text-3xl text-center text-slate-500 mb-48">포트폴리오 프로젝트 기능설명</h2>
            <div className="flex flex-col items-center gap-80 ">
                <RightVideo 
                    _src={AuthVideo}
                    title="회원가입 및 로그인"
                    desc="인증과 인가처리를 위해서는 cookie의 httponly방식으로 처리"
                    width={600}
                />
                <LeftVideo 
                    _src={MakeResumeVideo}
                    title="이력서 등록"
                    desc="이력서를 등록하기 위한 form들을 설계하고 에러처리 등을 함"
                    width={600}
                />
                <RightVideo 
                    _src={MakePortfolioVideo}
                    title="포트폴리오 등록"
                    desc="포트폴리오를 form에 맞춰서 등록합니다"
                    width={600}
                />
                <RightVideo 
                    _src={PreviewPortfolioVideo}
                    title="포트폴리오 등록 시 미리보기 기능"
                    desc="포트폴리오 등록 시 미리보기기능으로 4가지의 디자인을 확인한 후 선택할 수 있습니다"
                    width={600}
                />
                <LeftVideo 
                    _src={UserPageVideo}
                    title="user 페이지"
                    desc="이력서와 포트폴리오를 등록하고 난 후 다른 사용자들이 자신의 이름 또는 닉네임을 검색하여 간편하게 이력서와 포트폴리오를 열람할 수 있습니다"
                    width={600}
                />
                <RightVideo 
                    _src={PortfolioPageVideo}
                    title="포트폴리오 페이지"
                    desc="자신이 form에 맞춰서 등록한 포트폴리오를 4가지 디자인에 맞춰서 선택해두면 다른 사용자들이 간편하게 디자인된 포트폴리오를 구경할 수 있습니다"
                    width={600}
                />
                <LeftVideo 
                    _src={SearchUserVideo}
                    title="사용자 검색기능"
                    desc="사용자들의 이름 또는 닉네임을 검색하여 원하는 사용자의 이력서와 포트폴리오들을 구경할 수 있습니다"
                    width={600}
                />
                <RightVideo 
                    _src={ResponsiveWebVideo}
                    title="반응형웹"
                    desc="모바일로도 간편하게 볼 수 있도록 pc버전,태블릿,모바일버전 모두 반응형으로 구현해서 어떤 디바이스로도 다른 사용자의 이력서와 포트폴리오를 구경할 수 있습니다"
                    width={400}
                />
                <RightVideo 
                    _src={ScrollMobileVideo}
                    title="반응형웹"
                    desc="모바일로도 간편하게 볼 수 있도록 pc버전,태블릿,모바일버전 모두 반응형으로 구현해서 어떤 디바이스로도 다른 사용자의 이력서와 포트폴리오를 구경할 수 있습니다"
                    width={400}
                />
                <LeftVideo 
                    _src={ScrollPCVideo}
                    title="스크롤에 따른 인터랙션 UI"
                    desc="사용자들의 이름 또는 닉네임을 검색하여 원하는 사용자의 이력서와 포트폴리오들을 구경할 수 있습니다"
                    width={600}
                />
            </div>
            <button className='fixed bottom-10 right-10 bg-slate-50 w-44 h-10 rounded-md text-xl text-slate-950 hover:bg-slate-600 hover:text-slate-50 p-1' onClick={()=>router(`/bookhabit/portfolio/64b418a826eb678cc0763263`)}>이전 페이지</button>
        </div>
    );
};

export default ShowPortfolioProject;