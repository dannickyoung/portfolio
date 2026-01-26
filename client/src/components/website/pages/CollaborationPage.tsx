import { Link } from 'react-router-dom';
import Navigation from '../layout/Navigation';
import WebsiteFooter from '../layout/WebsiteFooter';
import AnimatedSection from '../layout/AnimatedSection';

export default function CollaborationPage() {
  return (
    <div
      className="min-h-screen bg-white text-[#1A1A1A]"
      style={{ fontFamily: "Inter, ui-sans-serif, system-ui" }}
    >
      <Navigation />

      <main className="pt-32">
        <section className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16 py-20">
          <AnimatedSection>
            <div className="max-w-4xl mb-20">
              <h1
                className="font-serif text-5xl md:text-6xl lg:text-7xl mb-8"
                style={{ fontFamily: "Playfair Display, ui-serif" }}
              >
                Just work with me.
              </h1>
              <a
                href="mailto:dannickyoung@outlook.com"
                className="inline-block text-xl md:text-2xl text-[#1A1A1A] hover:opacity-70 transition-opacity"
              >
                Let's talk
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="max-w-3xl space-y-12">
              <div>
                <h2
                  className="font-serif text-3xl md:text-4xl mb-6"
                  style={{ fontFamily: "Playfair Display, ui-serif" }}
                >
                  What I'm Open To
                </h2>
                <div className="space-y-3 text-lg text-[#6C6863]">
                  <div>Full-time / Contract / Freelance</div>
                  <div>Product Design / UI/UX / Design Systems</div>
                  <div>Early-stage / Growth-stage Startups</div>
                  <div>AI / Web3 / SaaS Products</div>
                  <div>Remote / Hybrid / On-site (Singapore)</div>
                </div>
              </div>

              <div>
                <h2
                  className="font-serif text-3xl md:text-4xl mb-6"
                  style={{ fontFamily: "Playfair Display, ui-serif" }}
                >
                  How I Work
                </h2>
                <div className="space-y-4 text-lg leading-relaxed text-[#6C6863]">
                  <p>
                    <strong className="text-[#1A1A1A]">Clear Communication:</strong> I prioritize transparent and concise updates, ensuring everyone is aligned.
                  </p>
                  <p>
                    <strong className="text-[#1A1A1A]">Iterative Pace:</strong> I believe in rapid prototyping and continuous feedback to refine solutions quickly.
                  </p>
                  <p>
                    <strong className="text-[#1A1A1A]">Full Ownership:</strong> I take responsibility from concept to launch, ensuring quality and impact at every stage.
                  </p>
                  <p>
                    <strong className="text-[#1A1A1A]">Collaborative Spirit:</strong> I thrive in environments where design, engineering, and product work as one team.
                  </p>
                  <p>
                    <strong className="text-[#1A1A1A]">Impact-Driven:</strong> My focus is always on delivering measurable business value and exceptional user experiences.
                  </p>
                </div>
              </div>

              <div>
                <h2
                  className="font-serif text-3xl md:text-4xl mb-6"
                  style={{ fontFamily: "Playfair Display, ui-serif" }}
                >
                  Contact
                </h2>
                <div className="space-y-4 text-lg text-[#6C6863]">
                  <a
                    href="mailto:dannickyoung@outlook.com"
                    className="block hover:text-[#1A1A1A] transition-colors"
                  >
                    dannickyoung@outlook.com
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dannickyoung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-[#1A1A1A] transition-colors"
                  >
                    LinkedIn
                  </a>
                  <Link
                    to="/cv"
                    className="block hover:text-[#1A1A1A] transition-colors"
                  >
                    Download Resume
                  </Link>
                </div>
              </div>

              <div className="pt-8 border-t border-[#1A1A1A]/10">
                <p className="text-lg text-[#6C6863]">
                  I typically respond within 1-2 business days. Happy to chat, no pressure.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </main>

      <WebsiteFooter />
    </div>
  );
}
