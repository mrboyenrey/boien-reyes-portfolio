import { useState } from 'react';
import { experience, pmFrameworks, pmLifecycle, projects, websites } from '../data/content';
import Icon from './Icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function ProjectManagement() {
  const [activeId, setActiveId] = useState(pmLifecycle[0].id);
  const active = pmLifecycle.find((stage) => stage.id === activeId) ?? pmLifecycle[0];

  if (pmFrameworks.length === 0) return null;

  return (
    <section className="section pm" id="pm">
      <div className="container">
        <SectionHeading
          eyebrow="Project Management"
          title="Every build on this page was run through the same delivery system"
          lead="Scoping, planning, tracking and handover are not an afterthought to the development work, they are how the work gets done. Browse the frameworks below for how each one is applied, or step through the six-stage lifecycle every engagement follows."
        />

        <Reveal className="pm__stats">
          <span className="pm__stat">
            <strong>{pmFrameworks.length}</strong>
            practices in the delivery system
          </span>
          <span className="pm__stat">
            <strong>{pmLifecycle.length}</strong>
            lifecycle stages, each with a sign-off gate
          </span>
          <span className="pm__stat">
            <strong>{experience.length}</strong>
            remote roles delivered this way
          </span>
          <span className="pm__stat pm__stat--note">
            {websites.length} live client projects, {projects.length} public builds
          </span>
        </Reveal>

        <div className="pm__grid">
          {pmFrameworks.map((item, i) => (
            <Reveal key={item.title} className="card pmCard" delay={(i % 3) * 80}>
              <span className="pmCard__icon">
                <Icon name={item.icon} size={22} />
              </span>
              <span className="pmCard__tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>

        <h3 className="pm__subhead">The delivery lifecycle</h3>

        <Reveal className="pipeline__wrap">
          <ol className="pipeline__track">
            {pmLifecycle.map((stage, i) => {
              const isActive = stage.id === activeId;
              const isDone = pmLifecycle.findIndex((s) => s.id === activeId) > i;
              return (
                <li key={stage.id} className={`stage ${isActive ? 'is-active' : ''} ${isDone ? 'is-done' : ''}`}>
                  <button
                    type="button"
                    className="stage__btn"
                    onClick={() => setActiveId(stage.id)}
                    aria-pressed={isActive}
                  >
                    <span className="stage__node">
                      <Icon name={isDone ? 'check' : stage.icon} size={19} />
                    </span>
                    <span className="stage__name">{stage.name}</span>
                  </button>
                  {i < pmLifecycle.length - 1 && <span className="stage__link" aria-hidden="true" />}
                </li>
              );
            })}
          </ol>

          <div className="pipeline__detail card" key={active.id}>
            <div className="pipeline__detailHead">
              <span className="pipeline__badge">
                <Icon name={active.icon} size={18} />
                {active.name}
              </span>
              <span className="pipeline__stepNo">
                stage {pmLifecycle.findIndex((s) => s.id === active.id) + 1} / {pmLifecycle.length}
              </span>
            </div>

            <p className="pipeline__summary">{active.summary}</p>

            <div className="codeBlock">
              <span className="codeBlock__prompt">→</span>
              <code>{active.artefact}</code>
            </div>

            <div className="pipeline__cols">
              <div>
                <h4>Frameworks & artefacts</h4>
                <ul className="tagList">
                  {active.tools.map((tool) => (
                    <li key={tool}>
                      <span className="chip chip--sm">{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Sign-off gates</h4>
                <ul className="checkList">
                  {active.gates.map((gate) => (
                    <li key={gate}>
                      <Icon name="check" size={16} /> {gate}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="pipeline__note" delay={120}>
          <Icon name="shield" size={18} />
          <p>
            <strong>Frameworks are chosen per project, not by habit.</strong> Fixed-scope work runs
            stage-gated; work where the scope is still moving runs in sprints behind a visible board.
            Either way, the gates above are what the client signs off on.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
