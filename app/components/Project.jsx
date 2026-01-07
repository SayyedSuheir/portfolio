'use client';

import Link from "next/link";

function Project() {
  const projects = [
    {
      title: "Carevia – Donation Platform",
      tech: "React, Next.js, MongoDB",
      description:
        "Carevia is a community-driven donation platform that connects donors with beneficiaries. " +
        "It features item posting, browsing, filtering, and AI-based image verification to prevent scams. " ,
        link :"https://care-via-sage.vercel.app/"
     
    },
    {
      title: "Post Blog Platform",
      tech: "Laravel, MySQL",
      description:
        "A full-featured blog platform where users can create posts, like and comment on content, and manage their personal profiles.",
    },
    {
      title: "Rock, Paper, Scissors Game",
      tech: "HTML, CSS, JavaScript",
      description:
        "An interactive browser-based game that allows users to play against the computer with real-time logic handling.",
    },
    {
      title: "Instagram UI Clone",
      tech: "HTML, CSS",
      description:
        "A pixel-perfect clone of Instagram’s user interface, focusing on layout accuracy, spacing, and responsiveness.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-20 text-gray-900">
      <div className="max-w-5xl mx-auto">
        
        {/* Back Navigation */}
        <Link
          href="/"
          className="inline-block mb-6 text-teal-700 font-medium hover:underline"
        >
          ← Back to Home
        </Link>

        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-12 text-gray-900">
          Projects
        </h1>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                {project.title}
              </h2>

              <p className="text-teal-700 font-medium mb-3">
                {project.tech}
              </p>

              <p className="text-gray-800 leading-relaxed">
                {project.description}
                <span className="text-teal-800 underline">
                    {project.link && (
                            <Link href={project.link}>Check it out here</Link>
                     )}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
