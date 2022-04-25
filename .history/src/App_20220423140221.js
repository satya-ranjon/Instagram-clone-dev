import { Route, Routes } from "react-router-dom";
import HomeContainder from "./components/Home/HomeContainder";
import InboxContainer from "./components/Inbox/InboxContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeContainder />} />
      <Route path="/inbox" element={<InboxContainer />} />
      <Route path="/profile" element={<ProfileContainer />} />
    </Routes>
  );
}

export default App;
