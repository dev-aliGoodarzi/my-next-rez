import React from "react";
import styles from "./ServicesCard.module.css";
import { IconType } from "react-icons";

type ServicesCardProps = {
  item: { id: string; name: string; ImageData: IconType; content: string };
  themeColor: string;
};

const ServicesCard: React.FC<ServicesCardProps> = ({
  item: { name, ImageData, content },
  themeColor,
}) => {
  return (
    <div
      className={styles.serviceCard}
      style={{ ["--theme-color" as any]: themeColor }}
    >
      <div className={styles.logoContainer} data-changeable="true">
        <ImageData />
      </div>

      <p className={styles.title} data-changeable="true" id={name}>
        {name}
      </p>

      <p className={styles.description} data-changeable="true" id={content}>
        {content}
      </p>
    </div>
  );
};

export default ServicesCard;
