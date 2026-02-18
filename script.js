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

const publications = [
  {
    citation:
      "Sil, T., et al. (2025). Sensor-based data driven differentiation between Parkinson’s disease and essential tremor. Expert Systems with Applications.",
    doi: "",
    url: "https://www.sciencedirect.com/science/article/pii/S095741742503951X",
  },
  {
    citation:
      "Hofman, K., Chen, J.Z., Sil, T., et al. (2025). Low beta predicts motor output and cell degeneration in the A53T Parkinson’s disease rat model. Brain, 148(5), 1572-1585.",
    doi: "10.1093/brain/awaf063",
  },
  {
    citation:
      "Sil, T., et al. (2023). Wavelet-based bracketing, time-frequency beta-burst detection: new insights in Parkinson’s disease. Neurotherapeutics, 20, 1767-1778.",
    doi: "10.1007/s13311-023-01447-4",
  },
  {
    citation:
      "Khan, S., Paul, A., Sil, T., et al. (2016). Position control of a DC motor system for tracking periodic reference inputs in a data driven paradigm. ICICPI, 17-21.",
    doi: "10.1109/ICICPI.2016.7859665",
  },
  {
    citation:
      "Bhattacharya, S., Khan, S., Sil, T., et al. (2015). IPMC based data glove for finger motion capturing. Advances in Robotics, 1-6.",
    doi: "10.1145/2783449.2783500",
  },
];

function App() {
  const year = new Date().getFullYear();
  const [theme, setTheme] = React.useState("light");
  const [isReady, setIsReady] = React.useState(false);
  const [formState, setFormState] = React.useState({
    status: "idle",
    message: "",
  });

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

  React.useEffect(() => {
    const timer = window.setTimeout(() => setIsReady(true), 40);
    return () => window.clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
  };

  const trackEvent = (name, props = {}) => {
    if (typeof window !== "undefined" && typeof window.plausible === "function") {
      window.plausible(name, { props });
    }
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    trackEvent("Contact Form Submit Attempt");
    setFormState({ status: "submitting", message: "Sending your message..." });

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        trackEvent("Contact Form Submit Success");
        setFormState({
          status: "success",
          message:
            "Message sent successfully. I will get back to you as soon as possible.",
        });
        return;
      }

      setFormState({
        status: "error",
        message:
          "Message could not be sent right now. Please try again, or email me directly.",
      });
      trackEvent("Contact Form Submit Error");
    } catch (error) {
      setFormState({
        status: "error",
        message:
          "Network error while sending. Please retry or contact me via email.",
      });
      trackEvent("Contact Form Submit Error");
    }
  };

  return (
    <div className={`page-shell ${isReady ? "is-ready" : ""}`}>
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <div className="noise"></div>
      <header className="topbar">
        <div className="brand-wrap">
          <a className="brand" href="#home">
            tanmoysil
          </a>
          <div className="profile-links" aria-label="Profile links">
            <a
              href="https://scholar.google.com/citations?user=f4tD5QYAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
              aria-label="Google Scholar"
            >
              GS
            </a>
            <a
              href="https://linkedin.com/in/tanmoysil"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>
          </div>
        </div>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#now">Now</a>
          <a href="#publications">Publications</a>
          <a href="#contact">Contact</a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent("Resume Click", { location: "nav" })}
          >
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
            Neuroengineering • Computational Neuroscience
          </p>
          <h1>
            I study and build computational models of neural systems and their
            engineering applications.
          </h1>
          <p className="subtitle">
            Combining signal processing, machine learning, and computer vision
            to decode clinically relevant brain and movement biomarkers.
          </p>
          <figure className="hero-media">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Human_EEG_artefacts.png"
              alt="Example human EEG artefacts"
              loading="lazy"
            />
            <figcaption>
              By Andrii Cherninskyi (
              <a
                href="https://creativecommons.org/licenses/by-sa/4.0/"
                target="_blank"
                rel="noreferrer"
              >
                CC BY-SA 4.0
              </a>
              ), via{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Human_EEG_artefacts.png"
                target="_blank"
                rel="noreferrer"
              >
                Wikimedia Commons
              </a>
              .
            </figcaption>
          </figure>
          <div className="cta-row">
            <a className="btn primary" href="#publications">
              View Publications
            </a>
            <a className="btn ghost" href="#contact">
              Contact Me
            </a>
            <a
              className="btn ghost"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("Resume Click", { location: "hero" })}
            >
              View Resume
            </a>
          </div>
          <div className="interest-strip" aria-label="Research interests">
            Biomarkers · DBS · Kinematics · Computational Neuroscience ·
            Computer Vision · Signal Processing
          </div>
        </section>

        <section id="about" className="panel reveal">
          <h2>About Me</h2>
          <p>
            I am an Electrical Engineer and Computational Neuroscientist focused
            on clinically relevant algorithm development for neurological
            disorders. My work combines signal processing, machine learning, and
            neurophysiology to build practical tools for diagnosis and
            treatment.
          </p>
          <p>
            I am currently a PhD candidate in Computational Neuroscience at the
            University of Wurzburg, where I study neural biomarkers in
            Parkinson&apos;s disease using LFP, EEG, EMG, and accelerometer data.
            I also work on computer vision methods for clinically interpretable
            movement analysis.
          </p>
          <p>
            My background includes an MS in Biomedical Engineering from the
            University of Southern California and a BTech in Electronics and
            Instrumentation Engineering from West Bengal University of
            Technology. I have published across neuroscience and control
            engineering, taught graduate-level data science courses, and was
            awarded a DAAD PhD fellowship.
          </p>
          <p>
            Email:{" "}
            <a href="mailto:tanmoy_sil@hotmail.com">tanmoy_sil@hotmail.com</a>
          </p>
          <p>
            CV:{" "}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("Resume Click", { location: "about" })}
            >
              Open Resume (PDF)
            </a>
          </p>
        </section>

        <section id="now" className="panel reveal">
          <h2>Now</h2>
          <ul className="now-list">
            <li>
              Modeling dystonia kinematics for clinically interpretable visual
              biomarkers.
            </li>
            <li>
              Disentangling DBS artifacts from physiological signals in STN-LFP
              data.
            </li>
            <li>
              Linking latent neural features to therapeutic response metrics.
            </li>
          </ul>
        </section>

        {/*
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
        */}

        <section id="publications" className="panel reveal">
          <h2>Publications</h2>
          <p>
            Google Scholar:{" "}
            <a
              href="https://scholar.google.com/citations?user=f4tD5QYAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
            >
              View profile
            </a>
          </p>
          <ol className="pub-list">
            {publications.map((publication) => (
              <li key={publication.citation}>
                <span>{publication.citation}</span>
                {publication.doi ? (
                  <a
                    href={`https://doi.org/${publication.doi}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    DOI: {publication.doi}
                  </a>
                ) : publication.url ? (
                  <a href={publication.url} target="_blank" rel="noreferrer">
                    Published Article
                  </a>
                ) : (
                  <span className="pub-note">DOI pending</span>
                )}
              </li>
            ))}
          </ol>
        </section>

        <section id="contact" className="panel reveal">
          <h2>Contact</h2>
          <p>Send me a message directly from this page:</p>
          <form
            className="contact-form"
            action="https://formsubmit.co/tanmoy_sil@hotmail.com"
            method="POST"
            aria-label="Contact form"
            onSubmit={handleContactSubmit}
            noValidate
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

            <button
              className="btn primary"
              type="submit"
              disabled={formState.status === "submitting"}
            >
              {formState.status === "submitting" ? "Sending..." : "Send Message"}
            </button>
            <p
              className={`form-status ${formState.status}`}
              role={formState.status === "error" ? "alert" : "status"}
              aria-live="polite"
            >
              {formState.message}
            </p>
          </form>

          <p>
            Open to collaborations in computational neuroscience, neural signal
            processing, and clinically grounded computer vision.
          </p>
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
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("Resume Click", { location: "contact" })}
              >
                Resume (PDF)
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <p>© {year} Tanmoy Sil</p>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
