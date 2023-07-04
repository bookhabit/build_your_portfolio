import { useNavigate } from "react-router";
import { PortfolioDetailType, PortfolioType } from "../../Types/PortfolioType";

interface IProps{
    portfolio:PortfolioDetailType
    userPage:boolean
}

const UI_3D = ({portfolio,userPage}:IProps) => {
    const router = useNavigate();
    return (
        <div>
            <button onClick={()=>router(`/portfolio/update/${portfolio.PortfolioDoc._id}`)}>수정하기</button>
            <p>UI C</p>
            {portfolio.PortfolioDoc.introduce}
        </div>
    );
};

export default UI_3D;