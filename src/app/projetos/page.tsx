import { getProjects } from "@/services/api";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

export default async function Projetos() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen flex flex-col bg-white text-slate-800">
      <Navbar />
      <div className="flex-grow pt-10">
        <ProjectsSection projects={projects} />
      </div>
      <Footer />
    </main>
  );
}