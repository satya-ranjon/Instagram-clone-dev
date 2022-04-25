import { Route, Routes, useParams } from "react-router-dom";
import ExpolorContainer from "./components/Expolor/ExpolorContainer";
import Hader from "./components/Header";
import HomeContainder from "./components/Home/HomeContainder";
import InboxContainer from "./components/Inbox/InboxContainer";
import PrivateRoutes from "./components/PrivateRoutes";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App() {
  const x = useParams();
  console.log(x);
  return (
    <>
      <Hader />
      <Routes>
        <Route path="*" element={<PrivateRoutes />}>
          <Route path="/" element={<HomeContainder />} />
          <Route path="/inbox" element={<InboxContainer />} />
          <Route path="/profile" element={<ProfileContainer />} />
          <Route path="/expolor" element={<ExpolorContainer />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
