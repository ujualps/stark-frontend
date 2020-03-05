import * as React from "react";
import "./styles.css";
import { PopularQuestionBox } from "../PopularQuestionBox";
import { AllPostContainer } from "../AllPostsContainer";

export const LoggedOutHomePage = () => {
  return (
    <main className="HomePageMain" data-testid="home">
      <div className="MainPageContents">
        <AllPostContainer />
      </div>
      <aside className="MainPageAside">
        <PopularQuestionBox />
      </aside>
    </main>
  );
};
