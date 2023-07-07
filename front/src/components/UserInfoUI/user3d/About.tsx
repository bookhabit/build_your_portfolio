import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { styles } from "../UserUI_3D";

type ServiceCardType= {
  index:number,
  title:string,
}

const ServiceCard = ({ index, title }:ServiceCardType) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[120px] flex justify-evenly items-center flex-col'
      >
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


type AboutProps = {
  skills: string[] | undefined;
  title:string;
};

const About = ({ skills,title }: AboutProps) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>{title}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      </motion.p>

      <div className='my-20 flex flex-wrap justify-center md:justify-start gap-10'>
        {skills?.map((skill, index) => (
          <ServiceCard key={skill} index={index} title={skill}/>
        ))}
      </div>
    </>
  );
};

export default About;
