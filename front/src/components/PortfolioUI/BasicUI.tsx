import { useNavigate } from "react-router";
import { PortfolioDetailType, PortfolioType } from "../../Types/PortfolioType";
import ImageUI from "../common/ImageUI";
import convertCategory from "../common/convertCategory";
import { Link } from "react-router-dom";

interface IProps{
    portfolio:PortfolioDetailType
    userPage:boolean
}

const BasicUI = ({portfolio,userPage}:IProps) => {
    const router = useNavigate();
    console.log(portfolio)

    return (
        <div className="px-0 xl:px-60 py-20 bg-gray-50">
            <div className="flex flex-col">
                <h2 className="border-b p-3 mb-10 text-md"><span className="text-xl text-cyan-500 ">{portfolio?.author_name}</span> 님의 포트폴리오</h2>
            </div>
            <div className="p-10 min-h-screen">
                <div className="flex flex-col lg:flex-row gap-20 mb-12">
                    <div className="w-full lg:w-1/2 flex flex-col gap-5 justify-around">
                        <h1 className="text-4xl text-cyan-400 font-bold mb-5">{portfolio.PortfolioDoc.title}</h1>
                        <div className="flex flex-col gap-3">
                            <p className=" text-cyan-400">프로젝트 목적</p>
                            <p className="text-md leading-8 font-light">{portfolio.PortfolioDoc.purpose}</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className=" text-cyan-400">프로젝트 소개</p>
                            <p className="text-md leading-8 font-light">{portfolio.PortfolioDoc.introduce}</p>
                        </div>
                        <div className="flex items-center gap-3 w-full justify-between">
                            <p className="text-gray-400">Category</p>
                            <p className="text-gray-400 px-5">{convertCategory(portfolio.PortfolioDoc.category)}</p>
                        </div>
                        <div className="flex items-center gap-3 w-full justify-between">
                            <p className="text-gray-400">Date</p>
                            <div className="flex gap-3 text-gray-400 px-5">
                                <span>{portfolio.PortfolioDoc.developPeriod.start}</span>
                                <span>{"~"}</span>
                                <span>{portfolio.PortfolioDoc.developPeriod.end}</span>
                            </div>
                        </div>
                        <ul className="flex items-center gap-3 w-full justify-between">
                            <p className="text-gray-400">Skills</p>
                            <div className="flex flex-wrap gap-3 text-gray-400 px-5 justify-start">
                                {portfolio.PortfolioDoc.usedTechnology.map((skill)=>(
                                    <li className="bg-cyan-300 p-2 rounded-xl text-white shadow-lg hover:bg-cyan-200" key={skill}>{skill}</li>
                                ))}
                            </div>
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/2 shadow-xl">
                        {portfolio?.PortfolioDoc.photos.length > 0 && 
                            <ImageUI className="w-full aspect-square object-fill" src={portfolio?.PortfolioDoc.photos[0]}/>
                        }
                    </div>
                </div>
                {portfolio.PortfolioDoc.important_functions && portfolio.PortfolioDoc.important_functions.length > 0 &&
                portfolio.PortfolioDoc.important_functions.map((importantData,index)=>(
                    <div className="flex flex-col gap-3 my-12 border shadow-xl p-5">
                        <h1 className="text-2xl text-cyan-500 font-bold text-center mb-10">프로젝트의 핵심기능 {index+1}</h1>
                        <div className="flex flex-col gap-10 lg:flex-row">
                            <div className="w-full lg:w-1/3 p-2">
                                <p className="text-md text-gray-600 leading-10">{importantData.important_function_desc}</p>
                            </div>
                            <div className="w-full lg:w-2/3 border border-gray-200 shadow-sm">
                                <ImageUI src={importantData.important_function_photo[0]}/>
                            </div>
                        </div>
                    </div>
                ))
                }
                <div className="flex flex-col gap-3 mb-5 border shadow-md p-5  text-black">
                    <p className="text-cyan-400">개발과정</p>
                    <p className="text-md font-light leading-10">{portfolio.PortfolioDoc.process}</p>
                </div>
                <div className="flex flex-col gap-3 mb-10 border shadow-md p-5  text-black">
                    <p className="text-cyan-400">배운점</p>
                    <p className="text-md font-light leading-10">{portfolio.PortfolioDoc.learned}</p>
                </div>
                <div className="flex flex-col items-center md:flex-row gap-20 w-full border shadow-md p-5">
                    <div className="flex flex-col gap-5 text-sm text-gray-400  w-full  md:w-1/3">
                        <p className="text-cyan-400">Demo Link</p>
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
                    <div className=" w-2/3 grid grid-cols-3 gap-5">
                        {portfolio.PortfolioDoc.photos.length>1 && portfolio.PortfolioDoc.photos.slice(1).map((photo)=>(
                            <div key={photo} className="w-full">
                                <ImageUI className="h-full object-cover"  src={photo}/>
                            </div>
                        ))}
                    </div>
                </div>
            {userPage &&
                <button className="bg-gray-200 p-3 rounded-md" onClick={()=>router(`/portfolio/update/${portfolio.PortfolioDoc._id}`)}>수정하기</button>
            }
            </div>
        </div>
    );
};

export default BasicUI;