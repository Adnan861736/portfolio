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
      className="group cursor-pointer bg-dark-card border border-dark-border rounded-lg overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 animate-fade-in"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.images[0]}
          alt={project.title[locale]}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Entry Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
          <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/50 transform group-hover:scale-110 transition-transform">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
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
