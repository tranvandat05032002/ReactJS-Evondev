import "./App.css";
import HackerNewsWithUseReducer from "./component/news/HackerNewsWithUseReducer";
// import AgainPhoto from "./component/photo/AgainPhoto";
// import Photos from "./component/photo/Photos";
// import HackerNews from "./component/news/HackerNews";

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
      {/* <AgainPhoto></AgainPhoto> */}
      {/* <HackerNews></HackerNews> */}
      <HackerNewsWithUseReducer></HackerNewsWithUseReducer>
    </div>
    // </ThemeProvider>
  );
}

export default App;
