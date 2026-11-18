import { SOCIAL_LINKS, type SocialLink } from '@/lib/links';

// Brand glyphs from simple-icons (CC0), 24x24 viewBox.
const ICON_PATHS: Record<SocialLink['icon'], string> = {
  x: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  substack: 'M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z',
  email: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
};

function externalProps(url: string) {
  return url.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {};
}

function Icon({ icon, className }: { icon: SocialLink['icon']; className: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d={ICON_PATHS[icon]} />
    </svg>
  );
}

export default function SocialLinks({ variant }: { variant: 'strip' | 'footer' }) {
  if (variant === 'footer') {
    return (
      <div className="flex items-center gap-5">
        {SOCIAL_LINKS.map(({ name, icon, url }) => (
          <a
            key={name}
            href={url}
            {...externalProps(url)}
            aria-label={name}
            className="text-[#828282] hover:text-white transition-colors"
          >
            <Icon icon={icon} className="w-5 h-5" />
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-start justify-center gap-6 md:gap-10">
      {SOCIAL_LINKS.map(({ name, icon, url }) => (
        <a
          key={name}
          href={url}
          {...externalProps(url)}
          className="group flex flex-col items-center gap-3"
        >
          <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[#2A2A2A] text-white group-hover:bg-[#00FF87] group-hover:text-[#1E1E1E] transition-colors">
            <Icon icon={icon} className="w-6 h-6" />
          </span>
          <span className="text-sm text-[#828282] group-hover:text-white transition-colors">
            {name}
          </span>
        </a>
      ))}
    </div>
  );
}
