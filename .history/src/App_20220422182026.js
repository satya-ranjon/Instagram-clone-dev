import { Route, Routes } from "react-router-dom";
import HomeContainder from "./components/Home/HomeContainder";
import SearchBar from "./components/Home/SearchBar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeContainder />} />
    </Routes>
  );
}

export default App;
