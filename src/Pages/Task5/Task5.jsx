import { useEffect, useState } from "react";
import css from "./Task5.module.css";

export default function Task5() {
  const [userWord, setUserWord] = useState("");
  const [rhymeWords, setRhymeWords] = useState(null);

  useEffect(() => {
    const word = prompt(
      "Hello! If you enter a word I'll try to find rhyme for it :)",
      "Canada"
    );
    setUserWord(word);
  }, []);

  useEffect(() => {
    if (userWord) {
      async function fetchData(word) {
        try {
          const response = await fetch(
            `https://api.datamuse.com/words?rel_rhy=${word}`
          );
          const data = await response.json();
          if (data && data.length !== 0) {
            return setRhymeWords(data);
          }
        } catch (error) {
          alert(error);
        }
      }
      fetchData(userWord);
    }
  }, [userWord]);

  return (
    <div className={css.container}>
      <button
        type="button"
        className={css.button}
        onClick={() => window.location.reload()}
      >
        Try again
      </button>

      {rhymeWords ? (
        <>
          <h2>
            Your word: <span className={css.userWord}>{userWord}</span>
          </h2>
          <p className={css.subTitle}>Matches:</p>
          <ol className={css.list}>
            {rhymeWords.map(({ word, score }) => (
              <li key={word}>
                <span className={css.word}>{word}</span>
                <span className={css.scoreWord}>-- score:</span>
                <span className={css.scoreValue}>{score}</span>
              </li>
            ))}
          </ol>
        </>
      ) : (
        <h1 className={css.title}>No matches found</h1>
      )}
    </div>
  );
}

// (5/5)
// Write a small React JS web application that prompts the user to enter a word, and in response provides a list of words that rhyme with that word. To find which words rhyme you may use an API, for example https://www.datamuse.com/api/ or any API of your choice.

// Note: If you run into CORS issues you can launch chrome without CORS, and assume that we will do the same when we evaluate your submission.
