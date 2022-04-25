import { Route, Routes } from "react-router-dom";
import HomeContainder from "./components/Home/HomeContainder";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeContainder />} />
    </Routes>
  );
}

export default App;
