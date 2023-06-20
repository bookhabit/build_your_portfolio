import React from "react";
import tw from "tailwind-styled-components";

interface TextareaType{
  height:string
}

const ResumeTextarea = tw.textarea<TextareaType>`
  p-2 text-sm border border-gray-200 
  shadow-lg outline-none rounded-md
  ${(props)=>props.height}
`;

const PortfolioTexarea = tw.textarea`
  bg-green
`;

interface IProps{
    label? :string,
    placeholder?:string,
    value:string,
    _onChange:React.ChangeEventHandler<HTMLTextAreaElement>,
    sort:"resumeTextarea"|"portfolioTexarea"
    height:string,
}

const Textarea = (props:IProps) => {
    const {label ,placeholder, _onChange,sort,value,height } = props;
 
  return(
    <React.Fragment>
      {label}
        {sort==="resumeTextarea"&&
        <ResumeTextarea placeholder = {placeholder} onChange={_onChange} value={value} height={height} />}
        {sort==="portfolioTexarea"&&
        <PortfolioTexarea placeholder = {placeholder} onChange={_onChange} value={value}/>}
    </React.Fragment>
  )
};
 

export default Textarea;