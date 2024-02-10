
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import '../styles/globals.css';

import '../styles/main.css';

import '../styles/post.css';

import '../styles/navigation.css';

import '../styles/components/tags.css'

// import '../styles/components/header.css'

import '../styles/question.css'

import '../styles/container.css'
import Head from 'next/head';

import {useEffect} from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
     
  }, []);

  return (
    <>
      <Head>
          <title>StudyBarter</title>
      </Head>


      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />

    </>
  );
}


export default MyApp;