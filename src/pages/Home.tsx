import ProjectCard from "../components/ProjectCard";
import aryventoryWeb from "../assets/aryventoryWeb.png";
import flightBookingSystem from "../assets/flightBookingSystem.png";

const projects: ProjectCardDetails[] = [
  {
    heading: "Aryventory",
    desc: "Build from scratch inventory management app that lets you track stock levels, generate sales bills, and easily reorder products from suppliers. ",
    tags: [
      "React",
      "React Native",
      "Expo",
      "Redux",
      "Node.js",
      "Express.js",
      "Sequelize",
      "Postgres",
    ],
    image: aryventoryWeb,
    link: "https://aryventory.com",
  },
  {
    heading: "Flight Booking System",
    desc: "A microservice driven backend project with flight, booking, notification and auth services.",
    tags: ["Backend", "Node.js", "Express.js", "Sequelize", "PostgreSQL"],
    image: flightBookingSystem,
    link: "https://github.com/goutamthakur/flight-service",
  },
];

const Home = () => {
  return (
    <div className="grid p-2 md:p-0 md:py-4 md:pr-4 gap-2 md:gap-4 md:grid-cols-1 lg:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Home;
