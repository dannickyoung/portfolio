/**
 * Why You / Why Now Section
 * Addresses positioning questions from the 5-part method
 */

export default function WhyYou() {
  return (
    <section className="mt-20 md:mt-24" aria-labelledby="why-you-heading">
      <div className="grid grid-cols-12 gap-6 md:gap-10 lg:gap-16">
        <div className="col-span-12 lg:col-span-4">
          <p className="uppercase text-xs tracking-[0.3em] text-[#6C6863]">
            Why You
          </p>
          <h2
            id="why-you-heading"
            className="mt-6 font-serif text-4xl md:text-5xl"
            style={{ fontFamily: "Playfair Display, ui-serif" }}
          >
            Why Now
          </h2>
        </div>

        <div className="col-span-12 lg:col-span-8">
          <div className="space-y-6">
            <div>
              <h3
                className="font-serif text-xl md:text-2xl mb-3"
                style={{ fontFamily: "Playfair Display, ui-serif" }}
              >
                The AI-Assisted Designer
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-[#6C6863]">
                I use Cursor and AI tools to close the design-to-development gap. While most designers hand off static files, I build live production that developers can ship immediately. This means faster launches, fewer handoff issues, and products that actually match the design.
              </p>
            </div>

            <div>
              <h3
                className="font-serif text-xl md:text-2xl mb-3"
                style={{ fontFamily: "Playfair Display, ui-serif" }}
              >
                Best For
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-[#6C6863]">
                AI and Web3 companies building from 0 to 1. Teams that need someone who can design beautiful interfaces, build design systems, conduct research, and ship production-ready code. Companies ready to move fast without sacrificing quality.
              </p>
            </div>

            <div>
              <h3
                className="font-serif text-xl md:text-2xl mb-3"
                style={{ fontFamily: "Playfair Display, ui-serif" }}
              >
                The Receipts
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-[#6C6863]">
                28% increase in signup completion. 60% faster design-to-dev handoff. 30+ reusable components. 50+ user interviews. 6 websites and 5 apps shipped. Built AI-powered feedback systems. Reduced support tickets by 45%. These aren't just numbers, they're proof I solve real problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

