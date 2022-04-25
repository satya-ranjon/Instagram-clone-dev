import { Route, Routes } from "react-router-dom";
import ExpolorContainer from "./components/Expolor/ExpolorContainer";
import HomeContainder from "./components/Home/HomeContainder";
import InboxContainer from "./components/Inbox/InboxContainer";
import LoginSign from "./components/LoginSign";
import PrivateRoutes from "./components/PrivateRoutes";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<PrivateRoutes />}>
          <Route path="" element={<HomeContainder />} />
          <Route path="inbox" element={<InboxContainer />} />
          <Route path="profile" element={<ProfileContainer />} />
          <Route path="expolor" element={<ExpolorContainer />} />
        </Route>
        <Route path="login" element={<LoginSign />} />
      </Routes>
    </>
  );
}

export default App;
