import { useNavigate } from "react-router";
import { PortfolioDetailType, PortfolioType } from "../../Types/PortfolioType";
import Slideshow from "./slideUI/SlideShow";
import ImageUI from "../common/ImageUI";
import { Link } from "react-router-dom";

interface IProps{
    portfolio:PortfolioDetailType
    userPage:boolean
}

const SlideUI = ({portfolio,userPage}:IProps) => {
    console.log(portfolio,userPage)
    const router = useNavigate();
    const slide1 = (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="w-full flex justify-between items-center px-40 h-20">
                <h2 className="text-2xl"><span className="text-3xl font-bold">{portfolio.author_name}</span> 님의 포트폴리오</h2>
                <h2 className="text-3xl font-bold">{portfolio.PortfolioDoc.title}</h2>
            </div>
            <div className="w-full px-40 h-3/4 mt-10">
                {portfolio.PortfolioDoc.photos[0] && <ImageUI className="border shadow-2xl" src={portfolio.PortfolioDoc.photos[0]} />}
            </div>
        </div>
    )
    const slide2 = (
        <div className="w-full h-full flex flex-col gap-5">
            <div className="w-full flex items-center px-20 py-10 h-20 mt-10">
                <h2 className="text-3xl font-bold">프로젝트 목적/기획</h2>
            </div>
            <div className="w-full flex gap-5 mb-10 px-20 h-full">
                <p className="leading-10 pr-10 w-1/2">{portfolio.PortfolioDoc.purpose}</p>
                <div className="w-1/2">
                    {portfolio.PortfolioDoc.photos[1] && <ImageUI className="border shadow-2xl h-full object-fill aspect-square" src={portfolio.PortfolioDoc.photos[1]} />}
                </div>
            </div>
        </div>
    )
    const slide3 = (
        <div className="w-full h-full flex flex-col gap-5">
            <div className="w-full flex items-center px-20 py-10 h-20 mt-10">
                <h2 className="text-3xl font-bold">프로젝트 소개/설명</h2>
            </div>
            <div className="w-full flex gap-5 mb-10 px-20 h-full">
                <p className="leading-10 pr-10 w-full md:w-1/2">{portfolio.PortfolioDoc.introduce}</p>
                <div className="w-full md:w-1/2">
                    {portfolio.PortfolioDoc.photos[2] && <ImageUI className="border shadow-2xl h-full object-fill aspect-square" src={portfolio.PortfolioDoc.photos[2]} />}
                </div>
            </div>
        </div>
    )
    const slide4 = (
        <div className="w-full h-full flex flex-col gap-5">
            <div className="w-full flex items-center px-20 py-10 h-20 mt-10">
                <h2 className="text-3xl font-bold">프로젝트 주요기능</h2>
            </div>
            <div className="w-full h-full mt-10 px-20 leading-10">
            {portfolio.PortfolioDoc.important_functions && portfolio.PortfolioDoc.important_functions.length > 0 &&
                portfolio.PortfolioDoc.important_functions.map((importantData,index)=>(
                    <div className="flex flex-col p-10" key={index}>
                        <h1 className="text-4xl text-cyan-500 font-bold text-center mb-20">프로젝트의 핵심기능 {index+1}</h1>
                        <div className="flex flex-col gap-10 lg:flex-row">
                            <div className="w-full lg:w-1/3 border border-gray-200 shadow-lg">
                                <ImageUI className=" h-80 object-fill border shadow-lg cursor-pointer hover:shadow-2xl" src={importantData.important_function_photo[0]}/>
                            </div>
                            <div className="w-full lg:w-2/3">
                                <p className="text-md text-gray-600 leading-10">{importantData.important_function_desc}</p>
                            </div>
                            
                        </div>
                    </div>
                ))
                }
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
            <div className="flex flex-col gap-5 text-sm text-gray-400  w-full  md:w-1/3">
                        { 
                        !!portfolio.PortfolioDoc.demoLink.designURL 
                        || !!portfolio.PortfolioDoc.demoLink.projectURL 
                        || !!portfolio.PortfolioDoc.demoLink.documentURL 
                        || !!portfolio.PortfolioDoc.demoLink.githubURL  ? <p className="">Demo Link</p>:null}
                        
                        {portfolio.PortfolioDoc.demoLink.projectURL&&
                            <div className="flex gap-3 w-full items-center">
                                <p>Project : </p>
                                <Link target="_blank" to={portfolio.PortfolioDoc.demoLink.projectURL}>프로젝트 URL</Link>
                            </div>
                        }
                        {portfolio.PortfolioDoc.demoLink.githubURL&&
                            <div className="flex gap-3 w-full items-center">
                                <p>Github : </p>
                                <Link target="_blank" to={portfolio.PortfolioDoc.demoLink.githubURL}>깃허브 URL</Link>
                            </div>
                        }
                        {portfolio.PortfolioDoc.demoLink.documentURL&&
                            <div className="flex gap-3 w-full items-center">
                                <p>Document : </p>
                                <Link target="_blank" to={portfolio.PortfolioDoc.demoLink.documentURL}>관련 문서 URL</Link>
                            </div>
                        }
                        {portfolio.PortfolioDoc.demoLink.designURL&&
                            <div className="flex gap-3 w-full items-center">
                                <p>Design : </p>
                                <Link target="_blank" to={portfolio.PortfolioDoc.demoLink.designURL}>디자인 관련 URL</Link>
                            </div>
                        }
                    </div>
        </div>
    )
    return (
        <div className="px-0 xl:px-80 h-screen">
            <Slideshow slides={[slide1,slide2,slide3,slide4,slide5,slide6,slide7]}/>
            <div className="pb-20">
                {userPage&&
                    <button className="bg-black text-white p-3 rounded-lg" onClick={()=>router(`/portfolio/update/${portfolio.PortfolioDoc._id}`)}>포트폴리오 수정하기</button>}
            </div>
        </div>
    );
};

export default SlideUI;