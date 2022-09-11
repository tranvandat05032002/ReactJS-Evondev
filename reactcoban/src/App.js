import "./App.css";
import CardTailWind from "./component/card/CardTailwind";
import CardList from "./component/card/CardList";

// const theme = {
//   colors: {
//     blue: "#9999ff",
//   },
//   pink: "#ff99ff",
// };

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <div>
      <CardList>
        <CardTailWind secondary></CardTailWind>
        <CardTailWind></CardTailWind>
        <CardTailWind></CardTailWind>
        <CardTailWind></CardTailWind>
        <CardTailWind></CardTailWind>
        <CardTailWind></CardTailWind>
      </CardList>
    </div>
    // </ThemeProvider>
  );
}

export default App;
