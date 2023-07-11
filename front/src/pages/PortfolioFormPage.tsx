import {  ChangeEvent, useContext, useEffect, useState } from "react";
import PhotosUploader from "../components/testRestAPI/PhotosUploader";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { Button, Input, Label, Textarea } from "../elements";
import { InputChangeEvent } from "../elements/Input";
import { CategoryType, DemoLinkType, DevelopPeriodType, Important_function, PortfolioDetailType, PortfolioType, SelectedUI } from "../Types/PortfolioType";
import { ShowArray } from "./ResumeFormPage";
import FormContainer from "../components/FormContainer";
import PreviewIcon from "../assets/portfolio/imgPreview.svg"
import { ValidatePortfolio } from "../components/common/validation/validatePortfolioForm";
import  validatePortfolioForm  from "../components/common/validation/validatePortfolioForm";
import TechBorder from "../components/common/TechBorder";
import plusIcon from "../assets/resume/plusIcon.svg"
import Image from "../components/testRestAPI/Image";
import BasicUI from "../components/PortfolioUI/BasicUI";
import ScrollParallaxUI from "../components/PortfolioUI/ScrollParallaxUI";
import SlideUI from "../components/PortfolioUI/SlideUI";
import UI_3D from "../components/PortfolioUI/UI_3D";
import { useRecoilState, useRecoilValue } from "recoil";
import { validateModeAtom } from "../recoil/validateAtom";
import { userAtom } from "../recoil/userAtom";

export default function PortfolioFormPage() {
    const router = useNavigate();
    const user = useRecoilValue(userAtom)
    const [updatePage,setUpdatePage] = useState<boolean>(false);

    // state
    const {id:portfolioId} = useParams();
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
    const [important_functionInput,setImportant_functionInput] = useState<string>("");
    const [important_functionPhotos,setImportant_functionPhotos] = useState<string[]>([]);
    const [important_functionArr,setImportant_functionArr] = useState<Important_function[]>([]);
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
    const PortfolioUIradio = [{
      name:"A",
      desc:"Basic",
      src:"/PortfolioDesignA.png"
    } , {
      name:"B",
      desc:"Scroll Parallax",
      src:"/PortfolioDesignB.png"
    } , {
      name:"C",
      desc:"Slide-UI",
      src:"/PortfolioDesignC.png"
    },{
      name:"D",
      desc:"3D-UI",
      src:"/PortfolioDesignD.png"
    }]

    // image-view-state
    const [showPreview,setShowPreview] = useState<boolean>(false)

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
      important_functionInput:"",
      category:"",
      selectedUI:"",
    })
    const [validateMode,setValidateMode ] = useRecoilState<boolean>(validateModeAtom)

    // validateForm
  
    
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
      else if(event.target.name==="important_functionInput"){
        setImportant_functionInput(event.target.value)
      }
      setValidateMode(false)
    }

    let previewForm:PortfolioDetailType|null = null
    // image-view 전체보기
    if (showPreview && user) {
      // 포트폴리오의 form에 채워진 데이터를 UI에 넘겨준다
      previewForm = {
        PortfolioDoc:{
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
          important_functions:important_functionArr},
          author_name:user.name
      };
    }
    // 수정페이지에서 데이터 채워넣기
    useEffect(() => {
      console.log('useEffect시작')
      console.log('useEffect 포트폴리오',portfolioId)
      if(portfolioId){
        setUpdatePage(true)
        axios.get('/portfolio/'+portfolioId).then(response => {
          const result = response.data.portfolio_detail.PortfolioDoc as PortfolioType
          setTitle(result.title)
          setPurpose(result.purpose)
          setIntroduce(result.introduce)
          setProcess(result.process)
          setLearned(result.learned)
          setAddedLinkPhotos(result.photos)
          if(result.important_functions){
            setImportant_functionArr(result.important_functions)
          }
          setUsedTechnologyArr(result.usedTechnology)
          setDevelopPeriod(result.developPeriod)
          setDemoLink(result.demoLink)
          setCategory(result.category)
          setSelectedUI(result.selectedUI)
        });
      }
    }, []);

    

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
          important_functions:important_functionArr
        };
        const validateForm:boolean = validatePortfolioForm(portfolioForm,setErrorMessage)
        console.log(portfolioForm)
        if(validateForm){
          if (portfolioId) {
              // update
              const response = await axios.put('/portfolio/update', {
                  portfolioId, ...portfolioForm
              });
              if(response.status===200){
                alert('포트폴리오 수정 성공!')
                router("/")
              }
          } else {
              // new post
              await axios.post('/portfolio/create', portfolioForm);
              alert('포트폴리오 등록 성공!')
              router("/")
          }
        }
    }

    function formItemTextareaClass():string{
      return "flex flex-col mt-6 gap-3"
    }

    function demoLinkFlex():string{
      return "flex gap-4 items-center"
    }
    return(
      <div className="flex items-center justify-center py-12 px-14">
        {showPreview ? showPreview && previewForm &&  
        <div className="absolute inset-0 min-h-screen">
            <div className=" p-8 grid gap-4">
              <div>
                <button onClick={() => setShowPreview(false)} className="fixed right-12 top-8 flex gap-1 py-2 px-4 rounded-2xl shadow shadow-black bg-white text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                  Close Preview
                </button>
              </div>
              {previewForm.PortfolioDoc.selectedUI==="A" && 
              <BasicUI portfolio={previewForm} userPage={false}/>}
              {previewForm.PortfolioDoc.selectedUI==="B" && 
              <ScrollParallaxUI portfolio={previewForm} userPage={false}/>}
              {previewForm.PortfolioDoc.selectedUI==="C" && 
              <SlideUI portfolio={previewForm} userPage={false}/>}
              {previewForm.PortfolioDoc.selectedUI==="D" && 
              <UI_3D portfolio={previewForm} userPage={false}/>}
          </div>
        </div> : 
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
                <TechBorder key={tech} techName={tech} sort="portfolio" />
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
          <Label sort="portfolioLabel" label="프로젝트의 핵심기능"/>
          <span>핵심기능 설명</span>
          <Textarea
            value={important_functionInput}
            name="important_functionInput"
            _onChange={onChangeTextarea}
            sort="portfolioTexarea"
            height="h-20"
            isValid={!!errorMessage.important_functionInput}
            errorMessage={errorMessage.important_functionInput}
            validateMode={validateMode}
            />
            <span>핵심기능의 이미지</span>
            <PhotosUploader
              addedPhotos={important_functionPhotos} 
              onChange={setImportant_functionPhotos} />
            <div className="flex items-center gap-4 justify-end mb-5 ">
              <span className="bg-slate-200 p-2 rounded-lg">프로젝트의 핵심기능 추가하기</span>
              <Button
                sort="plusButton"
                icon={plusIcon}
                alt="+아이콘"
                _onClick={(event)=>{
                  event.preventDefault()
                  if(important_functionInput&&important_functionPhotos.length>0){
                    const important_data = {
                      important_function_desc:important_functionInput,
                      important_function_photo:important_functionPhotos
                    }
                    setImportant_functionInput("")
                    setImportant_functionPhotos([])
                    setImportant_functionArr([important_data,...important_functionArr])
                  }
              }}/>
            </div>
        </div>
        {important_functionArr.length > 0 && (
          <ShowArray>
            {important_functionArr.map((data,index)=>(
              <div key={index} className="flex flex-col lg:flex-row gap-3 border p-10 w-full shadow-sm">
                <div className="flex flex-col justify-evenly w-2/3">
                  <p className="mb-3">핵심기능 {index+1} 설명
                  </p>
                  {data.important_function_desc}
                </div>
                <div className="flex flex-col w-1/3">
                  <p className="my-3">핵심기능 {index+1} 이미지</p>
                  {data.important_function_photo.length>0 ? 
                    <Image className="rounded-2xl w-full h-40 object-cover" src={data.important_function_photo[0]}/>
                    : "선택한 이미지 없음"
                  }
                </div>
                <button className=" w-24 bg-gray-100 rounded-md hover:bg-gray-50" onClick={()=>setImportant_functionArr(prevArr => prevArr.filter((_, i) => i !== index))}>삭제</button>
              </div>
            ))}    
          </ShowArray>
        )}
        <div className={formItemTextareaClass()}>
          <Label label="카테고리" sort="portfolioLabel"/>
          <div className="flex gap-8">
            {categoryRadio.map((kind)=>(
              <label key={kind}
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
          <p className="font-light text-gray-400">(미리보기 기능 : 해당 디자인을 클릭 후 확대버튼을 클릭하시면 됩니다)</p>
          <div className="flex flex-col gap-8 justify-evenly md:flex-row">
            {PortfolioUIradio.map((kind)=>(
                <label
                  key={kind.name}
                  className={`relative p-2 font-bold cursor-pointer text-2xl flex flex-col items-center justify-center gap-5 ${
                  selectedUI === kind.name ? 'text-category_select' : '' 
                }`}
                >
                <input
                  type="radio"
                  value={kind.name}
                  name="selectedUI"
                  checked={selectedUI === kind.name}
                  onChange={onChangeInput}
                  className="hidden"
                />
                {kind.name}
                <div className="w-72 h-72 rounded-full overflow-hidden">
                  <img src={kind.src} className="w-full h-full object-fill cursor-pointer" alt={kind.name + " 이미지"} />
                </div>
                <img 
                  src={PreviewIcon} 
                  alt="이미지 확대"  
                  className="absolute right-0 bottom-12"
                  onClick={()=>{
                    setShowPreview(true)
                  }}
                  />
                  {kind.desc}
                </label>
            ))}
          </div>
        </div>
        <div className="flex justify-end mt-20">
          <Button 
            sort="portfolio" 
            text={updatePage?"수정완료":"작성완료"}
            _onClick={savePlace} />
        </div>
    </FormContainer>
        }
      
      </div>
    )
}