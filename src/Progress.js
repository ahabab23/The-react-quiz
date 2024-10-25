import React from "react";

export default function Progress({
  index,
  numQuestions,
  points,
  answer,
  totalPoints,
}) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer != null)} />
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{totalPoints}
      </p>
    </header>
  );
}
