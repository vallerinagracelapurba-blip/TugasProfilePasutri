import React from 'react';
import fotoErin from '../assets/images/fotoprofil-erin.jpeg'; // Cek apakah .jpeg atau .jpg

const Erin = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Bagian Kiri */}
        <div className="bg-indigo-600 text-white w-full md:w-1/3 p-8 flex flex-col items-center justify-center">
          <div className="w-40 h-40 bg-gray-300 rounded-full border-4 border-white shadow-lg mb-6 overflow-hidden">
            <img 
              src={fotoErin}
              alt="Foto Profil Vallerina" 
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold text-center mb-1">Vallerina Gracela Purba</h2>
          <p className="text-indigo-200 text-center mb-6">Mahasiswa D3 Teknologi Informasi</p>
          
          <div className="w-full space-y-4 text-sm">
            <div className="flex flex-col">
              <span className="font-semibold text-indigo-300">Jurusan / Prodi:</span>
              <span>Teknologi Informasi</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-indigo-300">Domisili:</span>
              <span>Jl. Soekarno Hatta</span>
            </div>
          </div>
        </div>

        {/* Bagian Kanan */}
        <div className="w-full md:w-2/3 p-8 flex flex-col justify-center">
          <h3 className="text-3xl font-extrabold text-gray-800 mb-4 border-b-2 border-indigo-500 pb-2 inline-block w-fit">
            Tentang Diri
          </h3>
          <p className="text-gray-600 leading-relaxed mb-8 text-justify">
            Halo, perkenalkan nama saya Vallerina Gracela Purba. Saat ini, saya merupakan mahasiswa program studi D3 Teknologi Informasi di Universitas Brawijaya. Saya adalah individu yang sangat menikmati proses belajar dan aktif mengeksplorasi berbagai peluang untuk mengembangkan diri. Saya memiliki minat besar pada bidang public speaking, kepemimpinan, serta komunikasi. Berbekal minat tersebut, saya aktif dalam berbagai organisasi seperti BEM Vokasi dan HMPSTI.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mb-4">Kontak & Sosial Media</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600 text-sm">
            <div className="flex items-center gap-2 border p-3 rounded-lg bg-gray-50">
              <span className="font-semibold text-gray-800">Email:</span>
              <a href="mailto:vallerinagracelapurba@gmail.com" className="hover:text-indigo-600">vallerinagracelapurba@gmail.com</a>
            </div>
            <div className="flex items-center gap-2 border p-3 rounded-lg bg-gray-50">
              <span className="font-semibold text-gray-800">Instagram:</span>
              <a href="https://instagram.com/vallerinacelaa" target="_blank" rel="noreferrer" className="hover:text-indigo-600">@vallerinacelaa</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Erin;