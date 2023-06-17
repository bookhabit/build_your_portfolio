import React from "react";
import tw from "tailwind-styled-components";

const AuthButton = tw.button`
  bg-red-50
`;

const SocialButton=tw.button`
    bg-green-50
`;

const ResumeButton = tw.button`
  bg-white-50
`;

const PortfolioButton = tw.button`
  bg-black-50
`;



interface IProps{
    text:string
    _onClick:React.MouseEventHandler<HTMLButtonElement>
    sort:string
}


const Button = (props:IProps) => {
  const {
    text,
    _onClick,
    sort
  } = props;


  return (
    <React.Fragment>
        {sort==="auth" && <AuthButton onClick={_onClick}>{text}</AuthButton>}
        {sort==="social" && <SocialButton onClick={_onClick} >{text}</SocialButton>}
        {sort==="resume" && <ResumeButton onClick={_onClick} >{text}</ResumeButton>}
        {sort==="portfolio" && <PortfolioButton onClick={_onClick} >{text}</PortfolioButton>}
    </React.Fragment>
  );
};


export default Button;