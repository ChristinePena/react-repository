import "./App.css";
import Joke from "./components/Joke";
import jokesData from "./jokesData";

function App() {
  const jokesElements = jokesData.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />;
  });

  return <main>{jokesElements}</main>;
}

export default App;
