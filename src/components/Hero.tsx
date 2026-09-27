import Link from "next/link";
import SplitPhoto from "./SplitPhoto";

export default function Hero() {
  const skills = ['Java', 'Spring Boot', 'Next.js', 'PostgreSQL', 'Nest.js', 'TypeScript', 'Docker', 'Python'];

  return (
    <section id="sobre" className="w-full py-12 md:py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* ── Layout principal: imagem centralizada com texto ── */}
        <div className="relative flex flex-col items-center">

          {/* ── Texto e imagem lado a lado em desktop ── */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-0 items-end">

            {/* Coluna esquerda — label "creative" + texto */}
            <div className="flex flex-col items-center lg:items-end justify-end lg:pr-10 lg:pb-16 order-2 lg:order-1 text-center lg:text-right">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 mb-3" style={{ letterSpacing: "-0.03em" }}>
                Engineer
              </h2>
              <p className="text-slate-500 text-sm md:text-base max-w-xs" style={{ lineHeight: 1.7 }}>
                Engenheiro de Software focado em construir soluções robustas e escaláveis com código limpo.
              </p>
            </div>

            {/* Coluna central — Foto Split */}
            <div className="order-1 lg:order-2 flex justify-center">
              <SplitPhoto />
            </div>

            {/* Coluna direita — label "coder" + descrição */}
            <div className="flex flex-col items-center lg:items-start justify-end lg:pl-10 lg:pb-16 order-3 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-600 mb-3" style={{ letterSpacing: "-0.03em" }}>
                &lt;coder&gt;
              </h2>
              <p className="text-slate-500 text-sm md:text-base max-w-xs" style={{ lineHeight: 1.7 }}>
                Desenvolvedor back-end que transforma ideias em aplicações reais com java, Spring Boot, Typescript, Nest.js.
              </p>
            </div>
          </div>
        </div>

        {/* ── Seção abaixo da foto ── */}
        <div className="mt-12 md:mt-16 max-w-3xl mx-auto text-center">
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight text-slate-800 leading-[1.15] mb-6" style={{ letterSpacing: "-0.02em" }}>
            Resolvendo problemas  com{" "}
            <span className="text-blue-600">soluções elegantes e perfomáticas.</span>
          </h1>

          <p className="text-base md:text-lg text-slate-500 leading-relaxed mb-4 max-w-2xl mx-auto" style={{ lineHeight: 1.7 }}>
            Sou graduando em Engenharia de Software, profissional proativo, versátil e movido por desafios.
            Possuo experiência em desenvolvimento de software, atuando tanto em projetos acadêmicos quanto profissionais,
            além de trabalhar como freelancer no desenvolvimento de soluções tecnológicas sob demanda.
          </p>

          <p className="text-base md:text-lg text-slate-500 leading-relaxed mb-8 max-w-2xl mx-auto" style={{ lineHeight: 1.7 }}>
            Atualmente, integro a JusDigital, como desenvolvedor back-end, uma startup de Inteligência Artificial focada em transformar o dia
            a dia dos escritórios de advocacia, automatizando tarefas repetitivas e fazendo o advogado advogar com excelência.
            Além disso, integro o projeto NERDS também como back-end, na construção do sistema para ações de extensão da UFC, chamado GEX.
          </p>

          {/* ── Badges ── */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="hero-badge px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-semibold text-slate-700 shadow-sm cursor-default">
              Back-end &middot; Java &amp; Spring
            </span>
            <span className="hero-badge px-4 py-2 bg-blue-600 text-white border border-blue-600 rounded-full text-sm font-semibold shadow-sm cursor-default">
              Startup &middot; JusDigital
            </span>
          </div>

          {/* ── Skills ── */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {skills.map((skill) => (
              <span
                key={skill}
                className="skill-tag px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-100 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* ── CTAs ── */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/projetos"
              className="btn-primary btn-fill inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-colors"
            >
              Ver meus projetos
            </Link>

            <Link
              href="https://www.linkedin.com/in/matheus-oliveira31"
              target="_blank"
              className="btn-outline inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl border border-blue-200 shadow-sm hover:bg-blue-50 hover:border-blue-600 transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
