import { experience } from '../data/content';
import Icon from './Icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Roles where building and operating overlapped"
          lead="Over a decade of remote work for companies in Australia, the United States, Canada and the Philippines — building the sites, running the servers, and supporting the people who use them."
        />

        <ol className="timeline">
          {experience.map((job, i) => (
            <Reveal as="li" key={`${job.role}-${job.company}`} className="timeline__item" delay={i * 100}>
              <span className="timeline__dot" aria-hidden="true" />
              <div className="card timeline__card">
                <header className="timeline__head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="timeline__company">
                      {job.company} <span className="muted">· {job.location}</span>
                    </p>
                  </div>
                  <span className="timeline__period">{job.period}</span>
                </header>

                <p className="timeline__summary">{job.summary}</p>

                <ul className="timeline__list">
                  {job.highlights.map((point) => (
                    <li key={point}>
                      <Icon name="check" size={16} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <ul className="tagList">
                  {job.stack.map((tech) => (
                    <li key={tech}>
                      <span className="chip chip--sm">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
