import { profile } from '../data/content';
import Icon from './Icons';

const CHANNELS = [
  { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: 'phone', label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/[^\d+]/g, '')}` },
  { icon: 'pin', label: 'Location', value: profile.location },
  { icon: 'users', label: 'Availability', value: profile.availability },
];

export default function ContactChannels() {
  return (
    <ul className="channels">
      {CHANNELS.map((item) => (
        <li className="channel" key={item.label}>
          <span className="channel__icon">
            <Icon name={item.icon} size={18} />
          </span>
          <div>
            <small>{item.label}</small>
            {item.href ? <a href={item.href}>{item.value}</a> : <span>{item.value}</span>}
          </div>
        </li>
      ))}
    </ul>
  );
}
