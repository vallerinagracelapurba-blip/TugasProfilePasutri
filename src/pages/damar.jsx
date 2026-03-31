import React from 'react';

const Damar = () => {
  return (
    <div className="min-h-screen bg-slate-200 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Sidebar Info */}
        <div className="bg-gray-800 text-white w-full md:w-1/3 p-8 flex flex-col items-center">
          <div className="w-40 h-40 rounded-full border-4 border-emerald-500 shadow-md mb-6 overflow-hidden bg-gray-600">
            {/* Damar nanti ganti src ini pake file foto aslinya */}
            <img src="/foto-damar.jpg" alt="Damar Putra Hartono" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-xl font-bold text-center leading-tight">Damar Putra Hartono</h2>
          <p className="text-emerald-400 text-sm mt-2">D3 Teknologi Informasi</p>
          
          <div className="mt-8 space-y-4 w-full text-xs">
            <div className="border-b border-gray-700 pb-2">
              <p className="text-gray-400">Kelas</p>
              <p className="font-medium">[Isi Kelas Damar]</p>
            </div>
            <div className="border-b border-gray-700 pb-2">
              <p className="text-gray-400">Domisili</p>
              <p className="font-medium">AMKT Mandau</p>
            </div>
            <div className="pb-2">
              <p className="text-gray-400">Kontak</p>
              <p className="font-medium">damarh500@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-2/3 p-10">
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-emerald-500 pl-3">Profil Profesional</h3>
            <p className="text-gray-600 leading-relaxed text-justify">
              Halo, saya Damar Putra Hartono. Saat ini saya sedang menempuh pendidikan tinggi sebagai mahasiswa di Universitas Brawijaya, tepatnya pada Fakultas Vokasi program studi D3 Teknologi Informasi. Saya memiliki latar belakang pendidikan dari SMA Negeri 10 Samarinda dan SMP Negeri 1 Muara Jawa. Selama masa sekolah, saya sangat aktif dalam organisasi, terutama di OSIS di mana saya dipercaya menjabat sebagai Ketua Departemen 3 (Wawasan Kebangsaan dan Nasionalisme) pada Kabinet Bimantara Dhaksa periode 2023-2024. Pengalaman ini mengasah kemampuan kepemimpinan, manajemen organisasi, serta komunikasi publik saya secara signifikan. Saya juga terlibat dalam kepanitiaan besar seperti HUT SMA Negeri 10 Samarinda (Chronotopia) sebagai anggota Divisi Internal Party. Saya adalah pribadi yang disiplin, mampu bekerja dalam tim, dan memiliki semangat tinggi untuk terus mendalami dunia teknologi informasi sembari mengaplikasikan pengalaman kepemimpinan yang telah saya miliki sebelumnya.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-[cite: 43, 44, 48]">Keahlian Utama</h3>
            <div className="flex flex-wrap gap-2 text-[cite: 43, 44, 48]">
              {['Public Speaking', 'Komunikasi', 'Kerja Tim', 'Manajemen Organisasi'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Damar;