import React, { ChangeEvent } from "react";
import tw from "tailwind-styled-components";

const AuthInput = tw.input`
  w-80 h-8 rounded-lg py-5 px-3 text-black
`;

const ResumeInput = tw.input`
  bg-white-50
`;

const PortfolioInput = tw.input`
  bg-black-50
`;

export type InputValue = string | number
export type InputChangeEvent = ChangeEvent<HTMLInputElement>

interface IProps{
    label? :string,
    placeholder:string,
    value: InputValue;
    _onChange?: (ev: InputChangeEvent) => void
    name:string;
    type:string,
    sort:string,
}


const Input = (props:IProps) => {
    const {label ,placeholder, _onChange,sort,type,value,name } = props;
      return(
        <React.Fragment>
            {label}
            {sort==="authInput"&&
            <AuthInput placeholder = {placeholder} onChange={_onChange} type={type} name={name} value={value} />}
            {sort==="resumeInput"&&
            <ResumeInput placeholder = {placeholder} onChange={_onChange} type={type} name={name} value={value}/>}
            {sort==="portfolioInput"&&
            <PortfolioInput placeholder = {placeholder} onChange={_onChange} type={type} name={name} value={value}/>}
        </React.Fragment>
      )
}
 
export default Input;