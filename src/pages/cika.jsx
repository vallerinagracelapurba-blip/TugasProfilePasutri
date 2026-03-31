import React from 'react';
import fotoCiko from '../assets/ciko.jpeg'; // Tambahkan baris ini

const Cantika = () => {
  return (
    <div className="min-h-screen bg-rose-50 flex items-center justify-center p-6 font-sans">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row-reverse">
        {/* Profile Side */}
        <div className="bg-rose-500 text-white w-full lg:w-2/5 p-10 flex flex-col items-center justify-center relative">
          <div className="w-48 h-48 rounded-2xl rotate-3 bg-white p-2 shadow-2xl mb-8 overflow-hidden text-[cite: 59, 60, 74]">
            <img src={fotoCiko} alt="Cantika Rizky" className="w-full h-full object-cover" />
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
              Saya merupakan mahasiswa Teknologi Informasi '25 di Fakultas Vokasi Universitas Brawijaya. Saya memiliki minat ke arah path machine learning. Saya memiliki cita-cita bekerja di bidang aviation. Ketertarikan saya pada teknologi membuat saya terus berusaha mempelajari berbagai hal baru yang berkaitan dengan pengolahan data, kecerdasan buatan, dan pengembangan sistem berbasis teknologi. Saya percaya bahwa perkembangan machine learning dapat memberikan kontribusi besar dalam berbagai industri, termasuk di bidang penerbangan, seperti dalam meningkatkan efisiensi operasional, analisis data penerbangan, hingga pengembangan sistem yang lebih cerdas dan aman. Oleh karena itu, saya terus mengembangkan kemampuan teknis maupun pemahaman konseptual melalui perkuliahan, proyek, serta eksplorasi mandiri. Dengan semangat belajar yang tinggi dan rasa ingin tahu yang besar, saya berharap dapat berkontribusi dalam pengembangan teknologi yang inovatif di masa depan.
            </p>
          </section>

          <div className="grid grid-cols-2 gap-6 text-[cite: 69, 70, 71, 72]">
            <div>
              <h4 className="font-bold text-gray-800 mb-2 uppercase text-sm tracking-widest text-[cite: 68]">Soft Skills</h4>
              <ul className="text-rose-600 font-semibold space-y-1 text-[cite: 69, 70, 71, 72]">
                <li>• Project Management</li>
                <li>• Problem Solving</li>
                <li>• Creativity</li>
                <li>• Leadership</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cantika;