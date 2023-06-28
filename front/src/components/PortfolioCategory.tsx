import { PortfolioType } from "../Types/PortfolioType";
import PortfolioImage from "./PortfolioImage";

interface IProps{
    categoryName:"클론코딩"|"개인프로젝트"|"협업프로젝트",
    portfolio:PortfolioType[]
}

const PortfolioCategory = ({categoryName,portfolio}:IProps) => {
    function portfolioCategoryCSS(){
        return "flex flex-col items-center category-clone gap-16 p-5"
    }
    return (
        <div className={portfolioCategoryCSS()}>
            <p className="text-neutral-500 text-2xl">{categoryName}</p>
            <div className="flex gap-8 flex-wrap">
                {
                portfolio?.map((portfolio)=>(
                    <PortfolioImage portfolio={portfolio}/>
                ))}
            </div>
        </div>
    );
};

export default PortfolioCategory;