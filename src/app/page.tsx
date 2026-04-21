import Marquee from "@/components/Marquee";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Carousel from "@/components/Carousel";
import About from "@/components/About";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import PageBlur from "@/components/PageBlur";

export default function Home() {
  return (
    <>
      <div style={{ position: "relative", zIndex: 2 }}>
        <header
          id="top"
          style={{ background: "var(--bg-white)", color: "var(--text)" }}
        >
          <Marquee label="NOW ACCEPTING PROJECTS" tone="dark" />
          <Hero />
        </header>

        <main>
          <Works />
          <Carousel />
          <About />
          <Marquee label="NOW ACCEPTING PROJECTS" tone="primary" />
          <Services />
          <div id="blur-stop" aria-hidden />
        </main>
      </div>

      {/* pinned footer reveal */}
      <div
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Footer />
      </div>
      <div
        id="contact"
        style={{ height: "100vh", position: "relative", zIndex: 0 }}
      />

      <PageBlur />
    </>
  );
}
