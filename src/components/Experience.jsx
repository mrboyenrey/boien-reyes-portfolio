import { experience } from '../data/content';
import Icon from './Icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

function Highlights({ points }) {
  return (
    <ul className="timeline__list">
      {points.map((point) => (
        <li key={point}>
          <Icon name="check" size={16} />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Roles where building and operating overlapped"
          lead="Over a decade of remote work for companies in Australia, the United States, Canada and the Philippines, building the sites, running the servers, and supporting the people who use them."
        />

        <ol className="timeline">
          {experience.map((job, i) => (
            <Reveal as="li" key={`${job.role}-${job.company}`} className="timeline__item" delay={i * 100}>
              <span className="timeline__dot" aria-hidden="true" />
              <div className="card timeline__card">
                <header className="timeline__head">
                  <div>
                    <h3>{job.positions ? job.company : job.role}</h3>
                    <p className="timeline__company">
                      {job.positions ? (
                        <>
                          {job.location}
                          <span className="muted">
                            {' · '}
                            {[job.employmentType, job.duration].filter(Boolean).join(' · ')}
                          </span>
                        </>
                      ) : (
                        <>
                          {job.company} <span className="muted">· {job.location}</span>
                        </>
                      )}
                    </p>
                  </div>
                  <span className="timeline__period">{job.period}</span>
                </header>

                <p className="timeline__summary">{job.summary}</p>

                {job.positions ? (
                  <ol className="timeline__roles">
                    {job.positions.map((position) => (
                      <li key={position.title} className="timeline__role">
                        <div className="timeline__roleHead">
                          <h4>{position.title}</h4>
                          <span className="timeline__roleMeta">
                            {[position.employmentType, position.period, position.duration]
                              .filter(Boolean)
                              .join(' · ')}
                          </span>
                        </div>
                        <Highlights points={position.highlights} />
                      </li>
                    ))}
                  </ol>
                ) : (
                  <Highlights points={job.highlights} />
                )}

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
