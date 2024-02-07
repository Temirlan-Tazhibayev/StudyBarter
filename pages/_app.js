
import Header from '../components/Header';
import Footer from '@/components/Footer';
import '../styles/globals.css';
import '../styles/global2.css';
import '../styles/main.css';
import '../styles/post.css';


import '../styles/question.css'

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
      {/* <Footer /> */}

    </>
  );
}


// export const getServerSideProps = async ({ locale }) => ({
//   props: {
//       ...(await serverSideTranslations(locale, ['common']))
//   }
// });


export default MyApp;