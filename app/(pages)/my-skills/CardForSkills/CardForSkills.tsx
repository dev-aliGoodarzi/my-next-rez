// React
import React from "react";
// React

// CSS
import styles from "./CardForSkills.module.css";
// CSS

// Utils
import { between } from "@/app/Utils/between";
// Utils

type CardForSkillsProps = {
  item: { name: string; value: number };
  themeColor: string;
};

const CardForSkills: React.FunctionComponent<CardForSkillsProps> = ({
  item: { name, value },
  themeColor,
}) => {
  return (
    <div className={`${styles.cardForSkills} my-1`}>
      <div className={`${styles.aboutCurr} `}>
        <div className={`${styles.nameContainer} text-white`}>
          <span style={{ color: themeColor }} data-changeable={"true"}>
            {name}
          </span>{" "}
          <span>: </span>
          <span>{value}%</span>
        </div>
        <p
          className={`${styles.levelContainer}`}
          style={{ color: themeColor }}
          data-changeable={"true"}
        >
          {between(value, 0, 25) && "Starter"}
          {between(value, 26, 50) && "Intermediate"}
          {between(value, 51, 70) && "Advanced"}
          {between(value, 71, 100) && "Pro"}
        </p>
      </div>
      <div
        className={`${styles.likeProgress} mt-2`}
        style={{
          background: "#1d1e21e1",
        }}
      >
        <div
          style={{ width: `${value}%` }}
          className={`${styles.inner} `}
        ></div>
      </div>
    </div>
  );
};

export default CardForSkills;
