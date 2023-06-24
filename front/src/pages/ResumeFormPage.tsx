import {  useContext, useState } from "react";
import { Navigate, useParams } from "react-router";
import axios from "axios";
import { ChannelType, ResumeType, acitivityType, carrerType } from "../Types/ResumeType";
import birthIcon from "../assets/resume/birthIcon.svg"
import UniversityIcon from "../assets/resume/UniversityIcon.svg"
import phoneIcon from "../assets/resume/phoneIcon.svg"
import certificationIcon from "../assets/resume/certificationIcon.svg"
import linkIcon from "../assets/resume/linkIcon.svg"
import techIcon from "../assets/resume/techIcon.svg"
import careerIcon from "../assets/resume/careerIcon.svg"
import CooperationIcon from "../assets/resume/CooperationIcon.svg"
import plusIcon from "../assets/resume/plusIcon.svg"
import { Button, Input, Label, Textarea } from "../elements";
import tw from "tailwind-styled-components";
import { ValidateContext, ValidateContextType } from "../Context/ValidateContext";
import { InputChangeEvent } from "../elements/Input";
import validateResumeForm, { ValidateResume } from "../components/common/validation/validateResumeForm";
import TechBorder from "../components/common/TechBorder";

export const ShowArray = tw.div`
  bg-inherit p-1 min-w-full flex flex-wrap gap-3
`;

export default function ResumeFormPage() {
    const {id:postId} = useParams();
    // form field
    const [birth,setBirth] = useState<string>('');
    const [finalEducation,setFinalEducation] = useState<string>('');
    const [phone,setPhone] = useState<string>('');
    const [myselfSentence,setMyselfSentence] = useState<string>('');
    const [reasonForCoding,setReasonForCoding] = useState<string>('');
    const [coverLetter,setCoverLetter] = useState<string>('');
    
    // 기본 input을 받아서 array에 넣어줌
    const [certificationInput,setCertificationInput] = useState<string>('')
    const [channelInput,setChannelInput] = useState<ChannelType>({
      channelName:'',
      channelURL:''
    });
    const [technologyInput,setTechnologyInput] = useState<string>('');
    const [careerInput,setCareerInput] = useState<carrerType>({
      commanyName:'',
      period:''
    });
    const [acitivityInput,setAcitivityInput] = useState<acitivityType>({
      activityName:'',
      period:''
    });

    // plus btn > setState 최종 form
    const [certificationArr,setCertificationArr] = useState<string[]>([])
    const [channelArr,setChannelArr] = useState<ChannelType[]>([]);
    const [technologyArr,setTechnologyArr] = useState<string[]>([]);
    const [careerArr,setCareerArr] = useState<carrerType[]>([]);
    const [acitivityArr,setAcitivityArr] = useState<acitivityType[]>([]);

    const [redirect,setRedirect] = useState<boolean>(false);

    // error handling
    const [errorMessage,setErrorMessage] = useState<ValidateResume>({
      birth:"", 
      finalEducation:"",
      phone:"", 
      certification:"",
      channel:{
        channelName:"",
        channelURL:""
      }, 
      technology:"",
      career:{
        commanyName:"",
        period:"",
      },
      acitivity:{
        activityName:"",
        period:"",
      },
      myselfSentence:"",
      reasonForCoding:"",
      coverLetter:"",
    })
    const { validateMode,setValidateMode } = useContext<ValidateContextType>(ValidateContext);

    const onChangeInput = (event:InputChangeEvent)=>{
      if(event.target.name==="birth"){
        setBirth(event.target.value)
        setErrorMessage((prevState) => ({
          ...prevState,
          birth: "",
        }));
      }else if(event.target.name==="finalEducation"){
        setFinalEducation(event.target.value)
        setErrorMessage((prevState) => ({
          ...prevState,
          finalEducation: "",
        }));
      }else if(event.target.name==="phone"){
        setPhone(event.target.value)
        setErrorMessage((prevState) => ({
          ...prevState,
          phone: "",
        }));
      }
      else if(event.target.name==="certificationInput"){
        setCertificationInput(event.target.value)
        setErrorMessage((prevState) => ({
          ...prevState,
          certification: "",
        }));
      }
      else if(event.target.name==="channelName"){
        setChannelInput((prevState)=>({
          ...prevState,
          channelName:event.target.value
        }))
        setErrorMessage((prevState) => ({
          ...prevState,
          channel: {
            ...prevState.channel,
            channelName: ""
          }
        }));
      }
      else if(event.target.name==="channelURL"){
        setChannelInput((prevState)=>({
          ...prevState,
          channelURL:event.target.value
        }))
        setErrorMessage((prevState) => ({
          ...prevState,
          channel: {
            ...prevState.channel,
            channelURL: ""
          }
        }));
      }
      else if(event.target.name==="technologyInput"){
        setTechnologyInput(event.target.value)
        setErrorMessage((prevState) => ({
          ...prevState,
          technology: "",
        }));
      }
      else if(event.target.name==="commanyName"){
        setCareerInput((prevState)=>({
          ...prevState,
          commanyName:event.target.value
        }))
        setErrorMessage((prevState) => ({
          ...prevState,
          career: {
            ...prevState.career,
            commanyName: ""
          }
        }));
      }
      else if(event.target.name==="careerInput.period"){
        setCareerInput((prevState)=>({
          ...prevState,
          period:event.target.value
        }))
        setErrorMessage((prevState) => ({
          ...prevState,
          career: {
            ...prevState.career,
            period: ""
          }
        }));
      }
      else if(event.target.name==="activityName"){
        setAcitivityInput((prevState)=>({
          ...prevState,
          activityName:event.target.value
        }))
        setErrorMessage((prevState) => ({
          ...prevState,
          acitivity: {
            ...prevState.acitivity,
            activityName: ""
          }
        }));
      }
      else if(event.target.name==="acitivityInput.period"){
        setAcitivityInput((prevState)=>({
          ...prevState,
          period:event.target.value
        }))
        setErrorMessage((prevState) => ({
          ...prevState,
          acitivity: {
            ...prevState.acitivity,
            period: ""
          }
        }));
      }
      setValidateMode(false)
    }

    // 수정 시 api요청해서 form 필드 값 채우기
    // useEffect(() => {
    //   if (!postId) {
    //     return;
    //   }
    //   axios.get('/resume/'+postId).then(response => {
    //      const {data} = response;
    //      setTitle(data.title);
    //      setAddedLinkPhotos(data.photos);
    //      setDescription(data.description);
    //   });
    // }, [postId]);

    
    // 이력서 등록 및 수정
    async function savePlace(ev:React.FormEvent) {
        ev.preventDefault();
        setValidateMode(true)
        const resumeForm:ResumeType = {
          birth,finalEducation,phone,
          certification:certificationArr,
          channel:channelArr,
          technology:technologyArr,
          career:careerArr,
          acitivity:acitivityArr,
          myselfSentence,reasonForCoding,coverLetter,
        };
        const validateForm:boolean = validateResumeForm(resumeForm,setErrorMessage)
        
        if(validateForm){
          if (postId) {
              // update
              await axios.put('/resume/update', {
                  postId, ...resumeForm
              });
              setRedirect(true);
          } else {
              // new post
              await axios.post('/resume/create', resumeForm);
              alert('이력서 등록 완료')
              setRedirect(true);
          }
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }

    function formItemClassRow():string{
      return "flex items-center gap-4 "
    }

    function formItemClassCol():string{
      return "flex flex-col gap-2 w-full"
    }

    return(
      <div className="flex items-center justify-center py-10">
        <form className="relative resumeForm bg-resume_card_BG shadow-2xl py-12 px-16 2xl:w-3/5 lg:w-3/5 md:w-4/5 xs:w-full">
          <h1 className=" text-2xl font-bold text-center mb-16">이력서</h1>
          <div className="flex flex-col justify-center items-start gap-7">
            <div className={formItemClassRow()}>
              <Label icon={birthIcon} alt="생년원일 아이콘" sort="resumeLabel" label="생년원일" />
              <Input 
                placeholder="ex) 1998-06-19"
                value={birth}
                _onChange={onChangeInput}
                name="birth"
                type="text"
                sort="resumeInput"
                isValid={!!errorMessage.birth}
                errorMessage={errorMessage.birth}
                validateMode={validateMode}
              />
            </div>
            <div className={formItemClassRow()}>
              <Label icon={UniversityIcon} alt="최종학력 아이콘" sort="resumeLabel" label="최종학력" />
              <Input 
                placeholder="ex) 한서대학교"
                value={finalEducation}
                _onChange={onChangeInput}
                name="finalEducation"
                type="text"
                sort="resumeInput"
                isValid={!!errorMessage.finalEducation}
                errorMessage={errorMessage.finalEducation}
                validateMode={validateMode}
              />
            </div>
            <div className={formItemClassRow()}>
              <Label icon={phoneIcon} alt="전화번호 아이콘" sort="resumeLabel" label="전화번호" />
              <Input 
                placeholder="ex) 010-7607-9182"
                value={phone}
                _onChange={onChangeInput}
                name="phone"
                type="text"
                sort="resumeInput"
                isValid={!!errorMessage.phone}
                errorMessage={errorMessage.phone}
                validateMode={validateMode}
              />
            </div>
            <div className={formItemClassRow()}>
              <Label icon={certificationIcon} alt="자격증 아이콘" sort="resumeLabel" label="자격증" />
              <Input 
                placeholder="ex) 정보처리기사"
                value={certificationInput}
                _onChange={onChangeInput}
                name="certificationInput"
                type="text"
                sort="resumeInput"
                isValid={!!errorMessage.certification}
                errorMessage={errorMessage.certification}
                validateMode={validateMode}
              />
              <Button
                sort="plusButton"
                icon={plusIcon}
                alt="+아이콘"
                _onClick={(event)=>{
                  event.preventDefault()
                  if(certificationInput){
                    setCertificationInput("")
                    setCertificationArr([certificationInput,...certificationArr])
                  }
                }}
              />
            </div>
            {certificationArr.length > 0 && (
              <ShowArray>
              {certificationArr.map((certification)=>(
                <span key={certification}>{certification+' '}</span>    
              ))}    
              </ShowArray>
            )}
            <div className={formItemClassRow()}>
              <Label icon={linkIcon} alt="링크 아이콘" sort="resumeLabel" label="Channel" />
              <Input 
                placeholder="ex) 채널명"
                value={channelInput.channelName}
                _onChange={onChangeInput}
                name="channelName"
                type="text"
                sort="resumeInput"
                isValid={!!errorMessage.channel.channelName}
                errorMessage={errorMessage.channel.channelName}
                validateMode={validateMode}
              />
              <Input 
                placeholder="ex) https://github.com/bookhabit"
                value={channelInput.channelURL}
                _onChange={onChangeInput}
                name="channelURL"
                type="text"
                sort="resumeInput"
                isValid={!!errorMessage.channel.channelURL}
                errorMessage={errorMessage.channel.channelURL}
                validateMode={validateMode}
              />
              <Button
                sort="plusButton"
                icon={plusIcon}
                alt="+아이콘"
                _onClick={(event)=>{
                  event.preventDefault()
                  if(channelInput.channelName && channelInput.channelURL){
                    setChannelInput((prevState)=>({
                      ...prevState,
                      channelName:"",
                      channelURL:""
                    }))
                    setChannelArr([channelInput,...channelArr])
                  }
                }}
              />
            </div>
            {channelArr.length > 0 && (
              <ShowArray>
                {channelArr.map((channel)=>(
                  <p key={channel.channelName}>
                    {channel.channelName+' : '+channel.channelURL}
                  </p>
                ))}    
              </ShowArray>
            )}
            <div className={formItemClassRow()}>
              <Label icon={techIcon} alt="기술스택 아이콘" sort="resumeLabel" label="기술스택" />
              <Input 
                placeholder="ex) React.js "
                value={technologyInput}
                _onChange={onChangeInput}
                name="technologyInput"
                type="text"
                sort="resumeInput"
                isValid={!!errorMessage.technology}
                errorMessage={errorMessage.technology}
                validateMode={validateMode}
              />
              <Button
                sort="plusButton"
                icon={plusIcon}
                alt="+아이콘"
                _onClick={(event)=>{
                  event.preventDefault()
                  if(technologyInput){
                    setTechnologyInput("")
                    setTechnologyArr([technologyInput,...technologyArr])
                  }
                }}
              />
            </div>
            {technologyArr.length > 0 && (
              <ShowArray>
                {technologyArr.map((tech)=>(
                  <TechBorder key={tech} techName={tech} sort="resume" />
                ))}    
              </ShowArray>
            )}
            <div className={formItemClassRow()}>
              <Label icon={careerIcon} alt="경력 아이콘" sort="resumeLabel" label="경력" />
              <Input 
                placeholder="ex) 회사명"
                value={careerInput.commanyName}
                _onChange={onChangeInput}
                name="commanyName"
                type="text"
                sort="resumeInput"
                isValid={!!errorMessage.career.commanyName}
                errorMessage={errorMessage.career.commanyName}
                validateMode={validateMode}
              />
              <Input 
                placeholder="ex) 근무기간 (연,월 단위)"
                value={careerInput.period}
                _onChange={(event)=>setCareerInput((prevState)=>({
                  ...prevState,
                  period:event.target.value
                }))}
                name="careerInput.period"
                type="text"
                sort="resumeInput"
                isValid={!!errorMessage.career.period}
                errorMessage={errorMessage.career.period}
                validateMode={validateMode}
              />
              <Button
                sort="plusButton"
                icon={plusIcon}
                alt="+아이콘"
                _onClick={(event)=>{
                  event.preventDefault()
                  if(careerInput.commanyName&&careerInput.period){
                    setCareerInput((prevState)=>({
                      ...prevState,
                      commanyName:"",
                      period:""
                    }))
                    setCareerArr([careerInput,...careerArr])
                  }
                }}
              />
            </div>
            {careerArr.length > 0 && (
              <ShowArray>
                {careerArr.map((career)=>(
                  <p key={career.commanyName}>
                    {career.commanyName+' : '+career.period}
                  </p>
                ))}    
              </ShowArray>
            )}
            <div className={formItemClassRow()}>
              <Label icon={CooperationIcon} alt="대외활동 아이콘" sort="resumeLabel" label="대외활동" />
              <Input 
                placeholder="ex) 활동명"
                value={acitivityInput.activityName}
                _onChange={onChangeInput}
                name="activityName"
                type="text"
                sort="resumeInput"
                isValid={!!errorMessage.acitivity.activityName}
                errorMessage={errorMessage.acitivity.activityName}
                validateMode={validateMode}
              />
              <Input 
                placeholder="ex) 활동기간 (연,월 단위)"
                value={acitivityInput.period}
                _onChange={onChangeInput}
                name="acitivityInput.period"
                type="text"
                sort="resumeInput"
                isValid={!!errorMessage.acitivity.period}
                errorMessage={errorMessage.acitivity.period}
                validateMode={validateMode}
              />
              <Button
                sort="plusButton"
                icon={plusIcon}
                alt="+아이콘"
                _onClick={(event)=>{
                  event.preventDefault()
                  if(acitivityInput.activityName&&acitivityInput.period){
                    setAcitivityInput((prevState)=>({
                      ...prevState,
                      activityName:"",
                      period:""
                    }))
                    setAcitivityArr([acitivityInput,...acitivityArr])
                  }
                }}
              />
            </div>
            {acitivityArr.length > 0 && (
              <ShowArray>
                {acitivityArr.map((activity)=>(
                  <p key={activity.activityName}>
                    {activity.activityName+' : '+activity.period}
                  </p>
                ))}    
              </ShowArray>
            )}
            <div className={formItemClassCol()}>
              <Label sort="resumeLabel" label="자신을 한 문장으로 소개해보세요" />
              <Textarea 
                sort="resumeTextarea" 
                value={myselfSentence}
                name="myselfSentence"
                _onChange={(event)=>{
                  setMyselfSentence(event.target.value)
                  setErrorMessage((prevState) => ({
                    ...prevState,
                    myselfSentence:""
                  }));
                }} 
                height="h-12"
                isValid={!!errorMessage.myselfSentence}
                errorMessage={errorMessage.myselfSentence}
                validateMode={validateMode}
                />
            </div>
            <div className={formItemClassCol()}>
              <Label sort="resumeLabel" label="개발을 하는 이유" />
              <Textarea 
                sort="resumeTextarea" 
                value={reasonForCoding}
                name="reasonForCoding"
                _onChange={(event)=>{
                  setReasonForCoding(event.target.value)
                  setErrorMessage((prevState) => ({
                    ...prevState,
                    reasonForCoding:""
                  }));
                }} 
                height="h-12"
                isValid={!!errorMessage.reasonForCoding}
                errorMessage={errorMessage.reasonForCoding}
                validateMode={validateMode}
                />
            </div>
            <div className={formItemClassCol()}>
              <Label sort="resumeLabel" label="자기소개" />
              <Textarea 
                sort="resumeTextarea" 
                value={coverLetter}
                name="coverLetter"
                _onChange={(event)=>{
                  setCoverLetter(event.target.value)
                  setErrorMessage((prevState) => ({
                    ...prevState,
                    coverLetter:""
                  }));
                }} 
                height="h-24"
                isValid={!!errorMessage.coverLetter}
                errorMessage={errorMessage.coverLetter}
                validateMode={validateMode}
                />
            </div>
          </div>
          <div className="mt-8 flex justify-end ">
            <Button sort="resume" text="작성완료" _onClick={savePlace} />
          </div>
        </form>
      </div> 
    )
}