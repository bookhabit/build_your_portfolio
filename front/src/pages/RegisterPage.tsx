import { useNavigate} from "react-router-dom";
import { useContext, useEffect, useRef, useState} from "react";
import axios, { AxiosError } from "axios";
import googleSvg from "../assets/google.svg"
import githubSvg from "../assets/github.svg"
import { Button, Input, Label, Textarea } from "../elements";
import { InputChangeEvent } from "../elements/Input";
import gsap from 'gsap'
import { ValidateContext, ValidateContextType } from "../Context/ValidateContext";

type ValidationForm = {
  name:string,
  email:string,
  password:string
}

export default function ReigsterPage() {
  const [name,setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [redirect, setRedirect] = useState<boolean>(false);
  const formRef = useRef(null);
  const [errorMessage,setErrorMessage] = useState<ValidationForm>({
    // 기본값이 폼 필수요소 체크
    name:"",
    email:"",
    password:"",
  })
  const { validateMode,setValidateMode } = useContext<ValidateContextType>(ValidateContext);
  

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

  const validateSignUpForm = ()=>{
    // name validation
    // 숫자가 포함되지 않는지 확인하는 정규 표현식
    const nameRegex = /^[^0-9]*$/;
    // 이메일 형식을 검증하는 정규 표현식
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    // 비밀번호를 검증하는 정규 표현식
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{10,}$/;

    if (!name) {
      setErrorMessage((prevState) => ({
        ...prevState,
        name: "이름을 입력해주세요",
      }));
      return false
    }
    if(name.length>15){
      setErrorMessage((prevState) => ({
        ...prevState,
        name: "이름이 너무 깁니다",
      }))
      return false
    }
    if(!nameRegex.test(name)){
      console.log('숫자포함됌')
      setErrorMessage((prevState) => ({
        ...prevState,
        name: "이름에 숫자를 포함할 수 없습니다",
      }))
      return false
    }
    

    // email vaildation
    if (!email) {
      setErrorMessage((prevState) => ({
        ...prevState,
        email: "이메일을 입력해주세요",
      }));
      return false
    }
    if(email.length>25){
      setErrorMessage((prevState) => ({
        ...prevState,
        email: "이메일이 너무 깁니다",
      }))
      return false
    }
    if(!emailRegex.test(email)){
      setErrorMessage((prevState) => ({
        ...prevState,
        email: "유효한 이메일 형식이 아닙니다",
      }))
      return false
    }

    // password vaildation
    if (!password) {
      setErrorMessage((prevState) => ({
        ...prevState,
        password: "비밀번호를 입력해주세요",
      }));
      return false
    }
    if(password.length<=10){
      setErrorMessage((prevState) => ({
        ...prevState,
        password: "비밀번호를 10자 이상 입력해주세요",
      }))
      return false
    }
    if(!passwordRegex.test(password)){
      setErrorMessage((prevState) => ({
        ...prevState,
        password: "비밀번호에 영문,특수기호,숫자를 포함해주세요",
      }))
      return false
    }
    
    return true;
}

  async function registerLocal(event:React.FormEvent){ 
    event.preventDefault();
    // form요소 유효성 검사
    setValidateMode(true)
    if(validateSignUpForm()){
      try{
        const res = await axios.post('/register',{
          name:name,
          email:email,
          password:password
        })
        if(res.data.status===200){
          alert('register successful.')
          setRedirect(true)
        }else if(res.data.status===409){
          // 이미 존재하는 이메일 validation
          setErrorMessage((prevState) => ({
            ...prevState,
            email: res.data.message,
          }));
        }else{
          alert('회원가입에 실패하였습니다')
        }
      }catch(e){
        console.log(e)
        alert('register failed')
      }
    }
  }

  async function registerGithub(event:React.FormEvent){ 
    event.preventDefault()
    console.log('깃허브 로그인 로직')
  }

  async function registerGoogle(event:React.FormEvent){ 
    event.preventDefault()
    console.log('구글 로그인 로직')
  }

  if(redirect){
    router('/login')
  }


  return (
    
    <div className="flex items-center justify-center h-full">      
        <form ref={formRef} className={`authForm py-12 bg-form_bg shadow-2xl`}>
          <h1 className=" text-4xl font-bold text-center mb-4">Register</h1>
          <div className={`flex flex-col my-12 items-center ${validateMode? "gap-2":"gap-8"}`}>
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
            <Button
                text="Login with Github"
                _onClick={registerGithub}
                sort="social"
                icon={githubSvg}
                alt="깃허브 로고"
            />
            <Button
                  text="Login with Google"
                  _onClick={registerGoogle}
                  sort="social"
                  icon={googleSvg}
                  alt="구글로고"
            />
          </div>
        </form>
    </div>
  );
}