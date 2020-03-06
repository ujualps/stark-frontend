import * as React from "react";
import "./styles.css";
import logo from "../../logo.jpg";
import { Search } from "../Search";

interface MainHeaderValue {
  setUser: (id: number) => void;
  setSearchText: (text: string) => void;
  setActiveNav: (nav: number) => void;
}

export const LoggedOutMainHeader = (props: MainHeaderValue) => {
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
      <Search setActiveNav={props.setActiveNav} setSearchText={props.setSearchText}/>
      <button onClick={() => props.setUser(-1)} className="MainHeaderA">
        SignUp or Login
      </button>
    </header>
  );
};
