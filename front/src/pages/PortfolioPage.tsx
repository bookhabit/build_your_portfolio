import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import BasicUI from "../components/PortfolioUI/BasicUI";
import ScrollParallaxUI from "../components/PortfolioUI/ScrollParallaxUI";
import SlideUI from "../components/PortfolioUI/SlideUI";
import UI_3D from "../components/PortfolioUI/UI_3D";
import { PortfolioDetailType } from "../Types/PortfolioType";
import { useRecoilValue } from "recoil";
import { userAtom } from "../recoil/userAtom";
import ErrorMsg from "../components/ErrorMsg";


const PortfolioPage = () => {
    const {id:portfolioId} = useParams();
    const user = useRecoilValue(userAtom)
    const [userPage,setUserPage] = useState<boolean>(false);
    const [portfolio,setPortfolio] = useState<PortfolioDetailType |undefined>();
    const [errorMsg,setErrorMsg] = useState<string>('');

    useEffect(()=>{
        const fetchUserData = async () => {
            try {
              const response = await axios.get(`/portfolio/${portfolioId}`)
              if (response.status === 200) {
                const result = response.data.portfolio_detail as PortfolioDetailType
                setPortfolio(result)
                if(result.PortfolioDoc.author===user?._id){
                    setUserPage(true)
                }
              } else if (response.status === 404) {
                setErrorMsg(response.data);
              }
            } catch (error:any) {
              console.log('error', error);
              setErrorMsg(error.response.data);
            }
          };
        
          fetchUserData();
    },[])


    return (
        <div>
            {errorMsg && <ErrorMsg errorMsg={errorMsg} />}

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