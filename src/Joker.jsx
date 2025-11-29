import { useEffect, useState } from "react";

export default function Joker() {
  const [joke, setJoke] = useState({ setup: "", punchline: "" });
  const URL = "https://official-joke-api.appspot.com/random_joke";

  const getNewJoke = async () => {
    let res = await fetch(URL);
    let jsonRes = await res.json();
    setJoke({ setup: jsonRes.setup, punchline: jsonRes.punchline });
  };

  useEffect(() => {
    getNewJoke();
  }, []);

  return (
    <>
      <h3>Joker</h3>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getNewJoke}>New Joke</button>
    </>
  );
}
