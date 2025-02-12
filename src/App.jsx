import {Route, Routes} from "react-router"
import Signup from "./screens/auth";
import Callback from "./screens/auth/callback";
import Signin from "./screens/auth/signin";
import Explore from "./screens/explore";
import LandingAuth from "./screens/landing"
import Outreach from "./screens/outreach";
function App() {
  return (
    <Routes>
      <Route path="/authentication" element={<LandingAuth />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/callback" element={<Callback />} />


      <Route path="/outreach" element={<Outreach />} />
      <Route path="/explore" element={<Explore />} />
    </Routes>
  );
}

export default App
