import React from "react";
import tw from "tailwind-styled-components";

const ResumeLabel = tw.label`
  bg-yellow
`;

const PortfolioLabel = tw.label`
  font-bold text-gray-600
`;

interface IProps{
    icon?:string,
    alt?:string;
    sort:"resumeLabel"|"portfolioLabel",
    label:string,
}

const Label = (props:IProps) => {
    const {icon,label,sort,alt} = props;
    
    return(
      <React.Fragment>
          {sort==="resumeLabel" ? 
          icon ? 
            <ResumeLabel className="flex w-28 items-center justify-between">
              <img src={icon} alt={alt} className="items-start"/>
              <p className="font-bold text-base">{label}</p>
            </ResumeLabel>
          : <ResumeLabel className="w-full">
              <p className="font-bold text-base">{label}</p>
            </ResumeLabel>
          : null
          }
          {sort==="portfolioLabel" && 
            <PortfolioLabel>
              <p>{label}</p>
            </PortfolioLabel>}
      </React.Fragment>
    )
};
 

export default Label;