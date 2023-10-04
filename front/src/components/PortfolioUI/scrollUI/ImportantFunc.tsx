import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { Important_function } from "../../../Types/PortfolioType";
import ImageUI from "../../common/ImageUI";
import { styles } from "../../UserInfoUI/UserUI_3D";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import BookhabitImageUI from "../../common/BookhabitImageUI";

type ProjectCardType= {
  important_function:Important_function,
  index:number,
}

const ProjectCard = ({ important_function, index }:ProjectCardType) => {
  const location = useLocation();
    const [bookhaibtPage,setBookhabitPage] = useState<boolean>(false);
    
    useEffect(()=>{
        if(location.pathname.includes("/bookhabit/portfolio")){
        setBookhabitPage(true)
        }
    },[])

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[460px] w-full min-h-[500px]'
      >
        <div className='relative w-full h-[230px] cursor-pointer'>
          {!important_function.important_function_photo[0] && 
            <div
                className='bg-gray-300 w-full h-full object-fill rounded-2xl flex justify-center items-center'
            >등록된 이미지가 없습니다</div>
          }
          {
            bookhaibtPage ? 
            important_function.important_function_photo[0] && 
            <BookhabitImageUI
              src={important_function.important_function_photo[0]}
              className='w-full h-full object-cover rounded-2xl'
              alt="핵심기능 이미지"
            />
            :
            important_function.important_function_photo[0] && 
            <ImageUI
              src={important_function.important_function_photo[0]}
              className='w-full h-full object-cover rounded-2xl'
              alt="핵심기능 이미지"
            />
          }
        </div>

        <div className='mt-5'>
          <h3 className='text-gray-300 font-bold text-[24px]'>핵심기능 {index+1}</h3>
          <p className='mt-2 text-white font-light text-[20px] leading-10'>{important_function.important_function_desc}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

type ProjectsProps = {
  important_functions:Important_function[]
};

const ImportantFunc = ({ important_functions }: ProjectsProps) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>핵심기능</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {important_functions?.map((important_function, index) => (
          <ProjectCard 
            key={`important_functions-${index}`} 
            index={index} 
            important_function={important_function} />
        ))}
      </div>
    </>
  );
};

export default ImportantFunc
