import nodemailer from 'nodemailer';
import mg from 'nodemailer-mailgun-transport';

const auth = {
  auth: {
    api_key: 'f48a5bfe1c56b45b23388295b9c3df37-3939b93a-9b322e60',
    domain: 'mg.nolajs.com',
  },
};

export default nodemailer.createTransport(mg(auth));
