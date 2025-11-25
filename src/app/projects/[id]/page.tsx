'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import { projects } from '@/data/projects';

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const [locale, setLocale] = useState<'en' | 'ar'>('en');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const project = projects.find((p) => p.id === params.id);

  useEffect(() => {
    // Get locale from localStorage or default to 'en'
    const savedLocale = localStorage.getItem('locale') as 'en' | 'ar' | null;
    if (savedLocale) {
      setLocale(savedLocale);
    }
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImageIndex]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImageIndex]);

  const handlePrevImage = () => {
    if (selectedImageIndex === null || !project) return;
    setSelectedImageIndex((selectedImageIndex - 1 + project.images.length) % project.images.length);
  };

  const handleNextImage = () => {
    if (selectedImageIndex === null || !project) return;
    setSelectedImageIndex((selectedImageIndex + 1) % project.images.length);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-bg">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            {locale === 'ar' ? 'المشروع غير موجود' : 'Project Not Found'}
          </h1>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            {locale === 'ar' ? 'العودة للصفحة الرئيسية' : 'Back to Home'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-dark-bg" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-dark-bg/95 backdrop-blur-md border-b border-dark-border animate-fade-in">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => router.push('/')}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>{locale === 'ar' ? 'رجوع' : 'Back'}</span>
            </button>

            <h1 className="text-xl font-bold text-white">
              {project.title[locale]}
            </h1>

            <div className="w-20" /> {/* Spacer for centering */}
          </div>
        </nav>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Images Gallery - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {project.images.map((image, index) => {
            // التناوب بين الاتجاهات بناءً على موقع الصورة
            const directions = ['left', 'up', 'right'];
            const direction = directions[index % 3] as 'left' | 'up' | 'right';
            const delay = Math.min(Math.floor(index / 3) * 100, 300);

            return (
              <ScrollReveal
                key={index}
                direction={direction}
                delay={delay}
              >
                <button
                  onClick={() => setSelectedImageIndex(index)}
                  className="relative bg-dark-card rounded-xl overflow-hidden border border-dark-border hover:border-blue-500/50 transition-all cursor-pointer group w-full"
                >
                  <div className="relative w-full aspect-video">
                    <Image
                      src={image}
                      alt={`${project.title[locale]} - ${locale === 'ar' ? 'صورة' : 'Image'} ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      priority={index < 3}
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>

                  {/* Image Number Badge */}
                  <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/70 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                    {index + 1}/{project.images.length}
                  </div>
                </button>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Image Modal/Lightbox */}
        {selectedImageIndex !== null && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center animate-fade-in"
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all z-50 hover:rotate-90 duration-300"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium z-50">
              {selectedImageIndex + 1} / {project.images.length}
            </div>

            {/* Previous Button */}
            {project.images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all z-50 hover:scale-110"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Image Container */}
            <div 
              className="relative max-w-7xl max-h-[90vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full animate-fade-in">
                <Image
                  src={project.images[selectedImageIndex]}
                  alt={`${project.title[locale]} - ${locale === 'ar' ? 'صورة' : 'Image'} ${selectedImageIndex + 1}`}
                  width={1920}
                  height={1080}
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                  priority
                />
              </div>

              {/* Image Description */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <p className="text-white text-center font-medium">
                  {project.title[locale]} - {locale === 'ar' ? 'صورة' : 'Image'} {selectedImageIndex + 1}
                </p>
              </div>
            </div>

            {/* Next Button */}
            {project.images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all z-50 hover:scale-110"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Keyboard Hint */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 text-sm hidden md:block">
              {locale === 'ar' ? 'استخدم الأسهم أو ESC للإغلاق' : 'Use arrows or ESC to close'}
            </div>
          </div>
        )}

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-6">
            <ScrollReveal direction="left" delay={100}>
            <div className="bg-dark-card border border-dark-border rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">
                {locale === 'ar' ? 'الوصف' : 'Description'}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {project.description[locale]}
              </p>
            </div>
            </ScrollReveal>

            {/* Technologies */}
            <ScrollReveal direction="left" delay={200}>
            <div className="bg-dark-card border border-dark-border rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">
                {locale === 'ar' ? 'التقنيات المستخدمة' : 'Technologies Used'}
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* GitHub Link */}
            {project.githubUrl && project.githubUrl !== '#' && (
              <ScrollReveal direction="right" delay={100}>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full bg-dark-card border border-dark-border hover:border-blue-500 rounded-xl p-6 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">
                    {locale === 'ar' ? 'عرض على GitHub' : 'View on GitHub'}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {locale === 'ar' ? 'الكود المصدري' : 'Source Code'}
                  </p>
                </div>
              </a>
              </ScrollReveal>
            )}

            {/* Project Info Card */}
            <ScrollReveal direction="right" delay={200}>
            <div className="bg-dark-card border border-dark-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">
                {locale === 'ar' ? 'معلومات المشروع' : 'Project Info'}
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-400 text-sm mb-1">
                    {locale === 'ar' ? 'عدد الصور' : 'Images'}
                  </p>
                  <p className="text-white font-medium">{project.images.length}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">
                    {locale === 'ar' ? 'التقنيات' : 'Technologies'}
                  </p>
                  <p className="text-white font-medium">{project.tags.length}</p>
                </div>
                {project.featured && (
                  <div className="pt-2 border-t border-dark-border">
                    <span className="inline-flex items-center gap-2 text-yellow-400 text-sm">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {locale === 'ar' ? 'مشروع مميز' : 'Featured'}
                    </span>
                  </div>
                )}
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </main>
  );
}