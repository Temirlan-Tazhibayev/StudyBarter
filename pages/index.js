import Image from 'next/image';

import Head from 'next/head';
import Link from 'next/link';

import avatarUser from '@/public/svg/avatar-user.svg';

import LeftSidebar from '@/components/LeftSidebar';
import TopQuestions from '@/components/TopQuestions';

export default function Home({ questions }) {

  return (
    <>
      <div className='container'>
        <LeftSidebar/>    

        <div className='content'>
          <TopQuestions questions={questions}/>
          <div className='sideBar'></div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    // Отправка GET-запроса к вашему API маршруту
    const response = await fetch('http://localhost:3000/api/questions');
    const questions = await response.json(); // Преобразование ответа в JSON

    return { props: { questions } };
  } catch (error) {
    console.error(error);
    return { props: { questions: [] } }; // Возвращение пустого массива в случае ошибки
  }
}
