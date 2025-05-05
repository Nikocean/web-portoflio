import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToFile } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';


interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export default function Experiences() {
  const experiences: ExperienceItem[] = [
    {
      role: "Software Engineer - Frontend",
      company: "PT. Kompas Gramedia Nusantara",
      period: "August 2022 - Mei 2025",
      description: [
        "Maintained and optimized Kompas.id, Kompas Event, Subscription Services, and B2B websites using Vue.js (Vue 2 & Nuxt 2),Tailwind CSS, following code review practices for continuous improvement.",
        "Implemented unit testing for Nuxt 3 projects using Vitest, and for legacy Stencil.js components using Jest, ensuring 90% test coverage.",
        "Integrated RESTful APIs using Vuex and Pinia for state management, ensuring 90% functional accuracy across endpoints.",
        "Implemented GlitchTip (open-source APM) for frontend error monitoring and reporting, integrated into Nuxt 3 for real-time issue tracking and alerting.",
      ],
      skills: [
        "Vue.js",
        "Nuxt.js",
        "TypeScript",
        "Tailwind CSS",
        "Vitest",
        "Jest",
      ],
    },
    {
      role: "Intern Frontend Developer",
      company: "PT. Telkom Indonesia",
      period: "March 2021 - March 2022",
      description: [
        "Developed Concall website with HTML, CSS, Javascript, and Bootstrap, researched for detail design and how to make it, accomplished and success developed pages for Concall dashboard, profile, and search on time with 90% result.",
        "Maintained web application in project ChatAja!, learned about Vue.js and also ask to the seniors, and success to maintain some features. Increase usability into 25%",
        "Developed a new page for VUCA CX and integrate components with API and worked with Vue.js and Nuxt.js, success developing a new page with API integration with 95% as expected",
        "Developed Selesar NFT website with Vue.js and Nuxt.js, developed and researched for the  design, feature, and logic for buying or selling NFT, and success developed new pages with 90% as expected.",
      ],
      skills: ["Vue.js", "Nuxt.js", "Bootstrap"],
    },
  ];

  return (
    <section className="space-y-8 min-h-[60vh]">
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="group relative pl-8">
            <div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-slate-300 group-hover:bg-sky-500"></div>
            <div className="absolute left-[7px] top-5 h-full w-[2px] bg-slate-200 group-hover:bg-sky-300"></div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-slate-300">
                {exp.role} • {exp.company}
              </h3>
              <p className="text-sm font-bold text-slate-300">{exp.period}</p>

              <ul className="list-disc pl-5 space-y-1 text-slate-400">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.skills.map((skill, i) => (
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
      <Link
        href="/documents/CV-Niko-ATS.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-semibold mt-2 text-slate-400 hover:text-sky-600 transition-colors duration-200"
      >
        View Full Résumé
        <FontAwesomeIcon
          icon={faArrowRightToFile}
          className="w-3 h-3 inline-block ml-2 hover:text-sky-600 transition-colors duration-200"
        />
      </Link>
    </section>
  );
}
