import * as React from "react";
import "./styles.css";
import { LoggedOutMainHeader } from "../LoggedOutMainHeader";
import { LoggedOutHomePage } from "../LoggedOutHomePage";
import {SearchPage} from '../SearchPage';
interface LoggedOutHomePageValues {
  setUserId: (id: number) => void;
}

export const LoggedOutMainPage = (props: LoggedOutHomePageValues) => {
  const [searchText, setSearchText] = React.useState("");
  const [actNav, setActNav] = React.useState(3);

  const setSeachTextFun = (text: string) => {
    setSearchText(text);
  };
  const setActiveNav = (index: number) => {
    setActNav(index)
  }

  const setContent = () => {
    if(actNav === 0){
      return <LoggedOutHomePage />;
    }else if(actNav === 3){
      return <SearchPage searchText={searchText}/>
    }
  }


  return (
    <body className="MainPageMain" data-testid="mainpage">
      <LoggedOutMainHeader
        setUser={props.setUserId}
        setSearchText={setSeachTextFun}
        setActiveNav={setActiveNav}
      />
      <body className="MainBody">
        {setContent()}
      </body>
    </body>
  );
};
