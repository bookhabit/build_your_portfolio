import React from "react";
import tw from "tailwind-styled-components";

interface TextareaType{
  height:string
  isValid:boolean
  validateMode:boolean
}

const ResumeTextarea = tw.textarea<TextareaType>`
  p-2 text-sm border border-gray-200 
  shadow-lg outline-none rounded-md 
  focus:border-border_focus
  ${(props)=>props.height}
  ${(props)=>props.isValid && props.validateMode && "border-error_stroke bg-error_fill"}
`;

const PortfolioTexarea = tw.textarea<TextareaType>`
  border border-gray-500 rounded-md w-full p-2 text-sm
  focus:border-border_focus
  ${(props)=>props.height}
  ${(props)=>props.isValid && props.validateMode && "border-error_stroke bg-error_fill"}
`;

interface IProps{
    label? :string,
    placeholder?:string,
    value:string,
    name:string,
    _onChange:React.ChangeEventHandler<HTMLTextAreaElement>,
    sort:"resumeTextarea"|"portfolioTexarea"
    height:string,
    isValid:boolean,
    errorMessage:string,
    validateMode:boolean,
}

const Textarea = (props:IProps) => {
    const {label ,placeholder, _onChange,sort,value,name,height,isValid,errorMessage,validateMode } = props;
    
    return(
      <React.Fragment>
        {label}
          {sort==="resumeTextarea"&&
          <ResumeTextarea 
            placeholder = {errorMessage && errorMessage} 
            onChange={_onChange} 
            value={value} 
            name={name}
            height={height} 
            isValid={isValid}
            validateMode={validateMode}
            />}
          {sort==="portfolioTexarea"&&
          <PortfolioTexarea 
            placeholder = {placeholder} 
            onChange={_onChange} 
            value={value}
            name={name}
            height={height} 
            isValid={isValid}
            validateMode={validateMode}
            />}
      </React.Fragment>
    )
};
 

export default Textarea;