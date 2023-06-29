import { PortfolioDetailType, PortfolioType } from "../../Types/PortfolioType";

interface IProps{
    portfolio:PortfolioDetailType
}

const Portfolio_C = ({portfolio}:IProps) => {
    console.log(portfolio)
    return (
        <div>
            {portfolio.PortfolioDoc.introduce}
        </div>
    );
};

export default Portfolio_C;