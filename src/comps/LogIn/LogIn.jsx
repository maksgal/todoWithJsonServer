import React from "react";
import styles from "./Login.module.css";

import { ButtonComponent } from "../UI/ButtonComponent/ButtonComponent";
import { InputComponent } from "../UI/Input/InputComponent";
import {
  createNewUser,
  getUserId,
  checkIfUserExists,
} from "../../serverRequests/serverRequests";

export const LogIn = ({ setUserId, userName, setUserName }) => {
  const loginButtonHandler = async (e) => {
    e.preventDefault();
    if (!(await checkIfUserExists(userName))) {
      await createNewUser(userName);
    }
    setUserId(await getUserId(userName));
  };
  const inputHandler = (e) => {
    setUserName(e.target.value);
  };

  return (
    <form className={styles.login}>
      <InputComponent
        inputHandler={inputHandler}
        value={userName}
        fullWidth={true}
        inputProps={{ min: 0, style: { textAlign: "center" } }}
      />
      <ButtonComponent
        buttonIcon="Sign In"
        clickHandler={loginButtonHandler}
        type="submit"
      />
    </form>
  );
};
