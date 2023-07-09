import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { fadeIn, textVariant } from "../../utils/motion";
import { styles } from "../UserUI_3D";
import { activityType, carrerType } from "../../../Types/ResumeType";


type CareerCardType= {
  career: carrerType 
}

type ActivityCardType = {
  activity: activityType 
}


const CareerCard = ({ career }:CareerCardType) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={career?.period.start+" ~ "+career?.period.end}
    >
      <div>
        <h3 className='text-white text-[24px] font-bold mb-3'> {career?.companyName}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {career.jobDetail}
        </p>

        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {career.mainTask.map((task, index) => (
            <li
              key={`experience-task-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {task}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const AcitivityCard = ({ activity }:ActivityCardType) => {
  console.log(activity)
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={activity?.period.start+"~"+activity?.period.end}
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
          {activity.activity.map((activity, index) => (
            <li
              key={`experience-activity-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {activity}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};


type ExperienceProps = {
  careers: carrerType[] | undefined
  activities:activityType[] | undefined
};

const Experience = ({careers,activities}:ExperienceProps) => {
  console.log(activities)
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
