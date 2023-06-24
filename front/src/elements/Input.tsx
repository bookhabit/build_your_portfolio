import React, { ChangeEvent } from "react";
import tw from "tailwind-styled-components";

interface ValidateProps{
  isValid:boolean
  validateMode:boolean
}

const AuthInput = tw.input<ValidateProps>`
  w-80 h-8 rounded-lg py-5 px-3 text-black
  ${(props)=>props.isValid && props.validateMode && "bg-error_fill border border-error_stroke"}
`;

const ResumeInput = tw.input<ValidateProps>`
  bg-inherit border-b border-black placeholder-black p-1
  outline-none focus:border-b focus:border-border_focus
  ${(props)=>props.isValid && props.validateMode && "border-error_stroke"}
`;

const PortfolioInput = tw.input<ValidateProps>`
  text-center font-bold text-3xl border-b py-3 outline-none 
   focus:text-gray-400 focus:w-auto
  ${(props)=>props.isValid && props.validateMode && "border-error_stroke"}
`;

const BorderInput = tw.input<ValidateProps>`
  w-1/3 p-2 border border-gray-500 rounded-lg
  ${(props)=>props.isValid && props.validateMode && "border-error_stroke"}
`;

const URLInput = tw.input<ValidateProps>`
  w-3/4 bg-inherit border-b border-black placeholder-black p-1
  outline-none focus:border-b focus:border-border_focus
  ${(props)=>props.isValid && props.validateMode && "border-error_stroke"}
`;

export type InputValue = string | number
export type InputChangeEvent = ChangeEvent<HTMLInputElement>

interface IProps{
    label? :string;
    value?: InputValue;
    _onChange?: (ev: InputChangeEvent) => void
    placeholder?:string;
    name:string;
    type:string;
    sort:"authInput"|"resumeInput"|"portfolioInput"|"borderInput"|"URLInput"
    isValid:boolean;
    errorMessage:string;
    validateMode:boolean;
}


const Input = (props:IProps) => {
    const {label ,placeholder, _onChange,sort,type,value,name,isValid,errorMessage,validateMode } = props;
      return(
        <React.Fragment>
            {label}
            {sort==="authInput"&&
              <AuthInput 
                placeholder = {placeholder} 
                onChange={_onChange} 
                type={type} name={name} value={value} 
                isValid={isValid} validateMode={validateMode} 
            />}

            {sort==="resumeInput"&&
              <ResumeInput 
                placeholder = {placeholder} 
                onChange={_onChange} 
                type={type} 
                name={name} 
                value={value}
                isValid={isValid} validateMode={validateMode}
            />}
            
            {sort==="portfolioInput"&&
              <PortfolioInput 
                placeholder = {placeholder} 
                onChange={_onChange} 
                type={type} 
                name={name} 
                value={value}
                isValid={isValid} validateMode={validateMode}
            />}

            {sort==="borderInput"&&
              <BorderInput 
                placeholder = {placeholder} 
                onChange={_onChange} 
                type={type} 
                name={name} 
                value={value}
                isValid={isValid} validateMode={validateMode}
            />}
            
            {sort==="URLInput"&&
              <URLInput 
                placeholder = {placeholder} 
                onChange={_onChange} 
                type={type} 
                name={name} 
                value={value}
                isValid={isValid} validateMode={validateMode}
            />}

            {isValid && errorMessage && validateMode && (
              <p className="font text-sm text-error_stroke">{errorMessage}</p>
            )}
        </React.Fragment>
      )
}
 
export default Input;