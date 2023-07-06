import { useNavigate } from "react-router";
import { PortfolioDetailType, PortfolioType } from "../../Types/PortfolioType";
import Slideshow from "./slideUI/SlideShow";
import ImageUI from "../common/ImageUI";

interface IProps{
    portfolio:PortfolioDetailType
    userPage:boolean
}

const SlideUI = ({portfolio,userPage}:IProps) => {
    console.log(portfolio,userPage)
    const router = useNavigate();
    const slide1 = (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="w-full flex justify-between items-center px-20 h-20">
                <h2 className="text-2xl"><span className="text-3xl">{portfolio.author_name}</span> 님의 포트폴리오</h2>
                <h2 className="text-3xl">{portfolio.PortfolioDoc.title}</h2>
            </div>
            <div className="w-3/4 h-3/4 mt-10">
                {portfolio.PortfolioDoc.photos[0] && <ImageUI className="border shadow-2xl" src={portfolio.PortfolioDoc.photos[0]} />}
            </div>
        </div>
    )
    const slide2 = (
        <div className="w-full h-full flex flex-col gap-5">
            <div className="w-full flex items-center px-20 py-10 h-20 mt-10">
                <h2 className="text-3xl font-bold">프로젝트 목적/기획</h2>
            </div>
            <div className="w-full h-3/4 mt-10 px-20 leading-10">
                <p>{portfolio.PortfolioDoc.purpose}</p>
            </div>
        </div>
    )
    const slide3 = (
        <div className="w-full h-full flex flex-col gap-5">
            <div className="w-full flex items-center px-20 py-10 h-20 mt-10">
                <h2 className="text-3xl font-bold">프로젝트 소개/설명</h2>
            </div>
            <div className="w-full h-3/4 mt-10 px-20 leading-10">
                <p>{portfolio.PortfolioDoc.introduce}</p>
            </div>
        </div>
    )
    const slide4 = (
        <div className="w-full h-full flex flex-col gap-5">
            <div className="w-full flex items-center px-20 py-10 h-20 mt-10">
                <h2 className="text-3xl font-bold">프로젝트 핵심기능</h2>
            </div>
            <div className="w-full h-3/4 mt-10 px-20 leading-10">
                <p>{portfolio.PortfolioDoc.introduce}</p>
            </div>
        </div>
    )
    const slide5 = (
        <div className="w-full h-full flex flex-col gap-5">
            <div className="w-full flex items-center px-20 py-10 h-20 mt-10">
                <h2 className="text-3xl font-bold">개발과정</h2>
            </div>
            <div className="w-full h-3/4 mt-10 px-20 leading-10">
                <p>{portfolio.PortfolioDoc.introduce}</p>
            </div>
        </div>
    )
    const slide6 = (
        <div className="w-full h-full flex flex-col gap-5">
            <div className="w-full flex items-center px-20 py-10 h-20 mt-10">
                <h2 className="text-3xl font-bold">배운 점</h2>
            </div>
            <div className="w-full h-3/4 mt-10 px-20 leading-10">
                <p>{portfolio.PortfolioDoc.introduce}</p>
            </div>
        </div>
    )
    const slide7 = (
        <div className="w-full h-full flex flex-col gap-5">
            <div className="w-full flex items-center px-20 py-10 h-20 mt-10">
                <h4 className="text-3xl font-bold">Category</h4>
            </div>
            <div className="w-full flex items-center px-20 py-10 h-20 mt-10">
                <h4 className="text-3xl font-bold">Date</h4>
            </div>
            <div className="w-full flex items-center px-20 py-10 h-20 mt-10">
                <h4 className="text-3xl font-bold">Used Skills</h4>
            </div>
            <div className="w-full flex items-center px-20 py-10 h-20 mt-10">
                <h2 className="text-3xl font-bold">Demo Link</h2>
            </div>
        </div>
    )
    return (
        <div className="px-0 xl:px-60 h-screen">
            {/* {userPage&&
            <button onClick={()=>router(`/portfolio/update/${portfolio.PortfolioDoc._id}`)}>포트폴리오 수정하기</button>} */}
            <Slideshow slides={[slide1,slide2,slide3,slide4,slide5,slide6,slide7]}/>
        </div>
    );
};

export default SlideUI;