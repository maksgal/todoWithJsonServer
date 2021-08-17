import React, { useState, useEffect, useRef } from "react";
import SaveIcon from "@material-ui/icons/Save";
import CloseIcon from "@material-ui/icons/Close";
import styles from "./ListItemEdit.module.css";

import { updateTodo } from "../../../../serverRequests/serverRequests";
import { ButtonComponent } from "../../../UI/ButtonComponent/ButtonComponent";
import { InputComponent } from "../../../UI/Input/InputComponent";

export const ListItemEdit = ({
  text,
  todoId,
  setEditMode,
  editMode,
  updateList,
}) => {
  const liRef = useRef();
  useEffect(() => {
    const clickOutsideEditorHandler = (e) => {
      if (editMode && !liRef.current.contains(e.target)) setEditMode(false);
    };
    document.addEventListener("mousedown", clickOutsideEditorHandler);
    return () => {
      document.removeEventListener("mousedown", clickOutsideEditorHandler);
    };
  }, [editMode, setEditMode]);

  const [editedText, setEditedText] = useState(text);
  const saveButtonHandler = (e) => {
    e.preventDefault();
    if (editedText) {
      updateTodo(todoId, text, editedText);
      updateList();
      setEditMode(false);
    }
  };
  const cancelButtonHandler = (e) => {
    e.preventDefault();
    setEditMode(false);
  };
  const inputHandler = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <form className={styles.editingForm} ref={liRef}>
      <InputComponent
        type="text"
        value={editedText}
        inputHandler={inputHandler}
        fullWidth={true}
      />
      <ButtonComponent
        buttonIcon={<SaveIcon />}
        clickHandler={saveButtonHandler}
        color="primary"
        type="submit"
      />
      <ButtonComponent
        buttonIcon={<CloseIcon />}
        clickHandler={cancelButtonHandler}
        color="secondary"
        type="button"
      />
    </form>
  );
};
