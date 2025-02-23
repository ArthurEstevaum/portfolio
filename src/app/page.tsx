import Image from "next/image";
import profilePic from "../../public/profile.jpg";
import githubIcon from "../../public/github.svg";
import linkedinIcon from "../../public/linkedin.svg";
import mailIcon from "../../public/mail.svg";
import ProjectInfo from "@/components/project/ProjectInfo";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col">
      <div className="md:flex justify-center items-center space-y-10 md:space-y-0 md:space-x-10 md:col-span-2 md:col-start-2">
        <Image
          src={profilePic}
          alt="Profile picture"
          width={180}
          height={180}
          className="rounded-full m-auto md:m-0 border border-gray-700"
        />
        <div>
          <h1 className="text-center text-5xl md:text-7xl font-bold" id="Home">
            Arthur Estevão
          </h1>
          <div className="flex place-content-evenly mt-8">
            <a
              target="_blank"
              href="https://github.com/ArthurEstevaum/"
              className="flex items-center rounded-xl border border-gray-500 py-2 px-6 space-x-2 hover:bg-gray-700 transition ease-out duration-300"
            >
              <Image
                src={githubIcon}
                alt="github icon"
                width={24}
                height={24}
                className="invert"
              />
              <p className="hidden lg:block">Github</p>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/arthur-estev%C3%A3o-304707260/"
              className="flex items-center rounded-xl border border-gray-500 py-2 px-6 space-x-2 hover:bg-gray-700 transition ease-out duration-300"
            >
              <Image
                src={linkedinIcon}
                alt="linkedIn icon"
                width={24}
                height={24}
              />
              <p className="hidden lg:block">LinkedIn</p>
            </a>
            <a
              target="_blank"
              href="mail-to:arthurestevao631@gmail.com"
              className="flex items-center rounded-xl border border-gray-500 py-2 px-6 space-x-2 hover:bg-gray-700 transition ease-out duration-300"
            >
              <Image
                src={mailIcon}
                alt="E-mail icon"
                width={24}
                height={24}
                className="invert"
              />
              <p className="hidden lg:block">E-mail</p>
            </a>
          </div>
        </div>
      </div>
      <section className="w-9/12 md:w-auto m-auto mt-10 row-start-2 col-start-2 col-span-2 max-w-3xl">
        <p className="text-md md:text-lg text-center md:text-left">
          Apaixonado por computadores desde que me entendo por gente, e sempre
          curioso pra saber como tudo funciona, Comecei a programar com 14 anos
          em Python, quando descobri as linguagens de programação. Desde então
          aprendi outras linguagens como Javascript e PHP, e tenho me aventurado
          em Clojure (uma linguagem funcional que estou amando aprender) além de
          tópicos mais aprofundados como Programação funcional, TDD (Test driven
          development), arquitetura de sistemas, e outros assuntos que adoro
          descobrir.
        </p>
      </section>

      <section className="w-10/12 max-w-7xl mt-10 m-auto space-y-8 md:mt-16 col-start-2 row-start-3">
        <h2 className="text-4xl font-semibold text-center" id="Projetos">
          Projetos
        </h2>
        <ProjectInfo
          title="Open RPG"
          inDevelopment
          technologies="Laravel, React, PHPUnit, MySQL, Redis, Meilisearch"
          repositoryLink="https://github.com/ArthurEstevaum/OpenRPG"
          imageLink="/open-rpg.jpg"
        >
          Open RPG é uma plataforma para descomplicar o mundo de RPG de mesa
          para todos os jogadores, desde os novatos aos mais calejados
          aventureiros. Open RPG torna possível encontrar outros jogadores e
          mestres para que possam trilhar épicas aventuras, aprender sobre novas
          formas de jogar e trocar ideias com outros aventureiros.
        </ProjectInfo>
        <ProjectInfo
          title="Akademika"
          inDevelopment
          technologies="Vue, Typescript, Vite"
          imageLink="/akademika.png"
          repositoryLink="https://github.com/ArthurEstevaum/akademika"
        >
          Com a Akademika, organizar seus estudos é mamão com açúcar. O app
          permite que qualquer estudante mantenha suas anotações, tópicos de
          estudo e datas importantes perfeitamente organizados, sem a
          necessidade de sistemas complexos ou montes de papéis. Com apenas
          alguns passos, você pode ficar despreocupado e focar no que realmente
          importa: aprender.
        </ProjectInfo>
        <ProjectInfo
          title="Open ERP"
          inDevelopment
          technologies="Java Spring, React, TailwindCSS"
          imageLink="/open-erp.png"
          repositoryLink="https://github.com/ArthurEstevaum/open-erp"
        >
          Open ERP é um sistema desenvolvido para facilitar a vida de todos os
          microempreendedores, tornando a organização e planejamento do seu
          negócio extremamente simples e eficaz através de módulos poderosos,
          flexíveis e intuitivos, sem que ninguém precise arrancar seus cabelos.
        </ProjectInfo>
      </section>
      <section className="w-10/12 max-w-7xl mt-10 m-auto space-y-8 md:mt-16 col-start-2 row-start-3">
        <h2 className="text-4xl font-semibold text-center" id="Projetos">
          Habilidades Técnicas
        </h2>
        <ul className="flex flex-wrap justify-center md:justify-start items-center">
          {[
            "PHP and Laravel",
            "React",
            "PHPUnit",
            "Next.JS",
            "Docker",
            "SQL",
            "TypeScript",
            "Node and Deno",
            "Vitest/Jest",
            "Java and Spring",
            "Vue",
            "TailwindCSS",
            "Python",
          ].map((technology) => (
            <li
              className="m-3 p-2 px-4 border border-gray-500 rounded-md hover:scale-125 hover:bg-gray-700 transition duration-300 ease-out 300"
              key={technology}
            >
              {technology}
            </li>
          ))}
        </ul>
      </section>
      <section className="w-10/12 max-w-4xl mt-10 m-auto space-y-8 md:mt-16 col-start-2 row-start-3">
        <h2 id="Exp" className="text-4xl font-semibold text-center">
          Experiência
        </h2>
        <h3 className="text-2xl font-semibold text-left">
          Estágio em sistemas e projetos - Rolimec soluções industriais
        </h3>
        <h4 className="text-xl font-semibold">Setembro 2024 - Presente</h4>
        <p>
          Durante meu estágio, participei ativamente da migração do sistema ERP
          da empresa de uma infraestrutura on-premise para a nuvem. Nesse
          processo, forneci suporte técnico aos colaboradores, auxiliando-os a
          manter a produtividade durante a transição, garantindo uma adaptação
          suave. Atualmente, contribuo para a documentação e normalização dos
          processos do departamento de TI, e otimizei o uso do servidor de
          acesso remoto. Essa experiência está sendo fundamental para o meu
          crescimento, permitindo-me desenvolver habilidades técnicas avançadas
          em infraestrutura de TI e sistemas em nuvem. Também aprimorei minha
          colaboração em equipe, entendendo a importância da tecnologia na
          eficiência operacional de uma empresa e reforçando meu compromisso em
          buscar soluções inovadoras no campo da TI.
        </p>
        <h3 className="text-2xl font-semibold text-left">
          Aprendiz em Infraestrutura e suporte - Rolimec soluções industriais
        </h3>
        <h4 className="text-xl font-semibold">Julho 2023 - Setembro 2024</h4>
        <p>
          Na minha primeira experiência profissional, tive a oportunidade de
          atuar diretamente no suporte técnico aos colaboradores da empresa, o
          que foi fundamental para o desenvolvimento das minhas habilidades
          interpessoais e o aprofundamento do meu conhecimento técnico. Fui
          responsável por auxiliar no gerenciamento de sistemas corporativos
          essenciais, como o Active Directory, essa posição exigiu que eu
          desenvolvesse soft skills cruciais. Ao interagir diariamente com
          profissionais de diversas áreas, refinei minha capacidade de
          comunicação clara e eficaz, traduzindo termos técnicos em linguagem
          acessível. Aprendi que a tecnologia não se trata apenas de máquinas e
          sistemas, mas também de pessoas e das relações que estabelecemos para
          impulsionar resultados positivos.
        </p>
      </section>
      <section className="w-10/12 max-w-4xl mt-10 m-auto space-y-8 md:mt-16 col-start-2 row-start-3">
        <h2 className="text-4xl font-semibold text-center" id="Projetos">
          Formação
        </h2>
        <h3 className="text-2xl font-semibold text-left">
          Tecnólogo em Análise e desenvolvimento de sistemas - CESAR School
        </h3>
        <h4 className="text-xl font-semibold">Agosto 2024 - Presente</h4>
        <p>
          Na CESAR School, pude ir além do aprofundamento técnico tradicional,
          mergulhando no desenvolvimento de habilidades essenciais como gestão,
          organização, empreendedorismo e liderança. A participação em projetos
          como a Residência Tecnológica do Porto Digital foi particularmente
          enriquecedora, fornecendo conhecimentos valiosos em design thinking e
          gestão de projetos.
        </p>
        <h3 className="text-2xl font-semibold text-left">
          Técnico em Manutenção e suporte em informática - ETEPAM
        </h3>
        <h4 className="text-xl font-semibold">2020 - 2022</h4>
        <p>
          Durante meu período de estudos no curso, pude descobrir e aprender as
          mais diversas áreas da computação, como redes de computadores,
          manutenção, administração de sistemas, infraestrutura e programação.
          Com isso, obti muita versatilidade e conhecimentos multidisciplinares
          na área, que me permitiram ter uma ótima base como desenvolvedor.
        </p>
      </section>
    </main>
  );
}
