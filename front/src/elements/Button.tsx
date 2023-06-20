import React from "react";
import tw from "tailwind-styled-components";

const AuthButton = tw.button`
  w-52 h-8 bg-login_btn rounded-lg text-white
`;

const SocialButton=tw.button`
  flex w-52 h-8 bg-login_btn rounded-lg text-white items-center 
  gap-3 pl-2
`;

const ResumeButton = tw.button`
  bg-resume_input w-full text-white font-bold p-3 rounded-lg
  hover:bg-header_bg
`;

const ResumePlusButton = tw.button`
  bg-resume_input w-10 text-white
`;

const PortfolioButton = tw.button`
  bg-black-50
`;

interface IProps{
    text:string
    _onClick?:React.MouseEventHandler<HTMLButtonElement>
    sort:"auth"|"social"|"resume"|"plusButton"|"portfolio"
    icon?:string
    alt?:string
}


const Button = (props:IProps) => {
  const {text,_onClick,sort,icon,alt} = props;


  return (
    <React.Fragment>
        {sort==="auth" && <AuthButton onClick={_onClick}>{text}</AuthButton>}
        {sort==="social" && 
        <SocialButton onClick={_onClick} >
          <img src={icon} alt={alt} className="items-start"/>
          {text}
        </SocialButton>}
        {sort==="resume" && 
        <ResumeButton onClick={_onClick} >{text}</ResumeButton>}
        {sort==="plusButton" &&
        <ResumePlusButton onClick={_onClick} >
          <img src={icon} alt={alt}/>
          {text}
        </ResumePlusButton>}
        {sort==="portfolio" && <PortfolioButton onClick={_onClick} >{text}</PortfolioButton>}
    </React.Fragment>
  );
};


export default Button;