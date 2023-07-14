
const ErrorMsg = ({errorMsg}:{errorMsg:string}) => {
    
    return (
        <div className="bg-UI_user_profile_bg h-screen flex items-center justify-center">
            <p className="text-xl text-gray-600">
                {errorMsg} 
            </p>
        </div>
    );
};

export default ErrorMsg;