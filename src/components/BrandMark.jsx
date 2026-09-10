import { useState } from 'react';
import { profile } from '../data/content';

// Shared "BR" brand mark used by the navbar and the footer.
// Shows the profile photo when one is configured, and falls back to the
// initials badge if no photo is set (or the image fails to load).
export default function BrandMark() {
  const [failed, setFailed] = useState(false);
  const photo = profile.photo ? `${import.meta.env.BASE_URL}${profile.photo}` : null;
  const showPhoto = Boolean(photo) && !failed;

  return (
    <span className={`nav__mark ${showPhoto ? 'nav__mark--photo' : ''}`} aria-hidden="true">
      {showPhoto ? (
        <img src={photo} alt="" loading="eager" onError={() => setFailed(true)} />
      ) : (
        profile.initials
      )}
    </span>
  );
}
