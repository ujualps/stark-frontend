import * as React from "react";
import "./App.css";
import { MainHeader } from "./components/MainHeader";
// import {LoginBox} from './components/LoginBox'
import { LoginPage } from "./components/LoginPage";
import { MainPage } from "./components/MainContainer";
import { LoggedOutMainPage } from "./components/LoggedOutMainContainer";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [UserId, setUserId] = React.useState(0);

  const setUserLoggedInStatus = (user: number) => {
    setUserId(user);
  };
  if (UserId === 0) {
    return (
      <div className="App">
        <LoggedOutMainPage setUserId={setUserLoggedInStatus} />
      </div>
    );
  } else if (UserId === -1) {
    return (
      <div className="App">
        <LoginPage setUser={setUserLoggedInStatus} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <MainPage setUser={setUserLoggedInStatus} userId={UserId} />
      </div>
    );
  }
}

export default App;
