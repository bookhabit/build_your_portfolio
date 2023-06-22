import {  ChangeEvent, useEffect, useState } from "react";
import PhotosUploader from "../components/testRestAPI/PhotosUploader";
import { Navigate, useParams } from "react-router";
import axios from "axios";
import { Button, Input, Label, Textarea } from "../elements";
import { InputChangeEvent } from "../elements/Input";
// import PhotosUploader from "./PhotosUploader";

export default function PortfolioFormPage() {
    const {id:postId} = useParams();
    const [title,setTitle] = useState<string>('');
    const [purpose,setPurpose] = useState<string>('');
    const [introduce,setIntroduce] = useState<string>('');
    const [process,setProcess] = useState<string>('');
    const [learned,setLearned] = useState<string>('');
    const [addedLinkPhotos,setAddedLinkPhotos] = useState<string[]>([]);
    // 기술스택 , 개발기간 , DemoLink , 카테고리 , 포트폴리오 UI
    const [redirect,setRedirect] = useState(false);
    console.log('이미지',addedLinkPhotos)
    // onChange
    const onChangeInput = (event:InputChangeEvent)=>{
      if(event.target.name==="title"){
        setTitle(event.target.value)
      }
    }
    const onChangeTextarea = (event:ChangeEvent<HTMLTextAreaElement>)=>{
      console.log('event',event)
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
            {/* <div className={formItemTextareaClass()}>
              <Label label="사용한 기술스택" sort="portfolioLabel"/>
              <PhotosUploader
                addedPhotos={addedLinkPhotos} 
                onChange={setAddedLinkPhotos} />
            </div> */}
            <div className="mt-8 flex justify-end ">
              <Button sort="portfolio" text="작성완료" _onClick={savePlace} />
            </div>
        </form>
      </div>
    )
}