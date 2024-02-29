import Image from 'next/image';

import Head from 'next/head';
import Link from 'next/link';

import iconHome from '@/public/svg/home.svg';
import avatarUser from '@/public/svg/avatar-user.svg';
import LeftSidebar from '@/components/navigation/LeftSidebar';
import Tags from '@/components/tags/AllTags';


import style from '@/styles/pages/Tags.module.css';

export default function Home({ tags }) {

  return (
    <>
      <div className={style.container}>
        <LeftSidebar/>
        <div className={style.content}>
            <Tags tags={tags}/>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    // Отправка GET-запроса к вашему API маршруту
    const response = await fetch('http://localhost:3000/api/tags');
    const tags = await response.json(); // Преобразование ответа в JSON

    return { props: { tags } };
  } catch (error) {
    console.error(error);
    return { props: { tags: [] } }; // Возвращение пустого массива в случае ошибки
  }
}
