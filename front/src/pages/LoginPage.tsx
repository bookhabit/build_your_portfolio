import {Link, Navigate} from "react-router-dom";
import {useContext, useState} from "react";
import axios from "axios";
import googleSvg from "../assets/google.svg"
import githubSvg from "../assets/github.svg"
import { UserContext, UserContextType } from "../UserContext";
import { Button } from "../elements";
import Input, { InputChangeEvent } from "../elements/Input";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext<UserContextType>(UserContext);

  const handleLogin = async (event:React.FormEvent)=>{
    event.preventDefault();
    try{
      const {data}  = await axios.post('/login',{email,password})
      setUser(data)
      alert('login successful')
      setRedirect(true)
    }catch(e){
      alert('login failed')
    }
  }

  const onChangeInput = (event:InputChangeEvent)=>{
    if(event.target.name==="email"){
      setEmail(event.target.value)
    }else if(event.target.name==="password"){
      setPassword(event.target.value)
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
        <form className="authForm py-12 bg-form_bg shadow-2xl">
          <h1 className=" text-4xl font-bold text-center mb-4">Login</h1>
          <div className="flex flex-col my-12 gap-8 items-center">
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