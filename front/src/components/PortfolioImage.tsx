import { PortfolioType } from "../Types/PortfolioType";


const PortfolioImage = ({portfolio}:{portfolio:PortfolioType}) => {
    return (
        <div className="rounded-full w-40 h-40 border border-gray-200 cursor-pointer " key={portfolio._id}>
            <img src={`http://localhost:4000/uploads/${portfolio.photos[0]}`} alt="이미지" className="aspect-square cursor-pointer object-cover rounded-full" />
        </div>
    );
};

export default PortfolioImage;