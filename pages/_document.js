/* eslint-disable react/jsx-props-no-spreading */
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { SheetsRegistry, JssProvider, createGenerateId } from 'react-jss';
import { ServerStyleSheets } from '@material-ui/core/styles';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheets = new ServerStyleSheets();
    const registry = new SheetsRegistry();
    const generateId = createGenerateId();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props =>
          sheets.collect(
            <JssProvider registry={registry} generateId={generateId}>
              <App {...props} />
            </JssProvider>,
          ),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            id="server-side-styles"
            dangerouslySetInnerHTML={{ __html: registry.toString() }}
          />
          {sheets.getStyleElement()}
        </>
      ),
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
          <meta name="title" content="Simple, Flexible Website and App Development" />
          <meta property="og:site_name" content="nolajs.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Simple, Flexible Website and App Development" />
          <meta
            name="description"
            content="Based out of New Orleans, NolaJS provides highly customized web and mobile solutions."
          />
          <meta
            name="keywords"
            content="website design,website hosting,react,mobile app development,website development,new orleans websites,affordable website"
          />
          <meta name="author" content="Steven Scaffidi, Christie DeRussy" />
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="last-modified" content="2019-01-26@08:01:00 GMT" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <style
            dangerouslySetInnerHTML={{
              __html: `
              @font-face {
                font-family: 'Josefin Sans';
                src: url('/fonts/Josefin_Sans/JosefinSans-Regular.ttf');
                font-display: swap;
                font-style: normal;
              }
              @font-face {
                font-family: 'Josefin Slab';
                src: url('/fonts/Josefin_Slab/JosefinSlab-Regular.ttf');
                font-display: swap;
                font-style: normal;
              }
              html {
                -webkit-text-size-adjust: none;
                box-sizing: border-box;
                height: 100%;
                overflow: hidden;
              }
              *,
              *:before,
              *:after {
                box-sizing: inherit;
              }
              body {
                -webkit-overflow-scrolling: touch;
                padding: 0;
                margin: 0;                    
                background: #fff;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                overflow: scroll;
                scroll-behavior: smooth;
                font-family: 'Josefin Sans', serif;
              }
              a {
                text-decoration: none;
                color: inherit;
              }
              .ReactModal__Overlay {
                opacity: 0;
                transition: opacity 500ms ease-in-out;
              }
              .ReactModal__Overlay--after-open{
                opacity: 1;
              }
              .ReactModal__Overlay--before-close{
                opacity: 0;
              }
            `,
            }}
          />
          {this.props.styles}
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-37156842-3" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-37156842-3');
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
