import {  useEffect, useState } from "react";
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

export const ShowArray = tw.div`
  bg-inherit border-b border-black p-1 min-w-full
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

    const [redirect,setRedirect] = useState(false);


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

    // 숙소 등록 및 수정
    async function savePlace(ev:React.FormEvent) {
        ev.preventDefault();
        // const resume:ResumeType = {
        //   birth,finalEducation,phone,myselfSentence,reasonForCoding,
        //   coverLetter
        // };
        // console.log(resume);
        // if (postId) {
        //     // update
        //     await axios.put('/resume/update', {
        //         postId, ...resume
        //     });
        //     setRedirect(true);
        // } else {
        //     // new post
        //     await axios.post('/resume/create', resume);
        //     setRedirect(true);
        // }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }

    function formItemClass():string{
      return "flex items-center gap-4"
    }

    return(
      <div className="flex items-center justify-center py-10">
        <form onSubmit={savePlace} className="relative resumeForm bg-resume_card_BG shadow-2xl py-12 px-16">
          <h1 className=" text-2xl font-bold text-center mb-16">이력서</h1>
          <div className="flex flex-col justify-center items-start gap-7">
            <div className={formItemClass()}>
              <Label icon={birthIcon} alt="생년원일 아이콘" sort="resumeLabel" label="생년원일" />
              <Input 
                placeholder="ex) 1998-06-19"
                value={birth}
                _onChange={(event)=>setBirth(event.target.value)}
                name="birt"
                type="text"
                sort="resumeInput"
                isValid={false}
                errorMessage="에러"
                validateMode={false}
              />
            </div>
            <div className={formItemClass()}>
              <Label icon={UniversityIcon} alt="최종학력 아이콘" sort="resumeLabel" label="최종학력" />
              <Input 
                placeholder="ex) 한서대학교"
                value={finalEducation}
                _onChange={(event)=>setFinalEducation(event.target.value)}
                name="finalEducation"
                type="text"
                sort="resumeInput"
                isValid={false}
                errorMessage="에러"
                validateMode={false}
              />
            </div>
            <div className={formItemClass()}>
              <Label icon={phoneIcon} alt="전화번호 아이콘" sort="resumeLabel" label="전화번호" />
              <Input 
                placeholder="ex) 010-7607-9182"
                value={phone}
                _onChange={(event)=>setPhone(event.target.value)}
                name="phone"
                type="text"
                sort="resumeInput"
                isValid={false}
                errorMessage="에러"
                validateMode={false}
              />
            </div>
            <div className={formItemClass()}>
              <Label icon={certificationIcon} alt="자격증 아이콘" sort="resumeLabel" label="자격증" />
              <Input 
                placeholder="ex) 정보처리기사"
                value={certificationInput}
                _onChange={(event)=>setCertificationInput(event.target.value)}
                name="certificationInput"
                type="text"
                sort="resumeInput"
                isValid={false}
                errorMessage="에러"
                validateMode={false}
              />
              <Button
                sort="plusButton"
                icon={plusIcon}
                alt="+아이콘"
                _onClick={()=>{
                  setCertificationInput("")
                  setCertificationArr([certificationInput,...certificationArr])
                }}
              />
            </div>
            {certificationArr.length > 0 && (
              <ShowArray>
              {certificationArr.map((certification)=>(
                <span>{certification+' '}</span>    
              ))}    
              </ShowArray>
            )}
            <div className={formItemClass()}>
              <Label icon={linkIcon} alt="링크 아이콘" sort="resumeLabel" label="Channel" />
              <Input 
                placeholder="ex) 채널명"
                value={channelInput.channelName}
                _onChange={(event)=>setChannelInput((prevState)=>({
                  ...prevState,
                  channelName:event.target.value
                }))}
                name="channelName"
                type="text"
                sort="resumeInput"
                isValid={false}
                errorMessage="에러"
                validateMode={false}
              />
              <Input 
                placeholder="ex) https://github.com/bookhabit"
                value={channelInput.channelURL}
                _onChange={(event)=>setChannelInput((prevState)=>({
                  ...prevState,
                  channelURL:event.target.value
                }))}
                name="channelName"
                type="text"
                sort="resumeInput"
                isValid={false}
                errorMessage="에러"
                validateMode={false}
              />
              <Button
                sort="plusButton"
                icon={plusIcon}
                alt="+아이콘"
                _onClick={()=>{
                  setChannelInput((prevState)=>({
                    ...prevState,
                    channelName:"",
                    channelURL:""
                  }))
                  setChannelArr([channelInput,...channelArr])
                }}
              />
            </div>
            {channelArr.length > 0 && (
              <ShowArray>
                {channelArr.map((channel)=>(
                  <p>
                    {channel.channelName+' : '+channel.channelURL}
                  </p>
                ))}    
              </ShowArray>
            )}
            <div className={formItemClass()}>
              <Label icon={techIcon} alt="기술스택 아이콘" sort="resumeLabel" label="기술스택" />
              <Input 
                placeholder="ex) React.js "
                value={technologyInput}
                _onChange={(event)=>setTechnologyInput(event.target.value)}
                name="technologyInput"
                type="text"
                sort="resumeInput"
                isValid={false}
                errorMessage="에러"
                validateMode={false}
              />
              <Button
                sort="plusButton"
                icon={plusIcon}
                alt="+아이콘"
                _onClick={()=>{
                  setTechnologyInput("")
                  setTechnologyArr([technologyInput,...technologyArr])
                }}
              />
            </div>
            {technologyArr.length > 0 && (
              <ShowArray>
                {technologyArr.map((tech)=>(
                  <span>{tech+' '}</span>    
                ))}    
              </ShowArray>
            )}
            <div className={formItemClass()}>
              <Label icon={careerIcon} alt="경력 아이콘" sort="resumeLabel" label="경력" />
              <Input 
                placeholder="ex) 회사명"
                value={careerInput.commanyName}
                _onChange={(event)=>setCareerInput((prevState)=>({
                  ...prevState,
                  commanyName:event.target.value
                }))}
                name="commanyName"
                type="text"
                sort="resumeInput"
                isValid={false}
                errorMessage="에러"
                validateMode={false}
              />
              <Input 
                placeholder="ex) 근무기간 (연,월 단위)"
                value={careerInput.period}
                _onChange={(event)=>setCareerInput((prevState)=>({
                  ...prevState,
                  period:event.target.value
                }))}
                name="period"
                type="text"
                sort="resumeInput"
                isValid={false}
                errorMessage="에러"
                validateMode={false}
              />
              <Button
                sort="plusButton"
                icon={plusIcon}
                alt="+아이콘"
                _onClick={()=>{
                  setCareerInput((prevState)=>({
                    ...prevState,
                    commanyName:"",
                    period:""
                  }))
                  setCareerArr([careerInput,...careerArr])
                }}
              />
            </div>
            {careerArr.length > 0 && (
              <ShowArray>
                {careerArr.map((career)=>(
                  <p>
                    {career.commanyName+' : '+career.period}
                  </p>
                ))}    
              </ShowArray>
            )}
            <div className={formItemClass()}>
              <Label icon={CooperationIcon} alt="대외활동 아이콘" sort="resumeLabel" label="대외활동" />
              <Input 
                placeholder="ex) 활동명"
                value={acitivityInput.activityName}
                _onChange={(event)=>setAcitivityInput((prevState)=>({
                  ...prevState,
                  activityName:event.target.value
                }))}
                name="activityName"
                type="text"
                sort="resumeInput"
                isValid={false}
                errorMessage="에러"
                validateMode={false}
              />
              <Input 
                placeholder="ex) 활동기간 (연,월 단위)"
                value={acitivityInput.period}
                _onChange={(event)=>setAcitivityInput((prevState)=>({
                  ...prevState,
                  period:event.target.value
                }))}
                name="period"
                type="text"
                sort="resumeInput"
                isValid={false}
                errorMessage="에러"
                validateMode={false}
              />
              <Button
                sort="plusButton"
                icon={plusIcon}
                alt="+아이콘"
                _onClick={()=>{
                  setAcitivityInput((prevState)=>({
                    ...prevState,
                    activityName:"",
                    period:""
                  }))
                  setAcitivityArr([acitivityInput,...acitivityArr])
                }}
              />
            </div>
            {acitivityArr.length > 0 && (
              <ShowArray>
                {acitivityArr.map((activity)=>(
                  <p>
                    {activity.activityName+' : '+activity.period}
                  </p>
                ))}    
              </ShowArray>
            )}
            <div className={formItemClass()}>
              <Label sort="resumeLabel" label="자신을 한 문장으로 소개해보세요" />
              {/* <Textarea/> */}
            </div>
            <div className={formItemClass()}>
              <Label sort="resumeLabel" label="개발을 하는 이유" />
              {/* <Textarea/> */}
            </div>
            <div className={formItemClass()}>
              <Label sort="resumeLabel" label="자기소개" />
              {/* <Textarea/> */}
            </div>
          </div>
          <div className="absolute w-28 bottom-6 right-8">
            <Button sort="resume" text="작성완료" />
          </div>
        </form>
      </div> 
    )
}