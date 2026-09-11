import { projects, websites, wordpressCapabilities } from '../data/content';
import Icon from './Icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

// Counts are derived from the real data so they can never drift out of date.
const wpSites = websites.filter((site) => site.platform === 'WordPress');
const wpProjects = projects.filter((project) => project.category === 'WordPress');

export default function WordPress() {
  if (wordpressCapabilities.length === 0) return null;

  return (
    <section className="section wp" id="wordpress">
      <div className="container">
        <SectionHeading
          eyebrow="WordPress"
          title="WordPress is where most of my client work lives"
          lead="I have been building on WordPress since before the block editor — custom themes, plugins, WooCommerce and the hosting and maintenance that keeps it all online. Everything below is backed by work you can open and check."
        />

        <Reveal className="wp__stats">
          <span className="wp__stat">
            <strong>{wpSites.length}</strong>
            WordPress sites live right now
          </span>
          <span className="wp__stat">
            <strong>{wpProjects.length}</strong>
            public WordPress repos
          </span>
          <span className="wp__stat wp__stat--note">
            Capability claims link to the sites and source below
          </span>
        </Reveal>

        <div className="wp__grid">
          {wordpressCapabilities.map((item, i) => (
            <Reveal key={item.title} className="card wpCard" delay={(i % 3) * 80}>
              <span className="wpCard__icon">
                <Icon name={item.icon} size={22} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="wp__proof" delay={80}>
          <div className="wp__proofCol">
            <h4>
              <Icon name="external" size={15} /> WordPress builds on GitHub
            </h4>
            <ul className="wp__links">
              {wpProjects.map((project) => (
                <li key={project.title}>
                  <a
                    className="linkBtn"
                    href={project.links[0].url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon name="github" size={15} /> {project.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="wp__proofCol">
            <h4>
              <Icon name="globe" size={15} /> WordPress sites in production
            </h4>
            <ul className="wp__sites">
              {wpSites.map((site) => (
                <li key={site.domain}>
                  <a href={site.url} target="_blank" rel="noreferrer">
                    {site.domain}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
