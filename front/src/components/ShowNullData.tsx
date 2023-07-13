const ShowNullData = ({message}:{message:string}) => {
    return (
        <div className="bg-UI_user_profile_bg h-screen flex items-center justify-center">
            <p className="text-xl text-gray-600">{message}</p>
        </div>
    );
};

export default ShowNullData;