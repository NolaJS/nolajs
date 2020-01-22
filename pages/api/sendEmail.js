import sendEmail from '../../email/sendEmail';
import { contactEmail, projectEmail, messageEmail } from '../../email/templates';

export default async (req, res) => {
  const {
    about,
    businessAbout,
    businessName,
    businessUrl,
    contactType,
    email,
    hearAbout,
    message,
    name,
    phone,
    projectBudget,
    projectDetails,
    services,
  } = req.body;
  const contactEmailOpts = contactEmail(email);
  if (contactType === 'message') {
    const msgOpts = messageEmail({ email, message, name });
    await sendEmail(msgOpts);
  } else {
    const msgOpts = projectEmail({
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
    });
    await sendEmail(msgOpts);
  }
  await sendEmail(contactEmailOpts);
  res.send('Sent');
};
