import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { fadeIn, textVariant } from "../../utils/motion";
import { styles } from "../UserUI_3D";
import { acitivityType, carrerType } from "../../../Types/ResumeType";


type CareerCardType= {
  career: carrerType 
}

type AcitivityCardType = {
  activity: acitivityType 
}

// 테스트데이터 나중에 바꿔야함

const testCareer = {
  points: [
    "Developing and maintaining web applications using React.js and other related technologies.",
    "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    "Implementing responsive design and ensuring cross-browser compatibility.",
    "Participating in code reviews and providing constructive feedback to other developers.",
  ],
}
  

const CareerCard = ({ career }:CareerCardType) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={career?.period}
    >
      <div>
        <h3 className='text-white text-[24px] font-bold mb-3'> {career?.commanyName}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          직무이름 ( 테스트 )
        </p>

        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {testCareer.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const AcitivityCard = ({ activity }:AcitivityCardType) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={activity?.period}
    >
      <div>
        <h3 className='text-white text-[24px] font-bold mb-3'> {activity?.activityName}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          활동이력
        </p>
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {testCareer.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};


type ExperienceProps = {
  careers: carrerType[] | undefined
  activities:acitivityType[] | undefined
};

const Experience = ({careers,activities}:ExperienceProps) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>
          경력사항
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {careers?.map((career, index) => (
            <CareerCard
              key={`career-${index}`}
              career={career}
            />
          ))}
        </VerticalTimeline>
      </div>

      <motion.div variants={textVariant()} className="mt-40">
        <h2 className={`${styles.sectionHeadText}`}>
          대외활동
        </h2>
      </motion.div>
      <div className='mt-20 mb-40 flex flex-col'>
        <VerticalTimeline>
          {activities?.map((activity, index) => (
            <AcitivityCard
              key={`activity-${index}`}
              activity={activity}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience
