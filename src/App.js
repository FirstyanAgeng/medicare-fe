import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Beranda from "./pages/Beranda";
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/medical" element={<Sidebar />} />
          <Route path="/access" element={<Sidebar />} />
          <Route path="/sign-out" element={<Sidebar />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
