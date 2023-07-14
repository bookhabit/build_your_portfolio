import { useEffect, useState} from "react";
import {  useNavigate} from "react-router-dom";
import axios from "axios";
import UserInfoBasic from "../components/UserInfoUI/UserInfoBasic";
import { InputChangeEvent } from "../elements/Input";
import PreviewIcon from "../assets/portfolio/imgpreview.svg"
import UserUI_3D from "../components/UserInfoUI/UserUI_3D";
import { UserInfoType, userUI } from "../Types/userType";
import { useRecoilState } from "recoil";
import { userAtom } from "../recoil/userAtom";
import ShowNullData from "../components/ShowNullData";

export default function ProfilePage() {
    const [user,setUser] = useRecoilState(userAtom);
    const router = useNavigate();
    const [selectedUserUI,setSelectedUserUI] = useState<userUI>(user?.selectedUserUI ? user.selectedUserUI : "Basic" );
    // image-view-state
    const [showPreview,setShowPreview] = useState<boolean>(false)
    const [showPreviewSrc,setShowPreviewSrc] = useState<string>("")

    useEffect(()=>{
      setSelectedUserUI(user?.selectedUserUI as userUI)
    },[])

    const onChangeInput = async (event:InputChangeEvent)=>{
        if(event.target.name==="selectedUI"){
            setSelectedUserUI(event.target.value as userUI);
            const response = await axios.put('/user-ui',{selectedUserUI:event.target.value})
            if(response.status===200){
              axios.get('/profile')
              .then(({data}:{data:UserInfoType}) => {
                setUser(data);
              });
            }
            
          }
    }

    // 나중에 userUI로 캡쳐해서 이미지 src 바꾸기
    const userUIradio = [{
        name:"Basic",
        desc:"기본",
        src:"/userMainBasic.png"
      } ,{
        name:"3D",
        desc:"3D와 애니메이션",
        src:"/userMain3D.png"
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
        <div>
            {/* user가 선택한 UI 대로 user페이지 렌더링 - 기본값 A  */}
            {user?.userResumeDoc && user?.selectedUserUI==="Basic" && <UserInfoBasic user={user}  />}
            {user?.userResumeDoc && user?.selectedUserUI==="3D" && <UserUI_3D user={user}  />}
            {/* user가 이력서와 포트폴리오를 등록하지 않았을 때 */}
            {user && !user?.userResumeDoc && 
            <ShowNullData message={user?.name ? user.name+'님은 아직 이력서를 작성하지 않았습니다' : user?.nickName && user?.nickName +'님은 아직 이력서를 작성하지 않았습니다' }  />
            }
            {/* user UI 변경하는 section */}
            <div className={`flex flex-col items-center justify-center px-0 xl:px-80 ${selectedUserUI==="3D" ? 'bg-black' : 'bg-UI_user_profile_bg'}`}>
              <div className="w-full pt-20 text-center">
                <h1 className={`md:text-[50px] sm:text-[40px] xs:text-[30px] text-[20px]  ${selectedUserUI==="3D" ? 'text-white' : 'text-gray-400'}`}>메인페이지 디자인 변경하기</h1>
              </div>
              <section className={`flex flex-wrap justify-center gap-10 h-full my-20 ${selectedUserUI==="3D" ? 'text-white' :'text-black'}`}>
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
                      <div className={`w-52 h-52 rounded-full overflow-hidden ${selectedUserUI==="Basic" && 'border border-1 border-gray-300'}`}>
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
              <div className="flex w-full justify-around my-8">
                  <button className={`p-4 text-sm font-bold rounded-lg 
                  ${selectedUserUI==="3D" ? 'bg-tertiary hover:bg-purple-600 text-white' :'bg-blue-200 hover:bg-blue-100 '}
                  `} onClick={()=>router("/portfolio/create")}>
                      포트폴리오 등록하러 가기
                  </button>
                  <button className={`p-4 text-sm font-bold rounded-lg 
                  ${selectedUserUI==="3D" ? 'bg-tertiary hover:bg-purple-600 text-white' :'bg-blue-200 hover:bg-blue-100 '}
                  `} onClick={()=>router(`/resume/update/${user?.userResumeDoc?._id}`)}>
                               회원정보 수정하기
                  </button>
                  <button onClick={logout} className={`bg-blue-200 w-28 px-5 py-2 text-sm font-bold rounded-lg hover:bg-blue-100
                  ${selectedUserUI==="3D" ? 'bg-tertiary hover:bg-purple-600 text-white' :'bg-blue-200 hover:bg-blue-100 '}
                  `}>
                      로그아웃
                  </button>
              </div>
            </div>
        </div>
  );
}