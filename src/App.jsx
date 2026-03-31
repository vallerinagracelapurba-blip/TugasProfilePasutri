import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ini aku bikinin text sementara biar bisa di test dan ga error */}
        <Route path="/erin" element={<div className="text-2xl font-bold text-center mt-10">halaman erin</div>} />
        <Route path="/cantika" element={<div className="text-2xl font-bold text-center mt-10">halaman cantika</div>} />
        <Route path="/damar" element={<div className="text-2xl font-bold text-center mt-10">halaman damar</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;