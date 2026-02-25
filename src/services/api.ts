import { Project } from "@/types/Project";

const API_URL = process.env.API_URL as string;

export async function getProjects(): Promise<Project[]> {
  const res = await fetch(API_URL, { cache: 'no-store' });
  if (!res.ok) throw new Error('Falha ao buscar projetos');
  return res.json();
}

export async function getProjectById(id: string): Promise<Project> {
  const res = await fetch(`${API_URL}/${id}`, { cache: 'no-store' });
  
  if (!res.ok) {
    if (res.status === 404) throw new Error('Projeto não encontrado');
    throw new Error('Falha ao buscar o projeto');
  }
  
  return res.json();
}