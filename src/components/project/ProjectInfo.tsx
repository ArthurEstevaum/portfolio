import Image from "next/image";

type projectInfoProps = {
    title: string,
    inDevelopment: boolean,
    technologies: string,
    imageLink: string,
    repositoryLink: string,
    children: React.ReactNode
}

export default function ProjectInfo({title, inDevelopment, technologies, imageLink, repositoryLink, children} : projectInfoProps) {
  return (
    <div className="flex flex-wrap justify-center items-center space-x-5 space-y-5 xl:space-y-0 flex-col md:flex-row">
      <Image
        src={imageLink}
        alt="Project image"
        width={550}
        height={300}
        className="rounded-lg border border-gray-700"
      />
      <div className="space-y-6">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
          {title}
          <span className="text-xs sm:text-sm font-normal rounded-full bg-red-500 p-1 ml-4">
            { inDevelopment? "em desenvolvimento" : "" }
          </span>
        </h3>
        <p className="text-md md:text-lg font-medium max-w-xl">
          Tecnologias utilizadas: {technologies}
        </p>
        <p className="max-w-xl">
          {children}
        </p>

        <div className="space-x-3 mt-5">
          <a className="w-full md:w-8/12 text-center rounded-xl border border-gray-500 py-2 px-6 space-x-2 hover:bg-gray-700 transition ease-out duration-300">
            Site demo
          </a>
          <a target="_blank" href={repositoryLink} className="w-full md:w-8/12 text-center rounded-xl border border-gray-500 py-2 px-6 space-x-2 hover:bg-gray-700 transition ease-out duration-300">
             Github
          </a>
        </div>
      </div>
    </div>
  );
}
