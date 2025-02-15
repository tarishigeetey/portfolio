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
  site: 'tarishigeetey.com',
  calendly: 'https://calendly.com/tarishigeetey',
  links: {
    github: 'https://github.com/tarishigeetey',
    linkedin: 'https://linkedin.com/in/tarishigeetey',
    twitter: 'https://twitter.com/tarishigeetey',
    email: 'mailto:tarishi.geetey@gmail.com',
  },
};
