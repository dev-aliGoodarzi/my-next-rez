// Next
import { Metadata } from "next";
// Next

// React
import React, { useEffect } from "react";
// React

// CSS
import styles from "./aboutMe.module.css";
// CSS

// Components
import ServicesCard from "./ServicesCard/ServicesCard";
// Components

// Data
import { myServices } from "@/app/Data/myServices";
import { currTheme } from "@/app/Data/currTheme";
// Data

const page = () => {
  return (
    <div
      className={`${styles.aboutMeContainer} w-full h-full flex flex-col items-center p-4 pb-8`}
    >
      <p className={styles.title}>ABOUT ME</p>
      <p className={styles.aboutMe}>
        <span style={{ color: currTheme }} data-changeable={true}>
          Hello, I’m Ali
        </span>
        , Full-Stack web-developer based on Iran / Tehran. I have rich
        experience in web Developing & building and customization . Also I am
        good at{" "}
        <span style={{ color: currTheme }} data-changeable={true}>
          MERN STACK
        </span>{" "}
        Developing .
        <br />
        <span>
          Im Trying To be{" ---- "}
          <span style={{ color: currTheme }} data-changeable={true}>
            Software Engineer
          </span>
          {" ---- "}
          {"  "} {" :) "}
        </span>
      </p>

      {myServices.map((item) => (
        <ServicesCard key={item.id} item={item} themeColor={currTheme} />
      ))}
    </div>
  );
};

export default page;
