
import Document, { Html, Head, NextScript, Main } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage((App) => (props) => 
            sheet.collectStyles(<App {...props} />)
        );
        const stylesTags = sheet.getStyleElement();
        return { ...page, stylesTags};
    }

    render() {
        return (
            <Html lang="en-GB">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
