import Hader from "./components/Header";
import Home from "./components/Home/Home";
import RightSideBar from "./components/RightSideBar";
import StoreBar from "./components/StoreBar";

function App() {
  // console.log(window.innerWidth);
  return (
    <>
      <Hader />
      <StoreBar />
      <Home />
    </>
  );
}

export default App;