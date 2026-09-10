import { certifications, credentialProfiles, education } from '../data/content';
import Icon from './Icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const hasAnything =
  certifications.length > 0 || education.length > 0 || credentialProfiles.length > 0;

/** One credential-style card. Renders as an external link when a URL is supplied. */
function CredentialCard({ icon, title, subtitle, detail, href, badge }) {
  const body = (
    <>
      <span className="cert__icon">
        <Icon name={icon} size={20} />
      </span>

      <div className="cert__body">
        <h3>{title}</h3>
        <p className="muted">{[subtitle, detail].filter(Boolean).join(' | ')}</p>
      </div>

      <span className="cert__badge" aria-hidden="true">
        <Icon name={badge} size={16} />
      </span>
    </>
  );

  if (!href) return <div className="card cert">{body}</div>;

  return (
    <a className="card cert cert--link" href={href} target="_blank" rel="noreferrer">
      {body}
    </a>
  );
}

export default function Credentials() {
  // Hide entirely if there is genuinely nothing to show. The nav link mirrors this.
  if (!hasAnything) return null;

  return (
    <section className="section" id="certifications">
      <div className="container">
        <SectionHeading
          eyebrow="Credentials"
          title="Education, certifications and where to verify them"
          lead="My formal qualification, the certifications I hold, and the profiles where you can independently confirm my history and work."
        />

        {education.length > 0 && (
          <div className="creds__group">
            <h3 className="creds__groupTitle">
              <Icon name="cap" size={15} /> Education
            </h3>
            <div className="certs__grid">
              {education.map((item, i) => (
                <Reveal key={item.degree} delay={i * 70}>
                  <CredentialCard
                    icon={item.icon}
                    title={item.degree}
                    subtitle={item.school}
                    detail={item.detail}
                    badge="badgeCheck"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {certifications.length > 0 && (
          <div className="creds__group">
            <h3 className="creds__groupTitle">
              <Icon name="badgeCheck" size={15} /> Certifications
            </h3>
            <div className="certs__grid">
              {certifications.map((cert, i) => (
                <Reveal key={cert.name} delay={i * 70}>
                  <CredentialCard
                    icon={cert.icon}
                    title={cert.name}
                    subtitle={cert.issuer}
                    detail={cert.year}
                    href={cert.url}
                    badge="badgeCheck"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {credentialProfiles.length > 0 && (
          <div className="creds__group">
            <h3 className="creds__groupTitle">
              <Icon name="external" size={15} /> Verify online
            </h3>
            <div className="certs__grid">
              {credentialProfiles.map((item, i) => (
                <Reveal key={item.label} delay={i * 70}>
                  <CredentialCard
                    icon={item.icon}
                    title={item.label}
                    subtitle={item.note}
                    href={item.url}
                    badge="external"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
