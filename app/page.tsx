"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
  FaDownload,
  FaEnvelope,
  FaArrowUp,
  FaAws,
  FaDocker,
  FaJenkins,
  FaPython,
  FaJava,
  FaDatabase,
  FaCloud,
  FaMicrosoft,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiTerraform,
  SiSpring,
  SiMysql,
  SiPostgresql,
  SiAnsible,
  SiGrafana,
  SiPrometheus,
  SiAmazonwebservices,
  SiShell,
  SiNginx,
  SiAwslambda,
  SiAmazonrds,
  SiAmazonec2,
  SiElasticsearch,
  SiGooglecloud,
} from "react-icons/si";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import profilePic from "@/public/IMG_20250528_112932.jpg";
import kylientLogo from "@/public/logos/kylient.jpg";
import variantLogo from "@/public/logos/variant.jpg";
import infoceptsLogo from "@/public/logos/infocepts.jpg";

const KylientLogo = () => (
  <div className="bg-white rounded-lg p-1 flex items-center justify-center w-12 h-12">
    <Image src={kylientLogo} alt="Kylient Logo" width={40} height={40} />
  </div>
);
const VariantLogo = () => (
  <div className="bg-white rounded-lg p-1 flex items-center justify-center w-12 h-12">
    <Image src={variantLogo} alt="Variant Logo" width={40} height={40} />
  </div>
);
const InfoceptsLogo = () => (
  <div className="bg-white rounded-lg p-1 flex items-center justify-center w-12 h-12">
    <Image src={infoceptsLogo} alt="Infocepts Logo" width={40} height={40} />
  </div>
);

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredExperience, setHoveredExperience] = useState<number | null>(
    null
  );

  useEffect(() => {
    document.title = "Harshal Jadhav | DevOps Engineer";

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 100;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
          setActiveSection(id || "home");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const experience = [
    {
      title: "DevOps Engineer",
      company: "Kylient Software Solutions Pvt Ltd",
      duration: "April 2025 – Present",
      techIcons: [
        FaAws,
        FaDocker,
        SiKubernetes,
        FaJenkins,
        SiTerraform,
        SiNginx,
      ],
      description: [
        "Developing and managing custom Docker images and multi-stage builds to containerize microservices, enhancing performance and portability across development, testing, and production environments.",
        "Built and maintained Jenkins CI/CD pipelines for automated testing, integration, and deployment, reducing release cycle time by 20% and improving delivery consistency.",
        "Configured and optimized NGINX as a reverse proxy and load balancer for a microservices-based application, enhancing request routing and system reliability.",
        "Managed internal Linux servers, including user access, system updates, and service monitoring, ensuring high availability and secure infrastructure operations.",
        "Oversaw end-to-end CI/CD pipeline management across projects, integrating quality gates and rollback mechanisms for stable and secure releases.",
      ],
      logo: <KylientLogo />,
    },
    {
      title: "Cloud Engineer Intern",
      company: "Variant.ai",
      duration: "July 2024 – Jan 2025",
      techIcons: [FaAws, FaCloud, SiAwslambda, SiAmazonrds, SiAmazonec2],
      description: [
        "Architected and facilitated Amazon VPC and EC2 services, deploying Linux servers under Elastic Load Balancing (ELB) rules within defined subnetworks.",
        "Designed Auto Scaling policies reducing latency by 25% and ensuring high availability for 10K+ daily active users.",
        "Built AWS Lambda functions integrated with Amazon EventBridge to automate the scheduled stopping and starting of EC2 instances, leading to 40% cost savings by reducing idle time for non-peak hours.",
      ],
      logo: <VariantLogo />,
    },
    {
      title: "Software Engineer Intern",
      company: "Infocepts",
      duration: "Jan 2024 – July 2024",
      techIcons: [SiSpring, FaJava, FaPython, SiMysql],
      description: [
        "Extracted, processed, and transformed 100K+ records from raw JSON, CSV, and Excel files into Java objects using Spring Boot, optimizing data ingestion.",
        "Developed and maintained Spring Boot applications, implementing RESTful APIs for data retrieval and manipulation, enhancing system modularity and scalability.",
        "Filtered & structured datasets before persisting them into MS SQL Server, enhancing query efficiency & 99% data accuracy.",
        "Formulated and deployed RESTful APIs, reducing integration complexities by 30%, while optimizing backend services to improve data retrieval speed by 20%.",
      ],
      logo: <InfoceptsLogo />,
    },
  ];

  const education = [
    {
      institution:
        "S B Jain Institute of Technology Management and Research, Nagpur",
      degree: "B.Tech in Computer Science and Engineering",
      year: "2020 – 2024",
      score: "CGPA: 7.5/10",
    },
    {
      institution: "Hadas Junior College, Nagpur",
      degree: "Higher Secondary Certificate",
      year: "2019 – 2020",
      score: "60%",
    },
    {
      institution: "Sheeladevi Public School, Nagpur",
      degree: "Secondary School Certificate",
      year: "2017 – 2018",
      score: "82%",
    },
  ];

  const skills = [
    {
      category: "Cloud Platforms",
      items: [
        { name: "AWS", icon: FaAws },
        { name: "Azure", icon: FaMicrosoft },
        { name: "Google Cloud", icon: SiGooglecloud },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", icon: SiMysql },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "SQL Server", icon: FaDatabase },
      ],
    },
    {
      category: "Monitoring",
      items: [
        { name: "Grafana", icon: SiGrafana },
        { name: "Prometheus", icon: SiPrometheus },
        { name: "ELK Stack", icon: SiElasticsearch },
      ],
    },
    {
      category: "Languages",
      items: [
        { name: "Python", icon: FaPython },
        { name: "Java", icon: FaJava },
        { name: "Shell", icon: SiShell },
      ],
    },
    {
      category: "DevOps Tools",
      items: [
        { name: "Docker", icon: FaDocker },
        { name: "Kubernetes", icon: SiKubernetes },
        { name: "Jenkins", icon: FaJenkins },
      ],
    },
    {
      category: "Infrastructure",
      items: [
        { name: "Terraform", icon: SiTerraform },
        { name: "Ansible", icon: SiAnsible },
        { name: "NGINX", icon: SiNginx },
      ],
    },
  ];

  const projects = [
    {
      title: "E-commerce Microservices",
      description:
        "Scalable platform with 20+ microservices using Spring Boot, Docker, and K8s.",
      tech: ["Java", "Spring Boot", "Docker", "Kubernetes", "Jenkins"],
      github:
        "https://github.com/harshaljadhav-git/Ecommerce_Microservices_App",
      demo: "#",
    },
    {
      title: "Cloudfin Insights",
      description:
        "Serverless financial data pipeline using Lambda, RDS, Glue & QuickSight.",
      tech: ["AWS", "Lambda", "Glue", "QuickSight"],
      github: "https://github.com/harshaljadhav-git/cloudfin-insights",
      demo: "#",
    },
    {
      title: "Trykart Cloud Deployment",
      description:
        "Deployed Angular + Spring Boot app with AWS EC2, RDS, CloudFront & load balancing.",
      tech: ["Angular", "Java", "Spring Boot", "AWS"],
      github: "https://github.com/harshaljadhav-git/Trykart-Cloud-Deployment",
      demo: "#",
    },
    {
      title: "Malware Detection ML",
      description: "Web app to detect malware using Random Forest ML model.",
      tech: ["Flask", "Python", "Machine Learning"],
      github: "https://github.com/harshaljadhav-git/malware-detection-ml",
      demo: "#",
    },
  ];

  const certifications = [
    {
      title: "AWS Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      link: "https://portfolio-bucket-0010.s3.ap-south-1.amazonaws.com/Portfolio/AWS-Harshal+Santosh+Jadhav.pdf",
    },
    {
      title: "Spring Boot 3, Spring 6 & Hibernate",
      issuer: "Udemy",
      link: "https://www.udemy.com/certificate/UC-2502f57a-8daf-4460-ad52-2ce316aa84dd/",
    },
    {
      title: "Analyze Data with SQL",
      issuer: "Codecademy",
      link: "https://www.codecademy.com/profiles/Harshal___________Jadhav/certificates/5cafb2d937090210d7df3652",
    },
  ];

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="bg-gradient-to-br from-[#0a0f1f] via-[#121c33] to-[#0a0f1f] text-gray-100 min-h-screen scroll-smooth">
      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-600/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 2}rem`,
              height: `${Math.random() * 10 + 2}rem`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0a0f1f]/80 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-10">
            <div className="flex items-center">
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                HJ
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative px-1 py-2 transition-all ${
                    activeSection === item.id
                      ? "text-cyan-400 font-medium"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 rounded-full"
                      initial={false}
                      transition={{ type: "spring", duration: 0.4 }}
                    />
                  )}
                </a>
              ))}
            </div>
            <div className="flex items-center">
              <a
                href="https://github.com/harshaljadhav-git"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://linkedin.com/in/harshaljadhav"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-24 relative z-10"
      >
        <motion.div
          className="md:w-1/2 flex flex-col gap-6"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-sm font-mono text-cyan-300 bg-cyan-900/30 px-7 py-2 rounded-full w-max mb-4">
              DevOps & Cloud Enthusiast 🚀
            </div>
            <motion.h1 className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Hi, I'm Harshal Jadhav
            </motion.h1>
          </motion.div>

          <motion.p className="text-xl md:text-2xl text-gray-300 font-light max-w-xl">
            Experienced in CI/CD, Jenkins, Docker, Kubernetes, and AWS. Skilled
            in building scalable, secure, and efficient solutions.
          </motion.p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a href="#contact">
              <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium rounded-full px-6 py-3 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30">
                Let's Connect
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/3 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 rounded-full blur-xl z-0 animate-pulse"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-600/30 to-blue-600/30 z-0"></div>
          <Image
            src={profilePic}
            alt="Harshal Jadhav"
            className="relative z-10 rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-transparent bg-gradient-to-br from-cyan-500 to-blue-500 p-1 shadow-2xl"
          />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 md:px-24 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="bg-gray-900/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-800 shadow-xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-12 bg-cyan-400 rounded-full"></div>
            <h2 className="text-3xl font-bold text-cyan-300">About Me</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                I'm a B.Tech graduate in Computer Science and Engineering with
                expertise in DevOps, cloud computing, and infrastructure
                automation. My journey began at Infocepts where I developed
                backend APIs using Spring Boot and integrated databases with MS
                SQL Server.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                At Variant.ai, I designed scalable VPC architectures and
                implemented AWS automation solutions. Currently at Kylient
                Technologies, I build production-grade CI/CD pipelines using
                Jenkins, Docker, and Kubernetes.
              </p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-cyan-300 mb-4">
                My Approach
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mt-1 mr-3 text-cyan-400">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  </div>
                  <span className="text-gray-300">
                    Streamlined cloud infrastructure management
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 text-cyan-400">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  </div>
                  <span className="text-gray-300">
                    Automated CI/CD pipelines for efficiency
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 text-cyan-400">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  </div>
                  <span className="text-gray-300">
                    Containerization for scalability
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 text-cyan-400">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  </div>
                  <span className="text-gray-300">
                    Proactive monitoring for system health
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 mr-3 text-cyan-400">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  </div>
                  <span className="text-gray-300">
                    Cost optimization through resource management
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 md:px-24 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-12 bg-cyan-400 rounded-full"></div>
            <h2 className="text-3xl font-bold text-cyan-300">Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-b from-gray-900/50 to-gray-800/30 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-800 shadow-lg hover:shadow-cyan-500/20 transition-all h-full flex flex-col"
              >
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="p-2 bg-gray-800/50 rounded-lg hover:bg-cyan-900/20 transition">
                          <FaGithub className="text-gray-300 hover:text-cyan-300" />
                        </div>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="p-2 bg-gray-800/50 rounded-lg hover:bg-cyan-900/20 transition">
                          <FaExternalLinkAlt className="text-gray-300 hover:text-cyan-300" />
                        </div>
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-cyan-900/30 text-cyan-300 px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 md:px-24 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-12 bg-cyan-400 rounded-full"></div>
            <h2 className="text-3xl font-bold text-cyan-300">Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-800"
              >
                <h3 className="text-xl font-semibold text-cyan-300 mb-4">
                  {group.category}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {group.items.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-3 bg-gray-800/50 px-4 py-3 rounded-lg hover:bg-cyan-900/20 transition-all group"
                    >
                      <skill.icon className="text-cyan-400 text-xl transition-transform group-hover:scale-110" />
                      <span className="text-gray-300 group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6 md:px-24 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-1 w-12 bg-cyan-400 rounded-full"></div>
            <h2 className="text-3xl font-bold text-cyan-300">Experience</h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/20 via-blue-500/50 to-purple-500/20 z-0"></div>

            <div className="space-y-12 pl-16">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredExperience(index)}
                  onMouseLeave={() => setHoveredExperience(null)}
                >
                  <div className="absolute -left-14 top-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full w-10 h-10 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    {/* <div className="text-white text-lg font-bold">
                      {index + 1}
                    </div> */}
                  </div>

                  <motion.div
                    className={`bg-gray-900/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-800 shadow-lg transition-all overflow-hidden ${
                      hoveredExperience === index ? "border-cyan-500/50" : ""
                    }`}
                    animate={{
                      height: hoveredExperience === index ? "auto" : "110px",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-wrap justify-between gap-4 mb-4">
                      <div className="flex items-center gap-4">
                        {exp.logo}
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {exp.title}
                          </h3>
                          <p className="text-cyan-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <span className="text-cyan-300 font-medium">
                        {exp.duration}
                      </span>
                    </div>

                    <AnimatePresence>
                      {hoveredExperience === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-4 border-t border-gray-700 mt-4"
                        >
                          {Array.isArray(exp.description) ? (
                            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                              {exp.description.map((point, i) => (
                                <li key={i}>{point}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-gray-300 mb-4">
                              {exp.description}
                            </p>
                          )}
                          <div className="flex gap-3 flex-wrap">
                            {exp.techIcons.map((Icon, i) => (
                              <div
                                key={i}
                                className="p-2 bg-gray-800/50 rounded-lg hover:bg-cyan-900/20 transition"
                              >
                                <Icon className="text-xl text-cyan-400" />
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6 md:px-24 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-12 bg-cyan-400 rounded-full"></div>
            <h2 className="text-3xl font-bold text-cyan-300">Education</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-800"
              >
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                  {edu.institution}
                </h3>
                <p className="text-gray-300">{edu.degree}</p>
                <p className="text-gray-400 text-sm">{edu.year}</p>
                <p className="text-cyan-400 font-medium mt-2">{edu.score}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        className="py-16 px-6 md:px-24 relative z-10"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-12 bg-cyan-400 rounded-full"></div>
            <h2 className="text-3xl font-bold text-cyan-300">Certifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900/30 to-gray-800/20 backdrop-blur-lg rounded-2xl p-6 border border-gray-800 hover:border-cyan-400 transition-all shadow-md hover:shadow-cyan-500/30 group"
              >
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  Issued by: {cert.issuer}
                </p>
                <div className="mt-4 flex items-center text-cyan-400 text-sm">
                  View credential
                  <FaExternalLinkAlt className="ml-2 text-xs" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 md:px-24 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-cyan-500/30 text-center"
        >
          <h2 className="text-3xl font-bold text-cyan-300 mb-2">
            Let's Connect!
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">
            Have a project in mind or want to discuss opportunities? Feel free
            to reach out!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-2xl mx-auto">
            <a
              href="https://portfolio-bucket-0010.s3.ap-south-1.amazonaws.com/Portfolio/Harshal+Jadhav+Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium rounded-full px-6 py-5 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 flex items-center justify-center gap-2">
                <FaDownload className="text-lg" /> Download Resume
              </Button>
            </a>
            <a
              href="mailto:harshalj257@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full bg-transparent border-2 border-cyan-500/50 text-cyan-300 font-medium rounded-full px-6 py-5 hover:bg-cyan-900/20 hover:border-cyan-400 transition-all flex items-center justify-center gap-2">
                <FaEnvelope className="text-lg" /> Send Email
              </Button>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 text-center text-sm text-gray-400 z-10">
        <div className="container mx-auto px-6">
          <p>
            &copy; {new Date().getFullYear()} Harshal Jadhav. All rights
            reserved.
          </p>
          <a
            href="#top"
            className="fixed right-6 bottom-6 p-3 bg-gradient-to-br from-cyan-600 to-blue-600 text-white rounded-full hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center"
            aria-label="Back to top"
          >
            <FaArrowUp />
          </a>
        </div>
      </footer>
    </div>
  );
}
