import { useEffect, useState } from 'react';
import { navLinks, profile } from '../data/content';
import BrandMark from './BrandMark';
import Icon from './Icons';

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      // Highlight the section currently occupying the top of the viewport.
      const offsets = navLinks
        .map((link) => {
          const el = document.querySelector(link.href);
          return el ? { href: link.href, top: el.getBoundingClientRect().top } : null;
        })
        .filter(Boolean);

      const current = offsets.filter((s) => s.top <= 140).pop();
      setActive(current ? current.href : '');
    };

    // Run once after paint (async, so it does not set state during the effect).
    const raf = window.requestAnimationFrame(onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // If the viewport grows past the mobile breakpoint while the drawer is open,
  // close it — otherwise the body would stay scroll-locked on desktop.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 880) setOpen(false);
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const go = (event, href) => {
    event.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a className="nav__brand" href="#top" onClick={(e) => go(e, '#top')}>
          <BrandMark />
          <span className="nav__brandText">
            <strong>{profile.name}</strong>
            <small>Web · CMS · DevOps</small>
          </span>
        </a>

        <nav className="nav__links" aria-label="Section navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? 'is-active' : ''}
              onClick={(e) => go(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="iconBtn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
          </button>

          <a className="btn btn--primary btn--sm nav__cta" href="#contact" onClick={(e) => go(e, '#contact')}>
            Hire me
          </a>

          <button
            type="button"
            className="iconBtn nav__burger"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <Icon name={open ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </div>

      <div className={`nav__drawer ${open ? 'is-open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={(e) => go(e, link.href)}>
            {link.label}
          </a>
        ))}
        <a className="btn btn--primary" href="#contact" onClick={(e) => go(e, '#contact')}>
          Hire me <Icon name="arrow" size={16} />
        </a>
      </div>
    </header>
  );
}
