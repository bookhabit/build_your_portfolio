import LoginVideo from "/bookhabit/portfolio/school_trade_project/로그인시연.mp4"
import RegisterVideo from "/bookhabit/portfolio/school_trade_project/회원가입.mp4"
import RegisterProductVideo from "/bookhabit/portfolio/school_trade_project/상품등록및수정.mp4"
import InfiniteScrollVideo from "/bookhabit/portfolio/school_trade_project/상품조회무한스크롤.mp4"
import ReverseScrollVideo from "/bookhabit/portfolio/school_trade_project/이전채팅데이터및역방향무한스크롤.mp4"
import ChattingVideo from "/bookhabit/portfolio/school_trade_project/채팅기능.mp4"
import FavoriteListVideo from "/bookhabit/portfolio/school_trade_project/관심목록.mp4"
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
                <p className="text-xl font-userBasic tracking-wider leading-10">{desc}</p>
            </div>
            <video src={_src} width={width}  muted controls className="shadow-lg w-full md:w-2/3"/>
        </div>
    )
}

const LeftVideo = ({title,desc,_src,width}:LeftVideoPropsType)=>{
    return(
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-20">
            <video src={_src} width={width} height={400}  muted controls className=" shadow-lg w-full md:w-2/3" />
            <div className="w-1/3">
                <p className="text-2xl text-zinc-600 mb-14 font-index">{title}</p>
                <p className="text-xl font-userBasic tracking-wider leading-10">{desc}</p>
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
                    desc="회원가입을 할 떄는 사용자 필수정보(이메일,이름 등)와 소속대학교와 거래를 할 때 주로 이용할 위치를 미리 입력받아서 사용자가 상품등록을 할 때 이 정보를 미리 주 거래위치로 설정이 되도록 만들었습니다. 각 form마다 에러처리 또한 해두었습니다. 이름은 글자수 제한과 숫자를 금지시켰고 이메일은 정규표현식을 사용하였고 비밀번호는 저희만의 글자수 제한과 이메일 중복방지 금지와 특수기호 사용을 필수로 두어 서비스의 보안을 강화시켰습니다."
                    width={600}
                />
                <RightVideo
                    _src={LoginVideo}
                    title="로그인"
                    desc="로그인 방식은 로컬 로그인과 카카오 로그인 방식 2가지로 구현했습니다.
                    그리고 인가처리는 HTTP Only Cookies 방식으로 엑세스토큰을 전송하고 https가 아닌 통신에서는 쿠키를 전송하지 않습니다. 이렇게 access_token을 로컬에 저장하지 않음으로써 XSS공격(Javascript를 통한 쿠키탈취)을 예방하여 보안을 강화했습니다."
                    width={600}
                />
                <LeftVideo
                    _src={RegisterProductVideo}
                    title="상품등록 및 수정"
                    desc="상품등록은 이미지를 여러 개 등록함으로써 슬라이드 이미지로 처리했고 가격은 1억원 이하로 제약을 걸었습니다. 그리고 카테고리를 설정하여 상품리스트를 조회할 때 카테고리로도 조회할 수 있게 만들었고 상품을 거래할 거래위치를 설정하여 구매자가 상품정보 뿐만 아니라 거래위치까지 참고하여 상품을 고를 수 있도록 만들었습니다."
                    width={600}
                />
                <RightVideo
                    _src={InfiniteScrollVideo}
                    title="상품조회 무한스크롤"
                    desc="이 서비스는 주로 모바일로 이용하기 편하게 되어있기 때문에 페이지네이션을 숫자로 클릭해서 다음페이지로 넘어가는 방식이 아닌 같은 화면에서 스크롤을 내릴떄마다 다음 데이터들을 가져올 수 있도록 무한스크롤로 구현했습니다. 무한스크롤은 react-query의 Infinite Query로 구현했습니다. react-query 무한스크롤 기능을 사용하여 사용자가 페이지를 불러올 때마다 한번에 모든 데이터를 로드하는 대신 필요한 만큼의 데이터만 로드함으로써 초기로딩 속도를 향상시키고 기존 페이지네이션의 페이징을 클릭하여 페이지마다 데이터를 보게되는 동작방식에 비해 사용자가 스크롤을 내릴 때 추가 데이터를 동적으로 로드하여 부드러운 사용자 경험을 제공합니다. 이러한 경험은 사용자가 모든 데이터를 불러오는 경우보다 데이터 사용량이 적어지므로 모바일 환경에서는 데이터 사용량을 줄일 수도 있어서 유용합니다. 그리고 react-query는 서버에서 가져온 데이터를 캐싱하여 성능을 최적화합니다. 사용자가 스크롤을 위로 올리거나 다시 해당 페이지를 방문하는 경우에도 캐싱된 데이터를 활용하여 반복적인 서버 요청을 줄일 수 있게 됩니다. 그리고 다시 해당페이지를 방문했을 경우 저장해둔 window height로 스크롤을 복원하는 기능도 구현해두었습니다."
                    width={600}
                />
                <LeftVideo
                    _src={ReverseScrollVideo}
                    title="이전 채팅데이터 조회 (역방향 무한스크롤)"
                    desc="채팅기능은 실시간 채팅은 socket.io통신으로 구현했고 이전 채팅 데이터는 REST API로 역방향 무한스크롤로 구현했습니다. 이때는 react-query가 아닌 직접 api의 response타입에 맞춰서 status와 pageNumber들을 state로 설정해두었고 window의 scroolHeight를 기준으로 데이터를 패칭하도록 해두었습니다"
                    width={600}
                />
                <RightVideo
                    _src={ChattingVideo}
                    title="채팅 및 알림기능"
                    desc="채팅을 통해서 판매자와 구매자 모두 원하는 날짜와 시간을 정하여 만나서 중고물품을 확인하고 거래를 할 수 있습니다. 채팅서비스를 구현하면서 상대방에게 채팅이 왔을 때 채팅알림을 알려주는 모달창도 구현하고 알림창에도 1표시를 해주면서 사용자경험을 더 좋게 이끌어내기 위해 노력했습니다. 그리고 소켓연결상태를 통해서 상대방이 읽지 않은 상태면 1표시를 보여주고 상대방이 읽게 되면 1표시를 지워주었습니다. 이 기능은 채팅방 입장할 때와 채팅을 남길 때 이벤트를 통해서 구현했습니다. 그리고 채팅알림 뿐만 아니라 구매자가 판매자에게 거래후기를 남겼을 때도 해당 사용자에게 거래후기를 남겼다고 알림을 주어 더 편한 서비스를 만들도록 노력했습니다."
                    width={600}
                />
                <LeftVideo
                    _src={FavoriteListVideo}
                    title="관심목록"
                    desc="관심목록 기능을 통해 사용자는 자신만의 관심 목록을 작성할 수 있습니다. 이는 각 사용자의 개별 관심사나 필요에 맞게 상품을 모아두는 데 도움을 줍니다. 사용자는 관심 있는 상품을 한눈에 볼 수 있으므로 검색 시간을 절약하고 더 효율적으로 원하는 상품을 찾을 수 있습니다. 관심목록 또한 알림모달창을 만들어서 하트를 누를 때 모달창을 클릭하면 바로 관심목록페이지로 이동할 수 있도록 사용자 경험을 개선했습니다."
                    width={600}
                />
                <RightVideo
                    _src={LoadingVideo}
                    title="로그인 시 로딩처리"
                    desc="로그인을 할 때 로딩처리는 react-spinners UI를 사용하였습니다."
                    width={600}
                />
                <RightVideo
                    _src={SkeletonLoadingVideo}
                    title="상품리스트 로딩처리" 
                    desc="상품리스트를 데이터 패칭한 후 로딩시간동안 기존에는 '로딩 중'이라는 텍스트만 사용했는데 더욱 기다리는 시간이 느껴질 것 같아서 기존 상품리스트와 비슷한 디자인으로 구현한 스켈레톤 UI를 사용하여 사용자가 기다리는 시간 동안 더 좋은 경험을 만들고자 했습니다."
                    width={600}
                />
                <div className="w-full p-10">
                    <h2 className=" text-4xl mb-10">프로젝트 이미지 (일부)</h2>
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
                    <h2 className="text-4xl mb-10">프로젝트 디자인</h2>
                    <div>
                        <img src={FigmaImg} alt="피그마 디자인"/>
                    </div>
                </div>
            </div>
            <button className='fixed bottom-10 right-10 bg-slate-50 w-44 h-10 rounded-md text-xl text-slate-950 hover:bg-slate-600 hover:text-slate-50 p-1' onClick={()=>router(`/bookhabit/portfolio/64b418a826eb678cc0763263`)}>이전 페이지</button>
        </div>
    );
};

export default ShowSchoolTrade;