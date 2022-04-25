import { Route, Routes, useParams } from "react-router-dom";
import ExpolorContainer from "./components/Expolor/ExpolorContainer";
import Hader from "./components/Header";
import HomeContainder from "./components/Home/HomeContainder";
import InboxContainer from "./components/Inbox/InboxContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App() {
  const m = useParams();
  console.log(m);
  return (
    <>
      <Hader />
      <Routes>
        <Route path="/" element={<HomeContainder />} />
        <Route path="/inbox" element={<InboxContainer />} />
        <Route path="/profile" element={<ProfileContainer />} />
        <Route path="/expolor" element={<ExpolorContainer />} />
      </Routes>
    </>
  );
}

export default App;
