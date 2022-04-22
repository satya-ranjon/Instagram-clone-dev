import Hader from "./components/Header";
import Home from "./components/Home/Home";
import RightSideBar from "./components/RightSideBar";
import StoreBar from "./components/StoreBar";

function App() {
  console.log(document.innerWidth);
  return (
    <>
      <Hader />
      <StoreBar />
      <Home />
      <RightSideBar />
    </>
  );
}

export default App;
