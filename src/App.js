import "./App.css";
import "navigation/RouterConfig";
import "react-router-dom";
import "fontsource-roboto";
import HomeContainer from "pages/Home";
import LoginContainer from "pages/LoginPage";
import { muiTheme } from "styles/muiTheme";
import { Container } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={muiTheme}>
        <div className="mainContainer">
          {/* <HomeContainer /> */}
      
            <LoginContainer />
       
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
