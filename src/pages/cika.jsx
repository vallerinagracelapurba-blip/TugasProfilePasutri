import React from 'react';

const Cantika = () => {
  return (
    <div className="min-h-screen bg-rose-50 flex items-center justify-center p-6 font-sans">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row-reverse">
        {/* Profile Side */}
        <div className="bg-rose-500 text-white w-full lg:w-2/5 p-10 flex flex-col items-center justify-center relative">
          <div className="w-48 h-48 rounded-2xl rotate-3 bg-white p-2 shadow-2xl mb-8 overflow-hidden text-[cite: 59, 60, 74]">
            <img src="/foto-cantika.jpg" alt="Cantika Rizky" className="w-full h-full object-cover rounded-xl -rotate-3" />
          </div>
          <h1 className="text-2xl font-black text-center uppercase tracking-wider text-[cite: 73, 74]">Cantika Rizky Rahmayanti Putri</h1>
          <div className="mt-6 space-y-3 w-full text-sm">
            <div className="bg-rose-600 p-3 rounded-xl flex justify-between text-[cite: 64]">
              <span className="opacity-80">Prodi</span>
              <span className="font-bold text-[cite: 64]">Teknologi Informasi</span>
            </div>
            <div className="bg-rose-600 p-3 rounded-xl flex justify-between text-[cite: 57]">
              <span className="opacity-80">Domisili</span>
              <span className="font-bold text-[cite: 57]">Kedungkandang, Malang</span>
            </div>
            <div className="bg-rose-600 p-3 rounded-xl flex justify-between text-[cite: 60]">
              <span className="opacity-80">Instagram</span>
              <span className="font-bold text-[cite: 59]">@cchi.zzy</span>
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-3/5 p-12">
          <section className="mb-10 text-[cite: 52, 53, 54, 55]">
            <h2 className="text-4xl font-black text-gray-800 mb-6 italic underline decoration-rose-400">TENTANG SAYA</h2>
            <p className="text-gray-600 leading-relaxed text-lg text-justify text-[cite: 52, 53, 54, 55]">
              Halo! Saya Cantika Rizky Rahmayanti Putri, mahasiswa program studi Teknologi Informasi angkatan 2025 di Universitas Brawijaya[cite: 53, 62, 63, 64]. Saya adalah pribadi yang sangat adaptif, komunikatif, dan memiliki tanggung jawab tinggi dalam setiap tugas yang diberikan[cite: 54]. Dengan latar belakang pendidikan dari SMA Negeri 1 Malang, saya telah aktif berkontribusi dalam berbagai organisasi sejak SMP, termasuk menjabat sebagai Wakil Ketua OSIS[cite: 65, 78]. Saya memiliki passion besar dalam kreativitas dan manajemen proyek, terbukti dari peran saya sebagai CO Dekorasi dan Dokumentasi di berbagai event besar seperti Road To The Nevasca[cite: 69, 71, 92, 93, 94]. Sebagai mahasiswa TI, saya berkomitmen untuk terus berkembang baik secara teknis maupun soft skills demi memberikan dampak positif bagi lingkungan sekitar dan organisasi seperti HMPSTI[cite: 53, 55]. Saya sangat menikmati tantangan baru dan selalu berupaya menjadi individu yang dapat diandalkan dalam tim[cite: 54, 55].
            </p>
          </section>

          <div className="grid grid-cols-2 gap-6 text-[cite: 69, 70, 71, 72]">
            <div>
              <h4 className="font-bold text-gray-800 mb-2 uppercase text-sm tracking-widest text-[cite: 68]">Soft Skills</h4>
              <ul className="text-rose-600 font-semibold space-y-1 text-[cite: 69, 70, 71, 72]">
                <li>• Project Management [cite: 69]</li>
                <li>• Problem Solving [cite: 70]</li>
                <li>• Creativity [cite: 71]</li>
                <li>• Leadership [cite: 72]</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cantika;