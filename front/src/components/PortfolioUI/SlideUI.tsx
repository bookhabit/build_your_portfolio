import { useNavigate } from "react-router";
import { PortfolioDetailType, PortfolioType } from "../../Types/PortfolioType";

interface IProps{
    portfolio:PortfolioDetailType
    userPage:boolean
}

const SlideUI = ({portfolio,userPage}:IProps) => {
    console.log(portfolio)
    console.log(userPage)
    const router = useNavigate();
    return (
        <div>
            {userPage&&"사용자의 id와 일치>>"}
            <button onClick={()=>router(`/portfolio/update/${portfolio.PortfolioDoc._id}`)}>수정하기</button>
            <p>UI C</p>
            {portfolio.PortfolioDoc.introduce}
        </div>
    );
};

export default SlideUI;