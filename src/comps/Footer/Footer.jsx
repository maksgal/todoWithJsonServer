import styles from "./footer.module.css";
import { Switch } from "@material-ui/core";

import { ButtonComponent } from "../UI/ButtonComponent/ButtonComponent";
export const Footer = ({ darkMode, setDarkMode, setUserId, userId }) => {
  const signOutButtonHandler = () => setUserId(null);

  const darkThemeToggler = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={styles.content}>
      <div className={styles.textAndLink}>
        <p className={styles.text}>ToDooDoo by</p>
        <a className={styles.link} href="https://github.com/maksgal">
          Maksgal
        </a>
      </div>
      {userId ? (
        <ButtonComponent
          className={styles.button}
          buttonIcon="Sign Out"
          clickHandler={signOutButtonHandler}
        />
      ) : null}

      <div className={styles.switch}>
        <Switch onChange={darkThemeToggler} checked={darkMode ? true : false} />
      </div>
    </div>
  );
};
