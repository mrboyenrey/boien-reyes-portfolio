// Lightweight inline SVG icon set — no icon library dependency.
// Usage: <Icon name="rocket" size={20} />

const paths = {
  code: (
    <>
      <path d="M8 6 2 12l6 6" />
      <path d="m16 6 6 6-6 6" />
      <path d="M14 4 10 20" />
    </>
  ),
  server: (
    <>
      <rect x="2" y="3" width="20" height="7" rx="2" />
      <rect x="2" y="14" width="20" height="7" rx="2" />
      <path d="M6 6.5h.01M6 17.5h.01" />
    </>
  ),
  pipeline: (
    <>
      <circle cx="5" cy="6" r="2.5" />
      <circle cx="19" cy="18" r="2.5" />
      <path d="M7.5 6h6a3.5 3.5 0 0 1 3.5 3.5v6" />
      <path d="M5 8.5V14a3.5 3.5 0 0 0 3.5 3.5H16" />
    </>
  ),
  rocket: (
    <>
      <path d="M12 2c3 1.5 5 5 5 9l-2.5 2.5H9.5L7 11c0-4 2-7.5 5-9Z" />
      <path d="M9.5 13.5 8 20l3-1.5 3 1.5-1.5-6.5" />
      <circle cx="12" cy="9" r="1.6" />
    </>
  ),
  cloud: (
    <>
      <path d="M6.5 19a4.5 4.5 0 0 1-.5-8.97A6 6 0 0 1 17.7 9.2 4.4 4.4 0 0 1 17.65 19H6.5Z" />
    </>
  ),
  git: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="12" r="2.5" />
      <path d="M6 8.5v7" />
      <path d="M8.5 6H14a4 4 0 0 1 .5 7.97" />
      <path d="M15.5 16.5A5 5 0 0 1 8.55 17.6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v6c0 4.2 2.9 7.6 7 9 4.1-1.4 7-4.8 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  package: (
    <>
      <path d="M21 8v8l-9 5-9-5V8l9-5 9 5Z" />
      <path d="m3 8 9 5 9-5" />
      <path d="M12 13v8" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12.5 2.5 2.5L16 9.5" />
    </>
  ),
  activity: (
    <>
      <path d="M3 12h4l2.5-7 4 14L16.5 12H21" />
    </>
  ),
  terminal: (
    <>
      <rect x="2.5" y="4" width="19" height="16" rx="2.5" />
      <path d="m7 10 2.5 2.5L7 15" />
      <path d="M12.5 15H17" />
    </>
  ),
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  phone: (
    <>
      <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5L16 12l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  github: (
    <>
      <path d="M9 19c-4.5 1.3-4.5-2.3-6.3-2.8M15 21v-3.4a3 3 0 0 0-.9-2.3c3-.3 5.9-1.5 5.9-6.6a4.7 4.7 0 0 0-1.3-3.2 4.4 4.4 0 0 0-.1-3.3s-1.4-.4-4.3 1.6a10.6 10.6 0 0 0-5.6 0C5.8 1.8 4.4 2.2 4.4 2.2a4.4 4.4 0 0 0-.1 3.3A4.7 4.7 0 0 0 3 8.7c0 5.1 2.9 6.3 5.9 6.6a3 3 0 0 0-.9 2.3V21" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10.5V17M7.5 7.6v.01M11.5 17v-3.6a2.2 2.2 0 0 1 4.4 0V17" />
    </>
  ),
  external: (
    <>
      <path d="M14 4h6v6" />
      <path d="M20 4 11 13" />
      <path d="M18 14v4.5A2.5 2.5 0 0 1 15.5 21h-9A2.5 2.5 0 0 1 4 18.5v-9A2.5 2.5 0 0 1 6.5 7H11" />
    </>
  ),
  arrow: (
    <>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12" />
      <path d="m7 11 5 5 5-5" />
      <path d="M4 20h16" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8" />
    </>
  ),
  moon: (
    <>
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12M18 6 6 18" />
    </>
  ),
  send: (
    <>
      <path d="M21 3 3 10.5l6.5 2.5L12 21l9-18Z" />
      <path d="M9.5 13 21 3" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16.5 5.5a3 3 0 0 1 0 5.6M18 20a5.7 5.7 0 0 0-2.2-4.5" />
    </>
  ),
  gauge: (
    <>
      <path d="M4.5 19a9 9 0 1 1 15 0" />
      <path d="m12 13 4-3.5" />
      <circle cx="12" cy="14" r="1.5" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7.5" ry="3.2" />
      <path d="M4.5 6v12c0 1.8 3.4 3.2 7.5 3.2s7.5-1.4 7.5-3.2V6" />
      <path d="M4.5 12c0 1.8 3.4 3.2 7.5 3.2s7.5-1.4 7.5-3.2" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m4.2 12.5 7.8 4.4 7.8-4.4" />
      <path d="m4.2 16.8 7.8 4.4 7.8-4.4" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.2 12h17.6" />
      <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
    </>
  ),
};

export default function Icon({ name, size = 24, className = '', ...rest }) {
  const shape = paths[name] ?? paths.code;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {shape}
    </svg>
  );
}
