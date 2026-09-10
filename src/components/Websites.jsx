import { websites } from '../data/content';
import Icon from './Icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const WORDPRESS_COUNT = websites.filter((site) => site.platform === 'WordPress').length;

export default function Websites() {
  return (
    <section className="section" id="websites">
      <div className="container">
        <SectionHeading
          eyebrow="Client work"
          title="Websites I've built and maintained"
          lead="Live client sites from agency, contract and freelance work across Australia, the United States, Canada and the Philippines — including WordPress builds, custom CMS work and platform migrations."
        />

        <Reveal className="sites__stats">
          <span className="sites__stat">
            <strong>{websites.length}</strong> live sites
          </span>
          <span className="sites__stat">
            <strong>{WORDPRESS_COUNT}</strong> on WordPress
          </span>
          <span className="sites__stat sites__stat--note">
            Platforms verified by inspecting each site, September 2026
          </span>
        </Reveal>

        <div className="sites__grid">
          {websites.map((site, i) => (
            <Reveal key={site.domain} className="card site" delay={(i % 4) * 60}>
              <a
                className="site__link"
                href={site.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${site.domain} (opens in a new tab)`}
              >
                <span className="site__top">
                  <span className="site__mark" aria-hidden="true">
                    {site.domain.charAt(0).toUpperCase()}
                  </span>
                  {site.platform && <span className="site__platform">{site.platform}</span>}
                </span>

                <span className="site__domain">{site.domain}</span>
                {site.client && <span className="site__client">{site.client}</span>}

                <span className="site__cta">
                  Visit site <Icon name="external" size={14} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
