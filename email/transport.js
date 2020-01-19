import nodemailer from 'nodemailer';
import mg from 'nodemailer-mailgun-transport';

const auth = {
  auth: {
    domain: 'mg.nolajs.com',
  },
};

export default nodemailer.createTransport(mg(auth));
