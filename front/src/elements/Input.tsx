import React from "react";
import tw from "tailwind-styled-components";

const AuthInput = tw.input`
  bg-red-50
`;

const ResumeInput = tw.input`
  bg-white-50
`;

const PortfolioInput = tw.input`
  bg-black-50
`;

interface IProps{
    label? :string,
    placeholder:string,
    _onChange:React.ChangeEventHandler<HTMLInputElement>,
    type:string,
    sort:string,
}


const Input = (props:IProps) => {
    const {label ,placeholder, _onChange,sort,type } = props;
      return(
        <React.Fragment>
            {label}
            {sort==="authInput"&&
            <AuthInput placeholder = {placeholder} onChange={_onChange} type={type} />}
            {sort==="resumeInput"&&
            <ResumeInput placeholder = {placeholder} onChange={_onChange} type={type}/>}
            {sort==="portfolioInput"&&
            <PortfolioInput placeholder = {placeholder} onChange={_onChange} type={type}/>}
        </React.Fragment>
      )
}
 
export default Input;