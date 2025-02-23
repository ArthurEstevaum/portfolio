import Image from "next/image";
import githubIcon from "../../public/github.svg";
import linkedinIcon from "../../public/linkedin.svg";
import mailIcon from "../../public/mail.svg";

export default function Footer() {
  return (
    <footer className="mt-20 text-center">
      <span>&copy; 2025 / Arthur Estevão</span>
      <div className="flex justify-center space-x-5 mt-8">
        <a target="_blank" href="https://github.com/ArthurEstevaum/">
          <Image
            src={githubIcon}
            alt="github icon"
            width={32}
            height={32}
            className="invert"
          />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/arthur-estev%C3%A3o-304707260/">
          <Image
            src={linkedinIcon}
            alt="LinkedIn icon"
            width={32}
            height={32}
          />
        </a>
        <a target="_blank" href="mail-to:arthurestevao631@gmail.com">
          <Image
            src={mailIcon}
            alt="mail icon"
            width={32}
            height={32}
            className="invert"
          />
        </a>
      </div>
    </footer>
  );
}
