import { Link } from "react-router-dom";
import { CategoryType, DemoLinkType, DevelopPeriodType } from "../../../Types/PortfolioType";
import { styles } from "../../UserInfoUI/UserUI_3D";
import convertCategory from "../../common/convertCategory";

type IProps={
    period:DevelopPeriodType;
    category:CategoryType;
    demoLink:DemoLinkType
}

const FinishCard = ({period,category,demoLink}:IProps) => {
    return (
        <div className={'sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto flex flex-col items-center fadeInContainer'}>
                <h2 className={`${styles.sectionHeadText} mb-10`}>
                    기타정보
                </h2>
                <div className='bg-tertiary p-10 rounded-2xl sm:w-[660px] h-full w-full'>
                    <div>
                        <h2 className='text-white font-medium mb-4'>Date</h2>
                        <div className="py-4 px-6 text-secondary rounded-lg outline-none border-none font-medium">
                            <p>
                                {period.start}
                                    ~ 
                                {period.end}
                            </p>
                        </div>
                    <div>
                        <h2 className='text-white font-medium mb-4'>Category</h2>
                        <div className="py-4 px-6 text-secondary rounded-lg outline-none border-none font-medium">
                            <p>{convertCategory(category)}</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-white font-medium mb-4'>Demo Link</h2>
                        <div className="py-4 px-6 rounded-lg outline-none border-none font-medium">
                            <div className="flex flex-col gap-5 text-sm text-gray-400  w-full">
                                {demoLink.projectURL&&
                                    <div className="flex gap-3 w-full items-center text-secondary ">
                                        <p>Project : </p>
                                        <Link className="hover:text-white text-gray-300 demoLink" target="_blank" to={demoLink.projectURL}>프로젝트 URL</Link>
                                    </div>
                                }
                                {demoLink.githubURL&&
                                    <div className="flex gap-3 w-full items-center text-secondary">
                                        <p>Github : </p>
                                        <Link className="hover:text-white text-gray-300 demoLink" target="_blank" to={demoLink.githubURL}>깃허브 URL</Link>
                                    </div>
                                }
                                {demoLink.documentURL&&
                                    <div className="flex gap-3 w-full items-center text-secondary">
                                        <p>Document : </p>
                                        <Link className="hover:text-white text-gray-300 demoLink " target="_blank" to={demoLink.documentURL}>관련 문서 URL</Link>
                                    </div>
                                }
                                {demoLink.designURL&&
                                    <div className="flex gap-3 w-full items-center text-secondary">
                                        <p>Design : </p>
                                        <Link className="hover:text-white text-gray-300 demoLink" target="_blank" to={demoLink.designURL}>디자인 관련 URL</Link>
                                    </div>
                                }
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    )
}

export default FinishCard;