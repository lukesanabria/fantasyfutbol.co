export const APP_STORE_URL = 'https://apps.apple.com/app/id6755744058';

export const SUBSTACK_URL = 'https://fantasyfutbol.substack.com';
export const SUBSTACK_FEED_URL = `${SUBSTACK_URL}/feed`;
// Prefills the email from ?email= so the reader only has to confirm.
export const SUBSTACK_SUBSCRIBE_URL = `${SUBSTACK_URL}/subscribe`;

export const CONTACT_EMAIL = 'hello@fantasyfutbol.co';

export const DEMO_VIDEO_ID = 'qCZZ5tfWxl0';
export const DEMO_VIDEO_EMBED_URL = `https://www.youtube.com/embed/${DEMO_VIDEO_ID}`;
// oar2.jpg is the vertical (9:16) thumbnail YouTube generates for Shorts.
export const DEMO_VIDEO_THUMBNAIL_URL = `https://i.ytimg.com/vi/${DEMO_VIDEO_ID}/oar2.jpg`;

export interface SocialLink {
  name: string;
  icon: 'x' | 'substack' | 'email';
  url: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'X', icon: 'x', url: 'https://x.com/fantfutbol' },
  { name: 'Substack', icon: 'substack', url: 'https://substack.com/@fantasyfutbol' },
  { name: 'Email', icon: 'email', url: `mailto:${CONTACT_EMAIL}` },
];
