import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import LoginPage from "./scenes/loginPage/LoginPage.jsx";
import HomePage from "./scenes/homePage";
import ProfilePage from "./scenes/profilePage/ProfilePage.jsx";
import { memo, useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { themeSettings } from "./theme.js";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(memo)), [mode]);
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline></CssBaseline>
            <Routes>
              <Route path="/" element={<LoginPage></LoginPage>}></Route>
              <Route path="/home" element={<HomePage></HomePage>}></Route>
              <Route
                path="/profile/:userId"
                element={<ProfilePage></ProfilePage>}
              ></Route>
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
