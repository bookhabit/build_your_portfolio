import { ResumeType } from '../Types/ResumeType';
import { Label } from '../elements';
import birthIcon from "../assets/resume/birthIcon.svg"
import UniversityIcon from "../assets/resume/UniversityIcon.svg"
import phoneIcon from "../assets/resume/phoneIcon.svg"
import certificationIcon from "../assets/resume/certificationIcon.svg"
import linkIcon from "../assets/resume/linkIcon.svg"
import techIcon from "../assets/resume/techIcon.svg"
import careerIcon from "../assets/resume/careerIcon.svg"
import CooperationIcon from "../assets/resume/CooperationIcon.svg"
import { ShowArray } from '../pages/ResumeFormPage';
import TechBorder from './common/TechBorder';

const ShowModal = ({data,sort}:{data:ResumeType|string|undefined|null,sort:"coverLetter"|"resume"}) => {
    let resumeData;
    let coverLetter;
    if(sort==="resume"){
        resumeData = data as ResumeType;
    }
    if(sort==="coverLetter"){
        coverLetter = data as string;
    }
    function formItemClassRow():string{
        return "flex items-center gap-4 flex-wrap"
    }
    function dataArrayline():string{
        return "w-full flex flex-wrap ml-10"
    }
    function itemFontSize():string{
        return "text-base font-bold"
    }
    return (
        <div className={`relative bg-resume_card_BG shadow-2xl 2xl:w-3/5 lg:w-3/5 md:w-4/5 xs:w-full flex flex-col p-24 
        items-center justify-center scrollable-container h-96 ${sort==="resume" && "min-h-full"}`}>
            <h1 className=" text-2xl text-black font-bold text-center mb-16">{sort==="resume"?"이력서":"자기소개서"}</h1>
            {
                sort==="resume" &&
                    <div className=' w-full min-h-full p-5 rounded-md flex flex-col gap-6'>
                        <div className={formItemClassRow()}>
                            <Label icon={birthIcon} alt="생년원일 아이콘" sort="resumeLabel" label="생년원일" />
                            <p className={itemFontSize()}>{resumeData?.birth}</p>
                        </div>
                        <div className={formItemClassRow()}>
                            <Label icon={UniversityIcon} alt="최종학력 아이콘" sort="resumeLabel" label="최종학력" />
                            <p className={itemFontSize()}>{resumeData?.finalEducation}</p>
                        </div>
                        <div className={formItemClassRow()}>
                            <Label icon={phoneIcon} alt="전화번호 아이콘" sort="resumeLabel" label="전화번호" />
                            <p className={itemFontSize()}>{resumeData?.phone}</p>
                        </div>
                        <div className={formItemClassRow()}>
                            <Label icon={certificationIcon} alt="자격증 아이콘" sort="resumeLabel" label="자격증" />
                        </div>
                        <div className={dataArrayline()}>
                            {resumeData?.certification.map((certi)=>(
                                <ShowArray>
                                    <TechBorder techName={certi} sort="resume"/>
                                </ShowArray>
                            ))}
                        </div>
                        <div className={formItemClassRow()}>
                            <Label icon={linkIcon} alt="링크 아이콘" sort="resumeLabel" label="Channel" />
                        </div>
                        <div className={dataArrayline()}>
                            {resumeData?.channel.map((channel)=>(
                                <p key={channel.channelName}>
                                  {channel.channelName+' : '+channel.channelURL}
                                </p>
                            ))}
                        </div>
                        <div className={formItemClassRow()}>
                            <Label icon={techIcon} alt="기술스택 아이콘" sort="resumeLabel" label="기술스택" />
                        </div>
                        <div className={dataArrayline()}>
                            {resumeData?.technology.map((certi)=>(
                                    <TechBorder techName={certi} sort="resume"/>
                            ))}
                        </div>
                        <div className={formItemClassRow()}>
                            <Label icon={careerIcon} alt="경력 아이콘" sort="resumeLabel" label="경력" />
                        </div>
                        <div className={dataArrayline()}>
                        {resumeData?.career.map((career)=>(
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
                        </div>
                        <div className={formItemClassRow()}>
                            <Label icon={CooperationIcon} alt="대외활동 아이콘" sort="resumeLabel" label="대외활동" />
                        </div>
                        <div className={dataArrayline()}>
                        {resumeData?.activity.map((activity,index)=>(
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
                        </div>
                    </div>
            }
            {
                sort==="coverLetter" &&
                <div className='border border-gray-400 w-full min-h-full p-5 rounded-md'>
                    {coverLetter}
                </div>
            }
        </div>
    );
};

export default ShowModal;