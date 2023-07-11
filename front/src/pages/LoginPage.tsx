import { Navigate, useNavigate} from "react-router-dom";
import { useEffect, useRef, useState} from "react";
import axios from "axios";
import googleSvg from "../assets/auth/google.svg"
import githubSvg from "../assets/auth/github.svg"
import { Button } from "../elements";
import Input, { InputChangeEvent } from "../elements/Input";
import gsap from 'gsap'
import { UserInfoType } from "../Types/userType";
import validateLoginForm, { ValidationLoginForm } from "../components/common/validation/validateLoginForm";
import { useRecoilState, useSetRecoilState } from "recoil";
import { validateModeAtom } from "../recoil/validateAtom";
import { userAtom } from "../recoil/userAtom";

const CLIENT_ID = "1251dd62543c1d6e0fc6";

export default function LoginPage() {
  const router = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const setUser = useSetRecoilState(userAtom);
  const formRef = useRef(null);
  const [errorMessage,setErrorMessage] = useState<ValidationLoginForm>({
    email:"",
    password:"",
  })
  const [validateMode,setValidateMode ] = useRecoilState<boolean>(validateModeAtom)
//   useEffect(() => {
//     gsap.fromTo(formRef.current,{x: 1000}, {x: 0} )
// }, [])

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

  const handleLogin = async (event:React.FormEvent)=>{
    event.preventDefault();
    // form요소 유효성 검사
    setValidateMode(true)

    const validateForm:boolean = validateLoginForm(email,password,setErrorMessage)
    if(validateForm){
      try{
        const {data}  = await axios.post('/login',{email,password})
        if(data){
          axios.get('/profile')
          .then(({data}:{data:UserInfoType}) => {
            setUser(data);
          });
        }
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

    // 깃허브 로그인 로직
    // Forward the user to the github login screen
    // User is now on the github side and logs in 
    // When user decides to login ... they get forwarded back to localhost:3000
    // But localhost:3000/?code=ADSDSAFADSFAFS
    // Use the code to get the access token

  useEffect(()=>{
    // 확인 localhost:3000/?code=ADSDSAFADSFAFS
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code")

    if(codeParam){
      async function gitHubLogin() {
        await axios.get(`/githubLogin?code=${codeParam}`)
        .then((response) => {
          console.log(response);
          if(response.status===200){
            setUser(response.data as UserInfoType);
            router("/")
          }
        });
      }
      gitHubLogin();
    }
  },[])

  async function loginWithGithub(event:React.FormEvent){
    event.preventDefault()
    const scope = "user user:email"; 
    window.location.assign(`https://github.com/login/oauth/authorize?scope=${scope}&client_id=${CLIENT_ID}`)
  }

  async function registerGoogle(event:React.FormEvent){ 
    event.preventDefault()
    console.log('구글 로그인 로직')
  }

  return (
    <div className="flex items-center justify-center h-full">
        <form ref={formRef} className="loginForm py-12 bg-form_bg shadow-2xl">
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
                _onClick={loginWithGithub}
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