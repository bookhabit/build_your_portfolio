export type ValidationLoginForm = {
    email:string,
    password:string
}

function validateLoginForm(email:string,password:string,setErrorMessage:React.Dispatch<React.SetStateAction<ValidationLoginForm>>):boolean {
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

export default validateLoginForm;