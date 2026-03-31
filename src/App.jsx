import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // WAJIB ADA
import Erin from "./pages/Erin.jsx";
import Cantika from "./pages/Cika.jsx";
import Damar from "./pages/Damar.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Halaman Utama / Menu */}
        <Route path="/" element={
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black flex flex-col items-center justify-center p-6 font-sans">
            <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-10 md:p-16 text-center shadow-2xl">
              <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 mb-6 tracking-tight">
                Portofolio Tim Pasutri
              </h1>
              <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
                Selamat datang di portal portofolio kami. Silakan pilih anggota tim di bawah ini.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Link to="/erin" className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-[2px] transition-all hover:scale-105">
                  <div className="flex h-full w-full items-center justify-center rounded-xl bg-slate-900/60 px-6 py-8 group-hover:bg-transparent">
                    <span className="text-2xl font-bold text-white">Erin</span>
                  </div>
                </Link>

                <Link to="/cantika" className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-400 to-pink-600 p-[2px] transition-all hover:scale-105">
                  <div className="flex h-full w-full items-center justify-center rounded-xl bg-slate-900/60 px-6 py-8 group-hover:bg-transparent">
                    <span className="text-2xl font-bold text-white">Cantika</span>
                  </div>
                </Link>

                <Link to="/damar" className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 p-[2px] transition-all hover:scale-105">
                  <div className="flex h-full w-full items-center justify-center rounded-xl bg-slate-900/60 px-6 py-8 group-hover:bg-transparent">
                    <span className="text-2xl font-bold text-white">Damar</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="mt-12 text-slate-500 text-sm">
              Tugas Project Implementation • Universitas Brawijaya
            </div>
          </div>
        } />
        
        {/* Jalur Halaman Profile */}
        <Route path="/erin" element={<Erin />} />
        <Route path="/cantika" element={<Cantika />} />
        <Route path="/damar" element={<Damar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;