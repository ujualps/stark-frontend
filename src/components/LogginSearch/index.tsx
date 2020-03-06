import * as React from "react";
import searchicon from '../../search.jpeg'

export const LogginSearch = () => {
  return (
    <div className="wrap">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="Search..."
        />
        <button type="submit" className="searchButton">
          <li className="SearchButtonText">Search</li>
         
        </button>
      </div>
    </div>
  );
};