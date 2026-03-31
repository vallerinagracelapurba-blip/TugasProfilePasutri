import React from 'react';
import fotoDamar from '../assets/images/fotoprofil-damar.JPEG';

const Damar = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-200 p-6">
      <div className="flex w-full max-w-4xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl md:flex-row">
        
        <div className="flex w-full flex-col items-center bg-gray-800 p-8 text-white md:w-1/3">
          <div className="mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-emerald-500 bg-gray-600 shadow-md">
            <img 
              src={fotoDamar} 
              alt="Foto Profil Damar Putra Hartono" 
              className="h-full w-full object-cover" 
            />
          </div>
          <h2 className="text-center text-xl font-bold leading-tight">Damar Putra Hartono</h2>
          <p className="mt-2 text-sm text-emerald-400">D3 Teknologi Informasi</p>
          
          <div className="mt-8 w-full space-y-4 text-xs">
            <div className="border-b border-gray-700 pb-2">
              <p className="text-gray-400">Kelas</p>
              <p className="font-medium">[T2G]</p>
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

        <div className="w-full p-10 md:w-2/3">
          <section className="mb-8">
            <h3 className="mb-4 border-l-4 border-emerald-500 pl-3 text-2xl font-bold text-gray-800">Profil Profesional</h3>
            <p className="text-justify leading-relaxed text-gray-600">
              Halo, saya Damar Putra Hartono. Saat ini saya sedang menempuh pendidikan tinggi sebagai mahasiswa di Universitas Brawijaya, tepatnya pada Fakultas Vokasi program studi D3 Teknologi Informasi. Saya memiliki latar belakang pendidikan dari SMA Negeri 10 Samarinda dan SMP Negeri 1 Muara Jawa. Selama masa sekolah, saya sangat aktif dalam organisasi, terutama di OSIS di mana saya dipercaya menjabat sebagai Ketua Departemen 3 (Wawasan Kebangsaan dan Nasionalisme) pada Kabinet Bimantara Dhaksa periode 2023-2024. Pengalaman ini mengasah kemampuan kepemimpinan, manajemen organisasi, serta komunikasi publik saya secara signifikan. Saya juga terlibat dalam kepanitiaan besar seperti HUT SMA Negeri 10 Samarinda (Chronotopia) sebagai anggota Divisi Internal Party. Saya adalah pribadi yang disiplin, mampu bekerja dalam tim, dan memiliki semangat tinggi untuk terus mendalami dunia teknologi informasi sembari mengaplikasikan pengalaman kepemimpinan yang telah saya miliki sebelumnya.
            </p>
          </section>

          <section>
            <h3 className="mb-3 text-xl font-bold text-gray-800">Keahlian Utama</h3>
            <div className="flex flex-wrap gap-2">
              {['Public Speaking', 'Komunikasi', 'Kerja Tim', 'Manajemen Organisasi'].map((skill) => (
                <span key={skill} className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
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