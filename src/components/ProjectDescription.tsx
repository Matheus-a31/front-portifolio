export default function ProjectDescription({ description }: { description: string }) {
  return (
    <section className="prose prose-slate prose-lg max-w-none">
      <h2 className="text-2xl font-bold mb-4">Sobre o Projeto</h2>
      <p className="text-slate-600 leading-relaxed whitespace-pre-line">
        {description}
      </p>
    </section>
  );
}