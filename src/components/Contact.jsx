import { useEffect, useRef, useState } from 'react';
import { contactForm, profile } from '../data/content';
import ContactChannels from './ContactChannels';
import Icon from './Icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const EMPTY = { name: '', email: '', subject: '', message: '' };
const { endpoint, web3formsKey, minFillSeconds } = contactForm;

/** The live endpoint is only used once an access key has been filled in. */
const hasLiveEndpoint = web3formsKey.trim().length > 0;

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('');
  const [honeypot, setHoneypot] = useState(false);

  // Timestamp of first render: bots submit almost instantly. Set in an
  // effect because Date.now() is impure and must not run during render.
  const openedAt = useRef(null);

  useEffect(() => {
    openedAt.current = Date.now();
  }, []);

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

  const buildSubject = () => form.subject.trim() || `Portfolio enquiry from ${form.name}`;

  /** Fallback used when no key is configured, or when delivery fails. */
  const openMailClient = () => {
    const subject = encodeURIComponent(buildSubject());
    const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // Spam gate: a ticked hidden checkbox or an instant submit means a bot.
    // Report success so the bot learns nothing, but drop the message.
    const submittedTooFast =
      openedAt.current !== null && Date.now() - openedAt.current < minFillSeconds * 1000;
    if (honeypot || submittedTooFast) {
      setStatus('sent');
      return;
    }

    // No access key configured yet, so hand off to the visitor's mail client.
    if (!hasLiveEndpoint) {
      openMailClient();
      setStatus('sent');
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: web3formsKey.trim(),
          subject: buildSubject(),
          from_name: `${form.name} (portfolio contact form)`,
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          // Web3Forms treats a ticked botcheck as spam; send it explicitly false.
          botcheck: false,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setStatus('sent');
        return;
      }

      // Web3Forms nests the reason under `body.message` for 400s, uses a
      // top-level `message` for 429s, and returns `error` for 500s.
      setErrorMsg(
        data.message ||
          data.body?.message ||
          data.error ||
          `The form service returned an error (HTTP ${response.status}).`,
      );
      setStatus('error');
    } catch {
      setErrorMsg('Could not reach the form service. Check your connection and try again.');
      setStatus('error');
    }
  };

  const reset = () => {
    setForm(EMPTY);
    setErrors({});
    setStatus('idle');
    setErrorMsg('');
    openedAt.current = Date.now();
  };

  const busy = status === 'sending';

  return (
    <section className="section section--alt" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your next build, or your pipeline"
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
                <li>You send a short brief: stack, timeline, constraints.</li>
                <li>I reply within one business day with questions or a plan.</li>
                <li>We agree scope, then work starts with a clear definition of done.</li>
              </ol>
            </div>
          </Reveal>

          <Reveal className="card contact__form" delay={120}>
            {status === 'sent' ? (
              <div className="success">
                <span className="success__icon">
                  <Icon name="check" size={30} />
                </span>
                <h3>Thanks, {form.name.split(' ')[0] || 'there'}!</h3>
                {hasLiveEndpoint ? (
                  <p>
                    Your message is on its way to my inbox. I reply within one business day. If you do not
                    hear back, reach me directly at <a href={`mailto:${profile.email}`}>{profile.email}</a>.
                  </p>
                ) : (
                  <p>
                    Your email client should have opened with the message ready to send. Press Send there
                    to deliver it. If nothing happened, email me directly at{' '}
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>.
                  </p>
                )}
                <button type="button" className="btn btn--ghost" onClick={reset}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Spam trap: hidden from humans, irresistible to bots. */}
                <div className="hp" aria-hidden="true">
                  <label htmlFor="botcheck">Leave this box empty</label>
                  <input
                    id="botcheck"
                    type="checkbox"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    checked={honeypot}
                    onChange={(e) => setHoneypot(e.target.checked)}
                  />
                </div>

                {status === 'error' && (
                  <div className="formAlert" role="alert">
                    <Icon name="shield" size={18} />
                    <div>
                      <strong>Message could not be sent.</strong>
                      <p>{errorMsg}</p>
                      <button type="button" className="linkBtn" onClick={openMailClient}>
                        <Icon name="mail" size={15} /> Send it from my email app instead
                      </button>
                    </div>
                  </div>
                )}

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
                      required
                      aria-invalid={errors.name ? 'true' : undefined}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <span className="field__error" id="name-error">
                        {errors.name}
                      </span>
                    )}
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
                      required
                      aria-invalid={errors.email ? 'true' : undefined}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <span className="field__error" id="email-error">
                        {errors.email}
                      </span>
                    )}
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
                    required
                    aria-invalid={errors.message ? 'true' : undefined}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <span className="field__error" id="message-error">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button type="submit" className="btn btn--primary btn--block" disabled={busy}>
                  {busy ? (
                    <>
                      <span className="spinner" aria-hidden="true" /> Sending…
                    </>
                  ) : (
                    <>
                      <Icon name="send" size={17} /> Send message
                    </>
                  )}
                </button>

                <p className="formNote">
                  {hasLiveEndpoint
                    ? 'Delivered straight to my inbox. No data is stored on this site.'
                    : 'Opens in your email client. No data is stored on this site.'}
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
