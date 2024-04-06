import LoginVideo from "/bookhabit/portfolio/school_trade_project/로그인시연.mp4"
import RegisterVideo from "/bookhabit/portfolio/school_trade_project/회원가입.mp4"
import RegisterProductVideo from "/bookhabit/portfolio/school_trade_project/상품등록및수정.mp4"
import InfiniteScrollVideo from "/bookhabit/portfolio/school_trade_project/상품조회무한스크롤.mp4"
import ReverseScrollVideo from "/bookhabit/portfolio/school_trade_project/이전채팅데이터및역방향무한스크롤.mp4"
import ChattingVideo from "/bookhabit/portfolio/school_trade_project/채팅기능.mp4"
import ScrollRestoreVideo from "/bookhabit/portfolio/school_trade_project/스크롤복원.mp4"
import FavoriteListVideo from "/bookhabit/portfolio/school_trade_project/관심목록.mp4"
import TradeReviewVideo from "/bookhabit/portfolio/school_trade_project/거래후기.mp4"
import SoldListVideo from "/bookhabit/portfolio/school_trade_project/판매내역.mp4"
import BuyListVideo from "/bookhabit/portfolio/school_trade_project/구매내역.mp4"
import CategoryVideo from "/bookhabit/portfolio/school_trade_project/카테고리.mp4"
import SearchVideo from "/bookhabit/portfolio/school_trade_project/검색기능.mp4"
import SkeletonLoadingVideo from "/bookhabit/portfolio/school_trade_project/상품리스트로딩_스켈레톤ui.mp4"
import LoadingVideo from "/bookhabit/portfolio/school_trade_project/카카오로그인_로딩처리.mp4"
import MainPageImg from "/bookhabit/portfolio/school_trade_project/메인페이지.png"
import ProductDetailImg from "/bookhabit/portfolio/school_trade_project/상품상세페이지.png"
import ProductModifyImg from "/bookhabit/portfolio/school_trade_project/상품수정.png"
import ChattingRoomImg from "/bookhabit/portfolio/school_trade_project/채팅방.png"
import SoldPageImg from "/bookhabit/portfolio/school_trade_project/판매내역.png"
import FigmaImg from "/bookhabit/portfolio/school_trade_project/중고거래프로젝트_디자인.png"
import BuyPageImg from "/bookhabit/portfolio/school_trade_project/구매내역_nullData처리.png"
import ReviewImg from "/bookhabit/portfolio/school_trade_project/거래후기.png"
import LoadingImg from "/bookhabit/portfolio/school_trade_project/로딩UI_에러처리.png"

import { useLocation, useNavigate, useParams } from "react-router"
import { useEffect, useRef } from "react"

type VideoCardPropsType = {
    title:string,desc:string,_src:string,_ref?:React.MutableRefObject<HTMLDivElement | null>
}

const VideoCard = ({title,desc,_src,_ref}:VideoCardPropsType)=>{
    return(
        <div className="bg-tertiary rounded-2xl sm:w-[900px] h-full w-full" ref={_ref}>
            <div className="w-full">
                <p className="text-2xl text-center my-8 font-index text-gray-200 font-bold">{title}</p>
                <video src={_src}  muted controls className="w-full"/>
                <p className="text-xl font-userBasic tracking-wider leading-10 p-8">{desc}</p>
            </div>
        </div>
    )
}

const subtractQueryString = (text:string)=>{
    const queryText = text.split('=')[1]
    return queryText
}

const ShowSchoolTrade = () => {
    const router = useNavigate();
    const location = useLocation();
    const queryString = location.search;
    const queryValue = subtractQueryString(queryString);
    
    // 스크롤을 위한 ref
    const favoriteProductRef = useRef<HTMLDivElement | null>(null);
    const tradeReviewRef = useRef<HTMLDivElement | null>(null);
    const chattingRef = useRef<HTMLDivElement | null>(null);
    const infiniteScrollRef = useRef<HTMLDivElement | null>(null);
    const scrollRestorationRef = useRef<HTMLDivElement | null>(null);
    const projectImageRef = useRef<HTMLDivElement | null>(null);
    const categoryRef = useRef<HTMLDivElement | null>(null);
    const searchRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // query값에 따라서 스크롤 이동으로 해당기능영상 보여주기
        switch (queryValue) {
            case "favoriteProduct":
            if(favoriteProductRef.current){
                favoriteProductRef.current.scrollIntoView({ behavior: "smooth" });
            }
            break;
            case "tradeReview":
                if(tradeReviewRef.current){
                    tradeReviewRef.current.scrollIntoView({ behavior: "smooth" });
                }
                break;
            case "chatting":
                if(chattingRef.current){
                    chattingRef.current.scrollIntoView({ behavior: "smooth" });
                }
                break;
            case "infiniteScroll":
                if(infiniteScrollRef.current){
                    infiniteScrollRef.current.scrollIntoView({ behavior: "smooth" });
                }
                break;
            case "scrollRestoration":
                if(scrollRestorationRef.current){
                    scrollRestorationRef.current.scrollIntoView({ behavior: "smooth" });
                }
                break;
            case "category":
                if(categoryRef.current){
                    categoryRef.current.scrollIntoView({ behavior: "smooth" });
                }
                break;
            case "search":
                if(searchRef.current){
                    searchRef.current.scrollIntoView({ behavior: "smooth" });
                }
                break;
            case "projectImage":
                if(projectImageRef.current){
                    projectImageRef.current.scrollIntoView({ behavior: "smooth" });
                }
                break;
            default:
                scrollTo(0,0)
        }
      }, []);

    return (
        <div className='relative z-0 bg-black font-portfolioD text-white p-32'>
            <h2 className="text-3xl text-center text-gray-100 py-28">대학교 중고거래 플랫폼 기능설명</h2>
            <div className="flex flex-col items-center gap-80">
                <VideoCard 
                    _src={RegisterVideo}
                    title="회원가입"
                    desc="회원가입 시 사용자 필수정보를 로컬방식의 로그인과 카카오 로그인 2가지 형태가 있습니다. 
                    Form Validation을 통해 서비스의 보안을 강화시켰습니다.
                    이름은 글자수 제한과 숫자를 금지시켰고 이메일은 정규표현식을 사용하였고 비밀번호는 저희만의 글자수 제한과 이메일 중복방지 금지와 특수기호 사용을 필수로 입력받도록 하였습니다."

                />
                <VideoCard
                    _src={LoginVideo}
                    title="로그인"
                    desc="로그인 또한 로컬방식의 로그인과 카카오 로그인 방식 2가지로 구현했습니다.
                    인가처리는 HTTP Only Cookies 방식으로 엑세스토큰을 전송하고 https가 아닌 통신에서는 쿠키를 전송하지 않습니다. 
                    이 방식을 통해 XSS공격(Javascript를 통한 쿠키탈취)을 예방하여 보안을 강화했습니다."
                />
                <VideoCard
                    _src={RegisterProductVideo}
                    title="상품등록 및 수정"
                    desc="상품등록은 이미지를 여러 개 등록함으로써 슬라이드 이미지로 처리했고 가격은 1억원 이하로 제약을 걸었습니다.
                    상품 등록을 할 때 판매자가 원하는 거래위치를 설정함으로써 구매자가 상품정보 뿐만 아니라 거래위치까지 참고하여 상품을 고를 수 있도록 만들었습니다.
                    상품은 카테고리와 검색 또는 스크롤을 통해 조회할 수 있습니다."

                />
                <VideoCard
                    _src={InfiniteScrollVideo}
                    title="상품조회 무한스크롤"
                    desc="이 서비스는 주로 모바일로 이용하기 편하게 되어있기 때문에 페이지네이션을 숫자로 클릭해서 다음페이지로 넘어가는 방식이 아닌 같은 화면에서 스크롤을 내릴떄마다 다음 데이터들을 가져올 수 있도록 무한스크롤로 구현했습니다. 
                    무한스크롤은 react-query의 Infinite Query로 구현했습니다. 
                    react-query 무한스크롤 기능을 사용하여 사용자가 페이지를 불러올 때마다 한번에 모든 데이터를 로드하는 대신 필요한 만큼의 데이터만 로드함으로써 초기로딩 속도를 향상시키고 기존 페이지네이션의 페이징을 클릭하여 페이지마다 데이터를 보게되는 동작방식에 비해 사용자가 스크롤을 내릴 때 추가 데이터를 동적으로 로드하여 부드러운 사용자 경험을 제공합니다."

                    _ref={infiniteScrollRef}
                />
                <VideoCard
                    _src={ScrollRestoreVideo}
                    title="스크롤 복원 기능"
                    desc="무한스크롤은 사용자가 모든 데이터를 불러오는 경우보다 데이터 사용량이 적어지므로 모바일 환경에서는 데이터 사용량을 줄일 수도 있어서 유용합니다. 그리고 react-query는 서버에서 가져온 데이터를 캐싱하여 성능을 최적화합니다. 사용자가 스크롤을 위로 올리거나 다시 해당 페이지를 방문하는 경우에도 캐싱된 데이터를 활용하여 반복적인 서버 요청을 줄일 수 있게 됩니다. 그리고 다시 해당페이지를 방문했을 경우 저장해둔 window height로 스크롤을 복원하는 기능도 구현해두었습니다."

                    _ref={scrollRestorationRef}
                />
                <VideoCard
                    _src={ReverseScrollVideo}
                    title="이전 채팅데이터 조회 (역방향 무한스크롤)"
                    desc="채팅기능은 실시간 채팅은 socket.io통신으로 구현했고 이전 채팅 데이터는 REST API로 역방향 무한스크롤로 구현했습니다. 
                    이때는 react-query가 아닌 직접 api의 response타입에 맞춰서 status와 pageNumber들을 state로 설정해두었고 window의 scroolHeight를 기준으로 데이터를 패칭하도록 해두었습니다"

                />
                <VideoCard
                    _src={ChattingVideo}
                    title="채팅 및 알림기능"
                    desc="채팅을 통해서 판매자와 구매자 모두 원하는 날짜와 시간을 정하여 만나서 중고물품을 확인하고 거래를 할 수 있습니다. 채팅서비스를 구현하면서 상대방에게 채팅이 왔을 때 채팅알림을 알려주는 모달창도 구현하고 알림창에도 1표시를 해주면서 사용자경험을 더 좋게 이끌어내기 위해 노력했습니다. 그리고 소켓연결상태를 통해서 상대방이 읽지 않은 상태면 1표시를 보여주고 상대방이 읽게 되면 1표시를 지워주었습니다. 이 기능은 채팅방 입장할 때와 채팅을 남길 때 이벤트를 통해서 구현했습니다. 그리고 채팅알림 뿐만 아니라 구매자가 판매자에게 거래후기를 남겼을 때도 해당 사용자에게 거래후기를 남겼다고 알림을 주어 더 편한 서비스를 만들도록 노력했습니다."

                    _ref={chattingRef}
                />
                <VideoCard
                    _src={FavoriteListVideo}
                    title="관심목록"
                    desc="관심목록 기능을 통해 사용자는 자신만의 관심 목록을 작성할 수 있습니다. 이는 각 사용자의 개별 관심사나 필요에 맞게 상품을 모아두는 데 도움을 줍니다. 사용자는 관심 있는 상품을 한눈에 볼 수 있으므로 검색 시간을 절약하고 더 효율적으로 원하는 상품을 찾을 수 있습니다. 관심목록 또한 알림모달창을 만들어서 하트를 누를 때 모달창을 클릭하면 바로 관심목록페이지로 이동할 수 있도록 사용자 경험을 개선했습니다."

                    _ref={favoriteProductRef}
                />
                 <VideoCard
                    _src={TradeReviewVideo}
                    title="거래후기"
                    desc="거래후기는 상품이나 서비스의 품질을 평가하는 데 사용됩니다. 다른 사용자들은 이러한 후기를 통해 어떤 상품을 구입할지 결정할 때 도움을 받을 수 있습니다. 부정적인 거래후기는 사용자들이 나쁜 품질의 상품이나 서비스를 피하도록 도울 수 있습니다. 거래후기를 누군가가 작성하면 해당 사용자에게 알림을 주어 나의 거래후기를 누군가 작성했다는 것을 바로 알 수 있게 됩니다."

                    _ref={tradeReviewRef}
                />
                 <VideoCard
                    _src={SoldListVideo}
                    title="판매내역"
                    desc="사용자가 판매하는 상품들에 대해서 판매중, 판매완료 상품으로 나누고 거래가 완료되면 판매자가 직접 거래완료로 변경하면 됩니다. 추후 기능으로는 결제기능이 추가되면 결제 이후 자동으로 거래완료 상품으로 분류하는 기능을 개발할 예정입니다."

                />
                <VideoCard
                    _src={BuyListVideo}
                    title="구매내역"
                    desc="구매내역 또한 결제기능이 추가되면 결제 이후 자동으로 구매내역 리스트로 추가할 예정입니다."

                />
                <VideoCard
                    _src={CategoryVideo}
                    title="카테고리 조회"
                    desc="사용자가 전체 상품리스트에서 하나하나 찾아보는 불편함을 해결하기 위해 자신이 원하는 카테고리 종류를 선택해서 조회한 다음 그 카테고리 범주 안에서 상품을 찾아볼 수 있도록 하기 위해 구현하였습니다."

                    _ref={categoryRef}
                />
                <VideoCard
                    _src={SearchVideo}
                    title="검색기능"
                    desc="사용자가 원하는 상품의 단어를 입력하여 검색하여 간편하게 관련 상품들을 살펴볼 수 있도록 구현하였습니다."

                    _ref={searchRef}
                />
                <VideoCard
                    _src={LoadingVideo}
                    title="로그인 시 로딩처리"
                    desc="로그인을 할 때 로딩처리는 react-spinners UI를 사용하였습니다."

                />
                <VideoCard
                    _src={SkeletonLoadingVideo}
                    title="상품리스트 로딩처리" 
                    desc="상품리스트를 데이터 패칭한 후 로딩시간동안 기존에는 '로딩 중'이라는 텍스트만 사용했는데 더욱 기다리는 시간이 느껴질 것 같아서 기존 상품리스트와 비슷한 디자인으로 구현한 스켈레톤 UI를 사용하여 사용자가 기다리는 시간 동안 더 좋은 경험을 만들고자 했습니다."

                />
                <div ref={projectImageRef} className="w-full">
                    <h2 className=" text-4xl mb-10 text-white">프로젝트 이미지 (일부)</h2>
                    <div className=" flex items-center justify-center gap-5 flex-wrap">
                        <img src={MainPageImg} alt="메인페이지" className=" w-80 h-[600px]"/>
                        <img src={ProductDetailImg} alt="상품상세페이지" className=" w-80 h-[600px]"/>
                        <img src={ProductModifyImg} alt="상품수정" className=" w-80 h-[600px]"/>
                        <img src={ChattingRoomImg} alt="채팅방" className=" w-80 h-[600px]"/>
                        <img src={SoldPageImg} alt="판매내역" className=" w-80 h-[600px]"/>
                        <img src={BuyPageImg} alt="구매내역" className=" w-80 h-[600px]"/>
                        <img src={ReviewImg} alt="거래후기" className=" w-80 h-[600px]"/>
                        <img src={LoadingImg} alt="로딩UI" className=" w-80 h-[600px]"/>
                    </div>
                </div>
                <div>
                    <h2 className="text-4xl mb-10 text-white">프로젝트 디자인</h2>
                    <div>
                        <img src={FigmaImg} alt="피그마 디자인"/>
                    </div>
                </div>
            </div>
            <button className='fixed bottom-10 right-10 bg-slate-50 w-44 h-10 rounded-md text-xl text-slate-950 hover:bg-slate-600 hover:text-slate-50 p-1' onClick={()=>router(`/bookhabit/portfolio/6526763253b879944514caf8`)}>포트폴리오 페이지</button>
        </div>
    );
};

export default ShowSchoolTrade;