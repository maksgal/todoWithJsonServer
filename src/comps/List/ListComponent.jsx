import React, { useState, useEffect, useCallback } from "react";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import styles from "./ListComponent.module.css";

import { getUsersList } from "../../serverRequests/serverRequests";
import { ListInput } from "./ListInput/ListInput";
import { ListItemComponent } from "./ListItem/ListItem/ListItemComponent";
import { capitalize } from "@material-ui/core";

export const ListComponent = ({ userId, userName }) => {
  const [todoArr, setTodoArr] = useState([]);

  const updateList = useCallback(async () => {
    const fetchedTodos = await getUsersList(userId);
    setTodoArr(fetchedTodos);
  }, [userId]);

  useEffect(() => {
    updateList();
  }, [userId, updateList]);

  return (
    <div className={styles.ListComponent}>
      <Typography variant="h5" children={`Welcome ${capitalize(userName)}!`} />
      <ListInput userId={userId} updateList={updateList} />
      <div className={styles.list}>
        <List>
          {todoArr
            .sort((a, b) => {
              return a.added - b.added;
            })
            .map((el) => (
              <ListItemComponent
                key={el.id}
                todoId={el.id}
                text={el.text}
                done={el.done}
                added={el.added}
                updated={el.updated}
                updateList={updateList}
              />
            ))}
        </List>
      </div>
    </div>
  );
};
