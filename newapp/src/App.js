import "./App.css";
import moviecard from "./moviecard";
import SearchIcon from "./search-icon.svg";
import React, { useEffect } from "react";
// import { useState } from 'react';
// 63e6e1fe

const API_URL = "http://www.omdbapi.com/?&apikey=63e6e1fe";

const App = () => {
  const searchmovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    searchmovie("");
  }, []);

  return (
    <div className="app">
      <h1>BigFlix</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value=""
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>

      <div className="container">
        <moviecard />
      </div>
    </div>
  );
};

export default App;
