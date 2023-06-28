import { useNavigate } from "react-router";
import { PortfolioType } from "../Types/PortfolioType";


const PortfolioImage = ({portfolio}:{portfolio:PortfolioType}) => {
    const router = useNavigate();
    
    return (
        <div className="flex flex-col items-center justify-center gap-5 " key={portfolio._id} onClick={()=>router(`/portfolio/${portfolio._id}`)}>
            <img src={`http://localhost:4000/uploads/${portfolio.photos[0]}`} alt="이미지" className="aspect-square cursor-pointer object-cover rounded-full w-40 h-40" />
            <p className="text-gray-400">{portfolio.title}</p>
        </div>
    );
};

export default PortfolioImage;