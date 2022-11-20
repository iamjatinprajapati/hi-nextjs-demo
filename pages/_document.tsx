/**A custom Document can update the <html> and <body> tags used to render a page. This file is only rendered on the server, so event handlers like
 * onClick cannot be used in _document.
 */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

class DEMODocument extends Document {
  static async getInitialProps(
    context: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(context);
    return initialProps;
  }

  render() {
    return (
      <Html className="h-full bg-white">
        <Head>
          <link
            href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="h-full antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DEMODocument;
