/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.scss';
import { useState } from 'react';
import Layout from '../components/layout';

export default function App({ Component, pageProps }) {
  const [count, setCount] = useState(0);

  return (
    <Layout toggleDarkmode={toggleDarkmode} isDark={isDark}>
      <Component {...pageProps} />
    </Layout>
  );
}
