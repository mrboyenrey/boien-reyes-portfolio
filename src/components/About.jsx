import { focusAreas, principles, profile, toolbelt } from '../data/content';
import Icon from './Icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="One engineer across the whole delivery path"
          lead={
            'Most teams divide building software from running it. I work on both sides of that line — which is why handoffs, environment drift and "works on my machine" tend to disappear from my projects.'
          }
        />

        <div className="about__layout">
          <Reveal className="about__panel card">
            <div className="about__panelHead">
              <span className="avatar" aria-hidden="true">
                <Icon name="terminal" size={26} />
              </span>
              <div>
                <h3>{profile.headline}</h3>
                <p className="muted">
                  {profile.name} · {profile.location}
                </p>
              </div>
            </div>

            <p>
              My work starts with the interface a user touches and ends with the alert that fires when
              something misbehaves in production. In between sits the part I enjoy most: making the path
              from a commit to a live release fast, repeatable and reversible.
            </p>

            <div className="about__toolbelt">
              {toolbelt.map((tool) => (
                <span className="chip" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="about__cards">
            {focusAreas.map((area, i) => (
              <Reveal key={area.title} className="card focusCard" delay={i * 90}>
                <span className="focusCard__icon">
                  <Icon name={area.icon} size={22} />
                </span>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="principles">
          <h3 className="principles__title">How I work</h3>
          <div className="principles__grid">
            {principles.map((principle) => (
              <div className="principle" key={principle.title}>
                <span className="principle__check">
                  <Icon name="check" size={16} />
                </span>
                <div>
                  <strong>{principle.title}</strong>
                  <p>{principle.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
