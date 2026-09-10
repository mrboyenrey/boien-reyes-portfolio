import { useState } from 'react';
import { pipeline } from '../data/content';
import Icon from './Icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Pipeline() {
  const [activeId, setActiveId] = useState(pipeline[0].id);
  const active = pipeline.find((stage) => stage.id === activeId) ?? pipeline[0];

  return (
    <section className="section pipeline" id="pipeline">
      <div className="container">
        <SectionHeading
          eyebrow="CI/CD"
          title="From commit to production, without drama"
          lead="This is the delivery path I set up for projects. Click any stage to see the command it runs, the tooling behind it and the checks that must pass before moving on."
        />

        <Reveal className="pipeline__wrap">
          <ol className="pipeline__track">
            {pipeline.map((stage, i) => {
              const isActive = stage.id === activeId;
              const isDone = pipeline.findIndex((s) => s.id === activeId) > i;
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
                  {i < pipeline.length - 1 && <span className="stage__link" aria-hidden="true" />}
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
                step {pipeline.findIndex((s) => s.id === active.id) + 1} / {pipeline.length}
              </span>
            </div>

            <p className="pipeline__summary">{active.summary}</p>

            <div className="codeBlock">
              <span className="codeBlock__prompt">$</span>
              <code>{active.command}</code>
            </div>

            <div className="pipeline__cols">
              <div>
                <h4>Tooling</h4>
                <ul className="tagList">
                  {active.tools.map((tool) => (
                    <li key={tool}>
                      <span className="chip chip--sm">{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Gates</h4>
                <ul className="checkList">
                  {active.checks.map((check) => (
                    <li key={check}>
                      <Icon name="check" size={16} /> {check}
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
            <strong>Everything here is real.</strong> The same workflow file that builds this portfolio runs
            lint and build on every push before publishing to GitHub Pages.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
