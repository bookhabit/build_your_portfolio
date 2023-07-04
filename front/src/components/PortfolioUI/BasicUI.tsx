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

    return (
        <div className="px-0 xl:px-60 py-20 bg-gray-50">
            <div className="flex flex-col items-center">
                <h2 className="border-b p-3 mb-10"><span className="text-5xl text-gray-500">{portfolio?.author_name}</span> 님의 포트폴리오</h2>
            </div>
            <div className="p-10 min-h-screen">
                <div className="flex flex-col md:flex-row gap-20 mb-12">
                    <div className="w-full md:w-1/2 flex flex-col gap-5 h-full justify-around">
                        <h1 className="text-4xl text-cyan-500 mb-5">{portfolio.PortfolioDoc.title}</h1>
                        <div className="flex flex-col gap-3">
                            <p className=" text-cyan-400">프로젝트 목적</p>
                            <p className="text-sm leading-7">{portfolio.PortfolioDoc.purpose}</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className=" text-cyan-400">프로젝트 소개</p>
                            <p className="text-sm leading-7">{portfolio.PortfolioDoc.introduce}</p>
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
                                    <li className="bg-cyan-300 p-2 rounded-xl text-white" key={skill}>{skill}</li>
                                ))}
                            </div>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 shadow-2xl">
                        {portfolio?.PortfolioDoc.photos.length > 0 && 
                            <ImageUI className="h-96 w-full aspect-square" src={portfolio?.PortfolioDoc.photos[0]}/>
                        }
                    </div>
                </div>
                <div className="flex">
                    <div className="w-1/3">핵심기술소개</div>
                    <div className="w-2/3">핵심기술 이미지</div>
                </div>
                <div className="flex flex-col gap-3 mb-5 border border-gray-400 p-5">
                    <p className="text-gray-600">개발과정</p>
                    <p className="text-md font-light leading-10">{portfolio.PortfolioDoc.process}</p>
                </div>
                <div className="flex flex-col gap-3 mb-5 border border-gray-400 p-5">
                    <p className="text-gray-600">배운점</p>
                    <p className="text-md font-light leading-10">{portfolio.PortfolioDoc.learned}</p>
                </div>
                <div className="mb-10">
                    <p>프로제긑이미지들</p>
                </div>
                <div className="flex flex-col gap-5 text-sm text-gray-400 mb-10">
                    <p className="text-gray-600">Demo Link</p>
                    {portfolio.PortfolioDoc.demoLink.projectURL&&
                        <div className="flex gap-3">
                            <p>Project : </p>
                            <Link target="_blank" to={portfolio.PortfolioDoc.demoLink.projectURL}>프로젝트 URL</Link>
                        </div>
                    }
                    {portfolio.PortfolioDoc.demoLink.githubURL&&
                        <div className="flex gap-3">
                            <p>Github : </p>
                            <Link target="_blank" to={portfolio.PortfolioDoc.demoLink.githubURL}>깃허브 URL</Link>
                        </div>
                    }
                    {portfolio.PortfolioDoc.demoLink.documentURL&&
                        <div className="flex gap-3">
                            <p>Document : </p>
                            <Link target="_blank" to={portfolio.PortfolioDoc.demoLink.documentURL}>관련 문서 URL</Link>
                        </div>
                    }
                    {portfolio.PortfolioDoc.demoLink.designURL&&
                        <div className="flex gap-3">
                            <p>Design : </p>
                            <Link target="_blank" to={portfolio.PortfolioDoc.demoLink.designURL}>디자인 관련 URL</Link>
                        </div>
                    }
                </div>
            {userPage&&
                <button className="bg-gray-200 p-3 rounded-md" onClick={()=>router(`/portfolio/update/${portfolio.PortfolioDoc._id}`)}>수정하기</button>
            }
            </div>
        </div>
    );
};

export default BasicUI;