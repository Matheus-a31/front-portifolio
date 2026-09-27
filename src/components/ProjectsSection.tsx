import { Project } from "@/types/Project";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section id="projetos" className="bg-white py-20 md:py-28 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6">

        {/* Título com acento lateral azul */}
        <div className="mb-12">
          <h2 className="section-title text-3xl font-bold text-slate-800 border-l-4 border-blue-600 pl-4">
            Projetos desenvolvidos
          </h2>
          <p className="section-subtitle text-slate-500 mt-3 pl-5">
            Sistemas, APIs e aplicações que desenvolvi recentemente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.length === 0 ? (
            <p className="text-slate-500 italic col-span-full">
              Nenhum projeto cadastrado na API ainda.
            </p>
          ) : (
            projects.map((project: Project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}