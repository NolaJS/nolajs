import getLayout from './getLayout';

const from = 'noreply@nolajs.com';
const admins = ['sscaff1@gmail.com', 'deruss818@hotmail.com'];

export const contactEmail = to => ({
  bcc: admins,
  from,
  html: getLayout({
    content: `<p>We will respond to inquiry shortly. Thank you again for your interest.</p>`,
    title: 'NolaJs - Thank you',
  }),
  subject: 'Thank you for contacting NolaJS',
  to,
});

export const messageEmail = () => ({
  from,
  html: getLayout({ content: 'You have a new contact', title: 'NolaJS - New Contact' }),
  subject: 'NolaJS - New Project Email',
  to: admins,
});

export const projectEmail = () => ({
  from,
  html: getLayout({ content: 'You have a new project request', title: 'NolaJS - New Project' }),
  subject: 'NolaJS - New Project Email',
  to: admins,
});
