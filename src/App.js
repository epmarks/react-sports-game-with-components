import Game from "./components/game/Game";
import "./App.css";
import Kodiaks from "./components/images/kodiaks.jpg";
import Kong from "./components/images/kong.jpg";
import Pride from "./components/images/pride.jpg";
import Wolfpack from "./components/images/wolfpack.jpg";

function App(props) {
  const raccoons = {
    name: "Anchorage Kodiaks",
    logoSrc: Kodiaks,
  };

  const squirrels = {
    name: "Indianapolis Kong",
    logoSrc: Kong,
  };

  const bunnies = {
    name: "Phoenix Pride",
    logoSrc: Pride,
  };

  const hounds = {
    name: "Minneapolis Wolfpack",
    logoSrc: Wolfpack,
  };

  return (
    <div className="App">
      <Game
        venue="Blackwater Arena"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="877-CASH-NOW Stadium"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  );
}

export default App;
