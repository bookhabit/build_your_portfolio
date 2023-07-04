import { useNavigate } from "react-router";
import { PortfolioDetailType, PortfolioType } from "../../Types/PortfolioType";
import { UserInfoType } from "../../Types/userType";



const UserScrollParallaxUI = ({user}:{user:UserInfoType|null|undefined}) => {
    const router = useNavigate();
    return (
        <div>
            안녕
            {user?.name}
            {user?.email}
        </div>
    );
};

export default UserScrollParallaxUI;