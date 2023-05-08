import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Beranda from "./pages/Beranda";
import Medical from "./pages/Medical";
import Access from "./pages/Access";
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/access" element={<Access />} />
          <Route path="/sign-out" element={<Sidebar />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
