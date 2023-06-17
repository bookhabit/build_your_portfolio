import {Link, useNavigate} from "react-router-dom";
import { useState} from "react";
import axios from "axios";
import { Button, Input, Label, Textarea } from "../elements";


export default function ReigsterPage() {
  const [name,setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [redirect, setRedirect] = useState<boolean>(false);

  const router = useNavigate();

  async function registerUser(event:React.FormEvent){ 
    event.preventDefault();
    try{
      await axios.post('/register',{
        name:name,
        email:email,
        password:password
      })
      alert('register successful.')
      setRedirect(true)
    }catch(e){
      alert('register failed')
    }
  }

  if(redirect){
    router('/login')
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <Input 
                label="회원가입"
                type="text"
                placeholder="이름을 입력해주세요"
                _onChange={()=>console.log('이벤트')}
                sort="authInput"
            />
          <Label
                icon="별 아이콘"
                sort="authInput"
                label="제목"
          />
          <Textarea
                label="설명"
                placeholder="이름을 입력해주세요"
                _onChange={()=>console.log('이벤트')}
                sort="authInput"
          />
          <Button
                text="로그인"
                _onClick={()=>console.log('러븥')}
                sort="social"
          />
          <div>구분선 테스트</div>
          <input 
                type="text" 
                placeholder="이 현진"
                value={name}
                onChange={ev=>setName(ev.target.value)}
                className="bg-red-50"
                />
          <input type="email"
                 placeholder="your@email.com"
                 value={email}
                 onChange={ev => setEmail(ev.target.value)} />
          <input type="password"
                 placeholder="password"
                 value={password}
                 onChange={ev => setPassword(ev.target.value)} />
          <button className="primary">Register</button>
          <div className="text-center py-2 text-gray-500">
            if you have an account? 
            <Link className="underline text-black ml-4" to={'/login'}>
                Login now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}