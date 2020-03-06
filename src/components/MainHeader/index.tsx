import * as React from "react";
import "./styles.css";
import logo from "../../logo.jpg";
import {LogginSearch} from '../LogginSearch'

interface MainHeaderValue {
  setUser: (id: number) => void;
}

export const MainHeader = (props: MainHeaderValue) => {
  return (
    <header className="MainHeaderDiv" data-testid="mainheader">
      <img src={logo} alt="LOGO" />
      {/* <input
        placeholder="Search..."
        className="MainHeaderSearchInput"
        type="text"
      />
      <button className="MainHeaderSearchButton" type="button">
        Search
      </button> */}
      <LogginSearch />
      <button onClick={() => props.setUser(0)} className="MainHeaderA">
        Logout
      </button>
    </header>
  );
};
