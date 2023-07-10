import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { Important_function, PortfolioType } from "../../../Types/PortfolioType";
import githubImg from "../../../assets/github.png";
import ImageUI from "../../common/ImageUI";
import { useNavigate } from "react-router";
import { styles } from "../../UserInfoUI/UserUI_3D";

type ProjectCardType= {
  important_function:Important_function,
  index:number,
}

const ProjectCard = ({ important_function, index }:ProjectCardType) => {
  const router = useNavigate();
  function truncateText(text: string): string {
    if (text.length <= 80) {
      return text;
    } else {
      return text.slice(0, 80) + "...";
    }
  }
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
          {important_function.important_function_photo[0] && 
            <ImageUI
              src={important_function.important_function_photo[0]}
              className='w-full h-full object-cover rounded-2xl'
            />
          }
        </div>

        <div className='mt-5'>
          <h3 className='text-gray-300 font-bold text-[24px]'>핵심기능 {index+1}</h3>
          <p className='mt-2 text-white font-bold text-[18px] leading-10'>{important_function.important_function_desc}</p>
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
