import { Link } from 'react-router-dom';
import Navigation from '../layout/Navigation';
import WebsiteFooter from '../layout/WebsiteFooter';
import AnimatedSection from '../layout/AnimatedSection';
import AnimatedText from '../layout/AnimatedText';
import { PROJECTS } from '../../../data/projectsData';

export default function AboutPage() {
  // Get the first 3 projects for the preview
  const featuredProjects = PROJECTS.slice(0, 3);
  return (
    <div
      className="min-h-screen bg-white text-[#1A1A1A]"
      style={{ fontFamily: "Inter, ui-sans-serif, system-ui" }}
    >
      <Navigation />

      {/* Animated Status Bar */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-[#1A1A1A] text-white py-2 border-b border-white/10">
        <AnimatedText text="Now accepting projects" className="text-xs uppercase tracking-wider" />
      </div>

      <main className="pt-40">
        {/* Hero Section */}
        <section className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-20 md:py-32">
          <div className="max-w-4xl">
            <h1
              className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 animate-intro"
              style={{ fontFamily: "Playfair Display, ui-serif" }}
            >
              Product designer helping your ideas take off.
            </h1>
            <Link
              to="/collaboration"
              className="inline-block text-lg md:text-xl text-[#1A1A1A] hover:opacity-70 transition-opacity duration-300 animate-intro-delay-1"
            >
              Let's talk about your idea
            </Link>
          </div>
        </section>

        {/* Selected Works Preview */}
        <AnimatedSection>
          <section className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-20 border-t border-[#1A1A1A]/10">
            <div className="mb-16">
              <h2
                className="font-serif text-5xl md:text-6xl lg:text-7xl mb-4"
                style={{ fontFamily: "Playfair Display, ui-serif" }}
              >
                Selected
                <br />
                Works
              </h2>
            </div>

            <div className="space-y-20">
              {featuredProjects.map((project) => (
                <div key={project.id} className="group">
                  <Link to={`/work/${project.id}`} className="block">
                    <div className="mb-4">
                      <h3
                        className="font-serif text-3xl md:text-4xl mb-2 group-hover:opacity-70 transition-opacity"
                        style={{ fontFamily: "Playfair Display, ui-serif" }}
                      >
                        {project.name}
                      </h3>
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
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <Link
                to="/work"
                className="text-lg text-[#1A1A1A] hover:opacity-70 transition-opacity inline-block"
              >
                Need more? Check my recent works.
              </Link>
            </div>
          </section>
        </AnimatedSection>

        {/* About Section */}
        <AnimatedSection delay={200}>
          <section className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-20 border-t border-[#1A1A1A]/10">
            <div className="max-w-3xl">
              <h2
                className="font-serif text-5xl md:text-6xl lg:text-7xl mb-8"
                style={{ fontFamily: "Playfair Display, ui-serif" }}
              >
                Hey, It's Dannick here!
              </h2>
              <p className="text-2xl md:text-3xl mb-6 text-[#6C6863]">
                Who's behind the scene?
              </p>
              <div className="space-y-6 text-lg leading-relaxed text-[#6C6863]">
                <p>
                  <span className="font-semibold text-[#1A1A1A]">Over 4 years in the game.</span>
                </p>
                <p>
                  Crafting pixels and playing with designs is my kind of fun. <strong className="text-[#1A1A1A]">Lead Product Designer at ChronoAI</strong>.
                </p>
                <p>
                  I obsess over the details, 'cause that's what turns good into great. Mixing AI tools with traditional design, stirring in production-ready code, and always staying ahead of trends - I bring the clean, sharp look your product needs to stand out.
                </p>
                <p>
                  I bridge the gap between design and development by leveraging AI tools like Cursor and a deep understanding of production-ready code. My approach accelerates product delivery while ensuring pixel-perfect execution from concept to launch.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection delay={300}>
          <section className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-20 border-t border-[#1A1A1A]/10">
            <div className="max-w-3xl">
              <h2
                className="font-serif text-5xl md:text-6xl lg:text-7xl mb-12"
                style={{ fontFamily: "Playfair Display, ui-serif" }}
              >
                Looking to boost your digital presence?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-[#6C6863]">
                <div>Product Design</div>
                <div>UI/UX Design</div>
                <div>Design Systems</div>
                <div>AI-Assisted Development</div>
                <div>Design-to-Code</div>
                <div>Product Strategy</div>
                <div>User Research</div>
                <div>and more...</div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Contact CTA */}
        <AnimatedSection delay={400}>
          <section className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-20 border-t border-[#1A1A1A]/10">
            <div className="max-w-3xl">
              <h2
                className="font-serif text-5xl md:text-6xl lg:text-7xl mb-8"
                style={{ fontFamily: "Playfair Display, ui-serif" }}
              >
                Just work with me.
              </h2>
              <Link
                to="/collaboration"
                className="inline-block text-xl md:text-2xl text-[#1A1A1A] hover:opacity-70 transition-opacity"
              >
                Let's talk
              </Link>
            </div>
          </section>
        </AnimatedSection>
      </main>

      <WebsiteFooter />
    </div>
  );
}
