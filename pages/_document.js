import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Ubuntu+Mono&display=swap"
            rel="stylesheet"
          />
          <style>{`
            html {
              -webkit-text-size-adjust: none;
              box-sizing: border-box;
              font-size: 10px;
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
              font-family: 'Lato', sans-serif;
            }
            h1, h2, h3, h4, h5, h6 {
              font-family: 'Ubuntu Mono', monospace;
            }
            a {
              text-decoration: none;
              color: inherit;
            }
          `}</style>
          <script src="https://kit.fontawesome.com/b6f1b990eb.js"></script>
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
