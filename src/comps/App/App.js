import styles from "./App.module.css";
import { Paper } from "@material-ui/core";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

import { useEffect, useState } from "react";
import { LogIn } from "../LogIn/LogIn";
import { ListComponent } from "../List/ListComponent";
import { Footer } from "../Footer/Footer";
import { green, yellow } from "@material-ui/core/colors";

function App() {
  const setDarkModeDefiner = () => {
    const currentHour = new Date().getHours();
    return currentHour > 7 && currentHour < 20 ? false : true;
  };
  const [darkMode, setDarkMode] = useState(setDarkModeDefiner());
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState(false);

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: green,
      secondary: yellow,
    },
  });

  const brightTheme = createTheme();

  useEffect(() => {
    if (!userId) {
      setUserName("");
    }

    return () => {};
  }, [userId]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : brightTheme}>
      <Paper style={{ minHeight: "100vh" }}>
        <div className={styles.App}>
          <div className="AppTop">
            {userId ? (
              <ListComponent userId={userId} userName={userName} />
            ) : (
              <LogIn
                userName={userName}
                setUserName={setUserName}
                setUserId={setUserId}
              />
            )}
          </div>
          <Footer
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            setUserId={setUserId}
            userId={userId}
          />
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
