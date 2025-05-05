import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

interface ProjectItem {
  company: string;
  description: string[];
  period: string;
  skills: string[];
  url: string;
}

export default function Projects() {
  const projects: ProjectItem[] = [
    {
      url: `https://ptindopak.com/`,
      company: "PT. Indopak Sumber Tehknik",
      description: [
        "PT Indopak Sumber Tekhnik is a company that operates as a distributor of industrial products. Supported by an experienced team, we are ready to provide the best solution for your needs on production lines ranging from small, medium to large scale.",
      ],
      period: "September 2024",
      skills: ["Wordpress"],
    },
  ];

  return (
    <section className="space-y-8">
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative pl-8">
            <div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-slate-300 group-hover:bg-sky-500"></div>
            <div className="absolute left-[7px] top-5 h-full w-[2px] bg-slate-200 group-hover:bg-sky-300"></div>
            
            <div className="space-y-2">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold hover:text-sky-600 transition-colors duration-200 text-slate-300"
              >
                {project.company}
                <FontAwesomeIcon 
                  icon={faExternalLinkAlt} 
                  className="w-3 h-3 inline-block ml-1" 
                />
              </a>
              <p className="text-sm font-bold text-slate-300">{project.period}</p>

              <ul className="list-disc pl-5 space-y-1 text-slate-400">
                {project.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {project.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-1 text-xs rounded bg-slate-100 text-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}