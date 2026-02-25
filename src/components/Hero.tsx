import Link from "next/link";
import FloatingCard from "./FloatingCard";

export default function Hero() {
  const skills = ['Java', 'Spring Boot', 'Next.js', 'PostgreSQL', 'Nest.js', 'TypeScript', 'Docker', 'Python'];

  return (
    <section id="sobre" className="w-full py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            Construindo soluções com <span className="text-blue-600">engenharia de verdade.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
            Sou graduando em Engenharia de Software, profissional proativo, versátil e movido por desafios. 
            Possuo experiência em desenvolvimento de software, atuando tanto em projetos acadêmicos quanto profissionais, 
            além de trabalhar como freelancer no desenvolvimento de soluções tecnológicas sob demanda.
          </p>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
            Atualmente, integro a startup JusDigital, uma startup de Inteligência Artificial focada em transformar o dia 
            a dia dos escritórios de advocacia, automatizando tarefas repetitivas e fazendo o advogado advogar com excelência.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-10">
            {skills.map((skill) => (
              <span key={skill} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-100">
                {skill}
              </span>
            ))}
          </div>

          <Link 
            href="/projetos" 
            className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
          >
            Ver meus projetos →
          </Link>
        </div>

        <div className="relative flex justify-center lg:justify-end items-center mt-12 lg:mt-0 lg:pr-8">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-blue-400/20 rounded-full blur-3xl -z-10"></div>

          <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 bg-slate-200 rounded-full border-8 border-white shadow-2xl overflow-hidden flex items-center justify-center">
            <img 
              src="/images/foto-perfil.jpg" 
              alt="Matheus - Engenheiro de Software" 
              className="w-full h-full object-cover object-top" 
            />
          </div>

          <FloatingCard 
            icon="☕"
            title="Back-end"
            subtitle="Java & Spring"
            positionClasses="top-2 -left-2 md:-left-8"
            animationClass="animate-[bounce_3s_ease-in-out_infinite]"
          />

          <FloatingCard 
            icon="⚖️"
            title="Startup"
            subtitle="JusDigital"
            positionClasses="-bottom-15 -right-2 md:-right-6"
            animationClass="animate-[bounce_4s_ease-in-out_infinite]"
            iconBgClass="bg-slate-900 text-white"
          />

        </div>

      </div>
    </section>
  );
}
