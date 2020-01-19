/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { ThemeProvider } from 'react-jss';
import { pageview } from '../lib/gtag';

import theme from '../themes/default';
import Layout from '../components/Layout';

config.autoAddCss = false;

Router.events.on('routeChangeComplete', url => pageview(url));

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //   return { ...appProps };
  // }

  componentDidMount() {
    const style = document.getElementById('server-side-styles');
    const jssStyles = document.querySelector('#jss-server-side');
    if (style) {
      style.parentNode.removeChild(style);
    }
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}

export default MyApp;
