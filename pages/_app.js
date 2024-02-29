import '@/styles/globals.css';

import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';

import '../styles/components/tags/tags.css';

import Head from 'next/head';

import FAQAssistant from '@/components/vidget/chatbot';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
          <title>StudyBarter</title>
      </Head>


      <Header />
      <main>
        <Component {...pageProps} />
        
      </main>

      <FAQAssistant/>
      <Footer />

    </>
  );
}