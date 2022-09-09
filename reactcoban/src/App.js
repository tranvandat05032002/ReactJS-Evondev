import "./App.css";
import Card from "./component/card/Card";
import CardList from "./component/card/CardList";
import Game2 from "./component/tictactoe/Game2";

function App() {
  return (
    <div className="wrapper">
      {/* <CardList>
        <Card secondary={true}></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </CardList> */}
      <Game2 />
    </div>
  );
}

export default App;
