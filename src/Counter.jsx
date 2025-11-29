import { useEffect, useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  let incCounter = () => {
    setCount((currCount) => currCount + 1);
  };

  useEffect(function printSomething() {
    console.log("This is the use effect printing");
  });

  return (
    <>
      <h4>Count is {count} </h4>
      <button onClick={incCounter}>+1</button>
    </>
  );
}
