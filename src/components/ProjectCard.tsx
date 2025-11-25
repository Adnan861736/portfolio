'use client';

import Image from 'next/image';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  locale: 'en' | 'ar';
}

export default function ProjectCard({ project, onClick, locale }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-xl transition-all duration-500 animate-fade-in"
    >
      {/* Card Container with Perspective */}
      <div className="relative bg-dark-card border border-dark-border hover:border-blue-500 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1">

        {/* Stacked Images Container - Full Coverage */}
        <div className="relative h-56 overflow-visible p-3">
          <div className="relative h-full w-full">
            {project.images.slice(0, 5).reverse().map((image, reverseIndex) => {
              const index = 4 - reverseIndex; // الصورة الأولى في الأسفل، الخامسة في الأعلى

              // Natural rotations like stacked books
              const rotations = [-5, 3, -4, 6, -2];
              const rotation = rotations[reverseIndex] || 0;

              // Compact stack offsets for full coverage
              const offsets = [
                { x: 0, y: 0 },
                { x: -4, y: -6 },
                { x: 6, y: -12 },
                { x: -3, y: -18 },
                { x: 5, y: -24 }
              ];
              const offset = offsets[reverseIndex] || { x: 0, y: 0 };

              return (
                <div
                  key={index}
                  className="absolute inset-0 transition-all duration-700 ease-out"
                  style={{
                    transform: `translate(${offset.x}px, ${offset.y}px) rotate(${rotation}deg)`,
                    transformOrigin: 'center center',
                    zIndex: reverseIndex,
                  }}
                >
                  {/* Full-Size Card Frame */}
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl transition-shadow duration-500 group-hover:shadow-blue-500/30">
                    {/* Main Image Container - Full Size */}
                    <div className="relative w-full h-full bg-dark-bg border border-dark-border rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`${project.title[locale]} - ${index + 1}`}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 4}
                      />

                      {/* Top Card Overlay & Badge - على الصورة العليا */}
                      {reverseIndex === 0 && (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                          {/* Tiny Counter Badge - رقم صغير جداً */}
                          <div className="absolute top-2 right-2 z-20 bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-md border border-white/10">
                            {project.images.length}
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Natural Shadow */}
                  <div
                    className="absolute -bottom-1 left-2 right-2 h-2 bg-black/50 blur-lg rounded-full"
                    style={{ zIndex: -1 }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Hover Overlay with Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-black/60 via-black/40 to-transparent z-30 rounded-xl">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-40 scale-150"></div>

            {/* Icon Button */}
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 flex items-center justify-center shadow-2xl border-2 border-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title[locale]}
        </h3>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description[locale]}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-3 py-1 text-xs bg-gray-500/10 text-gray-400 rounded-full border border-gray-500/20">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
