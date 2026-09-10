export default function SectionHeading({ eyebrow, title, lead, align = 'left' }) {
  return (
    <header className={`secHead secHead--${align}`}>
      {eyebrow && (
        <span className="secHead__eyebrow">
          <span className="secHead__bar" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className="secHead__title">{title}</h2>
      {lead && <p className="secHead__lead">{lead}</p>}
    </header>
  );
}
