import React from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
  constructor() {
    super();

    this.fontsLink = (
      'https://fonts.googleapis.com/css2?family=Montserrat&family=Source+Sans+Pro:wght@600;700&display=swap'
    );
  }

  render() {
    return (
      <Html>
        <Head lang="en">
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href={this.fontsLink}
            rel="stylesheet"
          />
          <link
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossOrigin="anonymous"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
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
