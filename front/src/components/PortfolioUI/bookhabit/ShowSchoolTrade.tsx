import LoginVideo from "/bookhabit/portfolio/school_trade_project/로그인시연.mp4"
import RegisterVideo from "/bookhabit/portfolio/school_trade_project/회원가입.mp4"
import RegisterProductVideo from "/bookhabit/portfolio/school_trade_project/상품등록및수정.mp4"
import InfiniteScrollVideo from "/bookhabit/portfolio/school_trade_project/상품조회무한스크롤.mp4"
import ReverseScrollVideo from "/bookhabit/portfolio/school_trade_project/이전채팅데이터및역방향무한스크롤.mp4"
import ChattingVideo from "/bookhabit/portfolio/school_trade_project/채팅기능.mp4"
import FavoriteListVideo from "/bookhabit/portfolio/school_trade_project/관심목록.mp4"
import SkeletonLoadingVideo from "/bookhabit/portfolio/school_trade_project/상품리스트로딩_스켈레톤ui.mp4"
import LoadingVideo from "/bookhabit/portfolio/school_trade_project/카카오로그인_로딩처리.mp4"
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

const ShowSchoolTrade = () => {
    const router = useNavigate();
    return (
        <div className="bg-neutral-100 p-48">
            <h2 className="text-3xl text-center text-slate-500 mb-48">대학교 중고거래 플랫폼 기능설명</h2>
            <div className="flex flex-col items-center gap-80 ">
                <RightVideo 
                    _src={RegisterVideo}
                    title="회원가입"
                    desc="설명"
                    width={600}
                />
                <RightVideo
                    _src={LoginVideo}
                    title="로그인"
                    desc="설명"
                    width={600}
                />
                <LeftVideo
                    _src={RegisterProductVideo}
                    title="상품등록 및 수정"
                    desc="설명"
                    width={600}
                />
                <RightVideo
                    _src={InfiniteScrollVideo}
                    title="상품조회 무한스크롤"
                    desc="설명"
                    width={600}
                />
                <LeftVideo
                    _src={ReverseScrollVideo}
                    title="이전 채팅데이터 조회 (역방향 무한스크롤)"
                    desc="설명"
                    width={600}
                />
                <RightVideo
                    _src={ChattingVideo}
                    title="채팅 및 알림기능"
                    desc="설명"
                    width={600}
                />
                <LeftVideo
                    _src={FavoriteListVideo}
                    title="관심목록"
                    desc="설명"
                    width={600}
                />
                <RightVideo
                    _src={LoadingVideo}
                    title="로그인 시 로딩처리"
                    desc="설명"
                    width={600}
                />
                <RightVideo
                    _src={SkeletonLoadingVideo}
                    title="상품리스트 로딩처리"
                    desc="설명"
                    width={600}
                />
            </div>
            <button className='fixed bottom-10 right-10 bg-slate-50 w-44 h-10 rounded-md text-xl text-slate-950 hover:bg-slate-600 hover:text-slate-50 p-1' onClick={()=>router(`/bookhabit/portfolio/64b418a826eb678cc0763263`)}>이전 페이지</button>
        </div>
    );
};

export default ShowSchoolTrade;