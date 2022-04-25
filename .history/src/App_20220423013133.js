import { Route, Routes } from "react-router-dom";
import HomeContainder from "./components/Home/HomeContainder";
import InboxContainer from "./components/Inbox/InboxContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeContainder />} />
      <Route path="/inbox" element={<InboxContainer />} />
    </Routes>
  );
}

export default App;
