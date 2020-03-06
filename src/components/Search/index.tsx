import * as React from "react";
import "./styles.css";
import searchicon from '../../search.jpeg'

interface SearchBarValues{
  setActiveNav: (nav: number) => void;
  setSearchText: (text: string) => void;
}

export const Search = (props: SearchBarValues) => {
  return (
    <div className="wrap">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="Search..."
          onChange={e => props.setSearchText(e.target.value)}
        />
        <button type="submit" className="searchButton">
          <li className="SearchButtonText">Search</li>
         
        </button>
      </div>
    </div>
  );
};
