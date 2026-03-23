import Link from "next/link";
import FloatingCard from "./FloatingCard";

export default function Hero() {
  const skills = ['Java', 'Spring Boot', 'Next.js', 'PostgreSQL', 'Nest.js', 'TypeScript', 'Docker', 'Python'];

  return (
    <section id="sobre" className="w-full py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            Resolvendo problemas com <span className="text-blue-600">soluções elegantes e performáticas.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6">
            Sou graduando em Engenharia de Software, profissional proativo, versátil e movido por desafios. 
            Possuo experiência em desenvolvimento de software, atuando tanto em projetos acadêmicos quanto profissionais, 
            além de trabalhar como freelancer no desenvolvimento de soluções tecnológicas sob demanda.
          </p>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
            Atualmente, integro a startup JusDigital como back-end, uma startup de Inteligência Artificial focada em transformar o dia 
            a dia dos escritórios de advocacia, automatizando tarefas repetitivas e fazendo o advogado advogar com excelência. Além disso, integro o projeto NERDS também como back-end, na construção do sistema para ações de extensão da UFC, chamado GEX.
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

          <Link 
            href="https://www.linkedin.com/in/matheus-oliveira31" 
            target="_blank"
            className="mt-4 inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-slate-100 transition-colors shadow-lg shadow-blue-600/30 border border-blue-200"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-5 h-5"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
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
            positionClasses="-top-6 -left-2 md:-left-8"
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
