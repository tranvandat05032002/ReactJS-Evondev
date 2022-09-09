import "./App.css";
import { GlobalStyled } from "./GlobalStyled";
import { ThemeProvider } from "styled-components";
import Card from "./component/card/Card";
import Card2 from "./component/card/Card2";
import CardList from "./component/card/CardList";

const theme = {
  colors: {
    blue: "#9999ff",
  },
  pink: "#ff99ff",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled></GlobalStyled>
      <CardList>
        <Card2 secondary={true}></Card2>
        <Card2></Card2>
        <Card2></Card2>
        <Card2></Card2>
        <Card2></Card2>
        <Card2></Card2>
      </CardList>
    </ThemeProvider>
  );
}

export default App;
