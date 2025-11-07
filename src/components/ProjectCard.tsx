import Tags from "./Tags";

interface ProjectCardProps {
  project: ProjectCardDetails;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="card p-6 overflow-hidden flex flex-col justify-between h-full">
        <div>
          <h1 className="card-h1 md:text-2xl font-semibold">
            {project.heading}
          </h1>

          <div className="my-2 md:my-4 w-4/6 text-wrap">
            <p className="my-4">{project.desc}</p>
          </div>

          <div className="my-2 md:my-4 w-4/6 text-wrap">
            <Tags items={project.tags} />
          </div>
        </div>

        <div className="mt-6 -mr-6 -mb-6 w-[calc(100%+1.5rem)] rounded-tl-2xl overflow-hidden flex-shrink-0">
          <div className="relative w-full aspect-video overflow-hidden">
            <img
              src={project.image}
              alt={project.heading}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Container which centers the image */}
        {/* <div className="mt-6 -mr-6 -mb-6 w-[calc(100%+1.5rem)] rounded-tl-2xl overflow-hidden flex-shrink-0">
          <div className="relative w-full aspect-video overflow-hidden flex items-center justify-center">
            <img
              src={project.image}
              alt={project.heading}
              className="w-full h-full object-contain"
            />
          </div>
        </div> */}
      </div>
    </a>
  );
};

export default ProjectCard;
