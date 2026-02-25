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
    <main className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      
      <article className="flex-grow max-w-4xl mx-auto px-6 py-16 w-full">
        <Link 
          href="/projetos" 
          className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-flex items-center transition-colors"
        >
          ← Voltar aos projetos
        </Link>

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
                Abrir à Aplicação
              </a>
            )}
          </div>
        </header>

        {project.imageUrl && (
          <div className="w-full h-auto aspect-video mb-12 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
            <img 
              src={project.imageUrl} 
              alt={`Imagem do projeto ${project.title}`}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <section className="prose prose-slate prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Sobre o Projeto</h2>
          <p className="text-slate-600 leading-relaxed whitespace-pre-line">
            {project.description}
          </p>
        </section>
      </article>

      <Footer />
    </main>
  );
}