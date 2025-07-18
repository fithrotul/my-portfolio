'use client';

import React, { useState, useEffect } from 'react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  // Animate skill bars on scroll
  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('about');
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible && !skillsVisible) {
          setSkillsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [skillsVisible]);

  const skills = [
    { name: 'UI/UX Design', percentage: 95 },
    { name: 'React/Next.js', percentage: 90 },
    { name: 'Figma/Adobe XD', percentage: 88 },
    { name: 'TypeScript', percentage: 85 },
    { name: 'Tailwind CSS', percentage: 92 }
  ];

  const projects = [
    {
      title: 'E-Commerce Dashboard',
      description: 'Modern admin dashboard with advanced analytics and user management',
      type: 'Web App',
      typeColor: 'bg-blue-100 text-blue-600',
      icon: '📊',
      bgColor: 'from-blue-100 to-purple-100',
      iconColor: 'text-blue-600',
      tags: ['React', 'TypeScript', 'Tailwind']
    },
    {
      title: 'Banking Mobile App',
      description: 'Intuitive mobile banking interface with seamless UX flow',
      type: 'Mobile Design',
      typeColor: 'bg-green-100 text-green-600',
      icon: '📱',
      bgColor: 'from-green-100 to-teal-100',
      iconColor: 'text-green-600',
      tags: ['Figma', 'Prototyping', 'User Testing', 'iOS']
    }
  ];

  const skillCategories = [
    {
      title: 'UI/UX Design',
      icon: '🎨',
      description: 'Creating intuitive and beautiful user interfaces with focus on user experience',
      skills: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
    },
    {
      title: 'Frontend Development',
      icon: '💻',
      description: 'Building responsive and performant web applications with modern technologies',
      skills: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'API Integration']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-2xl text-blue-600">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                  Hello, I'm<br />
                  <span className="text-blue-600">Alex Chen</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Creating beautiful digital experiences that users love through thoughtful design and clean code
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  View My Work
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Download CV
                </button>
              </div>
              
              <div className="flex space-x-4">
                {[
                  { icon: '💻', href: '#' },
                  { icon: '🔗', href: '#' },
                  { icon: '🎨', href: '#' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors text-xl"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-2">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                    <div className="text-6xl">👨‍💻</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold text-sm">
                  UI/UX Designer | Frontend Developer
                </div>
              </div>
              <div className="absolute top-10 right-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With 5+ years of experience in design and development, I bridge the gap between creativity and functionality
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-6">My Journey</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I started as a graphic designer and evolved into a full-stack creative professional. My passion lies in creating user-centered designs that not only look amazing but also solve real problems and deliver exceptional user experiences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I specialize in modern web technologies and design tools, constantly staying updated with the latest trends and best practices in UI/UX design and frontend development.
              </p>
            </div>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-700">{skill.name}</span>
                    <span className="text-blue-600 font-semibold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-2000 ease-out"
                      style={{ width: skillsVisible ? `${skill.percentage}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">A showcase of my recent work across different industries and platforms</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className={`h-64 bg-gradient-to-br ${project.bgColor} flex items-center justify-center`}>
                  <div className="text-6xl">{project.icon}</div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                    <span className={`${project.typeColor} px-3 py-1 rounded-full text-sm font-semibold`}>
                      {project.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills</h2>
            <p className="text-xl text-gray-600">Comprehensive design and development skills to bring your ideas to life</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <ul className="text-left space-y-2 text-gray-700">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <span className="text-blue-500 mr-2">✓</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Let's Work Together</h2>
            <p className="text-xl text-gray-600">Ready to start your next project? Let's discuss how I can help bring your vision to life</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-8">Get In Touch</h3>
              
              <div className="space-y-6">
                {[
                  { icon: '📧', label: 'Email', value: 'alex.chen@example.com' },
                  { icon: '📞', label: 'Phone', value: '+1 (555) 123-4567' },
                  { icon: '📍', label: 'Location', value: 'San Francisco, CA' }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-blue-600 text-xl">{contact.icon}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-700">{contact.label}</div>
                      <div className="text-gray-600">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Send Message</h3>
              <p className="text-gray-600 mb-6">I'll get back to you within 24 hours</p>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
                <button
                  onClick={() => alert("Thank you for your message! I'll get back to you soon.")}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 Alex Chen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}