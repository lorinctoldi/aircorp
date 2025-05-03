import { FooterItem, FooterProps } from 'types';

const nav: FooterItem[][] = [
  [{ title: 'AIRMADE™ Technology' }, { title: 'AIRMADE®️ SAF' }],
  [{ title: 'Terms of Use' }, { title: 'Privacy Policy' }],
  [{ title: 'About' }, { title: 'Careers' }, { title: 'Press' }],
];

const socials: FooterItem[] = [
  { title: 'Linkedin' },
  { title: 'Twitter' },
  { title: 'Instagram' },
  { title: 'Business Inquiries' },
];

const labels = {
  connect: 'Connect',
  newsletter: 'Newsletter',
  signup: 'Sign Up',
  placeholder: 'Email Address',
  copyright: '© AIRCORP INC, 2025',
};

export const footerProps: FooterProps = {
  nav: nav,
  socials: socials,
  labels: labels,
};
