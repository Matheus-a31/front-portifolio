import { Project } from "@/types/Project";
import Link from "next/link"; 

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projetos/${project.id}`}
      className="project-card group flex flex-col bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
    >
      <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-200">
        {project.title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3" style={{ lineHeight: 1.7 }}>
        {project.description}
      </p>
      <span className="read-more animated-underline text-sm font-semibold text-blue-600 mt-auto self-start">
        Ver detalhes
      </span>
    </Link>
  );
}