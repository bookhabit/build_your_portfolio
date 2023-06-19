import { Navigate} from "react-router-dom";
import {useContext, useEffect, useRef, useState} from "react";
import axios, { AxiosError } from "axios";
import googleSvg from "../assets/google.svg"
import githubSvg from "../assets/github.svg"
import { UserContext, UserContextType } from "../Context/UserContext";
import { Button } from "../elements";
import Input, { InputChangeEvent } from "../elements/Input";
import gsap from 'gsap'
import { ValidateContext, ValidateContextType } from "../Context/ValidateContext";

type ValidationLoginForm = {
  email:string,
  password:string
}


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext<UserContextType>(UserContext);
  const formRef = useRef(null);
  const [errorMessage,setErrorMessage] = useState<ValidationLoginForm>({
    email:"",
    password:"",
  })
  const { validateMode,setValidateMode } = useContext<ValidateContextType>(ValidateContext);

  useEffect(() => {
    gsap.fromTo(formRef.current,{x: 1000}, {x: 0} )
}, [])

  const onChangeInput = (event:InputChangeEvent)=>{
    if(event.target.name==="email"){
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
  
  const validateLoginForm = ()=>{
    // 이메일 형식을 검증하는 정규 표현식
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    // email vaildation
    if (!email) {
      setErrorMessage((prevState) => ({
        ...prevState,
        email: "이메일을 입력해주세요",
      }));
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

    return true
  }

  const handleLogin = async (event:React.FormEvent)=>{
    event.preventDefault();
    // form요소 유효성 검사
    setValidateMode(true)

    if(validateLoginForm()){
      try{
        const {data}  = await axios.post('/login',{email,password})
        setUser(data)
        // 비밀번호 validation
        alert('login successful')
        setRedirect(true)
      }catch(err:any){
        if(err.response?.status===404){
          setValidateMode(true)
          setErrorMessage((prevState) => ({
            ...prevState,
            email: err.response.data
          }));
        }
        else if(err.response?.status===400){
          setValidateMode(true)
          setErrorMessage((prevState) => ({
            ...prevState,
            password: err.response.data
          }));
        }
      }
    }
  }

  if(redirect){
    return <Navigate to="/"/>
  }

  async function registerGithub(event:React.FormEvent){ 
    event.preventDefault()
    console.log('깃허브 로그인 로직')
  }

  async function registerGoogle(event:React.FormEvent){ 
    event.preventDefault()
    console.log('구글 로그인 로직')
  }

  return (
    <div className="flex items-center justify-center h-full">
        <form ref={formRef} className="authForm py-12 bg-form_bg shadow-2xl">
          <h1 className=" text-4xl font-bold text-center mb-4">Login</h1>
          <div className={`flex flex-col my-12 items-center ${validateMode? "gap-2":"gap-8"}`}>
                <Input 
                    type="email"
                    placeholder="your@email.com"
                    _onChange={onChangeInput}
                    sort="authInput"
                    value={email}
                    name="email"
                    isValid={ !!errorMessage.email}
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
                    isValid={ !!errorMessage.password}
                    errorMessage={errorMessage.password}
                    validateMode={validateMode}
                />

          </div>
          <div className="flex flex-col items-center gap-4">
            <Button
                  text="Login"
                  _onClick={handleLogin}
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