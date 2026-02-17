const projects = [
  {
    title: "Project One",
    description: "Short description of your project and the outcome it created.",
    link: "#",
    label: "Live Demo",
  },
  {
    title: "Project Two",
    description: "Short description of your project and the stack you used.",
    link: "#",
    label: "GitHub",
  },
  {
    title: "Project Three",
    description: "Short description of your project and why it matters.",
    link: "#",
    label: "Case Study",
  },
];

function App() {
  const year = new Date().getFullYear();

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

  return (
    <>
      <div className="noise"></div>
      <header className="topbar">
        <a className="brand" href="#home">
          tanmoysil
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
        </nav>
      </header>

      <main id="home">
        <section className="hero reveal">
          <p className="eyebrow">Developer • Designer • Builder</p>
          <h1>Hi, I&apos;m Tanmoy. I build clean digital experiences.</h1>
          <p className="subtitle">
            This React portfolio is ready for GitHub Pages upload.
          </p>
          <div className="cta-row">
            <a className="btn primary" href="#projects">
              View Projects
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
            I enjoy solving practical problems with thoughtful design and
            maintainable code. I focus on shipping quickly without compromising
            quality.
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

        <section id="projects" className="panel reveal">
          <h2>Projects</h2>
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

        <section id="contact" className="panel reveal">
          <h2>Contact</h2>
          <p>Want to collaborate? Reach out:</p>
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
