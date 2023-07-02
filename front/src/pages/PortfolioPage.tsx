import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Portfolio_A from "../components/PortfolioUI/Portfolio_A";
import Portfolio_B from "../components/PortfolioUI/Portfolio_B";
import Portfolio_C from "../components/PortfolioUI/Portfolio_C";
import { PortfolioDetailType } from "../Types/PortfolioType";
import { UserContext, UserContextType } from "../Context/UserContext";


const PortfolioPage = () => {
    const {id:portfolioId} = useParams();
    const { user } = useContext<UserContextType>(UserContext);
    const [userPage,setUserPage] = useState<boolean>(false);
    const [portfolio,setPortfolio] = useState<PortfolioDetailType |undefined>();

    useEffect(()=>{
        axios.get(`/portfolio/${portfolioId}`).then((response)=>{
            if(response.status===200){
                const result = response.data.portfolio_detail as PortfolioDetailType
                setPortfolio(result)
                if(result.PortfolioDoc.author===user?._id){
                    setUserPage(true)
                }
            }
        })
    },[])

    // 받아온 portfolio.selectedUI에 따라서 UI가 다른 컴포넌트 연결

    return (
        <div>
            <h2> {portfolio?.author_name} 님의 포트폴리오</h2>
            {portfolio?.PortfolioDoc.selectedUI==="A" && <Portfolio_A portfolio={portfolio} userPage={userPage}/>}
            {portfolio?.PortfolioDoc.selectedUI==="B" && <Portfolio_B portfolio={portfolio} userPage={userPage}/>}
            {portfolio?.PortfolioDoc.selectedUI==="C" && <Portfolio_C portfolio={portfolio} userPage={userPage}/>}
        </div>
    );
};

export default PortfolioPage;