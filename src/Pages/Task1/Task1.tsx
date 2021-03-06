import React, { useEffect, useState } from "react";
import css from './Task1.module.css';

export default function Task1() {
  const [number, setNumber] = useState(0);
  const [print, setPrint] = useState('')

  useEffect(() => {
    function printResult <T>(n: T){

      if (!n) {return}

      if (+n % 22 === 0) {
        return setPrint('candybar');
      }

      if (+n % 11 === 0) {
        return setPrint('bar');
      }

      if (+n % 2 === 0) {
        return setPrint('candy');
      }

      return setPrint(`${n}`);

    }
    printResult<number>(number)
  }, [number])
  

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement;
    setNumber(Number(form.number.value));
    form.reset()
  }

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit}>
        <label className={css.label} htmlFor="number">Enter a number</label>
        <input
          className={css.input}
          type="number"
          id='number'
          step='1'
          min='0'
        />
        <button type="submit">Submit</button>
      </form>
      {print && <p className={css.print}>Result: {print}</p>}
    </div>
  )
}



// (1/5)
// Write a function in Typescript, which receives an integer number and has the next logic:
// a) it prints "candy" if number is divisible by 2;
// b) it prints "bar" if number is divisible by 11;
// c) it prints "candybar" if number is divisible by 22;
// d) it prints the value of number for all other cases;
// note: number is a positive integer number;