import { certifications } from '../data/content';
import Icon from './Icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Certifications() {
  // Nothing verified to show yet — hide the section entirely rather than
  // render an empty grid. The nav link hides itself to match.
  if (certifications.length === 0) return null;

  return (
    <section className="section" id="certifications">
      <div className="container">
        <SectionHeading
          eyebrow="Credentials"
          title="Training, certifications and continuous learning"
          lead="Formal courses sit alongside a lot of lab work — most of what I know came from breaking a VM and having to fix it."
        />

        <div className="certs__grid">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} className="card cert" delay={i * 70}>
              <span className="cert__icon">
                <Icon name={cert.icon} size={20} />
              </span>
              <div className="cert__body">
                <h3>{cert.name}</h3>
                <p className="muted">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
              <span className="cert__badge" aria-hidden="true">
                <Icon name="check" size={16} />
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
