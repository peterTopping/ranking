import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, url: router.asPath };
  }

  render() {
    const { Component, pageProps, url, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} url={url} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(initStore)(MyApp);
