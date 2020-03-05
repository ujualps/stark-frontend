import * as React from "react";
import "./styles.css";
import { LoggedOutMainHeader } from "../LoggedOutMainHeader";
import { LoggedOutHomePage } from "../LoggedOutHomePage";

interface LoggedOutHomePageValues {
  setUserId: (id: number) => void;
}

export const LoggedOutMainPage = (props: LoggedOutHomePageValues) => {
  return (
    <body className="MainPageMain" data-testid="mainpage">
      <LoggedOutMainHeader setUser={props.setUserId} />
      <body className="MainBody">
        <LoggedOutHomePage />
      </body>
    </body>
  );
};
