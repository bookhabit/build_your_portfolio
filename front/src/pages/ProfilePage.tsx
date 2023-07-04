import { useContext, useState} from "react";
import {  useNavigate} from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import axios from "axios";
import { SelectedUI } from "../Types/PortfolioType";
import UserInfoBasic from "../components/UserInfoBasic";
import { InputChangeEvent } from "../elements/Input";
import PreviewIcon from "../assets/portfolio/imgPreview.svg"
// import ImageUI from "../components/common/ImageUI";

export default function ProfilePage() {
    const {user,setUser} = useContext(UserContext)
    const router = useNavigate();
    const [selectedUserUI,setSelectedUserUI] = useState<SelectedUI>("A");
    console.log(selectedUserUI)
    // image-view-state
    const [showPreview,setShowPreview] = useState<boolean>(false)
    const [showPreviewSrc,setShowPreviewSrc] = useState<string>("")

    const onChangeInput = (event:InputChangeEvent)=>{
        if(event.target.name==="selectedUI"){
            setSelectedUserUI(event.target.value as SelectedUI);
          }
    }

    // 나중에 userUI로 캡쳐해서 이미지 src 바꾸기
    const userUIradio = [{
        name:"A",
        desc:"Basic",
        src:"https://file.miricanvas.com/template_thumb/2022/09/19/21/00/k2oejh1gzpx67va3/thumb.jpg"
      } , {
        name:"B",
        desc:"Scroll Parallax",
        src:"https://file.miricanvas.com/template_thumb/2022/10/05/12/10/kchzz44ut2gqscd2/thumb.jpg"
      } , {
        name:"C",
        desc:"Slide-UI",
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvb65u-m8PLHvYEJKyQnUKO846ERarRhJzaMfl3d1Rktsf0TMlCQ4xj48uVbKROQpR11U&usqp=CAU"
      },{
        name:"D",
        desc:"3D-UI",
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvb65u-m8PLHvYEJKyQnUKO846ERarRhJzaMfl3d1Rktsf0TMlCQ4xj48uVbKROQpR11U&usqp=CAU"
      }]

      // image-view 전체보기
    if (showPreview&&showPreviewSrc!=="") {
        // 포트폴리오의 form에 채워진 데이터를 UI에 넘겨준다
          return (
            <div className="absolute inset-0 bg-black text-white min-h-screen">
            <div className="bg-black p-8 grid justify-center gap-4">
              <div>
                <button onClick={() => setShowPreview(false)} className="fixed right-12 top-8 flex gap-1 py-2 px-4 rounded-2xl shadow shadow-black bg-white text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                  Close Preview
                </button>
              </div>
              <img src={showPreviewSrc} alt="미리보기 이미지"/>
            </div>
          </div>
          );
    }
    
    // 로그아웃
    async function logout(){
        await axios.post('/logout')
        alert('로그아웃')
        setUser(null)
        router('/')
    }

    return (
        <div className='flex flex-col items-center justify-center px-0 xl:px-80 py-20 '>
            <UserInfoBasic user={user}  />
            {/* user UI 변경하는 section */}
            <h1 className="text-2xl text-gray-500 mt-20">메인페이지 UI 선택</h1>
            <section className="flex flex-col gap-8 justify-evenly md:flex-row h-full my-20">
                {userUIradio.map((kind)=>(
                    <label
                    key={kind.name}
                    className={`relative p-2 font-bold cursor-pointer text-2xl flex flex-col items-center justify-center gap-5 ${
                        selectedUserUI === kind.name ? 'text-category_select' : '' 
                    }`}
                    >
                    <input
                    type="radio"
                    value={kind.name}
                    name="selectedUI"
                    checked={selectedUserUI === kind.name}
                    onChange={onChangeInput}
                    className="hidden"
                    />
                    {kind.name}
                    <div className="w-52 h-52 rounded-full overflow-hidden">
                    <img src={kind.src} className="w-full h-full object-cover cursor-pointer" alt={kind.name + " 이미지"} />
                    </div>
                    <img 
                    src={PreviewIcon} 
                    alt="이미지 확대"  
                    className="absolute right-0 bottom-12"
                    onClick={()=>{
                        setShowPreview(true)
                        setShowPreviewSrc(kind.src)
                    }}
                    />
                    {kind.desc}
                    </label>
                ))}
            </section>
            <div className="flex w-full justify-between my-8">
                <button className="bg-blue-200 w-52 px-5 py-2 text-sm font-bold rounded-lg hover:bg-blue-100">
                    포트폴리오 등록하러 가기
                </button>
                <button onClick={logout} className="bg-blue-200 w-28 px-5 py-2 text-sm font-bold rounded-lg hover:bg-blue-100">
                    로그아웃
                </button>
            </div>
        </div>
  );
}