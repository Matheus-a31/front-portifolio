export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm py-4">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <span className="text-xl font-bold text-blue-600">MatheusDev</span>
        <div className="space-x-6 text-sm font-medium text-slate-600">
          <a href="http://localhost:3000" className="hover:text-blue-600 transition-colors">Sobre mim</a>
          <a href="/projetos" className="hover:text-blue-600 transition-colors">Projetos</a>
        </div>
      </div>
    </nav>
  );
}