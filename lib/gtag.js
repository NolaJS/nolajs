export const GA_TRACKING_ID = 'UA-37156842-3';

export const pageview = url => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};
