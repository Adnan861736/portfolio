import { projects } from '@/data/projects';
import ProjectDetailClient from './ProjectDetailClient';

const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

// Generate static paths for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <a href={`${basePath}/`} className="text-blue-500 hover:text-blue-400">
            Go back to home
          </a>
        </div>
      </div>
    );
  }

  return <ProjectDetailClient project={project} basePath={basePath} />;
}
