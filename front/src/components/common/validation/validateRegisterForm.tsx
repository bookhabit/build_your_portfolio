export type ValidationRegisterForm = {
    nickName:string,
    name:string,
    email:string,
    password:string
  }

function validateRegisterForm(nickName:string,name:string,email:string,password:string,setErrorMessage:React.Dispatch<React.SetStateAction<ValidationRegisterForm>>):boolean {
  // name validation
    // 숫자가 포함되지 않는지 확인하는 정규 표현식
    const nameRegex = /^[^0-9]*$/;
    // 이메일 형식을 검증하는 정규 표현식
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    // 비밀번호를 검증하는 정규 표현식
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{10,}$/;
    
    if (!nickName) {
      setErrorMessage((prevState) => ({
        ...prevState,
        nickName: "닉네임을 입력해주세요",
      }));
      return false
    }
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
    if(email.length>35){
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

export default validateRegisterForm;