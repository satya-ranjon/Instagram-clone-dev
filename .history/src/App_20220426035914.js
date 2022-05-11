import { Route, Routes } from "react-router-dom";
import ExpolorContainer from "./components/Expolor/ExpolorContainer";
import HomeContainder from "./components/Home/HomeContainder";
import InboxContainer from "./components/Inbox/InboxContainer";
import LoginSign from "./components/LoginSign";
import PrivateRoutes from "./components/Private/PrivateRoutes";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<PrivateRoutes />}>
            <Route path="" element={<HomeContainder />} />
            <Route path="inbox" element={<InboxContainer />} />
            <Route path="profile" element={<ProfileContainer />} />
            <Route path="expolor" element={<ExpolorContainer />} />
          </Route>
          <Route path="/login" element={<LoginSign />} />
          <Route path="/signup" element={<LoginSign />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
