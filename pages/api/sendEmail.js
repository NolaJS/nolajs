import sendEmail from '../../email/sendEmail';
import { contactEmail, projectEmail, messageEmail } from '../../email/templates';

export default async (req, res) => {
  const contactEmailOpts = contactEmail();
  if (req.body.contactType === 'message') {
    const msgOpts = messageEmail();
    await sendEmail(msgOpts);
  } else {
    const msgOpts = projectEmail();
    await sendEmail(msgOpts);
  }
  await sendEmail(contactEmailOpts);
  res.send('Sent');
};
