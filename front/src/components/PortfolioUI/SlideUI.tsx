import { useNavigate } from "react-router";
import { PortfolioDetailType } from "../../Types/PortfolioType";
import Slideshow from "./slideUI/SlideShow";
import ImageUI from "../common/ImageUI";
import { Link } from "react-router-dom";
import convertCategory from "../common/convertCategory";
import axios from "axios";
import Swal from "sweetalert2";
import { UserInfoType } from "../../Types/userType";
import { useSetRecoilState } from "recoil";
import { userAtom } from "../../recoil/userAtom";

interface IProps{
    portfolio:PortfolioDetailType
    userPage:boolean
}

const SlideUI = ({portfolio,userPage}:IProps) => {
    const router = useNavigate();
    const setUser = useSetRecoilState(userAtom);
    const slide1 = (
        <div className="w-full h-full flex flex-col items-center justify-between gap-5 py-40 sm:py-10">
            <div className="w-full flex flex-col sm:flex-row gap-5 justify-between items-center px-0 lg:px-40 h-20">
                <h2 className="text-2xl"><span className="text-3xl font-bold">{portfolio.author_name}</span> 님의 포트폴리오</h2>
                <h2 className="text-3xl font-bold">{portfolio.PortfolioDoc.title}</h2>
            </div>
            <div className="w-full px-0 lg:px-40 h-3/4 mt-10">
                {portfolio.PortfolioDoc.photos[0] && <ImageUI className="border shadow-2xl" src={portfolio.PortfolioDoc.photos[0]} alt="포트폴리오 이미지1" />}
            </div>
        </div>
    )
    const slide2 = (
        <div className="w-full h-full flex flex-col gap-5">
            <div className="w-full flex items-center justify-center lg:justify-start px-20 py-10 h-20 mt-10">
                <h2 className="text-3xl font-bold">프로젝트 목적/기획</h2>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-5 justify-center items-center mb-10 px-20 h-full">
                <p className="leading-10 pr-10 w-full lg:w-1/2">{portfolio.PortfolioDoc.purpose}</p>
                <div className="w-full sm:w-1/2">
                    {portfolio.PortfolioDoc.photos[1] && <ImageUI className="border shadow-2xl h-full object-fill aspect-square" src={portfolio.PortfolioDoc.photos[1]} alt="포트폴리오 이미지2" />}
                </div>
            </div>
        </div>
    )
    const slide3 = (
        <div className="w-full h-full flex flex-col gap-5">
            <div className="w-full flex items-center justify-center lg:justify-start px-20 py-10 h-20 mt-10">
                <h2 className="text-3xl font-bold">프로젝트 소개/설명</h2>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-5 justify-center items-center mb-10 px-20 h-full">
                <p className="leading-10 pr-10 w-full lg:w-1/2">{portfolio.PortfolioDoc.introduce}</p>
                <div className="w-full sm:w-1/2">
                    {portfolio.PortfolioDoc.photos[2] && <ImageUI className="border shadow-2xl h-full object-fill aspect-square" src={portfolio.PortfolioDoc.photos[2]} alt="포트폴리오 이미지3" />}
                </div>
            </div>
        </div>
    )
    const slide5 = (
        <div className="w-full h-full bg-codingMan text-white ">
                <div className="h-full flex flex-col gap-10 items-center justify-center px-5 sm:px-40 bg-black/70">
                    <h2 className="text-3xl font-bold">개발과정 또는 문제해결과정</h2>
                    {portfolio.PortfolioDoc.process.length > 0 && 
                        portfolio.PortfolioDoc.process.map((processDetail,index)=>(
                            <p key={index} className="w-full leading-10">{index+1}. {processDetail}</p>
                        ))
                    }
                </div>
        </div>
    )
    const slide6 = (
        <div className="w-full h-full bg-code text-white ">
                <div className="h-full flex flex-col gap-10 items-center justify-center px-5 sm:px-40 bg-black/70">
                    <h2 className="text-3xl font-bold">프로젝트를 통해 배운 점</h2>
                    {portfolio.PortfolioDoc.learned.length > 0 && 
                        portfolio.PortfolioDoc.learned.map((learnedDetail,index)=>(
                            <p key={index} className="w-full leading-10">{index+1}. {learnedDetail}</p>
                        ))
                    }
                </div>
        </div>
    )
    const slide7 = (
        <div className="w-full h-full grid grid-cols-1 gap-10 md:grid-cols-2 p-40 bg-stone-100">
            <div className="flex flex-col gap-5">
                <h4 className="text-3xl font-bold">Category</h4>
                <p className="text-gray-500">{convertCategory(portfolio.PortfolioDoc.category)}</p>
            </div>
            <div className="flex flex-col gap-5">
                <h4 className="text-3xl font-bold">Date</h4>
                <div className="flex gap-3 text-gray-500">
                    <p>{portfolio.PortfolioDoc.developPeriod.start}</p>
                    <p>{"~"}</p>
                    <p>{portfolio.PortfolioDoc.developPeriod.end}</p>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <h4 className="text-3xl font-bold">Used Skills</h4>
                <ul className="flex flex-wrap gap-3 text-gray-400 justify-start">
                    {portfolio.PortfolioDoc.usedTechnology.map((skill)=>(
                        <li className="bg-black/50 p-2 rounded-xl text-white shadow-lg hover:bg-black/20" key={skill}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col gap-3">
                        { 
                        !!portfolio.PortfolioDoc.demoLink.designURL 
                        || !!portfolio.PortfolioDoc.demoLink.projectURL 
                        || !!portfolio.PortfolioDoc.demoLink.documentURL 
                        || !!portfolio.PortfolioDoc.demoLink.githubURL  ? <h4 className="text-3xl font-bold text-black mb-3">Demo Link</h4>:null}
                        
                        {portfolio.PortfolioDoc.demoLink.projectURL&&
                            <div className="flex gap-3 w-full items-center">
                                <p>Project : </p>
                                <Link className="demoLink" target="_blank" to={portfolio.PortfolioDoc.demoLink.projectURL}>프로젝트 URL</Link>
                            </div>
                        }
                        {portfolio.PortfolioDoc.demoLink.githubURL&&
                            <div className="flex gap-3 w-full items-center">
                                <p>Github : </p>
                                <Link className="demoLink" target="_blank" to={portfolio.PortfolioDoc.demoLink.githubURL}>깃허브 URL</Link>
                            </div>
                        }
                        {portfolio.PortfolioDoc.demoLink.documentURL&&
                            <div className="flex gap-3 w-full items-center">
                                <p>Document : </p>
                                <Link className="demoLink" target="_blank" to={portfolio.PortfolioDoc.demoLink.documentURL}>관련 문서 URL</Link>
                            </div>
                        }
                        {portfolio.PortfolioDoc.demoLink.designURL&&
                            <div className="flex gap-3 w-full items-center">
                                <p>Design : </p>
                                <Link className="demoLink" target="_blank" to={portfolio.PortfolioDoc.demoLink.designURL}>디자인 관련 URL</Link>
                            </div>
                        }
            </div>
        </div>
    )
    const slides = [
        slide1,
        slide2,
        slide3,
        ...portfolio.PortfolioDoc.important_functions.map((importantData, index) => (
          <div className="w-full h-full flex flex-col gap-5" key={index}>
            <div className="w-full flex items-center justify-center lg:justify-start px-20 py-10 h-20 mt-10">
              <h2 className="text-3xl font-bold">프로젝트 핵심기능 {index + 1}</h2>
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-5 justify-evenly items-center mb-10 px-20 h-full">
              <div className="w-full sm:w-1/3">
                {portfolio.PortfolioDoc.photos[2] && (
                  <ImageUI
                    className="border shadow-2xl h-full w-full object-fill aspect-square"
                    src={importantData.important_function_photo[0]}
                    alt="핵심기능 이미지1"
                  />
                )}
              </div>
              <p className="leading-10 pr-10 w-full lg:w-1/2">{importantData.important_function_desc}</p>
            </div>
          </div>
        )),
        slide5,
        slide6,
        slide7,
      ];
      
    return (
        <div className="px-0 xl:px-80 h-screen font-portfolioC">
            <Slideshow slides={slides}/>
            {userPage&&
            <div className="pb-20 flex gap-5">
                <button className="bg-black text-white p-3 rounded-lg" onClick={()=>router(`/portfolio/update/${portfolio.PortfolioDoc._id}`)}>포트폴리오 수정하기</button>
                <button className="bg-black text-white p-3 rounded-lg" onClick={()=>
                        axios.delete(`/portfolio/delete/${portfolio.PortfolioDoc._id}`)
                        .then((response)=>{
                            if(response.status===200){
                                Swal.fire('성공','포트폴리오를 삭제하였습니다.','success')
                                axios.get('/profile')
                                .then(({data}:{data:UserInfoType}) => {
                                    setUser(data);
                                });
                                router("/account")
                            }
                        }).catch(()=>{
                            Swal.fire('실패','포트폴리오를 삭제하는 데 실패하였습니다','error')
                        })
                        }>
                            포트폴리오 삭제하기
                    </button>
            </div>}
        </div>
    );
};

export default SlideUI;