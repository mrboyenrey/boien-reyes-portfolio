import { useEffect, useRef, useState } from 'react';
import { profile, terminalLines } from '../data/content';
import Icon from './Icons';

/** Cycles through profile.roles with a typewriter effect. */
function useTypewriter(words, { typeMs = 55, deleteMs = 28, holdMs = 1500 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let delay = deleting ? deleteMs : typeMs;

    if (!deleting && text === word) delay = holdMs;
    else if (deleting && text === '') delay = 220;

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, typeMs, deleteMs, holdMs]);

  return text;
}

/** Types the hero terminal output one line at a time, then loops. */
function useTerminal(lines) {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => setVisible((v) => (v >= lines.length ? 0 : v + 1)),
      visible >= lines.length ? 4200 : 620,
    );
    return () => clearTimeout(timer);
  }, [visible, lines.length]);

  return lines.slice(0, visible);
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);
  const shown = useTerminal(terminalLines);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMove = (event) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 8 });
  };

  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="pill">
            <span className="pill__dot" />
            {profile.availability}
          </span>

          <h1 className="hero__title">
            Hi, I&apos;m <span className="gradText">{profile.name}</span>
          </h1>

          <p className="hero__role" aria-live="polite">
            <span className="hero__roleText">{typed}</span>
            <span className="caret" aria-hidden="true" />
          </p>

          <p className="hero__summary">{profile.summary}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              View my work <Icon name="arrow" size={17} />
            </a>
            <a className="btn btn--ghost" href="#contact">
              <Icon name="mail" size={17} /> Get in touch
            </a>
          </div>

          <ul className="hero__meta">
            <li>
              <Icon name="pin" size={16} /> {profile.location}
            </li>
            <li>
              <Icon name="gauge" size={16} /> Web Dev · WordPress &amp; Umbraco · DevOps · CI/CD
            </li>
          </ul>

          <div className="hero__socials">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                className="socialBtn"
                target={social.url.startsWith('http') ? '_blank' : undefined}
                rel={social.url.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={social.label}
                title={social.label}
              >
                <Icon name={social.icon} size={19} />
              </a>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <div
            className="terminal"
            ref={cardRef}
            onMouseMove={handleMove}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            style={{ transform: `perspective(1100px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
          >
            <div className="terminal__bar">
              <span className="dot dot--red" />
              <span className="dot dot--amber" />
              <span className="dot dot--green" />
              <span className="terminal__title">boien@prod-pipeline: ~/portfolio</span>
            </div>

            <div className="terminal__body">
              {shown.map((line, i) => (
                <p key={`${line.text}-${i}`} className={`termLine termLine--${line.type}`}>
                  <span className="termLine__prompt">{line.prompt}</span>
                  <span>{line.text}</span>
                </p>
              ))}
              {shown.length > 0 && <span className="termCaret" aria-hidden="true" />}
            </div>

            <div className="terminal__status">
              <span className="statusDot statusDot--ok" /> pipeline: passing
              <span className="statusDivider" />
              <span className="statusDot statusDot--ok" /> uptime 99.9%
              <span className="statusDivider" />
              <span className="statusDot statusDot--info" /> v1.0.0
            </div>
          </div>

          <div className="floatCard floatCard--a">
            <Icon name="pipeline" size={18} />
            <div>
              <strong>CI/CD</strong>
              <small>commit → production</small>
            </div>
          </div>

          <div className="floatCard floatCard--b">
            <Icon name="shield" size={18} />
            <div>
              <strong>Monitored</strong>
              <small>alerts &amp; runbooks</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
