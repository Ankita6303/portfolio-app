"use client";

import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, Code, Award, Briefcase, GraduationCap, Folder, ExternalLink, Copy, Check } from 'lucide-react';

export default function Portfolio() {
  const [copied, setCopied] = useState(false);
  const [portfolioUrl, setPortfolioUrl] = useState("");

useEffect(() => {
  setPortfolioUrl(window.location.href);
}, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(portfolioUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const projects = [
    {
      title: "E-Grampanchayat System",
      period: "2025 – 2026",
      description: "Developed portal for villagers to access government services digitally.",
      tech: "HTML/CSS, Java, MySQL",
      impact: "Improved transparency and reduced manual work in administration"
    },
    {
      title: "Air Quality Search App",
      period: "2025",
      description: "Built a city-based Air Quality Index (AQI) search engine.",
      tech: "React.js, Node.js, External API",
      impact: "Real-time pollution levels with clean UI and dynamic info cards",
      github: "github.com/Ankita6306/air-quality-search-app"
    },
    {
      title: "Smart Agriculture System",
      period: "2024",
      description: "IoT + web-based solution for monitoring soil moisture, temperature, and weather.",
      tech: "IoT, Web Development",
      impact: "Helps farmers make informed decisions through sensor data"
    },
    {
      title: "College Chatbot System",
      period: "2023",
      description: "Developed a chatbot for admin–parent–student communication.",
      tech: "Java Swing, OOP, Database",
      impact: "Real-time query handling with inheritance, polymorphism concepts"
    }
  ];

  const skills = {
    "Programming & Tools": ["Python", "Java", "SQL", "HTML/CSS", "Git & GitHub"],
    "Cloud & DevOps": ["AWS Fundamentals", "Google Cloud", "AWS Educate"],
    "Data Science": ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Analysis"],
    "Database": ["MySQL", "MongoDB", "JDBC"],
    "Soft Skills": ["Problem Solving", "Analytical Thinking", "Communication", "Teamwork"]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Gradient Orbs */}
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-slate-900/60 backdrop-blur-xl z-50 border-b border-purple-500/20">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Ankita Bansod
            </h1>
            <div className="flex gap-4">
              <a href="mailto:bansodankita952@gmail.com" className="hover:text-purple-400 transition-all hover:scale-110">
                <Mail size={20} />
              </a>
              <a href="https://linkedin.com/in/ankita-bansod-aaa04024b" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-all hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/Ankita6303" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-all hover:scale-110">
                <Github size={20} />
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-purple-500/20 rounded-full border border-purple-400/40 backdrop-blur-sm animate-pulse-slow">
              <span className="text-purple-300 font-semibold">Software Engineer</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Ankita Bansod
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Software Engineer with expertise in Data Science, AI, Cloud Computing, and Analytics. 
              Passionate about leveraging technology to solve real-world problems and create innovative solutions.
            </p>
            
            {/* Portfolio Link Card */}
            <div className="max-w-2xl mx-auto mb-8 bg-slate-800/40 backdrop-blur-md p-6 rounded-2xl border border-purple-500/30 shadow-xl">
              <p className="text-sm text-purple-300 mb-3 font-semibold">📎 Share My Portfolio</p>
              <div className="flex items-center gap-3 bg-slate-900/60 p-4 rounded-lg">
                <ExternalLink className="text-purple-400 flex-shrink-0" size={20} />
                <input 
                  type="text" 
                  value={portfolioUrl} 
                  readOnly 
                  className="flex-1 bg-transparent text-gray-300 outline-none text-sm"
                />
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg transition-all border border-purple-500/40"
                >
                  {copied ? (
                    <>
                      <Check size={16} className="text-green-400" />
                      <span className="text-sm text-green-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} className="text-purple-400" />
                      <span className="text-sm text-purple-300">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105">
                Get in Touch
              </a>
              <a href="#projects" className="px-8 py-3 bg-slate-800/60 backdrop-blur-sm rounded-lg font-semibold border border-purple-500/30 hover:bg-slate-700/60 transition-all hover:scale-105">
                View Projects
              </a>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 px-6 bg-slate-900/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <GraduationCap className="text-purple-400" size={32} />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-105">
                <h3 className="text-xl font-bold text-purple-400 mb-2">Bachelor of Engineering</h3>
                <p className="text-gray-300 mb-1">SVPM College of Engineering, Malegaon Baramati</p>
                <p className="text-gray-400 mb-2">Computer Engineering | 2024 – 2026</p>
                <p className="text-green-400 font-semibold">CGPA: 7.80</p>
              </div>
              <div className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-105">
                <h3 className="text-xl font-bold text-purple-400 mb-2">Diploma</h3>
                <p className="text-gray-300 mb-1">Rajgad Polytechnic, Bhor</p>
                <p className="text-gray-400 mb-2">Computer Engineering | 2020 – 2023</p>
                <p className="text-green-400 font-semibold">Percentage: 80.6%</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Briefcase className="text-purple-400" size={32} />
              <h2 className="text-3xl font-bold">Work Experience</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-purple-400">Software Intern</h3>
                    <p className="text-gray-300">CodTech Pvt. Ltd</p>
                  </div>
                  <span className="text-gray-400">2024 | Remote</span>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Worked on real datasets to analyze trends and extract meaningful insights</li>
                  <li>• Performed data cleaning, preprocessing, and EDA using Python (Pandas, NumPy)</li>
                  <li>• Created data visualizations using Matplotlib and Seaborn</li>
                  <li>• Used SQL to query, filter, and join datasets for analysis</li>
                </ul>
              </div>
              <div className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-purple-400">Internship</h3>
                    <p className="text-gray-300">Suyash Infotech</p>
                  </div>
                  <span className="text-gray-400">2023 | Remote</span>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Strengthened Core Java fundamentals: OOP, Collections, Exception Handling, Generics</li>
                  <li>• Gained experience in JDBC for database operations</li>
                  <li>• Worked with Servlets and JSP for basic web application development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 bg-slate-900/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Folder className="text-purple-400" size={32} />
              <h2 className="text-3xl font-bold">Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <div key={idx} className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-105">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-purple-400">{project.title}</h3>
                    <span className="text-sm text-gray-400">{project.period}</span>
                  </div>
                  <p className="text-gray-300 mb-3">{project.description}</p>
                  <div className="mb-3">
                    <span className="text-sm text-purple-300 font-semibold">Tech: </span>
                    <span className="text-sm text-gray-400">{project.tech}</span>
                  </div>
                  <p className="text-sm text-green-400 mb-3">{project.impact}</p>
                  {project.github && (
                    <a href={`https://${project.github}`} target="_blank" rel="noopener noreferrer" className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-2">
                      <Github size={16} />
                      View on GitHub
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Code className="text-purple-400" size={32} />
              <h2 className="text-3xl font-bold">Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
                  <h3 className="text-lg font-bold text-purple-400 mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:bg-purple-500/30 transition-all">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 px-6 bg-slate-900/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Award className="text-purple-400" size={32} />
              <h2 className="text-3xl font-bold">Certifications & Achievements</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Google Cloud Cybersecurity Forecast 2026 – BrightTALK",
                "Cloud Computing (AWS Basics)",
                "AI & Data Science Courses",
                "Runner-Up: Cloud Computing Presentation",
                "AWS Educate – Introduction to Cloud 101",
                "Google Play Academy Certification",
                "Full Stack Java Certification",
                "MaTPO Aptitude Idol 2023 – Participation"
              ].map((cert, idx) => (
                <div key={idx} className="bg-slate-800/40 backdrop-blur-sm p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all flex items-center gap-3">
                  <Award className="text-purple-400 flex-shrink-0" size={20} />
                  <span className="text-gray-300 text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
            <p className="text-gray-300 mb-8">
              I'm always open to discussing new opportunities, projects, or just having a chat about technology!
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="mailto:bansodankita952@gmail.com" className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-105 flex flex-col items-center gap-3">
                <Mail className="text-purple-400" size={32} />
                <span className="text-sm text-gray-400">Email</span>
                <span className="text-white font-semibold text-sm">bansodankita952@gmail.com</span>
              </a>
              <a href="tel:8308392372" className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-105 flex flex-col items-center gap-3">
                <Phone className="text-purple-400" size={32} />
                <span className="text-sm text-gray-400">Phone</span>
                <span className="text-white font-semibold">8308392372</span>
              </a>
              <a href="https://linkedin.com/in/ankita-bansod-aaa04024b" target="_blank" rel="noopener noreferrer" className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-105 flex flex-col items-center gap-3">
                <Linkedin className="text-purple-400" size={32} />
                <span className="text-sm text-gray-400">LinkedIn</span>
                <span className="text-white font-semibold">Connect with me</span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-purple-500/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto text-center text-gray-400">
            <p>© 2026 Ankita Bansod. Built with passion for technology.</p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-100px) translateX(50px); opacity: 0.6; }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.02); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}