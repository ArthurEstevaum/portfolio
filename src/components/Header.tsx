import Image from "next/image";
import home from "../../public/home.svg";
import info from "../../public/info.svg";
import project from "../../public/project.svg";

export default function Header() {
  return (
    <header className="w-11/12 md:w-8/12 lg:w-5/12 m-auto mt-10 mb-16 sticky top-5">
      <nav className="py-3 flex justify-around items-center rounded-2xl backdrop-blur-xl border border-gray-700">
        <a href="#Home" className="flex justify-center items-center space-x-3 md:space-x-7">
          <Image
            src={home}
            alt="Home icon"
            width={24}
            height={24}
            className="invert"
          />
          <p>Início</p>
        </a>
        <a href="#Projetos" className="flex justify-center items-center space-x-3 md:space-x-7">
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
  );
}
