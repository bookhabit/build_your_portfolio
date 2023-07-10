import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { fadeIn, textVariant } from "../../utils/motion";
import { activityType, carrerType } from "../../../Types/ResumeType";
import { styles } from "../../UserInfoUI/UserUI_3D";


type LearnedType= {
  learned:string;
}

type ProcessType = {
  process:string;
}


const LearnedCard = ({ learned }:LearnedType) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    >
      <div className="w-full h-full">
        <p
          className='text-white text-[20px] font-semibold'
          style={{ margin: 0 }}
        >
          {learned}
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

const ProcessCard = ({ process }:ProcessType) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    >
      <div>
        <p
          className='text-white text-[20px] font-semibold'
          style={{ margin: 0 }}
        >
          {process}
        </p>
      </div>
    </VerticalTimelineElement>
  );
};


type ExperienceProps = {
  learned:string;
  process:string;
};

const TimeLine = ({learned,process}:ExperienceProps) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>
          배운점
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          <LearnedCard
              learned={learned}
          />
        </VerticalTimeline>
      </div>

      <motion.div variants={textVariant()} className="mt-40">
        <h2 className={`${styles.sectionHeadText}`}>
          개발과정 및 문제해결
        </h2>
      </motion.div>
      <div className='mt-20 mb-40 flex flex-col'>
        <VerticalTimeline>
          <ProcessCard
            process={process}
           />
        </VerticalTimeline>
      </div>
    </>
  );
};

export default TimeLine
