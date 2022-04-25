import { Route, Routes } from "react-router-dom";
import HomeContainder from "./components/Home/HomeContainder";
import InboxContainer from "./components/Inbox/InboxContainer";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeContainder />} />
      <Route path="/inbox" element={<InboxContainer />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
