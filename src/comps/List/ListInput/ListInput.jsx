import { useState } from "react";
import styles from "./ListInput.module.css";

import { sendNewTodo } from "../../../serverRequests/serverRequests";
import { ButtonComponent } from "../../UI/ButtonComponent/ButtonComponent";
import { InputComponent } from "../../UI/Input/InputComponent";
export const ListInput = ({ userId, updateList }) => {
  const [newTodo, setNewTodo] = useState("");
  const inputHandler = (e) => setNewTodo(e.target.value);
  const addButtonHandler = async (e) => {
    e.preventDefault();
    if (newTodo) {
      await sendNewTodo(userId, newTodo);
      setNewTodo("");
      updateList();
    }
  };
  return (
    <form className={styles.listInput}>
      <div className={styles.inputField}>
        <InputComponent
          placeholder="Add a todo"
          inputHandler={inputHandler}
          value={newTodo}
          fullWidth={true}
        />
      </div>
      <ButtonComponent
        buttonIcon="add"
        clickHandler={addButtonHandler}
        buttonText="Add"
        type="submit"
      />
    </form>
  );
};
