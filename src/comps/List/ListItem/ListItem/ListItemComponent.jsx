import React, { useState } from "react";
import Moment from "react-moment";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DoneIcon from "@material-ui/icons/Done";
import UndoIcon from "@material-ui/icons/Undo";
import RemoveIcon from "@material-ui/icons/Remove";
import styles from "./ListItemComponent.module.css";
import { ButtonComponent } from "../../../UI/ButtonComponent/ButtonComponent";
import {
  deleteTodo,
  toggleDone,
} from "../../../../serverRequests/serverRequests";
import { ListItemEdit } from "../ListItemEdit/ListItemEdit";
export const ListItemComponent = ({
  text,
  todoId,
  updateList,
  done,
  added,
  updated,
}) => {
  const deleteButtonHandler = async () => {
    await deleteTodo(todoId);
    updateList();
  };
  const [editMode, setEditMode] = useState(false);

  const editButtonHandler = () => {
    setEditMode(true);
  };

  const doneButtonHandler = () => {
    toggleDone(todoId, done);
    updateList();
  };

  return editMode ? (
    <ListItem
      children={
        <ListItemEdit
          text={text}
          todoId={todoId}
          updateList={updateList}
          setEditMode={setEditMode}
          editMode={editMode}
        />
      }
    />
  ) : (
    <ListItem
      children={
        <>
          <ListItemText
            onClick={editButtonHandler}
            primary={<p className={styles.liText}>{text}</p>}
            secondary={
              updated ? (
                <span className={styles.span}>
                  <Moment format="[Added: ]DD/MM hh:mm [ ]" date={added} />
                  <Moment format="[Modified: ]DD/MM hh:mm" date={updated} />
                </span>
              ) : (
                <Moment format="DD/MM hh:mm" date={added} />
              )
            }
          />
          <ButtonComponent
            buttonIcon={done ? <UndoIcon /> : <DoneIcon />}
            color={done ? "secondary" : "primary"}
            clickHandler={doneButtonHandler}
            type="button"
          />
          <ButtonComponent
            buttonIcon={<RemoveIcon />}
            clickHandler={deleteButtonHandler}
            color="secondary"
            type="button"
          />
        </>
      }
      divider={true}
    />
  );
};
