import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function Question(props) {
  return <h1 className="header">{props.text}</h1>;
}

function App() {
  let questionIndex = 0;
  return (
    <div>
      <h1 className="header">Trivia!</h1>
      <Question text={data[questionIndex].question.text} />
    </div>
  );
}

export default App;
