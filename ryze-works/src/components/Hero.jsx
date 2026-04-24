import Navbar from "./Navbar";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <div className="lp-root">
      <div className="lp-bg" />
      <Navbar />

      <section className="lp-hero">
        <div className="Hero_content">
          <h1>
            Payments infrastructure
            <br />
            built for <span className="lp-hero-accent">the future</span>
          </h1>

          <p className="lp-hero-sub">
            The complete payments platform for modern businesses.
            Process, issue, and optimize — all through a single,
            developer-first API.
          </p>

        </div>
      </section>
    </div>
  );
}