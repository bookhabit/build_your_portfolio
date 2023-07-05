import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import BasicUI from "../components/PortfolioUI/BasicUI";
import ScrollParallaxUI from "../components/PortfolioUI/ScrollParallaxUI";
import SlideUI from "../components/PortfolioUI/SlideUI";
import UI_3D from "../components/PortfolioUI/UI_3D";
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


    return (
        <div>
            {portfolio?.PortfolioDoc.selectedUI==="A" 
            && <BasicUI portfolio={portfolio} userPage={userPage}/>}

            {portfolio?.PortfolioDoc.selectedUI==="B" 
            && <ScrollParallaxUI portfolio={portfolio} userPage={userPage}/>}

            {portfolio?.PortfolioDoc.selectedUI==="C" 
            && <SlideUI portfolio={portfolio} userPage={userPage}/>}

            {portfolio?.PortfolioDoc.selectedUI==="D" 
            && <UI_3D portfolio={portfolio} userPage={userPage}/>}
        </div>
    );
};

export default PortfolioPage;