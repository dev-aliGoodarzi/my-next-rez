// React
import React from "react";
// React

// CSS
import styles from "./CardForEducation.module.css";
import { IconType } from "react-icons";
// CSS

type CardForEducationProps = {
  item: { id: string; name: string; teacher: string; Icon: IconType };
  themeColor: string;
};
const CardForEducation: React.FunctionComponent<CardForEducationProps> = ({
  item: { id, name, teacher, Icon },
  themeColor,
}) => {
  return (
    <div
      className={`${styles.cardContainer} `}
      data-theme-effect={"true"}
      data-theme-effect-property="border"
    >
      <div className={styles.left}>
        <div className={styles.top}>
          <p
            className={styles.name}
            style={{ color: themeColor }}
            data-changeable={"true"}
          >
            <span style={{ color: "#fff" }}>Course Name : </span>
            {name}
          </p>
        </div>
        <p className={styles.teacherName}>
          Teacher Name :{" "}
          <span style={{ color: themeColor }} data-changeable={"true"}>
            {teacher}
          </span>
        </p>
      </div>
      <div
        className={styles.right}
        style={{ color: themeColor }}
        data-changeable={"true"}
      >
        <Icon />
      </div>
    </div>
  );
};

export default CardForEducation;
