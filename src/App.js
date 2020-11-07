import React, { Component, useEffect, useState } from "react";
import "./App.css";
import "h8k-components";

import Articles from "./components/Articles";

const title = "Sorting Articles";

function App({ articles }) {
  const [sortMethod, handleSort] = useState(()=>(a, b) => b.upvotes - a.upvotes);
  
  const handleUpvote = () => {
    handleSort(()=>(a, b) => b.upvotes - a.upvotes);
  };
  const handleDate = () => {
    handleSort(()=>(a, b) => {
      let numA = a.date.split("-").join("");
      let numB = b.date.split("-").join("");
      return numB - numA;
    });
  };

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          onClick={handleUpvote}
          data-testid="most-upvoted-link"
          className="small"
        >
          Most Upvoted
        </button>
        <button
          onClick={handleDate}
          data-testid="most-recent-link"
          className="small"
        >
          Most Recent
        </button>
      </div>
      <Articles articles={articles} order={sortMethod} />
    </div>
  );
}

export default App;
