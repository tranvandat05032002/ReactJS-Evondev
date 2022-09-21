import "./App.css";
import SidebarMenu from "./component/SidebarMenu/SidebarMenu";
import CustomerDropDown from "./component/useRef/DropDown/CustomerDopDown";

function App() {
  return (
    <div>
      <CustomerDropDown></CustomerDropDown>
      <SidebarMenu></SidebarMenu>
    </div>
  );
}

export default App;
