import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('prajwal30m@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    setContactSubmitted(true);
    triggerConfetti();
    setTimeout(() => {
      setContactSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  const skills = [
    {
      category: "Programming & Core",
      icon: "⚡",
      items: [
        { name: "Python", level: "Advanced", desc: "Data structures, algorithms, automation, backend logic & AI scripting" },
        { name: "JavaScript (ES6+)", level: "Proficient", desc: "Async execution, API integration, interactive DOM & React ecosystem" },
        { name: "HTML5 & Modern CSS3", level: "Advanced", desc: "Responsive layouts, Tailwind CSS, modern glassmorphism & responsive UI" }
      ]
    },
    {
      category: "Frameworks & Web Tech",
      icon: "🌐",
      items: [
        { name: "React.js", level: "Proficient", desc: "Hooks, component lifecycles, state management & reactive UX" },
        { name: "Tailwind CSS", level: "Expert", desc: "Modern utility styling, micro-animations & dark aesthetic architecture" },
        { name: "Vite & Tooling", level: "Advanced", desc: "High-speed bundling, modern DX & production optimization" }
      ]
    },
    {
      category: "Databases & Cloud",
      icon: "☁️",
      items: [
        { name: "MySQL", level: "Proficient", desc: "Relational database schema modeling, indexing & complex queries" },
        { name: "Firebase", level: "Proficient", desc: "Firestore, Realtime DB, Authentication & cloud hosting" },
        { name: "AWS Cloud (EC2, S3)", level: "Certified", desc: "Cloud architecture, storage buckets, compute instances & IAM" }
      ]
    },
    {
      category: "Tools & Methodologies",
      icon: "🛠️",
      items: [
        { name: "Vibe Coding & AI Workflows", level: "Native", desc: "Accelerated development using state-of-the-art AI co-pilots" },
        { name: "Git & GitHub", level: "Proficient", desc: "Version control, branch management & collaborative delivery" },
        { name: "VS Code & Debugging", level: "Advanced", desc: "Full IDE setup, extensions & runtime troubleshooting" }
      ]
    }
  ];

  const certifications = [
    {
      title: "Google AI Certification",
      issuer: "Google",
      level: "Certified",
      icon: "🤖",
      tag: "Artificial Intelligence"
    },
    {
      title: "Google Developer Certification",
      issuer: "Google Developers",
      level: "Certified",
      icon: "💻",
      tag: "Web & Software Engineering"
    },
    {
      title: "AWS Cloud Virtual Certificate",
      issuer: "AWS / EduSkills / AICTE",
      level: "Certified",
      icon: "☁️",
      tag: "Cloud Architecture"
    }
  ];

  const achievements = [
    {
      title: "1st Place Winner — Alphathon Hackathon",
      desc: "Secured 1st place among top engineering teams by architecting and executing an innovative software prototype under rapid time bounds.",
      icon: "🏆",
      badge: "1st Place Gold"
    },
    {
      title: "IEEE Ideathon — 2nd Round Selection",
      desc: "Selected for the competitive 2nd round in the prestigious IEEE technical ideation challenge for novel engineering conceptualization.",
      icon: "🎖️",
      badge: "IEEE Finalist"
    }
  ];

  const education = [
    {
      degree: "B.E. in Artificial Intelligence & Data Science",
      institution: "Srinivas Institute of Technology (VTU)",
      location: "Mangalore, Karnataka",
      period: "2023 – Present",
      grade: "CGPA: 6.9 / 10",
      highlight: "Specializing in Machine Learning, Statistical Analysis, Database Systems & Intelligent Application Design."
    },
    {
      degree: "PUC / 12th Intermediate (State Board)",
      institution: "Capitanio Composite PU College",
      location: "Mangalore",
      period: "2021 – 2023",
      grade: "57.33%",
      highlight: "Core curriculum in Mathematics, Physics, Chemistry & Computer Science fundamentals."
    },
    {
      degree: "SSLC / 10th Standard (State Board)",
      institution: "Sharada Ganapathi Vidyakendra",
      location: "Kairangala",
      period: "2020 – 2021",
      grade: "76.00%",
      highlight: "Excellence in mathematics and structured analytical problem-solving."
    }
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500 selection:text-black relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Dynamic Background Glow Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] animate-pulse-glow"></div>
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] animate-pulse-glow" style={{ animationDelay: '3s' }}></div>
        <div className="absolute -bottom-40 left-1/3 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: '5s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25"></div>
      </div>

      {/* Navigation Header */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-5xl">
        <nav className="glass-card rounded-full px-6 py-3 flex items-center justify-between border border-white/10 shadow-2xl backdrop-blur-xl">
          <a href="#hero" className="flex items-center gap-2.5 font-bold tracking-tight text-white group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-sm font-black shadow-lg shadow-cyan-500/30 group-hover:scale-105 transition-transform">
              P
            </div>
            <span className="font-['JetBrains_Mono'] tracking-wide">M.Prajwal<span className="text-cyan-400">()</span></span>
          </a>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            {['About', 'Projects', 'Skills', 'Experience', 'Achievements', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-400 transition-colors cursor-pointer py-1"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/starter-coder-123"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-white/5 text-slate-300 hover:text-white transition-colors"
              title="GitHub"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a
              href="https://www.linkedin.com/in/m-prajwal-0b5064329/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-white/5 text-slate-300 hover:text-cyan-400 transition-colors"
              title="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500 hover:text-black font-semibold text-xs tracking-wide transition-all shadow-sm shadow-cyan-500/10"
            >
              Get in Touch →
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-36">

        {/* HERO SECTION */}
        <section id="hero" className="min-h-[80vh] flex flex-col justify-center items-center text-center relative pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md shadow-inner shadow-cyan-500/20"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            Available for AI/DS & Full-Stack Roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-4xl text-white leading-tight"
          >
            Engineering Intelligent Systems & <span className="gradient-text">Modern Web Apps</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed"
          >
            Hi, I'm <strong className="text-white font-semibold">M. Prajwal</strong> — an Artificial Intelligence & Data Science Engineer specialized in Python, Cloud systems, React, and building scalable full-stack digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              Explore Featured Work ↗
            </a>
            <button
              onClick={handleCopyEmail}
              className="px-6 py-3.5 rounded-full bg-slate-900/80 border border-slate-700 hover:border-slate-500 text-slate-200 font-medium text-sm flex items-center gap-2 hover:bg-slate-800 transition-all backdrop-blur-md cursor-pointer"
            >
              {copied ? "✓ Email Copied!" : "📋 prajwal30m@gmail.com"}
            </button>
          </motion.div>

          {/* Quick Metrics Badge Strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl w-full"
          >
            {[
              { label: "Hackathon Victory", val: "1st Place", sub: "Alphathon 2024" },
              { label: "Engineering Major", val: "AI & DS", sub: "SIT Mangalore" },
              { label: "Cloud Verified", val: "AWS + Google", sub: "3+ Certifications" },
              { label: "Core Methodology", val: "Vibe Coding", sub: "AI-Augmented Dev" },
            ].map((stat, i) => (
              <div key={i} className="glass-card rounded-2xl p-4 border border-white/5 text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-cyan-400 font-['JetBrains_Mono']">{stat.val}</div>
                <div className="text-xs font-semibold text-slate-200 mt-0.5">{stat.label}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ABOUT & OBJECTIVE */}
        <section id="about" className="space-y-8 scroll-mt-28">
          <div className="flex flex-col items-center text-center">
            <span className="text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase">01. Identity & Vision</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">Career Objective & Background</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 glass-card rounded-3xl p-8 border border-white/10 space-y-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-cyan-400">✨</span> Results-Driven Engineering Mindset
              </h3>
              <p className="text-slate-300 leading-relaxed text-base">
                I am a dedicated Bachelor of Engineering student in <strong>Artificial Intelligence & Data Science</strong> at Srinivas Institute of Technology (VTU), Mangalore. With solid foundational expertise across Python, Relational Databases (MySQL), Firebase, and modern cloud deployment, I thrive at the intersection of intelligent data algorithms and responsive web architecture.
              </p>
              <p className="text-slate-300 leading-relaxed text-base">
                Whether creating real-time collaborative applications, deploying cloud workflows on AWS, or leveraging cutting-edge AI co-pilot methodologies (Vibecoding), my goal is to deliver clean, scalable, and high-impact digital products.
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                {['Problem Solving', 'Vibe Coding', 'Full-Stack Integration', 'Cloud Architecture', 'Agile Teamwork'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-cyan-300">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Contact / Location Snapshot */}
            <div className="glass-card rounded-3xl p-8 border border-white/10 flex flex-col justify-between space-y-6">
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Coordinates & Info</h4>
                <div className="space-y-3.5 text-sm text-slate-300">
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400">📍</span>
                    <span>Mangalore, Karnataka, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400">✉️</span>
                    <span className="font-mono text-xs">prajwal30m@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400">📞</span>
                    <span className="font-mono text-xs">+91 7204081576</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400">💼</span>
                    <span>Open to Internships / Full-Time</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex gap-2">
                <a
                  href="https://www.linkedin.com/in/m-prajwal-0b5064329/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-[#0A66C2]/20 hover:bg-[#0A66C2] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all border border-[#0A66C2]/40"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/starter-coder-123"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all border border-slate-600"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-10 scroll-mt-28">
          <div className="flex flex-col items-center text-center">
            <span className="text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase">02. Featured Creations</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">Academic & Engineering Projects</h2>
          </div>

          {/* Hero Project Card */}
          <div className="glass-card glass-card-hover rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-mono">
                  ✨ Full-Stack Healthcare Platform (2024 – 2025)
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                  Doctor Appointment & Healthcare Scheduling System
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  A high-performance, real-time web application built with <strong>React.js</strong> and <strong>Firebase</strong> to streamline patient-to-doctor appointment scheduling, real-time slot synchronization, and medical record queries.
                </p>

                <div className="space-y-2.5">
                  {[
                    "Engineered real-time doctor availability tracking and automated booking conflict resolution.",
                    "Implemented Firebase Firestore backend services with instant state synchronization.",
                    "Designed intuitive patient and practitioner dashboards with secure authorization.",
                    "Collaborated in an agile team of 4 engineers, completing architecture, testing, and deployment."
                  ].map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="text-cyan-400 font-bold">✓</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap gap-2">
                  {['React.js', 'JavaScript ES6', 'Firebase Firestore', 'Realtime DB', 'Tailwind CSS', 'Responsive UI'].map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-mono text-cyan-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <a
                    href="https://github.com/starter-coder-123"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-cyan-500/20"
                  >
                    View Source on GitHub ↗
                  </a>
                </div>
              </div>

              {/* Code Preview / Interactive Mockup Frame */}
              <div className="lg:col-span-5 bg-slate-950 rounded-2xl border border-slate-800 p-5 font-mono text-xs text-slate-300 shadow-2xl relative">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px] text-slate-500">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                  </div>
                  <span>AppointmentService.js</span>
                </div>
                <pre className="mt-4 overflow-x-auto text-[11px] leading-relaxed text-cyan-200">
{`// Real-time Slot Reservation
export const bookAppointment = async (
  doctorId,
  patientId,
  timeSlot
) => {
  const doctorRef = doc(db, 'doctors', doctorId);
  const slotAvailable = await checkAvailability(
    doctorRef, 
    timeSlot
  );
  
  if (slotAvailable) {
    return await addDoc(collection(db, 'appointments'), {
      doctorId,
      patientId,
      timeSlot,
      status: 'CONFIRMED',
      timestamp: serverTimestamp()
    });
  }
  throw new Error('Slot already reserved');
};`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS MATRIX */}
        <section id="skills" className="space-y-10 scroll-mt-28">
          <div className="flex flex-col items-center text-center">
            <span className="text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase">03. Technical Arsenal</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">Skills & Core Competencies</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((grp, i) => (
              <div key={i} className="glass-card rounded-3xl p-7 border border-white/10 space-y-5">
                <div className="flex items-center gap-3 pb-3 border-b border-white/5">
                  <span className="text-2xl">{grp.icon}</span>
                  <h3 className="text-lg font-bold text-white">{grp.category}</h3>
                </div>

                <div className="space-y-4">
                  {grp.items.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-sm text-slate-100">{item.name}</span>
                        <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                          {item.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE & INTERNSHIP */}
        <section id="experience" className="space-y-10 scroll-mt-28">
          <div className="flex flex-col items-center text-center">
            <span className="text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase">04. Hands-on Experience</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">Internships & Practical Training</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/5">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/40 flex items-center justify-center text-2xl">
                    ☁️
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">AWS Cloud Virtual Internship</h3>
                    <p className="text-xs font-mono text-cyan-400">EduSkills Foundation / AICTE</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-mono text-xs">
                  Cloud Practitioner Track
                </span>
              </div>

              <div className="mt-6 space-y-4 text-sm text-slate-300 leading-relaxed">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">⚡</span>
                  <p>Mastered core AWS infrastructure services including <strong>Amazon EC2 compute instances</strong>, <strong>Amazon S3 scalable object storage</strong>, and foundational VPC networking.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">⚡</span>
                  <p>Executed live lab deployments involving cloud architecture provisioning, access identity (IAM) policies, and high-availability configuration.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">⚡</span>
                  <p>Gained deep understanding of cloud cost optimization, enterprise security models, and fault-tolerant architecture.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS & CERTIFICATIONS */}
        <section id="achievements" className="space-y-10 scroll-mt-28">
          <div className="flex flex-col items-center text-center">
            <span className="text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase">05. Recognition</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">Honors & Certifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Hackathon Victories */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-2">
                🏆 Hackathon Milestones
              </h3>
              {achievements.map((item, i) => (
                <div key={i} className="glass-card rounded-2xl p-6 border border-white/10 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-white text-base">{item.title}</h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30 text-[11px] font-semibold">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-2">
                📜 Verified Credentials
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <div key={i} className="glass-card rounded-2xl p-4 border border-white/10 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{cert.icon}</span>
                      <div>
                        <h4 className="font-semibold text-white text-sm">{cert.title}</h4>
                        <p className="text-[11px] text-slate-400">{cert.issuer} • {cert.tag}</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400 font-semibold px-2 py-1 rounded bg-cyan-500/10">
                      {cert.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ACADEMIC TIMELINE */}
        <section id="education" className="space-y-10 scroll-mt-28">
          <div className="flex flex-col items-center text-center">
            <span className="text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase">06. Education</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">Academic Background</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu, i) => (
              <div key={i} className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">🎓</span>
                    <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                  </div>
                  <p className="text-sm text-slate-300 font-medium">{edu.institution} — <span className="text-slate-400">{edu.location}</span></p>
                  <p className="text-xs text-slate-400 max-w-xl">{edu.highlight}</p>
                </div>
                <div className="sm:text-right shrink-0">
                  <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 font-mono text-xs border border-cyan-500/30 mb-1">
                    {edu.period}
                  </span>
                  <div className="text-xs font-bold text-slate-300">{edu.grade}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT / CTA */}
        <section id="contact" className="space-y-10 scroll-mt-28">
          <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden">
            <div className="text-center space-y-3 max-w-xl mx-auto">
              <span className="text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase">Let's Connect</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Get In Touch</h2>
              <p className="text-sm text-slate-300">
                Have an exciting project, full-time role, or internship in AI/Data Science & Web Engineering? Let's build something exceptional.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4 max-w-lg mx-auto">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">YOUR NAME</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Johnson"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">YOUR EMAIL</label>
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">MESSAGE</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Tell me about your project or role..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm hover:shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {contactSubmitted ? "✓ Message Sent Successfully!" : "📨 Send Direct Message"}
              </button>
            </form>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 text-center text-xs text-slate-500 relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} M. Prajwal. Built with React, Tailwind CSS & Framer Motion.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <a href="https://github.com/starter-coder-123" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/m-prajwal-0b5064329/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
            <a href="mailto:prajwal30m@gmail.com" className="hover:text-cyan-400 transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
