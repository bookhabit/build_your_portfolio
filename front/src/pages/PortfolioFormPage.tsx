import {  ChangeEvent, useContext, useEffect, useState } from "react";
import PhotosUploader from "../components/testRestAPI/PhotosUploader";
import { Navigate, useParams } from "react-router";
import axios from "axios";
import { Button, Input, Label, Textarea } from "../elements";
import { InputChangeEvent } from "../elements/Input";
import { CategoryType, DemoLinkType, DevelopPeriodType, PortfolioType, SelectedUI } from "../Types/PortfolioType";
import { ShowArray } from "./ResumeFormPage";
import { ValidateContext, ValidateContextType } from "../Context/ValidateContext";
import FormContainer from "../components/FormContainer";


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

    // radio name
    const categoryRadio = ["clone" , "individual" , "cooperation"]
    const convertName = (name:string)=>{
      if(name==="clone"){
        return "클론코딩"
      }else if(name==="individual"){
        return "개인 프로젝트"
      }else if(name==="cooperation"){
        return "협업 프로젝트"
      }
    }
    

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
    const { validateMode,setValidateMode } = useContext<ValidateContextType>(ValidateContext);

    const [redirect,setRedirect] = useState(false);
    
    // onChange
    const onChangeInput = (event:InputChangeEvent)=>{
      if(event.target.name==="title"){
        setTitle(event.target.value)
        setErrorMessage((prevState)=>({
          ...prevState,
          title:"",
        }))
      }else if(event.target.name==="usedTechnologyInput"){
        setUsedTechnologyInput(event.target.value)
        setErrorMessage((prevState)=>({
          ...prevState,
          usedTechnology:"",
        }))
      }else if(event.target.name==="developPeriodStart"){
        setDevelopPeriod((prevState)=>({
          ...prevState,
          start:event.target.value
        }))
        setErrorMessage((prevState)=>({
          ...prevState,
          developPeriod: {
            ...prevState.developPeriod,
            start: "",
          }
        }))
      }else if(event.target.name==="developPeriodEnd"){
        setDevelopPeriod((prevState)=>({
          ...prevState,
          end:event.target.value
        }))
        setErrorMessage((prevState)=>({
          ...prevState,
          developPeriod: {
            ...prevState.developPeriod,
            end: "",
          }
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
        setErrorMessage((prevState)=>({
          ...prevState,
          category:"",
        }))
      }else if(event.target.name==="selectedUI"){
        setSelectedUI(event.target.value as SelectedUI);
        setErrorMessage((prevState)=>({
          ...prevState,
          selectedUI:"",
        }))
      }
      setValidateMode(false)
    }

    const onChangeTextarea = (event:ChangeEvent<HTMLTextAreaElement>)=>{
      if(event.target.name==="purpose"){
        setPurpose(event.target.value)
        setErrorMessage((prevState)=>({
          ...prevState,
          purpose:"",
        }))
      }else if(event.target.name==="introduce"){
        setIntroduce(event.target.value)
        setErrorMessage((prevState)=>({
          ...prevState,
          introduce:"",
        }))
      }else if(event.target.name==="process"){
        setProcess(event.target.value)
        setErrorMessage((prevState)=>({
          ...prevState,
          process:"",
        }))
      }else if(event.target.name==="learned"){
        setLearned(event.target.value)
        setErrorMessage((prevState)=>({
          ...prevState,
          learned:"",
        }))
      }
      setValidateMode(false)
    }

    // validation
    const validatePortfolioForm = (portfolioForm:PortfolioType):boolean=>{
      // 전체 input validation
      const {title,purpose,
      introduce, process,learned,usedTechnology,developPeriod,category,selectedUI,
      } = portfolioForm
      console.log('유효성검사 props',portfolioForm)
      console.log(errorMessage)

      const requiredMsg = "필수입력"

      if(!title){
        setErrorMessage((prevState)=>({
          ...prevState,
          title:requiredMsg,
        }))
        return false
      }
      if(!purpose){
        setErrorMessage((prevState)=>({
          ...prevState,
          purpose:requiredMsg,
        }))
        return false
      }
      if(!introduce){
        setErrorMessage((prevState)=>({
          ...prevState,
          introduce:requiredMsg,
        }))
        return false
      }
      if(!process){
        setErrorMessage((prevState)=>({
          ...prevState,
          process:requiredMsg,
        }))
        return false
      }
      if(!learned){
        setErrorMessage((prevState)=>({
          ...prevState,
          learned:requiredMsg,
        }))
        return false
      }
      if(usedTechnology.length<=0){
        setErrorMessage((prevState)=>({
          ...prevState,
          usedTechnology:requiredMsg,
        }))
        return false
      }
      if(!developPeriod.start){
        setErrorMessage((prevState)=>({
          ...prevState,
          developPeriod: {
            ...prevState.developPeriod,
            start: requiredMsg,
          }
        }))
        return false
      }
      if(!developPeriod.end){
        setErrorMessage((prevState)=>({
          ...prevState,
          developPeriod: {
            ...prevState.developPeriod,
            end: requiredMsg,
          }
        }))
        return false
      }
      if(!category){
        setErrorMessage((prevState)=>({
          ...prevState,
          category:requiredMsg,
        }))
        return false
      }
      if(!selectedUI){
        setErrorMessage((prevState)=>({
          ...prevState,
          selectedUI:requiredMsg,
        }))
        return false
      }

      return true
    }

    console.log(category)
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
        setValidateMode(true)

        const portfolioForm:PortfolioType = {
          title,purpose,
          introduce, 
          process,
          learned,
          photos:addedLinkPhotos,
          usedTechnology:usedTechnologyArr,
          developPeriod,
          demoLink,
          category,
          selectedUI,
        };
        console.log(portfolioForm)
        console.log('validation시작')
        if(validatePortfolioForm(portfolioForm)){
          console.log('유효성 검사 완료')
        }
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

    function demoLinkFlex():string{
      return "flex gap-4 items-center"
    }
    return(
      <div className="flex items-center justify-center py-12 px-14">
        <FormContainer width="" height="" >
            <div className="text-center py-4">
              <Input 
                type="text" 
                placeholder="프로젝트 제목" 
                sort="portfolioInput"
                value={title}
                name="title"
                _onChange={onChangeInput}
                isValid={!!errorMessage.title}
                errorMessage={errorMessage.title}
                validateMode={validateMode}
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
                isValid={!!errorMessage.purpose}
                errorMessage={errorMessage.purpose}
                validateMode={validateMode}
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
                isValid={!!errorMessage.introduce}
                errorMessage={errorMessage.introduce}
                validateMode={validateMode}
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
                isValid={!!errorMessage.process}
                errorMessage={errorMessage.process}
                validateMode={validateMode}
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
                isValid={!!errorMessage.learned}
                errorMessage={errorMessage.learned}
                validateMode={validateMode}
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
              {usedTechnologyArr.length > 0 && (
                <ShowArray>
                  {usedTechnologyArr.map((tech)=>(
                    <span key={tech}>{tech+' '}</span>    
                  ))}    
                </ShowArray>
              )}
              <div className="flex gap-5 h-10">
                <Input
                  sort="borderInput"
                  type="text" 
                  placeholder="ex) React"
                  name="usedTechnologyInput" 
                  value={usedTechnologyInput} 
                  _onChange={onChangeInput}
                  isValid={!!errorMessage.usedTechnology}
                  errorMessage={errorMessage.usedTechnology}
                  validateMode={validateMode}
                />
                <button className="bg-transparent border border-gray-500 px-4 rounded-lg font-bold hover:text-white min-w-fit hover:bg-gray-300" onClick={(event)=>{
                    event.preventDefault()
                    if(usedTechnologyInput){
                      setUsedTechnologyInput("")
                      setUsedTechnologyArr([usedTechnologyInput,...usedTechnologyArr])
                    }
                  }}>추가</button>
              </div>
            </div>
            <div className={formItemTextareaClass()}>
              <Label label="개발기간" sort="portfolioLabel"/>
              <div className="flex gap-5">
                <Input
                    sort="borderInput"
                    type="date" 
                    name="developPeriodStart" 
                    value={developPeriod.start} 
                    _onChange={onChangeInput}
                    isValid={!!errorMessage.developPeriod.start}
                    errorMessage={errorMessage.developPeriod.start}
                    validateMode={validateMode}
                  />
                <Input
                    sort="borderInput"
                    type="date" 
                    name="developPeriodEnd" 
                    value={developPeriod.end} 
                    _onChange={onChangeInput}
                    isValid={!!errorMessage.developPeriod.end}
                    errorMessage={errorMessage.developPeriod.end}
                    validateMode={validateMode}
                  />
              </div>
            </div>
            <div className={formItemTextareaClass()}>
              <Label label="DEMO Link (선택)" sort="portfolioLabel"/>
              <div className={demoLinkFlex()}>
                <Label
                  label="프로젝트 URL :"
                  sort="linkLabel"
                />
                <Input 
                  type="text" 
                  name="projectURL" 
                  value={demoLink.projectURL} 
                  sort="URLInput"
                  _onChange={onChangeInput}
                  isValid={!!errorMessage.demoLink.projectURL}
                  errorMessage={errorMessage.demoLink.projectURL}
                  validateMode={validateMode}
                />
              </div>
              <div className={demoLinkFlex()}>
                <Label
                    label="깃허브 URL :"
                    sort="linkLabel"
                />
                <Input 
                  type="text" 
                  name="githubURL" 
                  value={demoLink.githubURL} 
                  sort="URLInput"
                  _onChange={onChangeInput}
                  isValid={!!errorMessage.demoLink.githubURL}
                  errorMessage={errorMessage.demoLink.githubURL}
                  validateMode={validateMode}
                />
              </div>
              <div className={demoLinkFlex()}>
                <Label
                    label="디자인 URL :"
                    sort="linkLabel"
                />
                <Input 
                  type="text" 
                  name="designURL" 
                  value={demoLink.designURL} 
                  sort="URLInput"
                  _onChange={onChangeInput}
                  isValid={!!errorMessage.demoLink.designURL}
                  errorMessage={errorMessage.demoLink.designURL}
                  validateMode={validateMode}
                />
              </div>
              <div className={demoLinkFlex()}>
                <Label
                    label="문서 URL:"
                    sort="linkLabel"
                />
                <Input 
                  type="text" 
                  name="documentURL" 
                  value={demoLink.documentURL} 
                  sort="URLInput"
                  _onChange={onChangeInput}
                  isValid={!!errorMessage.demoLink.documentURL}
                  errorMessage={errorMessage.demoLink.documentURL}
                  validateMode={validateMode}
                />
              </div>
            </div>
            <div className={formItemTextareaClass()}>
              <Label label="카테고리" sort="portfolioLabel"/>
              <div className="flex gap-8">
                {categoryRadio.map((kind)=>(
                  <label
                  className={`p-2 bg-portfolio_gray rounded-md w-32 font-bold cursor-pointer flex items-center justify-center ${
                    category === kind ? 'text-category_select' : '' 
                  }`}
                >
                    <input
                      type="radio"
                      value={kind}
                      name="category"
                      checked={category === kind}
                      onChange={onChangeInput}
                      className="hidden"
                    />
                    {convertName(kind)}
                  </label>
                ))}
              </div>
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
        </FormContainer>
      </div>
    )
}