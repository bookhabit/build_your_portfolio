import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../UserUI_3D";
import { fadeIn, textVariant } from "../../utils/motion";
import { PortfolioType } from "../../../Types/PortfolioType";
import githubImg from "../../../assets/github.png";
import ImageUI from "../../common/ImageUI";
import { useNavigate } from "react-router";

type ProjectCardType= {
  portfolio:PortfolioType,
  index:number
}

const ProjectCard = ({ portfolio, index }:ProjectCardType) => {
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
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px] cursor-pointer' onClick={()=>router(`/portfolio/${portfolio._id}`)}>
          {portfolio.photos[0] && 
            <ImageUI
              src={portfolio.photos[0]}
              className='w-full h-full object-cover rounded-2xl'
              alt="포트폴리오 이미지"
            />
          }

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            {portfolio.demoLink.githubURL && 
              <div
                onClick={() => window.open(portfolio.demoLink.githubURL, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={githubImg}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            }
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{portfolio.title}</h3>
          <p className='mt-2 text-secondary text-[20px]'>{truncateText(portfolio.introduce)}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

type ProjectsProps = {
  portfolios:PortfolioType[] | null | undefined
};

const Projects = ({ portfolios }: ProjectsProps) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My Portfolio</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {portfolios?.map((portfolio, index) => (
          <ProjectCard key={`project-${index}`} index={index} portfolio={portfolio} />
        ))}
      </div>
    </>
  );
};

export default Projects
