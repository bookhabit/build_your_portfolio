import { useNavigate} from "react-router-dom";
import {  useEffect, useRef, useState} from "react";
import axios from "axios";
import { Button, Input } from "../elements";
import { InputChangeEvent } from "../elements/Input";
import gsap from 'gsap'
import validateRegisterForm, { ValidationRegisterForm } from "../components/common/validation/validateRegisterForm";
import { useRecoilState } from "recoil";
import { validateModeAtom } from "../recoil/validateAtom";


export default function ReigsterPage() {
  const [nickName,setNickName] = useState<string>('');
  const [name,setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [redirect, setRedirect] = useState<boolean>(false);
  const formRef = useRef(null);
  const [errorMessage,setErrorMessage] = useState<ValidationRegisterForm>({
    nickName:"",
    name:"",
    email:"",
    password:"",
  })
  const [validateMode,setValidateMode ] = useRecoilState<boolean>(validateModeAtom)
  

  useEffect(() => {
    gsap.fromTo(formRef.current,{x: -1000}, {x: 0} )
  }, [])

  const router = useNavigate();

  const onChangeInput = (event:InputChangeEvent)=>{
    if(event.target.name==="name"){
      setName(event.target.value)
      setErrorMessage((prevState) => ({
        ...prevState,
        name: "",
      }));
    }else if(event.target.name==="nickName"){
      setNickName(event.target.value)
      setErrorMessage((prevState) => ({
        ...prevState,
        nickName: "",
      }));
    }else if(event.target.name==="email"){
      setEmail(event.target.value)
      setErrorMessage((prevState) => ({
        ...prevState,
        email: "",
      }));
    }else if(event.target.name==="password"){
      setPassword(event.target.value)
      setErrorMessage((prevState) => ({
        ...prevState,
        password: "",
      }));
    }
    setValidateMode(false)
  }

  async function registerLocal(event:React.FormEvent){ 
    event.preventDefault();
    // form요소 유효성 검사
    setValidateMode(true)
    const validateForm:boolean = validateRegisterForm(nickName,name,email,password,setErrorMessage)
    if(validateForm){
      try{
        const res = await axios.post('/register',{
          nickName:nickName,
          name:name,
          email:email,
          password:password
        })
        if(res.status===200){
          alert('register successful.')
          setRedirect(true)
        }
      }catch(err:any){
        if(err.response?.status===409&&err.response?.data==="이미 존재하는 닉네임입니다."){
          setValidateMode(true)
          setErrorMessage((prevState) => ({
            ...prevState,
            nickName: err.response.data
          }));
        }
        if(err.response?.status===409&&err.response?.data==="이미 존재하는 이메일 입니다."){
          setValidateMode(true)
          setErrorMessage((prevState) => ({
            ...prevState,
            email: err.response.data
          }));
        }
        else{
            alert('회원가입에 실패하였습니다')
          }
      }
    }
  }

  if(redirect){
    router('/login')
  }


  return (
    
    <div className="flex items-center justify-center h-full">      
        <form ref={formRef} className={`signupForm py-12 bg-form_bg shadow-2xl`}>
          <h1 className=" text-4xl font-bold text-center mb-4">Register</h1>
          <div className={`flex flex-col my-12 items-center ${validateMode? "gap-2":"gap-8"}`}>
                <Input 
                    type="text"
                    placeholder="닉네임을 입력해주세요"
                    _onChange={onChangeInput}
                    sort="authInput"
                    value={nickName}
                    name="nickName"
                    isValid={!!errorMessage.nickName}
                    errorMessage={errorMessage.nickName}
                    validateMode={validateMode}
                />
                <Input 
                    type="text"
                    placeholder="이름을 입력해주세요"
                    _onChange={onChangeInput}
                    sort="authInput"
                    value={name}
                    name="name"
                    isValid={ !!errorMessage.name}
                    errorMessage={errorMessage.name}
                    validateMode={validateMode}
                />
                <Input 
                    type="email"
                    placeholder="your@email.com"
                    _onChange={onChangeInput}
                    sort="authInput"
                    value={email}
                    name="email"
                    isValid={!!errorMessage.email}
                    errorMessage={errorMessage.email}
                    validateMode={validateMode}
                />
                <Input 
                    type="password"
                    placeholder="password"
                    _onChange={onChangeInput}
                    sort="authInput"
                    value={password}
                    name="password"
                    isValid={!!errorMessage.password}
                    errorMessage={errorMessage.password}
                    validateMode={validateMode}
                />

          </div>
          <div className="flex flex-col items-center gap-4">
            <Button
                  text="Sign up"
                  _onClick={registerLocal}
                  sort="auth"
            />
          </div>
        </form>
    </div>
  );
}