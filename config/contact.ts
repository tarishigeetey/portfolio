export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  email = 'email',
}

export interface Contact {
  twitter: string;
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: '@tarishigeetey',
  site: 'https://tarishigeetey.vercel.app',
  calendly: 'https://calendly.com/tarishi-geetey',
  links: {
    github: 'https://github.com/tarishigeetey',
    linkedin: 'https://linkedin.com/in/tarishigeetey',
    twitter: 'https://twitter.com/tarishigeetey',
    email: 'mailto:tarishi.geetey@gmail.com',
  },
};
