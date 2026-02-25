import { Project } from "@/types/Project";

export default function ProjectHeader({ project }: { project: Project }) {
  return (
    <header className="mb-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
        {project.title}
      </h1>
      
      <div className="flex flex-wrap gap-4 mt-6">
        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
          >
            Ver Código no GitHub
          </a>
        )}
        {project.deployUrl && (
          <a 
            href={project.deployUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Acessar Aplicação
          </a>
        )}
      </div>
    </header>
  );
}