import { metrics } from '../data/content';
import Reveal from './Reveal';

export default function Metrics() {
  return (
    <section className="metrics" aria-label="Key results">
      <div className="container">
        <div className="metrics__grid">
          {metrics.map((metric, i) => (
            <Reveal key={metric.label} className="metric" delay={i * 80}>
              <span className="metric__value">{metric.value}</span>
              <span className="metric__label">{metric.label}</span>
              <span className="metric__hint">{metric.hint}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
