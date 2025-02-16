import Image from "next/image";
import profilePic from "../../public/profile.jpg";
import githubIcon from "../../public/github.svg";
import linkedinIcon from "../../public/linkedin.svg";
import mailIcon from "../../public/mail.svg";
import home from "../../public/home.svg";
import info from "../../public/info.svg";
import project from "../../public/project.svg";

export default function Home() {
  return (
    <>
      <header className="w-11/12 md:w-8/12 lg:w-5/12 m-auto mt-10 mb-16">
        <nav className="py-3 flex justify-around items-center rounded-2xl backdrop-blur-xl border border-gray-500">
          <a className="flex justify-center items-center space-x-3 md:space-x-7">
            <Image
              src={home}
              alt="Home icon"
              width={24}
              height={24}
              className="invert"
            />
            <p>Início</p>
          </a>
          <a className="flex justify-center items-center space-x-3 md:space-x-7">
            <Image src={project} alt="Project icon" width={24} height={24} />
            <p>Projetos</p>
          </a>
          <a className="flex justify-center items-center space-x-3 md:space-x-7">
            <Image
              src={info}
              alt="Info icon"
              width={24}
              height={24}
              className="invert"
            />
            <p>Sobre mim</p>
          </a>
        </nav>
      </header>
      <main className="flex justify-center items-center flex-col md:grid md:grid-cols-[1fr_2fr_2fr_1fr] xl:grid-cols-4">
        <div className="md:flex justify-center items-center space-y-10 md:space-y-0 md:space-x-10 md:col-span-2 md:col-start-2">
          <Image
            src={profilePic}
            alt="Profile picture"
            width={180}
            height={180}
            className="rounded-full m-auto md:m-0 border border-gray-700"
          />
          <div>
            <h1 className="text-center text-5xl md:text-7xl font-extrabold">
              Arthur Estevão
            </h1>
            <div className="flex place-content-around mt-8">
              <div className="flex items-center rounded-full border py-2 px-6 space-x-2 hover:bg-gray-700 transition ease-out duration-300">
                <Image
                  src={githubIcon}
                  alt="github icon"
                  width={24}
                  height={24}
                  className="invert"
                />
                <p className="hidden lg:block">Github</p>
              </div>
              <div className="flex items-center rounded-full border py-2 px-6 space-x-2 hover:bg-gray-700 transition ease-out duration-300">
                <Image
                  src={linkedinIcon}
                  alt="linkedIn icon"
                  width={24}
                  height={24}
                />
                <p className="hidden lg:block">LinkedIn</p>
              </div>
              <div className="flex items-center rounded-full border py-2 px-6 space-x-2 hover:bg-gray-700 transition ease-out duration-300">
                <Image
                  src={mailIcon}
                  alt="E-mail icon"
                  width={24}
                  height={24}
                  className="invert"
                />
                <p className="hidden lg:block">E-mail</p>
              </div>
            </div>
          </div>
        </div>
        <section className="w-9/12 md:w-auto m-auto mt-10 row-start-2 col-start-2 col-span-2 max-w-3xl">
          <p className="text-lg text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </section>
      </main>
    </>
  );
}
