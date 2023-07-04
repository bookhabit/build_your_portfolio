import { useNavigate } from "react-router";
import { PortfolioDetailType, PortfolioType } from "../../Types/PortfolioType";
import { UserInfoType } from "../../Types/userType";



const UserUI_3D = ({user}:{user:UserInfoType|null|undefined}) => {
    const router = useNavigate();
    return (
        <div>
            {user?.name}
        </div>
    );
};

export default UserUI_3D;