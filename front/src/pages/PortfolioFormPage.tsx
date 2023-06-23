import {  ChangeEvent, useEffect, useState } from "react";
import PhotosUploader from "../components/testRestAPI/PhotosUploader";
import { Navigate, useParams } from "react-router";
import axios from "axios";
import { Button, Input, Label, Textarea } from "../elements";
import { InputChangeEvent } from "../elements/Input";
import { CategoryType, DemoLinkType, DevelopPeriodType, SelectedUI } from "../Types/PortfolioType";
import { ShowArray } from "./ResumeFormPage";


type ValidatePortfolio = {
    title:string; 
    purpose:string;
    introduce:string;
    process:string;
    learned:string;
    photos:string;
    usedTechnology:string;
    developPeriod:{
      start:string, // 2023-01-25 형식
      end:string, // 2023-04-25
   };
    demoLink:DemoLinkType;
    category:string;
    selectedUI:string;
}

export default function PortfolioFormPage() {
    const {id:postId} = useParams();
    const [title,setTitle] = useState<string>('');
    const [purpose,setPurpose] = useState<string>('');
    const [introduce,setIntroduce] = useState<string>('');
    const [process,setProcess] = useState<string>('');
    const [learned,setLearned] = useState<string>('');
    const [addedLinkPhotos,setAddedLinkPhotos] = useState<string[]>([]);
    const [usedTechnologyInput,setUsedTechnologyInput] = useState<string>('');
    const [usedTechnologyArr,setUsedTechnologyArr] = useState<string[]>([]);
    const [developPeriod,setDevelopPeriod] = useState<DevelopPeriodType>({
      start:"",
      end:"",
    });
    const [demoLink,setDemoLink] = useState<DemoLinkType>({
      projectURL:"",
      githubURL:"",
      designURL:"",
      documentURL:"",
    });
    // radio
    const [category,setCategory] = useState<CategoryType>("clone");
    const [selectedUI,setSelectedUI] = useState<SelectedUI>("A");
    
    console.log(usedTechnologyInput,developPeriod,demoLink,category,selectedUI)

    // error handling
    const [errorMessage,setErrorMessage] = useState<ValidatePortfolio>({
      title:"", 
      purpose:"",
      introduce:"", 
      process:"",
      learned:"",
      photos:"",
      usedTechnology:"",
      developPeriod:{
        start:"",
        end:"",
      },
      demoLink:{
        projectURL:"",
        githubURL:"",
        designURL:"",
        documentURL:"",
      },
      category:"",
      selectedUI:"",
    })

    const [redirect,setRedirect] = useState(false);
    
    // onChange
    const onChangeInput = (event:InputChangeEvent)=>{
      if(event.target.name==="title"){
        setTitle(event.target.value)
      }else if(event.target.name==="usedTechnologyInput"){
        setUsedTechnologyInput(event.target.value)
      }else if(event.target.name==="developPeriodStart"){
        setDevelopPeriod((prevState)=>({
          ...prevState,
          start:event.target.value
        }))
      }else if(event.target.name==="developPeriodEnd"){
        setDevelopPeriod((prevState)=>({
          ...prevState,
          end:event.target.value
        }))
      }else if(event.target.name==="projectURL"){
        setDemoLink((prevState)=>({
          ...prevState,
          projectURL:event.target.value
        }))
      }else if(event.target.name==="githubURL"){
        setDemoLink((prevState)=>({
          ...prevState,
          githubURL:event.target.value
        }))
      }else if(event.target.name==="designURL"){
        setDemoLink((prevState)=>({
          ...prevState,
          designURL:event.target.value
        }))
      }else if(event.target.name==="documentURL"){
        setDemoLink((prevState)=>({
          ...prevState,
          documentURL:event.target.value
        }))
      }else if(event.target.name==="category"){
        setCategory(event.target.value as CategoryType);
      }else if(event.target.name==="selectedUI"){
        setSelectedUI(event.target.value as SelectedUI);
      }
      
      
    }
    const onChangeTextarea = (event:ChangeEvent<HTMLTextAreaElement>)=>{
      if(event.target.name==="purpose"){
        setPurpose(event.target.value)
      }else if(event.target.name==="introduce"){
        setIntroduce(event.target.value)
      }else if(event.target.name==="process"){
        setProcess(event.target.value)
      }else if(event.target.name==="learned"){
        setLearned(event.target.value)
      }
    }

    // 수정페이지에서 데이터 채워넣기
    // useEffect(() => {
    //   if (!postId) {
    //     return;
    //   }
    //   axios.get('/post/'+postId).then(response => {
    //      const {data} = response;
    //      setTitle(data.title);
    //      setAddedLinkPhotos(data.photos);
         
    //   });
    // }, [postId]);

    

    // 포트폴리오 등록 및 수정
    async function savePlace(ev:React.FormEvent) {
        ev.preventDefault();
        const post = {
            title, addedLinkPhotos
        };
        // if (postId) {
        //     // update
        //     await axios.put('/post/update', {
        //         postId, ...post
        //     });
        //     setRedirect(true);
        // } else {
        //     // new post
        //     await axios.post('/post/create', post);
        //     setRedirect(true);
        // }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }

    function formItemTextareaClass():string{
      return "flex flex-col mt-6 gap-3"
    }

    return(
      <div className="flex items-center justify-center py-12 px-14">
        <form onSubmit={savePlace} className="portfolioForm">
            <div className="text-center py-4">
              <Input 
                type="text" 
                placeholder="프로젝트 제목" 
                sort="portfolioInput"
                value={title}
                name="title"
                _onChange={onChangeInput}
                isValid={false}
                errorMessage="에러"
                validateMode={false}
              />
            </div>
            <div className={formItemTextareaClass()}>
              <Label label="프로젝트 목적 / 기획" sort="portfolioLabel"/>
              <Textarea
                value={purpose}
                name="purpose"
                _onChange={onChangeTextarea}
                sort="portfolioTexarea"
                height="h-20"
                isValid={false}
                errorMessage="에러"
                validateMode={false}
              />
            </div>
            <div className={formItemTextareaClass()}>
              <Label label="프로젝트 설명 / 소개" sort="portfolioLabel"/>
              <Textarea
                value={introduce}
                name="introduce"
                _onChange={onChangeTextarea}
                sort="portfolioTexarea"
                height="h-20"
                isValid={false}
                errorMessage="에러"
                validateMode={false}
              />
            </div>
            <div className={formItemTextareaClass()}>
              <Label label="개발과정 : 프로젝트를 진행하면서 발생한 문제 / 문제를 해결한 과정" sort="portfolioLabel"/>
              <Textarea
                value={process}
                name="process"
                _onChange={onChangeTextarea}
                sort="portfolioTexarea"
                height="h-32"
                isValid={false}
                errorMessage="에러"
                validateMode={false}
              />
            </div>
            <div className={formItemTextareaClass()}>
              <Label label="배운점 / 느낀점" sort="portfolioLabel"/>
              <Textarea
                value={learned}
                name="learned"
                _onChange={onChangeTextarea}
                sort="portfolioTexarea"
                height="h-32"
                isValid={false}
                errorMessage="에러"
                validateMode={false}
              />
            </div>
            <div className={formItemTextareaClass()}>
              <Label label="프로젝트 이미지 첨부" sort="portfolioLabel"/>
              <PhotosUploader
                addedPhotos={addedLinkPhotos} 
                onChange={setAddedLinkPhotos} />
            </div>
            <div className={formItemTextareaClass()}>
              <Label label="사용한 기술스택" sort="portfolioLabel"/>
              <input type="text" name="usedTechnologyInput" value={usedTechnologyInput} onChange={onChangeInput} />
              <button>추가</button>
            </div>
            {usedTechnologyArr.length > 0 && (
              <ShowArray>
                {usedTechnologyArr.map((tech)=>(
                  <span key={tech}>{tech+' '}</span>    
                ))}    
              </ShowArray>
            )}
            <div className={formItemTextareaClass()}>
              <Label label="개발기간" sort="portfolioLabel"/>
              <input type="date" name="developPeriodStart" value={developPeriod.start} onChange={onChangeInput}/>
              <input type="date" name="developPeriodEnd" value={developPeriod.end} onChange={onChangeInput}/>
            </div>
            <div className={formItemTextareaClass()}>
              <Label label="DEMO Link (선택)" sort="portfolioLabel"/>
              <div>
                <label>프로젝트 URL:</label>
                <input type="text" name="projectURL" value={demoLink.projectURL} onChange={onChangeInput}/>
              </div>
              <div>
                <label>깃허브 URL:</label>
                <input type="text" name="githubURL" value={demoLink.githubURL} onChange={onChangeInput}/>
              </div>
              <div>
                <label>디자인 URL:</label>
                <input type="text" name="designURL" value={demoLink.designURL} onChange={onChangeInput}/>
              </div>
              <div>
                <label>문서 URL:</label>
                <input type="text" name="documentURL" value={demoLink.documentURL} onChange={onChangeInput}/>
              </div>
            </div>
            <div className={formItemTextareaClass()}>
              <Label label="카테고리" sort="portfolioLabel"/>
              <label>
                <input
                  type="radio"
                  value="clone"
                  name="category"
                  checked={category === "clone"}
                  onChange={onChangeInput}
                />
                클론코딩
              </label>

              <label>
                <input
                  type="radio"
                  value="individual"
                  name="category"
                  checked={category === "individual"}
                  onChange={onChangeInput}
                />
                개인 프로젝트
              </label>

              <label>
                <input
                  type="radio"
                  value="Cooperation"
                  name="category"
                  checked={category === "Cooperation"}
                  onChange={onChangeInput}
                />
                협업 프로젝트
              </label>
            </div>
            <div className={formItemTextareaClass()}>
              <Label label="포트폴리오 UI" sort="portfolioLabel"/>
              <label>
                <input
                  type="radio"
                  value="A"
                  name="selectedUI"
                  checked={selectedUI === "A"}
                  onChange={onChangeInput}
                />
                A
              </label>

              <label>
                <input
                  type="radio"
                  value="B"
                  name="selectedUI"
                  checked={selectedUI === "B"}
                  onChange={onChangeInput}
                />
                B
              </label>

              <label>
                <input
                  type="radio"
                  value="C"
                  name="selectedUI"
                  checked={selectedUI === "C"}
                  onChange={onChangeInput}
                />
                C
              </label>
            </div>
            <div className="mt-8 flex justify-end ">
              <Button sort="portfolio" text="작성완료" _onClick={savePlace} />
            </div>
        </form>
      </div>
    )
}