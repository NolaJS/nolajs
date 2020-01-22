const withCSS = require('@zeit/next-css');
require('dotenv').config();

module.exports = withCSS({
  env: { MG_API_KEY: process.env.MG_API_KEY },
});
