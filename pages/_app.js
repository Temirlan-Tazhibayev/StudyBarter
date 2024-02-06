import { appWithTranslation } from 'next-i18next';

import Header from '../components/Header';
import Footer from '@/components/Footer';
import '../styles/globals.css';
import '../styles/global2.css';
import '../styles/main.css';


import Head from 'next/head';
function MyApp({ Component, pageProps }) {
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


// export const getServerSideProps = async ({ locale }) => ({
//   props: {
//       ...(await serverSideTranslations(locale, ['common']))
//   }
// });


export default appWithTranslation(MyApp);