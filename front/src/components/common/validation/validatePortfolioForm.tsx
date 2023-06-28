import { DemoLinkType, PortfolioType } from '../../../Types/PortfolioType';

export type ValidatePortfolio = {
    title:string; 
    purpose:string;
    introduce:string;
    process:string;
    learned:string;
    photos:string;
    usedTechnology:string;
    developPeriod:{
      start:string, // 2023-01-25 형식
      end:string, // 2023-04-25
   };
   important_functionInput:string,
    demoLink:DemoLinkType;
    category:string;
    selectedUI:string;
}

function validatePortfolioForm(portfolioForm:PortfolioType,setErrorMessage:React.Dispatch<React.SetStateAction<ValidatePortfolio>>):boolean {
  // 전체 input validation
  const {title,purpose,
    introduce, process,learned,usedTechnology,developPeriod,category,selectedUI,
    } = portfolioForm
    console.log('유효성검사 props',portfolioForm)

    const requiredMsg = "필수입력"

    if(!title){
      setErrorMessage((prevState)=>({
        ...prevState,
        title:requiredMsg,
      }))
      return false
    }
    if(!purpose){
      setErrorMessage((prevState)=>({
        ...prevState,
        purpose:requiredMsg,
      }))
      return false
    }
    if(!introduce){
      setErrorMessage((prevState)=>({
        ...prevState,
        introduce:requiredMsg,
      }))
      return false
    }
    if(!process){
      setErrorMessage((prevState)=>({
        ...prevState,
        process:requiredMsg,
      }))
      return false
    }
    if(!learned){
      setErrorMessage((prevState)=>({
        ...prevState,
        learned:requiredMsg,
      }))
      return false
    }
    if(usedTechnology.length<=0){
      setErrorMessage((prevState)=>({
        ...prevState,
        usedTechnology:requiredMsg,
      }))
      return false
    }
    if(!developPeriod.start){
      setErrorMessage((prevState)=>({
        ...prevState,
        developPeriod: {
          ...prevState.developPeriod,
          start: requiredMsg,
        }
      }))
      return false
    }
    if(!developPeriod.end){
      setErrorMessage((prevState)=>({
        ...prevState,
        developPeriod: {
          ...prevState.developPeriod,
          end: requiredMsg,
        }
      }))
      return false
    }
    if(!category){
      setErrorMessage((prevState)=>({
        ...prevState,
        category:requiredMsg,
      }))
      return false
    }
    if(!selectedUI){
      setErrorMessage((prevState)=>({
        ...prevState,
        selectedUI:requiredMsg,
      }))
      return false
    }

    return true
}

export default validatePortfolioForm;