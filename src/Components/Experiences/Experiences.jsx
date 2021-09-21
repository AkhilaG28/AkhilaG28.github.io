import React, { useContext } from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import styles from "./Experiences.module.css";

const Experiences = () => {
  const { newTheme } = useContext(ThemeContext);
  return (
    <div className={styles.experiences}>
      <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
        Experience
      </h1>
      <div className={styles.borderBottom} />

      <div className={styles.container}>
        <div className={styles.position}>
          Associate
          <a href="https://www.stackbox.xyz/">(StackBox)</a>
        </div>
        <div className={styles.date}>Dec 2020 - present</div>
        <fieldset className={styles.responsibilites}>
          <legend>
            <h3> Roles & responsibilites </h3>
          </legend>
          <ul>
            <li>Developed and maintained the user interface.</li>
            <li>Implemented design on mobile websites.</li>
            <li>
              Developed membership feature using React Native, that is currently
              being used by different countries.
            </li>
            <li>Worked on the google maps to show tracking.</li>
            <li>Worked on several frontend web pages.</li>
          </ul>
        </fieldset>
      </div>
    </div>
  );
};

export default Experiences;
