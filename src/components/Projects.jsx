import { useState } from 'react';
import { projectCategories, projects } from '../data/content';
import Icon from './Icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="section section--alt" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work across build, deploy and operate"
          lead="Real projects from my GitHub. Every entry links to its public source, and the ones with a live demo are running right now. Filter by the discipline you care about most."
        />

        <div className="filters" role="tablist" aria-label="Filter projects by discipline">
          {projectCategories.map((category) => {
            const count =
              category === 'All' ? projects.length : projects.filter((p) => p.category === category).length;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={filter === category}
                className={`filter ${filter === category ? 'is-active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category}
                <span className="filter__count">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="projects__grid">
          {shown.map((project, i) => (
            <Reveal key={project.title} className="card project" delay={(i % 3) * 90}>
              <div className="project__top">
                <span className="project__cat">{project.category}</span>
                {project.featured && <span className="project__star">Featured</span>}
              </div>

              <h3 className="project__title">{project.title}</h3>
              <p className="project__blurb">{project.blurb}</p>

              <ul className="project__list">
                {project.highlights.map((point) => (
                  <li key={point}>
                    <Icon name="check" size={15} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {project.metrics && (
                <div className="project__metrics">
                  {project.metrics.map((metric) => (
                    <div className="project__metric" key={metric.label}>
                      <strong>{metric.value}</strong>
                      <small>{metric.label}</small>
                    </div>
                  ))}
                </div>
              )}

              <ul className="tagList">
                {project.stack.map((tech) => (
                  <li key={tech}>
                    <span className="chip chip--sm">{tech}</span>
                  </li>
                ))}
              </ul>

              <div className="project__links">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    className="linkBtn"
                    href={link.url}
                    target={link.url.startsWith('http') ? '_blank' : undefined}
                    rel={link.url.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    <Icon name={link.icon} size={16} /> {link.label}
                  </a>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {shown.length === 0 && <p className="emptyState">No projects in this category yet.</p>}
      </div>
    </section>
  );
}
