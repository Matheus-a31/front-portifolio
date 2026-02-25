import { Project } from "@/types/Project";
import Link from "next/link"; 

export default function ProjectCard({ project }: { project: Project }) {
  return (
    // Transformamos a div principal em um Link apontando para /projetos/1, /projetos/2, etc.
    <Link href={`/projetos/${project.id}`} className="group flex flex-col bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
        {project.title}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
        {project.description}
      </p>
      <span className="text-sm font-semibold text-blue-600 mt-auto">
        Ler detalhes completos →
      </span>
    </Link>
  );
}