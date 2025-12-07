import { ExternalLink } from "lucide-react";

const links = [
  { label: "GitHub", href: "https://github.com/goutamthakur" },
  { label: "LinkedIn", href: "https://linkedin.com/in/goutamthakur" },
  { label: "X (Twitter)", href: "https://x.com/goutamtkr" },
  // { label: "Resume", href: "https://drive.google.com/file/d/1WfUUIxMywb_gvmoMg2Ia-G_f5DP5nuzb/view?usp=sharing" },
];

const Sidebar = () => {
  return (
    <aside className="flex flex-col p-2 md:p-4 gap-2 md:gap-4 md:w-2/5 lg:w-1/5">
      <div className="card">
        <h1 className="card-h2">Goutam Thakur</h1>
        <p className="card-desc">
          Software developer with 1.6 years of experience working with React,
          React Native, Node.js, Express, Sequelize, PostgreSQL, Spring Boot...
        </p>
      </div>

      <div className="card">
        <h1 className="card-h2">About me</h1>
        <p className="card-desc">Passionate about backend development, gym, cyclying, books</p>
      </div>

      <div className="card">
        <h1 className="card-h2">Experience</h1>
        <p className="card-desc">Working at Arysoft Global Services Pvt. Ltd.</p>
      </div>

      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="card flex justify-between items-center"
        >
          <p>{link.label}</p>
          <ExternalLink size="20" />
        </a>
      ))}
    </aside>
  );
};

export default Sidebar;
