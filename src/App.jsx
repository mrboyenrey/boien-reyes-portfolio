import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import About from './components/About';
import Skills from './components/Skills';
import Pipeline from './components/Pipeline';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

const STORAGE_KEY = 'portfolio-theme';

/** Thin progress bar showing how far down the page the visitor is. */
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };

    const raf = window.requestAnimationFrame(onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="progress" aria-hidden="true">
      <span className="progress__bar" style={{ width: `${progress}%` }} />
    </div>
  );
}

function readInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export default function App() {
  const [theme, setTheme] = useState(readInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#0b1120' : '#f6f8fc');
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return (
    <>
      <ScrollProgress />
      <a className="skipLink" href="#about">
        Skip to content
      </a>

      <Navbar theme={theme} onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} />

      <main>
        <Hero />
        <Metrics />
        <About />
        <Skills />
        <Pipeline />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
