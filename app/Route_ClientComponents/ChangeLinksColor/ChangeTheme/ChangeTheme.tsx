"use client";
// React
import React from "react";
// React

// CSS
import styles from "./ChangeTheme.module.css";
// CSS

type ChangeThemeProps = {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const ChangeTheme: React.FunctionComponent<ChangeThemeProps> = ({
  setTheme,
}) => {
  const themes = [
    {
      id: "c-1",
      name: "Emerald",
      colorCode: "linear-gradient(135deg, #2ecc71, #1abc9c)",
      solid: "#2ecc71",
    },
    {
      id: "c-2",
      name: "Sky",
      colorCode: "linear-gradient(135deg, #3498db, #5dade2)",
      solid: "#3498db",
    },
    {
      id: "c-3",
      name: "Amber",
      colorCode: "linear-gradient(135deg, #f39c12, #f1c40f)",
      solid: "#f39c12",
    },
    {
      id: "c-4",
      name: "Rose",
      colorCode: "linear-gradient(135deg, #e84393, #fd79a8)",
      solid: "#e84393",
    },
    {
      id: "c-5",
      name: "Violet",
      colorCode: "linear-gradient(135deg, #9b59b6, #be90d4)",
      solid: "#9b59b6",
    },
    {
      id: "c-6",
      name: "Coral",
      colorCode: "linear-gradient(135deg, #e74c3c, #ff7675)",
      solid: "#e74c3c",
    },
    {
      id: "c-7",
      name: "Forest",
      colorCode: "linear-gradient(135deg, #16a085, #27ae60)",
      solid: "#16a085",
    },
    {
      id: "c-8",
      name: "Slate",
      colorCode: "linear-gradient(135deg, #7f8c8d, #95a5a6)",
      solid: "#7f8c8d",
    },
  ];
  return (
    <div className={styles.themeContainer}>
      <p className={styles.title}>Select Theme</p>

      <div className={styles.themesColorsContainer}>
        {themes.map((item) => (
          <span
            key={item.id}
            className={styles.colorDot}
            style={{
              background: item.colorCode,
              color: item.solid, // for glow ring
            }}
            onClick={() => {
              setTheme(item.solid); // keep theme logic clean
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ChangeTheme;
