import React, { useContext } from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import styles from "./TechStacks.module.css";

const TechStacks = () => {
  const { newTheme } = useContext(ThemeContext);
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="800"
    >
      <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
        Proficiencies
      </h1>
      <div className={styles.borderBottom} />

      <div className={styles.container}>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-html5-plain colored" />
          <span>HTML</span>
        </div>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-css3-plain colored" />
          <span>CSS</span>
        </div>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-javascript-plain colored" />
          <span>Javascript</span>
        </div>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-react-original colored" />
          <span>React</span>
        </div>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i style={{ color: "#7248B6" }} className="devicon-redux-original" />
          <span>Redux</span>
        </div>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-react-original colored" />
          <span>React Native</span>
        </div>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i class="devicon-typescript-plain"></i>
          <span>Typescript</span>
        </div>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i class="devicon-tailwindcss-original-wordmark"></i>
          <span>Tailwind CSS</span>
        </div>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i class="devicon-materialui-plain"></i>
          <span>Material UI</span>
        </div>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-chakraUI-plain colored" />
          <span>Chakra UI</span>
        </div>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i class="devicon-bootstrap-plain"></i>
          <span>Bootstrap</span>
        </div>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i style={{ color: "#509941" }} className="devicon-nodejs-plain" />
          <span>Node</span>
        </div>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-express-original" />
          <span>Express</span>
        </div>
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-mongodb-plain colored" />
          <span>MongoDB</span>
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
