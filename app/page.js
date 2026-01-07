'use client'
import { useRef } from "react";
import Link from "next/link";


export default function Portfolio() {
   const footerRef = useRef(null);

   const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-b from-teal-600 to-teal-500 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Suheir El Sayyed</h1>
        <p className="text-xl md:text-2xl mb-6">Frontend & Full‑Stack Web Developer</p>
        <p className="max-w-xl mb-8 opacity-90">
          Building clean, responsive, and impactful web applications using React, Next.js, and Laravel.
        </p>
        <div className="flex gap-4">
          <Link href="/projects">
           <button className="px-6 py-3 rounded-2xl bg-white text-teal-600 font-semibold shadow cursor-pointer">View Projects</button>
         </Link> 
          <button onClick={scrollToFooter} className="px-6 py-3 rounded-2xl border border-white cursor-pointer">Contact Me</button>
        </div>
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Computer Science graduate and Frontend Developer with strong full‑stack experience. I combine technical
          expertise with real‑world experience in data management and community‑driven platforms to build meaningful
          digital solutions.
        </p>
      </section>

      {/* Skills */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'JavaScript','HTML','CSS / SCSS','WordPress','React','Next.js','Angular','Laravel','Tailwind','MongoDB','MySQL','Git','Figma'
            ].map(skill => (
              <div key={skill} className="p-4 rounded-2xl shadow-sm border text-center font-medium">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl shadow border">
            <h3 className="text-xl font-semibold mb-2">Carevia – Donation Platform</h3>
            <p className="text-gray-700 mb-3">React, Next.js, MongoDB</p>
            <p className="text-gray-600">Community‑driven platform connecting donors and beneficiaries with AI image verification.</p>
          </div>
          <div className="p-6 rounded-2xl shadow border">
            <h3 className="text-xl font-semibold mb-2">Post Blog Platform</h3>
            <p className="text-gray-700 mb-3">Laravel, MySQL</p>
            <p className="text-gray-600">Users can post, like, comment, and manage personal profiles.</p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold">Social Worker & Data Entry – ANERA</h3>
            <p className="text-gray-600 mb-2">Oct 2024 – Jul 2025</p>
            <p className="text-gray-700">Led assessments, managed beneficiary data, and coordinated women‑led community groups.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer  ref={footerRef} className="bg-teal-600 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
          <p className="mb-6">sayyed.suheir.auce@gmail.com | +961 03 163285</p>
          <p className="opacity-90">
           <span><a href="https://www.linkedin.com/in/suheir-el-sayyed"> LinkedIn</a></span>
            •
           <span><a href="https://github.com/SayyedSuheir">GitHub</a></span> 
          </p>
        </div>
      </footer>
    </div>
  );
}
