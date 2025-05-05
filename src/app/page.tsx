import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Experiences from "@/components/experiences";
import About from "@/components/about";
import Projects from "@/components/projects";
import Navigation from "@/components/navigation";
import GlowDiv from "@/components/glowDiv";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-500 relative">
      <GlowDiv />
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3 flex flex-col gap-10 lg:sticky top-20 h-fit">
              <div>
                <h1 className="text-4xl text-slate-300 font-bold mb-2">
                  Nikolas Marcellino
                </h1>
                <h2 className="text-xl text-slate-400 mb-6">
                  Frontend Engineer
                </h2>
                <Navigation />
              </div>

              <div className="flex flex-row gap-4">
                <a
                  href="https://github.com/Nikocean"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-slate-600 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nikolas-marcellino/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-slate-600 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:w-2/3 space-y-24">
              <section id="about" className="scroll-mt-20">
                <About />
              </section>
              <section id="experiences" className="scroll-mt-28">
                <Experiences />
              </section>
              <section id="projects" className="scroll-mt-20">
                <Projects />
              </section>
            </div>
          </div>
        </div>
    </main>
  );
}