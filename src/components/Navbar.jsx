import { useEffect, useRef, useState } from 'react';
import { navItems, navLinks, profile } from '../data/content';
import BrandMark from './BrandMark';
import Icon from './Icons';

// Hover intent: without a delay the panel flickers open whenever the pointer
// crosses the header on its way somewhere else.
const OPEN_DELAY = 90;
const CLOSE_DELAY = 140;

const slug = (label) => label.toLowerCase().replace(/[^a-z0-9]+/g, '-');

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [openGroup, setOpenGroup] = useState(null);
  const navRef = useRef(null);
  const panels = useRef({});
  const hoverTimer = useRef(null);
  const pendingFocus = useRef(null);

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
  // close it, otherwise the body would stay scroll-locked on desktop.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 880) setOpen(false);
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Drop any pending hover timer on unmount.
  useEffect(
    () => () => {
      if (hoverTimer.current) window.clearTimeout(hoverTimer.current);
    },
    [],
  );

  // One dropdown at a time. Escape closes and returns focus to the trigger, a
  // pointer press outside closes, and a page scroll closes: the panel is
  // anchored to a fixed header, so leaving it open mid-scroll reads as stuck.
  useEffect(() => {
    if (!openGroup) return undefined;

    const onKey = (event) => {
      if (event.key !== 'Escape') return;
      setOpenGroup(null);
      navRef.current?.querySelector(`[data-group="${slug(openGroup)}"]`)?.focus();
    };

    const onPress = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) setOpenGroup(null);
    };

    const onPageScroll = () => setOpenGroup(null);

    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPress);
    window.addEventListener('scroll', onPageScroll, { passive: true });
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPress);
      window.removeEventListener('scroll', onPageScroll);
    };
  }, [openGroup]);

  // ArrowDown sets an intent, then this runs AFTER the panel has been committed
  // open. It still waits one frame: `visibility` is part of the panel's CSS
  // transition, so at commit time the link is not focusable yet and a focus call
  // there is silently dropped.
  useEffect(() => {
    if (!openGroup || pendingFocus.current !== openGroup) return undefined;
    pendingFocus.current = null;
    const raf = window.requestAnimationFrame(() => {
      panels.current[openGroup]?.querySelector('a')?.focus();
    });
    return () => window.cancelAnimationFrame(raf);
  }, [openGroup]);

  const clearHover = () => {
    if (hoverTimer.current) {
      window.clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
  };

  const scheduleOpen = (label) => {
    clearHover();
    hoverTimer.current = window.setTimeout(() => setOpenGroup(label), OPEN_DELAY);
  };

  const scheduleClose = () => {
    clearHover();
    hoverTimer.current = window.setTimeout(() => setOpenGroup(null), CLOSE_DELAY);
  };

  // Arrow keys walk the open panel, wrapping at both ends.
  const onPanelKeyDown = (event) => {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
    const links = [...event.currentTarget.querySelectorAll('a')];
    if (links.length === 0) return;
    event.preventDefault();
    const at = links.indexOf(document.activeElement);
    const next = event.key === 'ArrowDown' ? at + 1 : at - 1;
    links[(next + links.length) % links.length].focus();
  };

  const openAndFocus = (label) => {
    pendingFocus.current = label;
    setOpenGroup(label);
  };

  const go = (event, href) => {
    event.preventDefault();
    setOpen(false);
    setOpenGroup(null);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a className="nav__brand" href="#top" onClick={(e) => go(e, '#top')}>
          <BrandMark />
          <span className="nav__brandText">
            <strong>{profile.name}</strong>
            <small>Delivery · Web · DevOps</small>
          </span>
        </a>

        <nav className="nav__links" aria-label="Section navigation" ref={navRef}>
          {navItems.map((entry) => {
            if (!entry.links) {
              return (
                <a
                  key={entry.href}
                  href={entry.href}
                  className={active === entry.href ? 'is-active' : ''}
                  onClick={(e) => go(e, entry.href)}
                >
                  {entry.label}
                </a>
              );
            }

            const key = slug(entry.label);
            const isOpen = openGroup === entry.label;
            const isActive = entry.links.some((link) => link.href === active);

            return (
              <div
                key={entry.label}
                className={`nav__group ${isOpen ? 'is-open' : ''} ${isActive ? 'is-active' : ''}`}
                onMouseEnter={() => scheduleOpen(entry.label)}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  className="nav__groupBtn"
                  data-group={key}
                  aria-expanded={isOpen}
                  aria-controls={`nav-panel-${key}`}
                  onClick={() => setOpenGroup(isOpen ? null : entry.label)}
                  onKeyDown={(e) => {
                    if (e.key !== 'ArrowDown') return;
                    e.preventDefault();
                    openAndFocus(entry.label);
                  }}
                >
                  {entry.label}
                  <Icon name="chevron" size={14} />
                </button>

                <div
                  className="nav__panel"
                  id={`nav-panel-${key}`}
                  ref={(el) => {
                    panels.current[entry.label] = el;
                  }}
                  onKeyDown={onPanelKeyDown}
                >
                  {entry.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className={active === link.href ? 'is-active' : ''}
                      onClick={(e) => go(e, link.href)}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
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
        {navItems.map((entry) =>
          entry.links ? (
            <div className="nav__drawerGroup" key={entry.label}>
              <span className="nav__drawerLabel">{entry.label}</span>
              {entry.links.map((link) => (
                <a key={link.href} href={link.href} onClick={(e) => go(e, link.href)}>
                  {link.label}
                </a>
              ))}
            </div>
          ) : (
            <a key={entry.href} href={entry.href} onClick={(e) => go(e, entry.href)}>
              {entry.label}
            </a>
          ),
        )}
        <a className="btn btn--primary" href="#contact" onClick={(e) => go(e, '#contact')}>
          Hire me <Icon name="arrow" size={16} />
        </a>
      </div>
    </header>
  );
}
