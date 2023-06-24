interface IProps{
    techName:string;
    sort:"resume"|"portfolio"|"UI"
}

const TechBorder = ({techName,sort}:IProps) => {
    return (
        <div className={`
        ${sort==="portfolio" && `bg-blue-300`} 
        ${sort==="resume" && `bg-gray-500`} 
        ${sort==="UI" && `bg-blue-300`} 
        py-2 px-4 flex items-center justify-center mr-3 text-sm text-white min-w-20 rounded-lg`}>
            <span>{techName}</span>
        </div>
    );
};

export default TechBorder;