import { useState } from 'react';
import { profile } from '../data/content';
import ContactChannels from './ContactChannels';
import Icon from './Icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const EMPTY = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = (values) => {
    const next = {};
    if (!values.name.trim()) next.name = 'Please tell me your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
      next.email = 'A valid email address is required.';
    }
    if (values.message.trim().length < 12) next.message = 'A little more detail helps (12+ characters).';
    return next;
  };

  const update = (field) => (event) => {
    const { value } = event.target;
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // No backend on a static host — hand off to the visitor's mail client.
    const subject = encodeURIComponent(form.subject.trim() || `Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="section section--alt" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your next build — or your pipeline"
          lead="Tell me what you are working on. Roles, contracts and one-off automation projects are all welcome."
        />

        <div className="contact__layout">
          <Reveal className="contact__side">
            <ContactChannels />

            <div className="card contact__promise">
              <h3>
                <Icon name="activity" size={18} /> What happens next
              </h3>
              <ol className="steps">
                <li>You send a short brief — stack, timeline, constraints.</li>
                <li>I reply within one business day with questions or a plan.</li>
                <li>We agree scope, then work starts with a clear definition of done.</li>
              </ol>
            </div>
          </Reveal>

          <Reveal className="card contact__form" delay={120}>
            {sent ? (
              <div className="success">
                <span className="success__icon">
                  <Icon name="check" size={30} />
                </span>
                <h3>Thanks, {form.name.split(' ')[0]}!</h3>
                <p>
                  Your email client should have opened with the message ready to send. If nothing happened,
                  reach me directly at <a href={`mailto:${profile.email}`}>{profile.email}</a>.
                </p>
                <button
                  type="button"
                  className="btn btn--ghost"
                  onClick={() => {
                    setForm(EMPTY);
                    setSent(false);
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="fieldRow">
                  <div className={`field ${errors.name ? 'has-error' : ''}`}>
                    <label htmlFor="name">Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Jane Doe"
                      autoComplete="name"
                    />
                    {errors.name && <span className="field__error">{errors.name}</span>}
                  </div>

                  <div className={`field ${errors.email ? 'has-error' : ''}`}>
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="jane@company.com"
                      autoComplete="email"
                    />
                    {errors.email && <span className="field__error">{errors.email}</span>}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={update('subject')}
                    placeholder="DevOps contract · 3 months"
                  />
                </div>

                <div className={`field ${errors.message ? 'has-error' : ''}`}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={form.message}
                    onChange={update('message')}
                    placeholder="What are you building, and where does it hurt today?"
                  />
                  {errors.message && <span className="field__error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn--primary btn--block">
                  <Icon name="send" size={17} /> Send message
                </button>

                <p className="formNote">
                  Opens in your email client — no data is stored on this site.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
