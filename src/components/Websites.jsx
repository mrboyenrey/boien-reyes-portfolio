import { useState } from 'react';
import { websites } from '../data/content';
import Icon from './Icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const WORDPRESS_COUNT = websites.filter((site) => site.platform === 'WordPress').length;

/** Matches the slug used by scripts/generate-thumbnails.mjs. */
const slugFor = (domain) => domain.replace(/^www\./, '').replace(/[^a-z0-9]+/gi, '-');

const thumbFor = (domain) => `${import.meta.env.BASE_URL}sites/${slugFor(domain)}.jpg`;

/** Thumbnail that degrades to a letter mark if the image is ever missing. */
function SiteThumb({ site }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="site__fallback" aria-hidden="true">
        {site.domain.charAt(0).toUpperCase()}
      </span>
    );
  }

  return (
    <img
      className="site__img"
      src={thumbFor(site.domain)}
      alt={`Homepage of ${site.domain}`}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

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
                <span className="site__thumb">
                  <SiteThumb site={site} />
                </span>

                <span className="site__body">
                  <span className="site__head">
                    <span className="site__domain">{site.domain}</span>
                    {site.platform && <span className="site__platform">{site.platform}</span>}
                  </span>

                  {site.client && <span className="site__client">{site.client}</span>}

                  <span className="site__cta">
                    Visit site <Icon name="external" size={14} />
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
