const projects = [
  {
    title: "Neural Dynamics Modeling",
    description:
      "Biophysical and reduced-order models for oscillatory behavior across neural populations.",
    link: "#",
    label: "Details",
  },
  {
    title: "Signal Processing Pipeline",
    description:
      "Spike/LFP preprocessing, feature extraction, and reproducible analysis workflows.",
    link: "#",
    label: "Repository",
  },
  {
    title: "Brain-Inspired Control",
    description:
      "Control frameworks informed by neural computation for adaptive, robust systems.",
    link: "#",
    label: "Overview",
  },
];

function App() {
  const year = new Date().getFullYear();
  const [theme, setTheme] = React.useState("light");

  const applyTheme = React.useCallback((nextTheme) => {
    document.documentElement.setAttribute("data-theme", nextTheme);
    document.documentElement.style.colorScheme =
      nextTheme === "dark" ? "dark" : "light";
  }, []);

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, [applyTheme]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const targets = document.querySelectorAll(".reveal");
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <>
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <div className="noise"></div>
      <header className="topbar">
        <a className="brand" href="#home">
          tanmoysil
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#now">Now</a>
          <a href="#publications">Publications</a>
          <a href="#contact">Contact</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </nav>
      </header>

      <main id="home">
        <section className="hero reveal">
          <p className="eyebrow">
            Electrical Engineering • Computational Neuroscience
          </p>
          <h1>
            I study and build computational models of neural systems and their
            engineering applications.
          </h1>
          <p className="subtitle">
            Bridging signal processing, dynamical systems, and machine learning
            to understand brain computation.
          </p>
          <div className="cta-row">
            <a className="btn primary" href="#research">
              View Research
            </a>
            <a className="btn ghost" href="#contact">
              Contact Me
            </a>
            <a
              className="btn ghost"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
          </div>
        </section>

        <section id="about" className="panel reveal">
          <h2>About</h2>
          <p>
            I am an Electrical Engineer focused on Computational Neuroscience. I
            work on mathematically grounded models, neural data analysis, and
            interpretable computational pipelines for research and applied
            systems.
          </p>
          <p>
            Email:{" "}
            <a href="mailto:tanmoy_sil@hotmail.com">tanmoy_sil@hotmail.com</a>
          </p>
          <p>
            CV:{" "}
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              Open Resume (PDF)
            </a>
          </p>
        </section>

        <section id="now" className="panel reveal">
          <h2>Now</h2>
          <ul className="now-list">
            <li>
              Building simulation and inference workflows for neural dynamics.
            </li>
            <li>
              Studying biologically plausible learning and control strategies.
            </li>
            <li>
              Writing clear technical notes on neuroscience methods and results.
            </li>
          </ul>
        </section>

        <section id="research" className="panel reveal">
          <h2>Research &amp; Projects</h2>
          <div className="grid">
            {projects.map((project) => (
              <article className="card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link}>{project.label}</a>
              </article>
            ))}
          </div>
        </section>

        <section id="publications" className="panel reveal">
          <h2>Publications</h2>
          <p>
            Add your papers, preprints, and conference posters here. Example:
            Author(s), title, venue/year, and a DOI or arXiv link.
          </p>
        </section>

        <section id="contact" className="panel reveal">
          <h2>Contact</h2>
          <p>Send me a message directly from this page:</p>
          <form
            className="contact-form"
            action="https://formsubmit.co/tanmoy_sil@hotmail.com"
            method="POST"
            aria-label="Contact form"
          >
            <input type="hidden" name="_subject" value="New message from portfolio" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://tanmoysil.github.io/#contact"
            />
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button className="btn primary" type="submit">
              Send Message
            </button>
          </form>

          <p>Or reach out here:</p>
          <ul className="contact-list">
            <li>
              <a href="mailto:tanmoy_sil@hotmail.com">
                tanmoy_sil@hotmail.com
              </a>
            </li>
            <li>
              <a href="https://github.com/tanmoysil">github.com/tanmoysil</a>
            </li>
            <li>
              <a href="https://www.linkedin.com">LinkedIn</a>
            </li>
            <li>
              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                Resume (PDF)
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <p>© {year} Tanmoy Sil</p>
      </footer>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
