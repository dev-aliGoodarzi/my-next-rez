"use client";
// React
import React, { useCallback, useEffect, useMemo, useState } from "react";
// React

// CSS
import styles from "./ChangeLinksColor.module.css";
// CSS

// Modules
import { usePathname } from "next/navigation";
import ChangeTheme from "./ChangeTheme/ChangeTheme";
// Modules

const ChangeLinksColor = () => {
  const [themeColor, setThemeColor] = useState<string>("rgb(238, 97, 146)");

  const currPath = usePathname();

  const colorOfSvgChanger = useCallback(() => {
    const all_A_tags = document.getElementsByTagName("a");
    if (all_A_tags.length !== 0) {
      for (let i = 0; i <= all_A_tags.length - 1; i++) {
        if (all_A_tags[i].getAttribute("data-href") === currPath) {
          const x: any = all_A_tags[i].querySelector("svg");
          if (!x) return;
          x.style.fill = themeColor;
        } else {
          const x: any = all_A_tags[i].querySelector("svg");
          if (!x) return;
          x.style.fill = "#fff";
        }
      }
    }
  }, [themeColor, currPath]);

  const changeBackgroundColorOfThemeEffectElements = useCallback(() => {
    console.log(themeColor);
    const allEments = document.querySelectorAll("*");
    if (allEments.length === 0) return;
    for (let i = 0; i <= allEments.length - 1; i++) {
      if (allEments[i].getAttribute("data-changeable") === "true") {
        allEments[i].classList.add("current-theme");
      } else {
        allEments[i].classList.remove("current-theme");
      }
    }
  }, [themeColor]);

  useEffect(() => {
    colorOfSvgChanger();
    changeBackgroundColorOfThemeEffectElements();
    // changeBorderColorByThemeChange();
  });

  return (
    <>
      <style type="text/css">
        {`
      .current-theme {
      color : ${themeColor} !important;
      }
      `}
      </style>
      <ChangeTheme setTheme={setThemeColor} />
    </>
  );
};

export default ChangeLinksColor;
