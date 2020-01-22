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

export const messageEmail = ({ email, message, name }) => {
  const content = `
  <tr>
    <td class="content-block">
      Name: ${name}
    </td>
  </tr>
  <tr>
    <td class="content-block">
      Email: ${email}
    </td>
  </tr>
  <tr>
    <td class="content-block">
      Message: ${message}
    </td>
  </tr>
  `;
  return {
    from,
    html: getLayout({ content, title: 'NolaJS - New Contact' }),
    subject: 'NolaJS - New Contact from Website',
    to: admins,
  };
};

export const projectEmail = ({
  about,
  businessAbout,
  businessName,
  businessUrl,
  email,
  hearAbout,
  name,
  phone,
  projectBudget,
  projectDetails,
  services,
}) => {
  const content = `
  <tr>
    <td class="content-block">
      Name: ${name}
    </td>
  </tr>
  <tr>
    <td class="content-block">
      Email: ${email}
    </td>
  </tr>
  <tr>
    <td class="content-block">
      Phone: ${phone}
    </td>
  </tr>
  <tr>
    <td class="content-block">
      About: ${about}
    </td>
  </tr>
  <tr>
    <td class="content-block">
      Services Needed: ${services}
    </td>
  </tr>
  <tr>
    <td class="content-block">
      Project Budget: ${projectBudget}
    </td>
  </tr>
  <tr>
    <td class="content-block">
      Project Details: ${projectDetails}
    </td>
  </tr>
  <tr>
    <td class="content-block">
      Business Name: ${businessName}
    </td>
  </tr>
  <tr>
    <td class="content-block">
      Business Website: ${businessUrl}
    </td>
  </tr>
  <tr>
    <td class="content-block">
      Business About: ${businessAbout}
    </td>
  </tr>
  <tr>
    <td class="content-block">
      Hear about NolaJS: ${hearAbout}
    </td>
  </tr>
  `;
  return {
    from,
    html: getLayout({ content, title: 'NolaJS - New Project' }),
    subject: 'NolaJS - New Project from Website',
    to: admins,
  };
};
