import Image from 'next/image';

import Head from 'next/head';
import Link from 'next/link';

import iconHome from '@/public/svg/home.svg';
import avatarUser from '@/public/svg/avatar-user.svg';
import LeftSidebar from '@/components/LeftSidebar';
import Tags from '@/components/Tags';



export default function Synonyms() {

  return (
    <>
      <div className='container'>
        <LeftSidebar/>
        <div className='content'>
        </div>
      </div>
    </>
  );
}

// export async function getStaticProps() {
// //   try {
// //   } catch (error) {
// //     console.error(error);
// //     return { props: { questions: [] } }; // Возвращение пустого массива в случае ошибки
// //   }
// }


