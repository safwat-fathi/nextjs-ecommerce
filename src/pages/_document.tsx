import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render = () => {
    const { locale } = this.props.__NEXT_DATA__;

    return (
      <Html lang={locale}>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="shortcut icon"
            href="/favicon/favicon.ico"
            type="image/x-icon"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <div id="portal" />
      </Html>
    );
  };
}

export default MyDocument;
