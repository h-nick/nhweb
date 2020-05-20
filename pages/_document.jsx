import React from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head lang="en">
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato&family=Source+Sans+Pro:wght@700&display=swap"
            rel="stylesheet"
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
