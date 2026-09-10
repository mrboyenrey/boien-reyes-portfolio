import { skillGroups } from '../data/content';
import Icon from './Icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="The stack I build, run and automate with"
          lead="Grouped by discipline — CMS platforms, development, SEO, operations, automation and AI. Values reflect day-to-day confidence, not a ranking — I would rather be honest about a 76 than inflate a 95."
        />

        <div className="skills__grid">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} className="card skillCard" delay={gi * 110}>
              <header className="skillCard__head">
                <span className="skillCard__icon">
                  <Icon name={group.icon} size={22} />
                </span>
                <h3>{group.title}</h3>
              </header>

              <ul className="skillCard__list">
                {group.skills.map((skill) => (
                  <li className="skill" key={skill.name}>
                    <div className="skill__row">
                      <span>{skill.name}</span>
                      <span className="skill__value">{skill.level}%</span>
                    </div>
                    <div className="skill__track" role="presentation">
                      <span className="skill__fill" style={{ '--level': `${skill.level}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
