import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhoIsWatching from "./components/Who_is_watching";
import Recruiter from "./components/Recruiter";
import Developer from "./components/Developer";
import Stalker from "./components/Stalker";
import Beginner from "./components/Beginner";
import Admin from "./components/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WhoIsWatching />} />
        <Route path="/recruiter/*" element={<Recruiter />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/stalker" element={<Stalker />} />
        <Route path="/beginner" element={<Beginner />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
