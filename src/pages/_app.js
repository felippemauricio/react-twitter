import App, { Container } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';


const Theme = {
  colors: {
    primary: '#0070f3'
  }
};


class CustomNextApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }

  render () {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={Theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}

export default CustomNextApp;
