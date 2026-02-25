export interface Project {
  id: number;
  title: string;
  description: string;
  githubUrl?: string;
  deployUrl?: string;
  imageUrl?: string; // Já deixei preparado caso a gente use a imagem depois!
}