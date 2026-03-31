import { BrowserRouter, Routes, Route } from "react-router-dom";
import Erin from "./pages/Erin.jsx";    // E besar sesuai foto
import Cantika from "./pages/cika.jsx"; // Alamatnya cika.jsx sesuai foto
import Damar from "./pages/damar.jsx";  // d kecil sesuai foto

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 text-center">
            <h1 className="text-3xl font-bold mb-6">Tugas Profile Pasutri</h1>
            <div className="flex gap-4">
              <a href="/erin" className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">Erin</a>
              <a href="/cantika" className="px-6 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition">Cantika</a>
              <a href="/damar" className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">Damar</a>
            </div>
          </div>
        } />
        <Route path="/erin" element={<Erin />} />
        <Route path="/cantika" element={<Cantika />} />
        <Route path="/damar" element={<Damar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;