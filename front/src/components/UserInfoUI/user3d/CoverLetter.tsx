import ImageUI from "../../common/ImageUI";
import { fadeIn, textVariant } from "../../utils/motion";
import { styles } from "../UserUI_3D";
import { motion } from 'framer-motion';

type FeedbackCardType = {
  education:string,
  birth:string,
  introduceMyself:string,
  profileImg:string,
}

const FeedbackCard = ({
education,birth,introduceMyself,profileImg
}:FeedbackCardType) => (
  <motion.div
    variants={fadeIn("", "spring", 1 * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{education}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {birth}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {introduceMyself}
          </p>
        </div>

        <ImageUI
          src={profileImg}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

type PropsType = {
  education:string|undefined,
  birth:string|undefined
  introduceMyself:string|undefined
  profileImg:string|undefined
}

const CoverLetter = ({education,birth,introduceMyself,profileImg}:PropsType) => {
  console.log(education,birth,introduceMyself,profileImg)
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>자기소개.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {education&&birth&&introduceMyself&&profileImg &&
          <FeedbackCard education={education} birth={birth} introduceMyself={introduceMyself} profileImg={profileImg} />
        }
      </div>
    </div>
  );
};

export default CoverLetter;
