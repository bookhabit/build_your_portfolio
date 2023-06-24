import { ChannelType, ResumeType, acitivityType, carrerType } from '../../../Types/ResumeType';

export type ValidateResume = {
    birth:string; // 1998-03-21
    finalEducation:string;
    phone:string; // 010-7607-9182
    certification:string;
    channel:ChannelType; // https://github.com/bookhabit
    technology:string;
    career:carrerType;
    acitivity:acitivityType;
    myselfSentence:string;
    reasonForCoding:string;
    coverLetter:string;
}


function validateResumeForm(resumeForm:ResumeType,setErrorMessage:React.Dispatch<React.SetStateAction<ValidateResume>>):boolean {
  // 전체 input validation
  const {birth,finalEducation,phone,myselfSentence,reasonForCoding,coverLetter,technology} = resumeForm
    console.log('유효성검사 props',resumeForm)

    const requiredMsg = "필수입력"

    // 정규식
    const birthRegex = /^\d{4}-\d{2}-\d{2}$/; // 주민번호
    const phoneRegex = /^010-\d{4}-\d{4}$/; // 핸드폰

    if(!birth){
        setErrorMessage((prevState)=>({
          ...prevState,
          birth:requiredMsg,
        }))
        return false
      }
      if(!birthRegex.test(birth)){
        setErrorMessage((prevState) => ({
          ...prevState,
          birth: "0000-00-00 으로 작성해주세요",
        }))
        return false
      }

      if(!finalEducation){
        setErrorMessage((prevState)=>({
          ...prevState,
          finalEducation:requiredMsg,
        }))
        return false
      }
      if(!phone){
        setErrorMessage((prevState)=>({
          ...prevState,
          phone:requiredMsg,
        }))
        return false
      }
      
      if(!phoneRegex.test(phone)){
        setErrorMessage((prevState) => ({
          ...prevState,
          phone: "010-0000-0000 으로 작성해주세요",
        }))
        return false
      }
      if(!technology){
        setErrorMessage((prevState)=>({
          ...prevState,
          technology:requiredMsg,
        }))
        return false
      }
      if(!myselfSentence){
        setErrorMessage((prevState)=>({
          ...prevState,
          myselfSentence:requiredMsg,
        }))
        return false
      }
      if(!reasonForCoding){
        setErrorMessage((prevState)=>({
          ...prevState,
          reasonForCoding:requiredMsg,
        }))
        return false
      }
      if(!coverLetter){
        setErrorMessage((prevState)=>({
          ...prevState,
          coverLetter:requiredMsg,
        }))
        return false
      }

      return true
    }

export default validateResumeForm;