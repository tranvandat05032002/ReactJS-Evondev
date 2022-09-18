import "./App.css";
import Blog from "./component/youtube/Blog";
// import HackerNews from "./component/news/HackerNews";
// import DropDown from "./component/useRef/DropDown";
// import FocusInput from "./component/useRef/input/FocusInput";
// import TextareaAutoResize from "./component/useRef/TextareaAutoResize";
// import Counter from "./component/useRef/Counter/Counter";
// import CounterClass from "./component/useRef/Counter/CounterClass";
// import HackerNewsWithUseReducer from "./component/news/HackerNewsWithUseReducer";
// import AgainPhoto from "./component/photo/AgainPhoto";
// import Photos from "./component/photo/Photos";

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
      {/* <Counter></Counter> */}
      {/* <CounterClass></CounterClass> */}
      {/* <FocusInput></FocusInput> */}
      {/* <TextareaAutoResize></TextareaAutoResize> */}
      {/* <DropDown></DropDown> */}
      {/* <HackerNews></HackerNews> */}
      <Blog></Blog>
    </div>
    // </ThemeProvider>
  );
}

export default App;
