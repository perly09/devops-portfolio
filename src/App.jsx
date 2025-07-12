import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Moon, Sun, Github, Linkedin, Mail, Download, ExternalLink, Menu, X, Code, Server, Cloud, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedCounter from './components/AnimatedCounter.jsx'
import ParticleBackground from './components/ParticleBackground.jsx'
import './App.css'

// Import tech icons
import dockerIcon from './assets/Q7Ior6PGZ8Xh.png'
import kubernetesIcon from './assets/NIPJM1D49uYJ.png'
import awsIcon from './assets/23LmwMlES2h6.png'
import devopsIcon from './assets/wRtHgrsBQ7Q5.png'
import cloudIcon from './assets/sv7ZotF2CSrT.png'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const skills = [
    { name: 'Docker', icon: dockerIcon },
    { name: 'Kubernetes', icon: kubernetesIcon },
    { name: 'AWS', icon: awsIcon },
    { name: 'Azure', icon: null },
    { name: 'GCP', icon: null },
    { name: 'Terraform', icon: null },
    { name: 'Ansible', icon: null },
    { name: 'Jenkins', icon: null },
    { name: 'Git', icon: null },
    { name: 'Linux', icon: null },
    { name: 'CI/CD', icon: null },
    { name: 'Prometheus', icon: null },
    { name: 'Grafana', icon: null },
    { name: 'Zabbix', icon: null },
    { name: 'Python', icon: null },
    { name: 'Bash', icon: null }
  ]

  const projects = [
    {
      title: "L’Étude, L’installation et la mise en place d’une Infrastructure de Déploiement Continu pour une Application SaaS Mixte Réalité",
      description: "L'utilisation d'un pipeline CI/CD, des services cloud d'Azure et des outils de surveillance avancés. (English: The Study, Installation, and Implementation of a Continuous Deployment Infrastructure for a Mixed Reality SaaS Application, utilizing a CI/CD pipeline, Azure cloud services, and advanced monitoring tools.)",
      techStack: ["Azure DevOps", "Azure Cloud Services", "CI/CD", "Monitoring Tools", "Mixed Reality"],
      contributions: "Designed and implemented the CI/CD pipeline, configured Azure cloud resources, integrated monitoring solutions, and ensured continuous deployment for the mixed reality SaaS application.",
      github: "#",
      image: null
    },
    {
      title: "Scalable DevOps Ecosystem: CI/CD, Code Quality, Artifact Management & More",
      description: "Designed and implemented a robust DevOps ecosystem using Jenkins for CI/CD, SonarQube for code quality analysis, Nexus for artifact management, and PostgreSQL for database management.",
      techStack: ["Jenkins", "SonarQube", "Nexus", "PostgreSQL", "CI/CD", "Code Quality", "Artifact Management"],
      contributions: "Set up and configured Jenkins pipelines, integrated SonarQube for static code analysis, managed artifact repositories with Nexus, and administered PostgreSQL databases for the ecosystem.",
      github: "#",
      image: null
    },
    {
      title: "Cloud Infrastructure Automation",
      description: "Automated AWS infrastructure provisioning using Terraform and Ansible, reducing deployment time by 80%.",
      techStack: ["Terraform", "AWS", "Ansible", "Python"],
      contributions: "Designed and implemented Infrastructure as Code templates, automated CI/CD pipelines",
      github: "https://github.com/username/cloud-automation",
      image: null
    },
    {
      title: "Kubernetes Monitoring Stack",
      description: "Deployed comprehensive monitoring solution using Prometheus, Grafana, and AlertManager for Kubernetes clusters.",
      techStack: ["Kubernetes", "Prometheus", "Grafana", "Docker"],
      contributions: "Set up monitoring dashboards, configured alerting rules, optimized resource utilization",
      github: "https://github.com/username/k8s-monitoring",
      image: null
    },
    {
      title: "CI/CD Pipeline Optimization",
      description: "Redesigned Jenkins pipelines to improve build times and deployment reliability across multiple environments.",
      techStack: ["Jenkins", "Docker", "Git", "AWS"],
      contributions: "Implemented parallel builds, automated testing, reduced deployment failures by 60%",
      github: "https://github.com/username/cicd-optimization",
      image: null
    },
    {
      title: "Multi-Cloud Migration",
      description: "Led migration of legacy applications from on-premises to multi-cloud architecture (AWS + Azure).",
      techStack: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
      contributions: "Architected migration strategy, implemented disaster recovery, ensured zero-downtime migration",
      github: "https://github.com/username/multi-cloud-migration",
      image: null
    }
  ]

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ParticleBackground />
      
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            DevOps Engineer
          </motion.h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-primary transition-colors">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="hidden md:flex"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-background border-t border-border"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-left hover:text-primary transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-left hover:text-primary transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-primary transition-colors">Contact</button>
              <Button
                variant="ghost"
                onClick={toggleDarkMode}
                className="justify-start"
              >
                {darkMode ? <Sun className="h-5 w-5 mr-2" /> : <Moon className="h-5 w-5 mr-2" />}
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </Button>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              DevOps & Cloud Engineer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Building Scalable Solutions Through Automation, Cloud Architecture, and Modern DevOps Practices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => scrollToSection('projects')} size="lg" className="text-lg px-8">
                View My Projects
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8" asChild>
                <a href="/AymaneADERDOURCVDevOps.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <motion.div
                  className="flex justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Code className="h-12 w-12 text-primary" />
                </motion.div>
                <div className="text-3xl font-bold text-primary">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <p className="text-muted-foreground">Projects Deployed</p>
              </div>
              <div className="space-y-2">
                <motion.div
                  className="flex justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Server className="h-12 w-12 text-primary" />
                </motion.div>
                <div className="text-3xl font-bold text-primary">
                  <AnimatedCounter end={99} suffix="%" />
                </div>
                <p className="text-muted-foreground">Uptime Achieved</p>
              </div>
              <div className="space-y-2">
                <motion.div
                  className="flex justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Cloud className="h-12 w-12 text-primary" />
                </motion.div>
                <div className="text-3xl font-bold text-primary">
                  <AnimatedCounter end={5} suffix="+" />
                </div>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="space-y-2">
                <motion.div
                  className="flex justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Zap className="h-12 w-12 text-primary" />
                </motion.div>
                <div className="text-3xl font-bold text-primary">
                  <AnimatedCounter end={80} suffix="%" />
                </div>
                <p className="text-muted-foreground">Faster Deployments</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I am a highly motivated and results-oriented DevOps and Cloud Engineer with a passion for building scalable, reliable, and automated systems. My expertise lies in streamlining development workflows and optimizing infrastructure for efficiency and performance. I am proficient in leveraging cutting-edge technologies to drive innovation and deliver robust solutions.
              </p>
              
              <h3 className="text-2xl font-semibold mb-6">Key Strengths</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <img src={devopsIcon} alt="DevOps" className="w-8 h-8 mt-1" />
                    <div>
                      <h4 className="font-semibold">Automation</h4>
                      <p className="text-muted-foreground">Designing and implementing automated solutions to enhance operational efficiency and reduce manual effort.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <img src={cloudIcon} alt="Cloud" className="w-8 h-8 mt-1" />
                    <div>
                      <h4 className="font-semibold">CI/CD Pipelines</h4>
                      <p className="text-muted-foreground">Building and managing continuous integration and continuous delivery pipelines for rapid and reliable software deployments.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <img src={awsIcon} alt="AWS" className="w-8 h-8 mt-1" />
                    <div>
                      <h4 className="font-semibold">Cloud Architecture</h4>
                      <p className="text-muted-foreground">Expertise in designing, deploying, and managing cloud-native applications and infrastructure on leading cloud platforms.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <img src={dockerIcon} alt="Docker" className="w-8 h-8 mt-1" />
                    <div>
                      <h4 className="font-semibold">Containerization</h4>
                      <p className="text-muted-foreground">Extensive experience with Docker for packaging and deploying applications in isolated environments.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <img src={kubernetesIcon} alt="Kubernetes" className="w-8 h-8 mt-1" />
                    <div>
                      <h4 className="font-semibold">Orchestration</h4>
                      <p className="text-muted-foreground">Skilled in orchestrating containerized workloads using Kubernetes for automated deployment, scaling, and management.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 mt-1 bg-primary rounded flex items-center justify-center">
                      <span className="text-primary-foreground text-xs font-bold">M</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Monitoring</h4>
                      <p className="text-muted-foreground">Implementing comprehensive monitoring solutions with tools like Prometheus, Grafana, and Zabbix to ensure system health and performance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300"
                >
                  {skill.icon ? (
                    <img src={skill.icon} alt={skill.name} className="w-12 h-12 mx-auto mb-2" />
                  ) : (
                    <div className="w-12 h-12 mx-auto mb-2 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-lg">
                        {skill.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <p className="font-medium text-sm">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {project.title}
                        <Button variant="ghost" size="icon" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Tech Stack:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <Badge key={tech} variant="secondary">{tech}</Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">My Contributions:</h4>
                          <p className="text-muted-foreground text-sm">{project.contributions}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resume Download Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Resume</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Download my complete resume to learn more about my experience, certifications, and technical expertise.
            </p>
            <Button size="lg" className="text-lg px-8">
              <Download className="mr-2 h-5 w-5" />
              Download Resume (PDF)
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Me</CardTitle>
                  <CardDescription>
                    I'm always interested in discussing new opportunities and exciting projects.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                        <Input id="name" placeholder="Your Name" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                        <Input id="email" type="email" placeholder="your.email@example.com" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                      <Input id="subject" placeholder="Project Discussion" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                      <Textarea id="message" placeholder="Tell me about your project or opportunity..." rows={5} />
                    </div>
                    <Button type="submit" className="w-full">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Social Links */}
              <div className="flex justify-center space-x-6 mt-8">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/perly09" target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://www.linkedin.com/in/aderdour-aymane/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:aymaneaderdour66@gmail.com">
                    <Mail className="h-6 w-6" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 DevOps & Cloud Engineer Portfolio. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

