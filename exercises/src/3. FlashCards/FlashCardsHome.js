import { useState } from "react";
import "./styles.css";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript"
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components"
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX"
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props"
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook"
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element"
  }
];

const FlashCardsHome = () => {
  const [selectedId, setSelectedId] = useState(3457)

  return <div className="flashcards">
    {
      questions.map((item) => {
        // return <div key={item.id} onClick={setSelectedId(item.id)}>
        return <div 
          key={item.id}
          onClick={() => setSelectedId(item.id !== selectedId ? item.id : null)}
          className={item.id === selectedId ? "selected" : ""}
        >
          <p>{item.id === selectedId ? item.answer : item.question}</p>
        </div>
      })
    }
  </div>;
}

export { FlashCardsHome };