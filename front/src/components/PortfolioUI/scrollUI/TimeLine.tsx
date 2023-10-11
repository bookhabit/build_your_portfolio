import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import {  textVariant } from "../../utils/motion";
import { styles } from "../../UserInfoUI/UserUI_3D";


type TimeLineType= {
  content:string;
}

const TimeLineCard = ({ content }:TimeLineType) => {
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
          className='text-white'
          style={{ margin: 0 }}
        >
          {content}
        </p>
      </div>
    </VerticalTimelineElement>
  );
};


type ExperienceProps = {
  learned:string[];
  process:string[];
};

const TimeLine = ({learned,process}:ExperienceProps) => {
  return (
    <>
      
      <h2 className={`${styles.sectionHeadText}`}>
        배운점
      </h2>
      

      <div className='mt-20 flex flex-col mb-20'>
        <VerticalTimeline>
          {learned.map((learnedDetail)=>(
            <TimeLineCard
                content={learnedDetail}
                key={learnedDetail}
            />
          ))}
        </VerticalTimeline>
      </div>

      <h2 className={`${styles.sectionHeadText}`}>
          개발과정 및 문제해결
      </h2>
      <div className='mt-20 mb-40 flex flex-col'>
        <VerticalTimeline>
          {process.map((processDetail)=>(
            <TimeLineCard
              content={processDetail}
              key={processDetail}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default TimeLine
