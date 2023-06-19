import { useNavigate} from "react-router-dom";
import { useEffect, useRef, useState} from "react";
import axios from "axios";
import googleSvg from "../assets/google.svg"
import githubSvg from "../assets/github.svg"
import { Button, Input, Label, Textarea } from "../elements";
import { InputChangeEvent } from "../elements/Input";
import gsap from 'gsap'

export default function ReigsterPage() {
  const [name,setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [redirect, setRedirect] = useState<boolean>(false);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(formRef.current,{x: -1000}, {x: 0} )
  }, [])

  const router = useNavigate();

  const onChangeInput = (event:InputChangeEvent)=>{
    if(event.target.name==="name"){
      setName(event.target.value)
    }else if(event.target.name==="email"){
      setEmail(event.target.value)
    }else if(event.target.name==="password"){
      setPassword(event.target.value)
    }
  }

  async function registerLocal(event:React.FormEvent){ 
    event.preventDefault();
    
    try{
      const res = await axios.post('/register',{
        name:name,
        email:email,
        password:password
      })
      console.log('회원가입',res)
      alert('register successful.')
      setRedirect(true)
    }catch(e){
      console.log(e)
      alert('register failed')
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
          <div className="flex flex-col my-12 gap-8 items-center">
              <Input 
                    type="text"
                    placeholder="이름을 입력해주세요"
                    _onChange={onChangeInput}
                    sort="authInput"
                    value={name}
                    name="name"
                />
                <Input 
                    type="email"
                    placeholder="your@email.com"
                    _onChange={onChangeInput}
                    sort="authInput"
                    value={email}
                    name="email"
                />
                <Input 
                    type="password"
                    placeholder="password"
                    _onChange={onChangeInput}
                    sort="authInput"
                    value={password}
                    name="password"
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