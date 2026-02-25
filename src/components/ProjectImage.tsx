import { ProjectImageProps } from "@/types/ProjectImageProps";
export default function ProjectImage({ imageUrl, title }: ProjectImageProps) {
  if (!imageUrl) return null;

  return (
    <div className="w-full h-auto aspect-video mb-12 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
      <img 
        src={imageUrl} 
        alt={`Screenshot do projeto ${title}`}
        className="w-full h-full object-cover"
      />
    </div>
  );
}