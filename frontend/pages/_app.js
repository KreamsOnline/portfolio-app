import Nprogress from 'nprogress'
import Page from '../components/Page'
import Router from 'next/dist/next-server/lib/router/router';
import { ApolloProvider } from '@apollo/client';
import withData from '../lib/withData';

import '../components/styles/nprogress.css'

Router.events.on('routeChangeStart', () => Nprogress.start());
Router.events.on('routeChangeComplete', () => Nprogress.done());
Router.events.on('routeChangeError', () => Nprogress.start());

function MyApp({Component, pageProps, apollo}) {
    
    return (
        <ApolloProvider client={apollo}>
            <Page>
                <Component {...pageProps} />
            </Page>
        </ApolloProvider>
    )
}

MyApp.getInitialProps = async function({ Component, ctx }) {
    let pageProps = {};
    if(Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps }
}

export default withData(MyApp);
