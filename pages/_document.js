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
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff"></meta>
          <style
            dangerouslySetInnerHTML={{
              __html: `
              @font-face {
                font-family: 'Josefin Sans';
                src: url('/fonts/Josefin_Sans/JosefinSans-Regular.ttf');
              }
              @font-face {
                font-family: 'Josefin Slab';
                src: url('/fonts/Josefin_Slab/JosefinSlab-Regular.ttf');
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
              h1, h2, h3, h4, h5, h6 {
                font-family: 'Josefin Slab', serif;
              }
              h2 {
                font-size: 48px;
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
