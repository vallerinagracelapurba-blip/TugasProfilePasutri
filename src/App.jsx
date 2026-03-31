import { BrowserRouter, Routes, Route } from "react-router-dom";
// ini cuma manggil file punya erin aja biar ga error
import Erin from "./pages/Erin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="text-2xl font-bold text-center mt-10">pilih URL /erin, /cantika, atau /damar</div>} />
        {/* rute punya erin */}
        <Route path="/erin" element={<Erin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;