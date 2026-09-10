import { navLinks, profile } from '../data/content';
import BrandMark from './BrandMark';
import Icon from './Icons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <BrandMark />
          <div>
            <strong>{profile.name}</strong>
            <p className="muted">{profile.headline}</p>
          </div>
        </div>

        <nav className="footer__links" aria-label="Footer navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__socials">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              className="socialBtn socialBtn--sm"
              target={social.url.startsWith('http') ? '_blank' : undefined}
              rel={social.url.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={social.label}
            >
              <Icon name={social.icon} size={17} />
            </a>
          ))}
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} {profile.name}. Built with React &amp; Vite, deployed by a GitHub Actions pipeline.
        </p>
        <a className="footer__top" href="#top">
          Back to top <Icon name="arrow" size={15} style={{ transform: 'rotate(-90deg)' }} />
        </a>
      </div>
    </footer>
  );
}
