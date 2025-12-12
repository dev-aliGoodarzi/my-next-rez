// React
import React from "react";
// React

// CSS
import styles from "./Sidebar.module.css";
// CSS

// Components
import Link from "next/link";
// Components

// Icons
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { MdCastForEducation } from "react-icons/md";
// Icons

const Sidebar = () => {
  return (
    <aside className={`${styles.sidebarContainer} flex flex-col items-center `}>
      <p
        data-theme-effect={"true"}
        className="w-full flex items-center justify-center"
      >
        A
      </p>
      <Link
        href={"/"}
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Home"
        data-href={"/"}
      >
        <AiOutlineHome />
      </Link>
      <Link
        href={"/about-me"}
        data-tooltip-id="my-tooltip"
        data-tooltip-content="About Me"
        data-href={"/about-me"}
      >
        <BsPerson />
      </Link>

      <Link
        href={"/my-skills"}
        data-tooltip-id="my-tooltip"
        data-tooltip-content="My Skills"
        data-href={"/my-skills"}
      >
        <GiSkills />
      </Link>
      <Link
        href={"/my-education"}
        data-tooltip-id="my-tooltip"
        data-tooltip-content="My Education"
        data-href={"/my-education"}
      >
        <MdCastForEducation />
      </Link>
      {/* <Link
        href={"/my-projects"}
        data-tooltip-id="my-tooltip"
        data-tooltip-content="My Projects"
        data-href={"/my-projects"}
      >
        <AiOutlineFundProjectionScreen />
      </Link> */}
    </aside>
  );
};

export default Sidebar;
