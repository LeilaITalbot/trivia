import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function Answer(props) {
  return <p>{props.text}</p>;
}

function NextQuestion() {
  return <button>Next Question</button>;
}

function Question(props) {
  return (
    <div>
      <h1>{props.text}</h1>
      {props.choices.map((choice) => {
        return <Answer text={choice} />;
      })}
    </div>
  );
}

function App() {
  let questionIndex = 0;
  let questionData = data[questionIndex];

  let questionChoices = questionData.question.choices;
  let correctChoiceIndex = questionData.question.correct_choice_index;
  let question = questionData.question.text;

  let [isAnswered, setIsAnswered] = useState("Answer goes here");
  return (
    <div>
      <h1>Trivia!</h1>
      <Question text={question} choices={questionChoices} />
      <button
        onClick={() =>
          setIsAnswered(
            "The correct answer is " + questionChoices[correctChoiceIndex]
          )
        }
      >
        Show Answer
      </button>
      <p>{isAnswered}</p>
      <NextQuestion />
    </div>
  );
}

export default App;
