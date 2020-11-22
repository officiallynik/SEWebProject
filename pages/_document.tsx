import { Title } from "@material-ui/icons";
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    const main = <Main />;
    return (
      <Html>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)};
                gtag('js', new Date());
              `
            }}
          />
          <link rel="icon" type="image/png" href="/static/favicon.ico" />
        </Head>
        <body>
          <div className="root">{main}</div>
          <NextScript />
        </body>
      </Html>
    );
  }
};