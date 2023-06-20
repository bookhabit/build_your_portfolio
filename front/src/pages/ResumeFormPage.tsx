import {  useEffect, useState } from "react";
import { Navigate, useParams } from "react-router";
import axios from "axios";
import { ResumeType, acitivityType, carrerType } from "../Types/ResumeType";
import birthIcon from "../assets/resume/birthIcon.svg"
import UniversityIcon from "../assets/resume/UniversityIcon.svg"
import phoneIcon from "../assets/resume/phoneIcon.svg"
import certificationIcon from "../assets/resume/certificationIcon.svg"
import linkIcon from "../assets/resume/linkIcon.svg"
import techIcon from "../assets/resume/techIcon.svg"
import careerIcon from "../assets/resume/careerIcon.svg"
import CooperationIcon from "../assets/resume/CooperationIcon.svg"
import { Button, Input, Label, Textarea } from "../elements";



export default function ResumeFormPage() {
    const {id:postId} = useParams();
    // form field
    const [birth,setBirth] = useState<string>('');
    const [finalEducation,setFinalEducation] = useState<string>('');
    const [phone,setPhone] = useState('');
    const [certification,setCertification] = useState<string[]>([]);
    const [channel,setChannel] = useState<string[]>([]);
    const [technology,setTechnology] = useState<string[]>([]);
    const [career,setCareer] = useState<carrerType[]>([]);
    const [acitivity,setAcitivity] = useState<acitivityType[]>([]);
    const [myselfSentence,setMyselfSentence] = useState<string>('');
    const [reasonForCoding,setReasonForCoding] = useState<string>('');
    const [coverLetter,setCoverLetter] = useState<string>('');

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
        const resume:ResumeType = {
          birth,finalEducation,phone,certification,channel,career,technology,acitivity,myselfSentence,reasonForCoding,
          coverLetter
        };
        console.log(resume);
        if (postId) {
            // update
            await axios.put('/resume/update', {
                postId, ...resume
            });
            setRedirect(true);
        } else {
            // new post
            await axios.post('/resume/create', resume);
            setRedirect(true);
        }

    }

    if (redirect) {
        return <Navigate to={'/'} />
    }

    return(
      <div className="flex items-center justify-center h-full">
        <form onSubmit={savePlace} className="relative resumeForm bg-resume_card_BG shadow-2xl py-12 px-16">
          <h1 className=" text-2xl font-bold text-center mb-16">이력서</h1>
          <div className="flex flex-col justify-center items-start gap-7">
            <div className="flex items-center">
              <Label icon={birthIcon} alt="생년원일 아이콘" sort="resumeLabel" label="생년원일" />
              {/* <Input/> */}
            </div>
            <div className="flex items-center">
              <Label icon={UniversityIcon} alt="최종학력 아이콘" sort="resumeLabel" label="최종학력" />
              {/* <Input/> */}
            </div>
            <div className="flex items-center">
              <Label icon={phoneIcon} alt="전화번호 아이콘" sort="resumeLabel" label="전화번호" />
              {/* <Input/> */}
            </div>
            <div className="flex items-center">
              <Label icon={certificationIcon} alt="자격증 아이콘" sort="resumeLabel" label="자격증" />
              {/* <Input/> */}
            </div>
            <div className="flex items-center">
              <Label icon={linkIcon} alt="링크 아이콘" sort="resumeLabel" label="Channel" />
              {/* <Input/> */}
            </div>
            <div className="flex items-center">
              <Label icon={techIcon} alt="기술스택 아이콘" sort="resumeLabel" label="기술스택" />
              {/* <Input/> */}
            </div>
            <div className="flex items-center">
              <Label icon={careerIcon} alt="경력 아이콘" sort="resumeLabel" label="경력" />
              {/* <Input/> */}
            </div>
            <div className="flex items-center">
              <Label icon={CooperationIcon} alt="대외활동 아이콘" sort="resumeLabel" label="대외활동" />
              {/* <Input/> */}
            </div>
            <div className="flex items-center">
              <Label sort="resumeLabel" label="자신을 한 문장으로 소개해보세요" />
              {/* <Textarea/> */}
            </div>
            <div className="flex items-center">
              <Label sort="resumeLabel" label="개발을 하는 이유" />
              {/* <Textarea/> */}
            </div>
            <div className="flex items-center">
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