import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


export default function PrivacyPolicy({ data }) {
    const { t } = useTranslation('legal/privacypolicy');
  
    return (
      <>
        <div>
          
          <div>
            {t('title')}
          </div>
        </div>
      </>
    );
  }


  export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, [
          'common',
          'header',
          'footer',
          'legal/cookiepolicy',
          'legal/privacypolicy'
        ])),
        // Will be passed to the page component as props
      },
    }
  }