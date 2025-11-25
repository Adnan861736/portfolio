'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ProjectCard from '@/components/ProjectCard';
import ScrollReveal from '@/components/ScrollReveal';
import { projects } from '@/data/projects';

export default function Home() {
  const router = useRouter();
  const [locale, setLocale] = useState<'en' | 'ar'>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Save locale to localStorage whenever it changes
    localStorage.setItem('locale', locale);
  }, [locale]);

  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'ar' : 'en');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleProjectClick = (projectId: string) => {
    router.push(`/projects/${projectId}`);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-dark-bg/95 backdrop-blur-md border-b border-dark-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <h1 className="text-xl md:text-2xl font-bold text-white">
              {locale === 'ar' ? 'عدنان حلونجي' : 'Adnan Hlwnji'}
            </h1>

            {/* Navigation - Desktop */}
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                {locale === 'ar' ? 'عني' : 'About'}
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                {locale === 'ar' ? 'الخبرات' : 'Experience'}
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                {locale === 'ar' ? 'المهارات' : 'Skills'}
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                {locale === 'ar' ? 'المشاريع' : 'Projects'}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                {locale === 'ar' ? 'تواصل' : 'Contact'}
              </button>
            </div>

            {/* Actions - Desktop */}
            <div className="hidden md:flex items-center gap-2">
              {/* Download CV */}
              <a
                href="/Adnan_Hlwnji_CV (1).pdf"
                download
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="hidden sm:inline">CV</span>
              </a>

              {/* Language Toggle */}
              <button
                onClick={toggleLocale}
                className="px-4 py-2 bg-dark-card border border-dark-border rounded-lg hover:border-blue-500 transition-colors text-sm font-medium"
              >
                {locale === 'en' ? 'العربية' : 'EN'}
              </button>

              {/* GitHub */}
              <a
                href="https://github.com/Adnan861736"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 bg-dark-card border border-dark-border rounded-lg animate-fade-in">
              {/* Navigation Links */}
              <div className="flex flex-col gap-3 px-4 pb-4 border-b border-dark-border">
                <button
                  onClick={() => {
                    scrollToSection('about');
                    setMobileMenuOpen(false);
                  }}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm text-left"
                >
                  {locale === 'ar' ? 'عني' : 'About'}
                </button>
                <button
                  onClick={() => {
                    scrollToSection('experience');
                    setMobileMenuOpen(false);
                  }}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm text-left"
                >
                  {locale === 'ar' ? 'الخبرات' : 'Experience'}
                </button>
                <button
                  onClick={() => {
                    scrollToSection('skills');
                    setMobileMenuOpen(false);
                  }}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm text-left"
                >
                  {locale === 'ar' ? 'المهارات' : 'Skills'}
                </button>
                <button
                  onClick={() => {
                    scrollToSection('projects');
                    setMobileMenuOpen(false);
                  }}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm text-left"
                >
                  {locale === 'ar' ? 'المشاريع' : 'Projects'}
                </button>
                <button
                  onClick={() => {
                    scrollToSection('contact');
                    setMobileMenuOpen(false);
                  }}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm text-left"
                >
                  {locale === 'ar' ? 'تواصل' : 'Contact'}
                </button>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 px-4 pt-4">
                {/* Download CV */}
                <a
                  href="/Adnan_Hlwnji_CV (1).pdf"
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium justify-center"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>{locale === 'ar' ? 'تحميل السيرة الذاتية' : 'Download CV'}</span>
                </a>

                <div className="flex items-center gap-2 justify-center">
                  {/* Language Toggle */}
                  <button
                    onClick={toggleLocale}
                    className="px-4 py-2 bg-dark-bg border border-dark-border rounded-lg hover:border-blue-500 transition-colors text-sm font-medium"
                  >
                    {locale === 'en' ? 'العربية' : 'EN'}
                  </button>

                  {/* GitHub */}
                  <a
                    href="https://github.com/Adnan861736"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="about" className="container mx-auto px-4 py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Profile Image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 rounded-full overflow-hidden border-2 border-blue-500 shadow-lg shadow-blue-500/20 animate-scale-in animate-float">
              <Image
                src="/photo_2025-11-21_23-21-06.jpg"
                alt="Adnan Hlwnji"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Text Content */}
            <div className={`flex-1 space-y-6 text-center ${locale === 'ar' ? 'md:text-right' : 'md:text-left'}`}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-fade-in-up animate-fill-both">
                {locale === 'ar' ? 'عدنان حلونجي' : 'Adnan Hlwnji'}
              </h2>

              <p className="text-xl md:text-2xl text-gray-400 animate-fade-in-up animate-delay-200 animate-fill-both">
                {locale === 'ar' ? 'مطور Full Stack' : 'Full Stack Developer'}
              </p>

              <p className={`text-gray-300 leading-${locale === 'ar' ? 'loose' : 'relaxed'} max-w-2xl mx-auto md:mx-0 animate-fade-in-up animate-delay-300 animate-fill-both`}>
                {locale === 'ar'
                  ? 'مطور Full Stack متعدد المهارات مع أساس قوي في هندسة الكمبيوتر وسجل حافل في تطوير تطبيقات الويب من البداية للنهاية — من تصميم قاعدة البيانات وتطوير RESTful APIs إلى واجهات أمامية ديناميكية ومتجاوبة.'
                  : 'Versatile Full-Stack Developer with a strong foundation in Computer Engineering and a track record of delivering end-to-end web applications — from database design and RESTful API development to dynamic, responsive frontends.'}
              </p>

              <div className={`flex flex-wrap gap-4 pt-4 justify-center ${locale === 'ar' ? 'md:justify-end' : 'md:justify-start'} animate-fade-in-up animate-delay-400 animate-fill-both`}>
                <a
                  href="/Adnan_Hlwnji_CV (1).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-blue-600/20"
                >
                  {locale === 'ar' ? 'تحميل السيرة الذاتية' : 'Download CV'}
                </a>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 bg-dark-card border border-dark-border hover:border-blue-500 text-white font-semibold rounded-lg transition-colors"
                >
                  {locale === 'ar' ? 'تواصل معي' : 'Contact Me'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-4 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">
            {locale === 'ar' ? 'الخبرات العملية' : 'Experience'}
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* TMC Company */}
            <ScrollReveal direction="left" delay={100}>
            <div className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {locale === 'ar' ? 'مطور Full Stack' : 'Full Stack Developer'}
                  </h4>
                  <p className="text-blue-400 font-medium">TMC Company</p>
                  <span className="text-gray-400 text-sm">
                    {locale === 'ar' ? '3 أشهر' : '3 Months'}
                  </span>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>{locale === 'ar'
                    ? 'تصميم وتطوير منصة Souq للتجارة الإلكترونية من الصفر'
                    : 'Designed and developed Souq e-commerce platform from scratch'}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>{locale === 'ar'
                    ? 'معمارية Full Stack: Next.js, Node.js, Express, MySQL'
                    : 'Full-stack architecture: Next.js, Node.js, Express, MySQL'}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>{locale === 'ar'
                    ? 'نظام تحكم بالأدوار (Admin, Merchant, Customer)'
                    : 'Role-based access control (Admin, Merchant, Customer)'}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400 mt-1">▸</span>
                  <span>{locale === 'ar'
                    ? 'دعم ثنائي اللغة مع i18n والوضع المظلم/الفاتح'
                    : 'Bilingual support with i18n and dark/light mode'}</span>
                </li>
              </ul>
            </div>
            </ScrollReveal>

            {/* Zenobia Organization */}
            <ScrollReveal direction="right" delay={200}>
            <div className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                    {locale === 'ar' ? 'مطور Frontend' : 'Frontend Developer'}
                  </h4>
                  <p className="text-purple-400 font-medium">Zenobia Organization</p>
                  <span className="text-gray-400 text-sm">
                    {locale === 'ar' ? 'شهران' : '2 Months'}
                  </span>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>{locale === 'ar'
                    ? 'لوحة تحكم إدارية متجاوبة لإدارة البيانات'
                    : 'Responsive admin dashboard for data management'}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>{locale === 'ar'
                    ? 'مكونات واجهة مستخدم بـ Next.js وCSS الحديث'
                    : 'UI components using Next.js and modern CSS'}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>{locale === 'ar'
                    ? 'تكامل RESTful APIs مع فريق Backend'
                    : 'RESTful APIs integration with backend team'}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span>{locale === 'ar'
                    ? 'تحسين الأداء والتصميم المتجاوب'
                    : 'Performance optimization and responsive design'}</span>
                </li>
              </ul>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-16 bg-dark-card/30 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">
            {locale === 'ar' ? 'المهارات التقنية' : 'Technical Skills'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend */}
            <ScrollReveal direction="left" delay={100}>
            <div className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-blue-500/30 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white">
                  {locale === 'ar' ? 'الواجهة الأمامية' : 'Frontend'}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Bootstrap'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-dark-bg border border-dark-border rounded-lg text-gray-300 text-sm hover:border-blue-500/50 hover:text-white transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            </ScrollReveal>

            {/* Backend */}
            <ScrollReveal direction="right" delay={100}>
            <div className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-purple-500/30 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white">
                  {locale === 'ar' ? 'الخلفية' : 'Backend'}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'RESTful APIs', 'JWT Authentication'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-dark-bg border border-dark-border rounded-lg text-gray-300 text-sm hover:border-purple-500/50 hover:text-white transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            </ScrollReveal>

            {/* Databases */}
            <ScrollReveal direction="left" delay={200}>
            <div className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-green-500/30 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white">
                  {locale === 'ar' ? 'قواعد البيانات' : 'Databases'}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['MySQL', 'MongoDB'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-dark-bg border border-dark-border rounded-lg text-gray-300 text-sm hover:border-green-500/50 hover:text-white transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            </ScrollReveal>

            {/* Tools */}
            <ScrollReveal direction="right" delay={200}>
            <div className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-gray-500/30 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-gray-500/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white">
                  {locale === 'ar' ? 'الأدوات والممارسات' : 'Tools & Practices'}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'Postman', 'VS Code', 'Responsive Design', 'SSG/ISR'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-dark-bg border border-dark-border rounded-lg text-gray-300 text-sm hover:border-gray-500/50 hover:text-white transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-16 overflow-hidden">
        <h3 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">
          {locale === 'ar' ? 'المشاريع' : 'Projects'}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            // التناوب بين left و right بناءً على موقع العنصر في الشبكة
            const direction = index % 2 === 0 ? 'left' : 'right';
            const delay = Math.min((index % 3) * 100, 200);

            return (
              <ScrollReveal
                key={project.id}
                direction={direction}
                delay={delay}
              >
                <ProjectCard
                  project={project}
                  onClick={() => handleProjectClick(project.id)}
                  locale={locale}
                />
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16 bg-dark-card/30 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-4 animate-fade-in-up">
            {locale === 'ar' ? 'تواصل معي' : 'Get In Touch'}
          </h3>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up animate-delay-200 animate-fill-both">
            {locale === 'ar'
              ? 'هل لديك مشروع أو فكرة تود مناقشتها؟ لا تتردد في التواصل معي عبر أي من القنوات التالية'
              : 'Have a project or idea to discuss? Feel free to reach out through any of the following channels'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <ScrollReveal direction="left" delay={100}>
            <a
              href="mailto:adnanhlwngi@gmail.com"
              className="flex items-center gap-4 bg-dark-card border border-dark-border rounded-lg p-6 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors flex-shrink-0">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-gray-400 text-sm">{locale === 'ar' ? 'البريد الإلكتروني' : 'Email'}</p>
                <p className="text-white font-medium truncate">adnanhlwngi@gmail.com</p>
              </div>
            </a>
            </ScrollReveal>

            {/* Phone / WhatsApp */}
            <ScrollReveal direction="right" delay={100}>
            <a
              href="https://wa.me/963964659068"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-dark-card border border-dark-border rounded-lg p-6 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/10 transition-all group"
            >
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-colors flex-shrink-0">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-gray-400 text-sm">{locale === 'ar' ? 'واتساب' : 'WhatsApp'}</p>
                <p className="text-white font-medium" dir="ltr">+963 964 659 068</p>
              </div>
            </a>
            </ScrollReveal>

            {/* GitHub */}
            <ScrollReveal direction="left" delay={200}>
            <a
              href="https://github.com/Adnan861736"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-dark-card border border-dark-border rounded-lg p-6 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 transition-all group"
            >
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors flex-shrink-0">
                <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-gray-400 text-sm">GitHub</p>
                <p className="text-white font-medium">@Adnan861736</p>
              </div>
            </a>
            </ScrollReveal>

            {/* Telegram */}
            <ScrollReveal direction="right" delay={200}>
            <a
              href="https://t.me/Adnan_Hlwnji"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-dark-card border border-dark-border rounded-lg p-6 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10 transition-all group"
            >
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors flex-shrink-0">
                <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-gray-400 text-sm">Telegram</p>
                <p className="text-white font-medium">@Adnan_Hlwnji</p>
              </div>
            </a>
            </ScrollReveal>
{/* LinkedIn */}
<ScrollReveal direction="up" delay={300} className="md:col-span-2 flex justify-center">
  <a
    href="https://www.linkedin.com/in/adnan-hlwnji"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 bg-dark-card border border-dark-border rounded-lg px-6 py-6 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-600/10 transition-all group justify-center w-full max-w-md"
  >
    <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-colors flex-shrink-0">
      <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    </div>
    <div className="min-w-0 text-center">
      <p className="text-gray-400 text-sm">{locale === 'ar' ? 'لينكد إن' : 'LinkedIn'}</p>
      <p className="text-white font-medium">{locale === 'ar' ? 'عدنان حلـونجي' : 'Adnan Hlwnji'}</p>
    </div>
  </a>
</ScrollReveal>
            </div>
          </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-dark-border py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p className="mb-4">
            {locale === 'ar'
              ? '© 2024 عدنان حلونجي. جميع الحقوق محفوظة.'
              : '© 2024 Adnan Hlwnji. All rights reserved.'}
          </p>
          <p className="text-sm text-gray-500">
            {locale === 'ar'
              ? 'مطور Full Stack | مهندس كمبيوتر | جامعة حلب'
              : 'Full Stack Developer | Computer Engineer | Aleppo University'}
          </p>
        </div>
      </footer>
    </main>
  );
}
