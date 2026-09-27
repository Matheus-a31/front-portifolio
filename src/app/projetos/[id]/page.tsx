import { getProjectById } from "@/services/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProjectDetails({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  let project;
  try {
    project = await getProjectById(id);
  } catch (error) {
    notFound(); 
  }

  return (
    <main className="min-h-screen flex flex-col bg-white text-slate-800 font-sans">
      <Navbar />
      
      <article id="project-detail" className="flex-grow max-w-4xl mx-auto px-6 py-16 w-full">
        <Link 
          href="/projetos" 
          className="back-link text-blue-600 hover:text-blue-800 font-medium mb-8 inline-flex items-center transition-colors"
        >
          <span className="back-arrow mr-1">&larr;</span> Voltar aos projetos
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4" style={{ letterSpacing: "-0.02em" }}>
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-4 mt-6">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-github px-6 py-3 bg-slate-800 text-white font-semibold rounded-xl hover:bg-slate-700 transition-colors duration-200"
              >
                Ver no GitHub
              </a>
            )}
            {project.deployUrl && (
              <a 
                href={project.deployUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-deploy px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200"
              >
                Acessar Aplicação
              </a>
            )}
          </div>
        </header>

        {project.imageUrl && (
          <div className="w-full h-auto aspect-video mb-12 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm">
            <img 
              src={project.imageUrl} 
              alt={`Screenshot do projeto ${project.title}`}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <section className="prose prose-slate prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4 text-slate-800 border-l-4 border-blue-600 pl-4">Sobre o Projeto</h2>
          <p className="text-slate-500 leading-relaxed whitespace-pre-line" style={{ lineHeight: 1.7 }}>
            {project.description}
          </p>
        </section>
      </article>

      <Footer />
    </main>
  );
}