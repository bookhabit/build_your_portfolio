import { useNavigate } from "react-router";
import { PortfolioDetailType, PortfolioType } from "../../Types/PortfolioType";
import { UserInfoType } from "../../Types/userType";



const UserSlideUI = ({user}:{user:UserInfoType|null|undefined}) => {
    const router = useNavigate();
    return (
        <div>
            {user?.name}
        </div>
    );
};

export default UserSlideUI;