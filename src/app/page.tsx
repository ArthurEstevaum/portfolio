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
        <p className="text-lg text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </section>

      <section className="w-10/12 max-w-7xl mt-10 m-auto space-y-8 md:mt-16 col-start-2 row-start-3">
        <h2 className="text-4xl font-semibold text-center" id="Projetos">Projetos</h2>
        <ProjectInfo
          title="Open RPG"
          inDevelopment
          technologies="Laravel, React, PHPUnit, MySQL, Redis, Meilisearch"
          repositoryLink="https://github.com/ArthurEstevaum/OpenRPG"
          imageLink="/open-rpg.jpg"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
          consectetur, quos quisquam asperiores commodi quia nemo ipsa, incidunt
          debitis architecto nostrum reiciendis quo aperiam maiores alias earum
          sunt cupiditate quas?
        </ProjectInfo>
        <ProjectInfo
          title="Akademika"
          inDevelopment
          technologies="Vue, Typescript, Vite"
          imageLink="/akademika.png"
          repositoryLink="https://github.com/ArthurEstevaum/akademika"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quos
          accusantium quam perspiciatis voluptates vero consequatur dolorum
          deleniti, atque assumenda, vel velit facilis, harum fugiat
          consequuntur repellat? Ipsam, nihil vitae.
        </ProjectInfo>
      </section>
    </main>
  );
}
