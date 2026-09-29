import { useState } from 'react';
import { designWorks } from '../data/content';
import Icon from './Icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const DISCIPLINES = new Set(designWorks.map((work) => work.category)).size;

const imgFor = (slug) => `${import.meta.env.BASE_URL}design/${slug}.webp`;

/** Cover that degrades to a letter mark if the image is ever missing. */
function DesignThumb({ work }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="design__fallback" aria-hidden="true">
        {work.title.charAt(0).toUpperCase()}
      </span>
    );
  }

  return (
    <img
      className="design__img"
      src={imgFor(work.slug)}
      alt={`${work.title}: ${work.category} project cover`}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

export default function Design() {
  return (
    <section className="section section--alt" id="design">
      <div className="container">
        <SectionHeading
          eyebrow="Creative work"
          title="Graphic design & brand work"
          lead="Identity, print and web design from my freelance and agency years: logo and brand marks, brochures, posters and website mockups. Every card opens the full case study on Behance."
        />

        <Reveal className="design__stats">
          <span className="design__stat">
            <strong>{designWorks.length}</strong> published projects
          </span>
          <span className="design__stat">
            <strong>{DISCIPLINES}</strong> design disciplines
          </span>
          <span className="design__stat design__stat--note">
            Delivered under BLR Design Services
          </span>
        </Reveal>

        <div className="design__grid">
          {designWorks.map((work, i) => (
            <Reveal key={work.slug} className="card design" delay={(i % 4) * 60}>
              <a
                className="design__link"
                href={work.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${work.title} on Behance (opens in a new tab)`}
              >
                <span className="design__thumb">
                  <DesignThumb work={work} />
                </span>

                <span className="design__body">
                  <span className="design__badge">{work.category}</span>
                  <span className="design__title">{work.title}</span>
                  <span className="design__blurb">{work.blurb}</span>

                  <span className="design__cta">
                    View case study <Icon name="external" size={14} />
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="design__more">
          <a
            className="btn btn--ghost"
            href="https://www.behance.net/BoienReyes"
            target="_blank"
            rel="noreferrer"
          >
            View the full portfolio on Behance
            <Icon name="external" size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
