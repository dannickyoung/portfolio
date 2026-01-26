import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'phosphor-react';
import Navigation from '../layout/Navigation';
import WebsiteFooter from '../layout/WebsiteFooter';
import AnimatedSection from '../layout/AnimatedSection';
import { PROJECTS, type Project } from '../../../data/projectsData';

const projects = PROJECTS;

export default function WorkPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Load project from URL parameter
  useEffect(() => {
    if (id) {
      const projectId = parseInt(id, 10);
      const project = projects.find(p => p.id === projectId);
      if (project) {
        setSelectedProject(project);
      } else {
        // If project not found, redirect to work page
        navigate('/work');
      }
    }
  }, [id, navigate]);

  if (selectedProject) {
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
    const nextProject = projects[(currentIndex + 1) % projects.length];

    return (
      <div
        className="min-h-screen bg-white text-[#1A1A1A]"
        style={{ fontFamily: "Inter, ui-sans-serif, system-ui" }}
      >
        <Navigation />

        <main className="pt-32">
          <section className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-20">
            <AnimatedSection>
              <button
                onClick={() => {
                  setSelectedProject(null);
                  navigate('/work');
                }}
                className="text-sm text-[#6C6863] hover:text-[#1A1A1A] transition-colors mb-12 inline-flex items-center gap-2"
              >
                <ArrowLeft weight="thin" size={16} />
                Back to Works
              </button>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="w-full mb-12">
                <h1
                  className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6"
                  style={{ fontFamily: "Playfair Display, ui-serif" }}
                >
                  {selectedProject.name}
                </h1>
              </div>
            </AnimatedSection>

            {/* Project Images Gallery */}
            <AnimatedSection delay={150}>
              <div className="w-full mb-12">
                <div className="space-y-8">
                  {/* All Images - Full Width */}
                  {selectedProject.images && selectedProject.images.length > 0 ? (
                    selectedProject.images.map((img, idx) => (
                      <div key={idx} className="w-full overflow-hidden">
                        <img
                          src={img}
                          alt={`${selectedProject.name} - ${idx + 1}`}
                          className="w-full h-auto"
                          style={{ display: 'block', width: '100%', maxWidth: '100%' }}
                          onError={(e) => {
                            e.currentTarget.src = `https://via.placeholder.com/1200x675/1A1A1A/FFFFFF?text=${encodeURIComponent(selectedProject.name)}`;
                          }}
                        />
                      </div>
                    ))
                  ) : (
                    <div className="w-full overflow-hidden">
                      <img
                        src={selectedProject.image}
                        alt={`${selectedProject.name} - Main`}
                        className="w-full h-auto"
                        style={{ display: 'block', width: '100%', maxWidth: '100%' }}
                        onError={(e) => {
                          e.currentTarget.src = `https://via.placeholder.com/1200x675/1A1A1A/FFFFFF?text=${encodeURIComponent(selectedProject.name)}`;
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="max-w-3xl space-y-8 mb-20">
                {/* Description/Tagline */}
                <p className="text-2xl md:text-3xl leading-relaxed text-[#1A1A1A]">
                  {selectedProject.outcome}
                </p>

                {/* Industry */}
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-[#1A1A1A]">Industry</h3>
                  <p className="text-lg text-[#6C6863]">{selectedProject.industry}</p>
                </div>

                {/* About */}
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-[#1A1A1A]">About</h3>
                  <p className="text-lg leading-relaxed text-[#6C6863]">
                    {selectedProject.overview.what}
                  </p>
                </div>

                {/* Tags */}
                <div className="pt-4 border-t border-[#1A1A1A]/10">
                  <div className="space-y-2">
                    {selectedProject.tags.map((tag, idx) => (
                      <div key={idx} className="text-lg text-[#6C6863] border-b border-[#1A1A1A]/10 pb-2 last:border-b-0">
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="border-t border-[#1A1A1A]/10 pt-8 flex items-center justify-between">
                <button
                  onClick={() => {
                    setSelectedProject(prevProject);
                    navigate(`/work/${prevProject.id}`);
                  }}
                  className="text-sm text-[#6C6863] hover:text-[#1A1A1A] transition-colors flex items-center gap-2"
                >
                  <ArrowLeft weight="thin" size={16} />
                  {prevProject.name}
                </button>
                <button
                  onClick={() => {
                    setSelectedProject(nextProject);
                    navigate(`/work/${nextProject.id}`);
                  }}
                  className="text-sm text-[#6C6863] hover:text-[#1A1A1A] transition-colors flex items-center gap-2"
                >
                  {nextProject.name}
                  <ArrowRight weight="thin" size={16} />
                </button>
              </div>
            </AnimatedSection>
          </section>
        </main>

        <WebsiteFooter />
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-white text-[#1A1A1A]"
      style={{ fontFamily: "Inter, ui-sans-serif, system-ui" }}
    >
      <Navigation />

      <main className="pt-32">
        <section className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-20">
          <AnimatedSection>
            <div className="mb-20">
              <h1
                className="font-serif text-5xl md:text-6xl lg:text-7xl mb-4"
                style={{ fontFamily: "Playfair Display, ui-serif" }}
              >
                Selected
                <br />
                Works
              </h1>
              <p className="text-lg text-[#6C6863] max-w-2xl">
                AI products, Web3 interfaces, and design systems built for scale.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="space-y-20">
              {projects.map((project) => (
                <article
                  key={project.id}
                  onClick={() => {
                    setSelectedProject(project);
                    navigate(`/work/${project.id}`);
                  }}
                  className="group cursor-pointer"
                >
                  <div className="mb-4">
                    <h2
                      className="font-serif text-3xl md:text-4xl mb-2 group-hover:opacity-70 transition-opacity"
                      style={{ fontFamily: "Playfair Display, ui-serif" }}
                    >
                      {project.name}
                    </h2>
                    <p className="text-[#6C6863] text-sm uppercase tracking-wider mb-1">
                      {project.company}
                    </p>
                    <p className="text-[#6C6863] text-sm uppercase tracking-wider mb-3">
                      {project.role} · {project.platform}
                    </p>
                    <p className="text-[#6C6863] max-w-2xl">
                      {project.outcome}
                    </p>
                  </div>
                  <div className="h-px w-full bg-[#1A1A1A]/10 group-hover:bg-[#1A1A1A]/30 transition-colors" />
                </article>
              ))}
            </div>
          </AnimatedSection>
        </section>
      </main>

      <WebsiteFooter />
    </div>
  );
}
