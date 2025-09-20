import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhoIsWatching from "./components/Who_is_watching";

function Recruiter() {
  return <h2 className="text-center mt-5">Welcome, Recruiter!</h2>;
}
function Developer() {
  return <h2 className="text-center mt-5">Welcome, Developer!</h2>;
}
function Stalker() {
  return <h2 className="text-center mt-5">Welcome, Stalker!</h2>;
}
function Beginner() {
  return <h2 className="text-center mt-5">Welcome, Beginner!</h2>;
}
function Admin() {
  return <h2 className="text-center mt-5">Welcome, Admin!</h2>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WhoIsWatching />} />
        <Route path="/recruiter" element={<Recruiter />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/stalker" element={<Stalker />} />
        <Route path="/beginner" element={<Beginner />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
