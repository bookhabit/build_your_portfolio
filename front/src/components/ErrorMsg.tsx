
const ErrorMsg = ({errorMsg}:{errorMsg:string}) => {
    console.log('컴포넌트렌더링')
    return (
        <div className="bg-UI_user_profile_bg h-screen flex items-center justify-center">
            <p className="text-xl text-gray-600">
                {errorMsg} 
            </p>
        </div>
    );
};

export default ErrorMsg;