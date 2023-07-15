import { useState,useEffect } from "react";
import { Navigate, useParams } from "react-router";
import axios from "axios";
import { ChannelType, ResumeType, activityType, carrerType } from "../Types/ResumeType";
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
import { InputChangeEvent } from "../elements/Input";
import validateResumeForm, { ValidateResume } from "../components/common/validation/validateResumeForm";
import TechBorder from "../components/common/TechBorder";
import { validateModeAtom } from "../recoil/validateAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import { userAtom } from "../recoil/userAtom";
import Swal from "sweetalert2";

export const ShowArray = tw.div`
  bg-inherit p-1 min-w-full flex flex-wrap gap-3
`;

export default function ResumeFormPage() {
    const user = useRecoilValue(userAtom);
    const [redirect,setRedirect] = useState<boolean>(false);
    const [updatePage,setUpdatePage] = useState<boolean>(false);
    const {id:resumeId} = useParams();
    // form field
    const [name,setName] = useState<string>('');
    const [nickName,setNickName] = useState<string>('');
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
      companyName:'',
      jobDetail:"",
      mainTask:[],
      period:{
        start:"",
        end:"",
      }
    });
    
    const [activityInput,setActivityInput] = useState<activityType>({
      activityName:'',
      period:{
        start:"",
        end:"",
      },
      activity:[]
    });

    const [careerMainTask,setCareerMainTask] = useState("");
    const [mainActivity,setMainActivity] = useState("");

    // plus btn > setState 최종 form
    const [certificationArr,setCertificationArr] = useState<string[]>([])
    const [channelArr,setChannelArr] = useState<ChannelType[]>([]);
    const [technologyArr,setTechnologyArr] = useState<string[]>([]);
    const [careerArr,setCareerArr] = useState<carrerType[]>([]);
    const [activityArr,setActivityArr] = useState<activityType[]>([]);

    // error handling
    const [errorMessage,setErrorMessage] = useState<ValidateResume>({
      name:"",
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
        companyName:"",
        jobDetail:"",
        period:{
          start:"",
          end:"",
        },
        mainTask:[]
      },
      activity:{
        activityName:"",
        period:{
          start:"",
          end:"",
        },
        activity:[]
      },
      myselfSentence:"",
      reasonForCoding:"",
      coverLetter:"",
    })
    const [validateMode,setValidateMode ] = useRecoilState<boolean>(validateModeAtom)

    const onChangeInput = (event:InputChangeEvent)=>{
      if(event.target.name==="name"){
        setName(event.target.value)
      }
      if(event.target.name==="nickName"){
        setNickName(event.target.value)
      }
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
      else if (event.target.name === "companyName") {
        setCareerInput((prevState) => ({
          ...prevState,
          companyName: event.target.value
        }));
        setErrorMessage((prevState) => ({
          ...prevState,
          career: {
            ...prevState.career,
            companyName: ""
          }
        }));
      } else if (event.target.name === "jobDetail") {
        setCareerInput((prevState) => ({
          ...prevState,
          jobDetail: event.target.value
        }));
        setErrorMessage((prevState) => ({
          ...prevState,
          career: {
            ...prevState.career,
            jobDetail: ""
          }
        }));
      } else if (event.target.name === "mainTask") {
        setCareerMainTask(event.target.value);
        
      }
      
      else if (event.target.name === "career.start") {
        setCareerInput((prevState) => ({
          ...prevState,
          period: {
            ...prevState.period,
            start: event.target.value
          }
        }));
        setErrorMessage((prevState) => ({
          ...prevState,
          career: {
            ...prevState.career,
            period: {
              ...prevState.career.period,
              start: ""
            }
          }
        }));
      } else if (event.target.name === "career.end") {
        setCareerInput((prevState) => ({
          ...prevState,
          period: {
            ...prevState.period,
            end: event.target.value
          }
        }));
        setErrorMessage((prevState) => ({
          ...prevState,
          career: {
            ...prevState.career,
            period: {
              ...prevState.career.period,
              end: ""
            }
          }
        }));
      }
      else if(event.target.name==="activityName"){
        setActivityInput((prevState)=>({
          ...prevState,
          activityName:event.target.value
        }))
        setErrorMessage((prevState) => ({
          ...prevState,
          acitivity: {
            ...prevState.activity,
            activityName: ""
          }
        }));
      }else if (event.target.name === 'activityStart') {
        setActivityInput((prevState) => ({
          ...prevState,
          period: {
            ...prevState.period,
            start: event.target.value,
          },
        }));
      } else if (event.target.name === 'activityEnd') {
        setActivityInput((prevState) => ({
          ...prevState,
          period: {
            ...prevState.period,
            end: event.target.value,
          },
        }));
      } else if (event.target.name === 'mainActivity') {
        setMainActivity(event.target.value);
      }
      
      setValidateMode(false)
    }

    // 수정 시 api요청해서 form 필드 값 채우기
    useEffect(() => {
      if (!resumeId) {
        return;
      }
      setUpdatePage(true)
      axios.get('/resume/'+resumeId).then(response => {
         const resumeData = response.data as ResumeType
         // 가져온 id로 데이터 넣어주기
         if(user?.name){
           setName(user?.name)
         }if(user?.nickName){
          setNickName(user?.nickName)
         }
         setBirth(resumeData.birth)
         setPhone(resumeData.phone)
         setFinalEducation(resumeData.finalEducation)
         setMyselfSentence(resumeData.myselfSentence)
         setReasonForCoding(resumeData.reasonForCoding)
         setCoverLetter(resumeData.coverLetter)
         setCertificationArr(resumeData.certification)
         setChannelArr(resumeData.channel)
         setTechnologyArr(resumeData.technology)
         setCareerArr(resumeData.career)
         setActivityArr(resumeData.activity)
      });
    }, [resumeId]);
    
    
    // 이력서 등록 및 수정
    async function savePlace(ev:React.FormEvent) {
        ev.preventDefault();
        setValidateMode(true)
        const resumeForm:ResumeType = {
          name,nickName,birth,finalEducation,phone,
          certification:certificationArr,
          channel:channelArr,
          technology:technologyArr,
          career:careerArr,
          activity:activityArr,
          myselfSentence,reasonForCoding,coverLetter,
        };
        
        const validateForm:boolean = validateResumeForm(resumeForm,setErrorMessage)
        
        if(validateForm){
          if (resumeId) {
              // update
              const response = await axios.put('/resume/update', {
                  resumeId, ...resumeForm
              });
              if(response.status===200){
                Swal.fire("성공",'이력서를 수정하였습니다','success')
                setRedirect(true);
              }
          } else {
              // new post
              await axios.post('/resume/create', resumeForm);
              Swal.fire("성공",'이력서를 등록하였습니다','success')
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
      <div className="flex items-center justify-center py-10 font-form">
        <form className="relative resumeForm bg-resume_card_BG shadow-2xl py-12 px-16 2xl:w-3/5 lg:w-3/5 md:w-4/5 xs:w-full">
          <h1 className=" text-2xl font-bold text-center mb-16">이력서</h1>
          <div className="flex flex-col justify-center items-start gap-7">
            {/* 업데이트 페이지에만 */}
            {updatePage && 
            <div className={formItemClassRow()}>
              <Label icon={CooperationIcon} alt="이름 아이콘" sort="resumeLabel" label="이름" />
              <Input 
                placeholder="ex) 이현진"
                value={name}
                _onChange={onChangeInput}
                name="name"
                type="text"
                sort="resumeInput"
                isValid={!!errorMessage.name}
                errorMessage={''}
                validateMode={validateMode}
              />
            </div>
            }
             {updatePage && 
            <div className={formItemClassRow()}>
              <Label icon={CooperationIcon} alt="이름 아이콘" sort="resumeLabel" label="닉네임" />
              <Input 
                placeholder="ex) bookhabit"
                value={nickName}
                _onChange={onChangeInput}
                name="nickName"
                type="text"
                sort="resumeInput"
                isValid={true}
                errorMessage={''}
                validateMode={validateMode}
              />
            </div>
            }
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
            <div className={"flex gap-4 flex-wrap"}>
              <Label icon={careerIcon} alt="경력 아이콘" sort="resumeLabel" label="경력" />
              <Input 
                  placeholder="ex) 회사명"
                  value={careerInput.companyName}
                  _onChange={onChangeInput}
                  name="companyName"
                  type="text"
                  sort="resumeInput"
                  isValid={!!errorMessage.career.companyName}
                  errorMessage={errorMessage.career.companyName}
                  validateMode={validateMode}
                  />
                <Input 
                  value={careerInput.period.start}
                  _onChange={onChangeInput}
                  name="career.start"
                  type="date"
                  sort="resumeInput"
                  isValid={careerArr.length<0 && !!errorMessage.career.period.start}
                  errorMessage={errorMessage.career.period.start}
                  validateMode={validateMode}
                />
                <Input 
                  value={careerInput.period.end}
                  _onChange={onChangeInput}
                  name="career.end"
                  type="date"
                  sort="resumeInput"
                  isValid={careerArr.length<0&& !!errorMessage.career.period.end}
                  errorMessage={errorMessage.career.period.end}
                  validateMode={validateMode}
                  />
                <div className="flex items-center gap-5 w-full">
                  <Input 
                    placeholder="ex) 직무명"
                    value={careerInput.jobDetail}
                    _onChange={onChangeInput}
                    name="jobDetail"
                    type="text"
                    sort="resumeInput"
                    isValid={!!errorMessage.career.jobDetail}
                    errorMessage={errorMessage.career.jobDetail}
                    validateMode={validateMode}
                  />
                  <Input 
                    placeholder="주요직무)"
                    value={careerMainTask}
                    _onChange={onChangeInput}
                    name="mainTask"
                    type="text"
                    sort="resumeInputFull"
                    isValid={!!careerMainTask}
                    errorMessage={"입력해주세요"}
                    validateMode={validateMode}
                    />
                    <div className="w-1/10">
                      <Button
                        sort="plusButton"
                        icon={plusIcon}
                        _onClick={(event)=>{
                          event.preventDefault()
                          setCareerInput((prevState) => ({
                            ...prevState,
                            mainTask: [...prevState.mainTask, careerMainTask]
                          }));
                          setCareerMainTask(""); // 추가한 후 careerMainTask 값을 초기화합니다.
                        }}
                      />

                    </div>
                  </div>
                  {careerInput.mainTask.length > 0 && (
                    <ShowArray>
                      {careerInput.mainTask.map((task)=>(
                        <p key={task} className="border-b p-2">
                          {task}
                        </p>
                      ))}    
                    </ShowArray>
                  )}
                <Button
                  sort="portfolio"
                  text="경력추가"
                  icon={plusIcon}
                  alt="+아이콘"
                  _onClick={(event)=>{
                    event.preventDefault()
                    if(careerInput.companyName&&careerInput.jobDetail&&careerInput.period.start&&careerInput.period.end){
                      setCareerArr([careerInput,...careerArr])
                      setCareerInput((prevState)=>({
                        ...prevState,
                        commanyName:"",
                        jobDetail:"",
                        period : {
                          start:"",
                          end:"",
                        },
                        mainTask:[]
                      }))
                    }
                  }}
                />
            </div>
            {careerArr.length > 0 && (
              <ShowArray>
                {careerArr.map((career)=>(
                  <div key={career.companyName} className="border flex flex-col gap-3 p-5 rounded-lg w-full">
                    <p>회사명 : {career.companyName+' : '+career.jobDetail}</p>
                    <p>기간 : {career.period.start+' : '+career.period.end}</p>
                      {career.mainTask.map(((task,index)=>(
                      <div key={index} className="flex flex-wrap items-center">
                        <p>주요직무 {index+1} : </p>
                        <p key={task} className="p-2">
                          {task}
                        </p>
                      </div>
                    )))}
                  </div>
                ))}   
              </ShowArray>
            )}
            <div className={"flex gap-4 flex-wrap"}>
              <Label icon={CooperationIcon} alt="대외활동 아이콘" sort="resumeLabel" label="대외활동" />
              <Input
                placeholder="활동명"
                value={activityInput.activityName}
                _onChange={onChangeInput}
                name="activityName"
                type="text"
                sort="resumeInput"
                isValid={!!errorMessage.activity.activityName}
                errorMessage={errorMessage.activity.activityName}
                validateMode={validateMode}
              />
              <Input 
                value={activityInput.period.start}
                _onChange={onChangeInput}
                name="activityStart"
                type="date"
                sort="resumeInput"
                isValid={!!errorMessage.activity.period.start}
                errorMessage={errorMessage.activity.period.end}
                validateMode={validateMode}
              />
              <Input 
                value={activityInput.period.end}
                _onChange={onChangeInput}
                name="activityEnd"
                type="date"
                sort="resumeInput"
                isValid={!!errorMessage.activity.period.end}
                errorMessage={errorMessage.activity.period.end}
                validateMode={validateMode}
              />
              <div className="flex items-center gap-5 w-full">
                    <Input 
                      placeholder="주요 활동내용)"
                      value={mainActivity}
                      _onChange={onChangeInput}
                      name="mainActivity"
                      type="text"
                      sort="resumeInputFull"
                      isValid={!!mainActivity}
                      errorMessage={mainActivity}
                      validateMode={validateMode}
                      />
                      <Button
                        sort="plusButton"
                        icon={plusIcon}
                        _onClick={(event)=>{
                          event.preventDefault()
                          setActivityInput((prevState) => ({
                            ...prevState,
                            activity: [...prevState.activity, mainActivity]
                          }));
                          setMainActivity(""); // 추가한 후 careerMainTask 값을 초기화합니다.
                        }}
                      />
                    </div>
                    {activityInput.activity.length > 0 && (
                      <ShowArray>
                        {activityInput.activity.map((task)=>(
                          <p key={task} className="border-b p-2">
                            {task}
                          </p>
                        ))}    
                      </ShowArray>
                    )}
              <Button
                sort="portfolio"
                text="대외활동 추가"
                icon={plusIcon}
                alt="+아이콘"
                _onClick={(event)=>{
                  event.preventDefault()
                  if(activityInput.activityName&&activityInput.period&&activityInput.activity.length>0){
                    setActivityArr([activityInput,...activityArr])
                    setActivityInput((prevState)=>({
                      ...prevState,
                      activityName:'',
                      period:{
                        start:"",
                        end:"",
                      },
                      activity:[]
                    }))
                  }
                }}
              />
            </div>
            {activityArr.length > 0 && (
              <ShowArray>
              {activityArr.map((activity,index)=>(
                <div key={index} className="border flex flex-col gap-3 p-5 rounded-lg w-full">
                  <p>활동이름 : {activity.activityName}</p>
                  <p>활동기간 : {activity.period.start+' : '+activity.period.end}</p>
                    {activity.activity.map(((task,index)=>(
                    <div key={index} className="flex flex-wrap items-center">
                      <p>활동내역 {index+1} :</p>
                      <p key={task} className="p-2">
                        {task}
                      </p>
                    </div>
                  )))}
                </div>
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
            <Button sort="resume" text={updatePage?"수정완료":"작성완료"} _onClick={savePlace} />
          </div>
        </form>
      </div> 
    )
}