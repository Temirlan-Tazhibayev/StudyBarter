import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Добавлен импорт useRouter
import { useEffect, useState } from 'react'; // Заменен импорт useState на useEffect
import avatarUser from '@/public/svg/avatar-user.svg';
import LeftSidebar from '@/components/LeftSidebar';
import TopQuestions from '@/components/old/TopQuestions';
import SearchQuestions from '@/components/SearchQuestions';


import Posts from '@/components/Posts';

export default function Search({ questions }) {
  return (
    <>
      <div className='container'>
        <LeftSidebar/>    
        <div className='content'>
          {/* <SearchQuestions questions={questions}/> */}

          <Posts questions={questions}/>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const { query } = context.query;
    const response = await fetch(`http://localhost:3000/api/search?query=${encodeURIComponent(query)}`);
    const questions = await response.json();

    return { props: { questions } };
  // const searchText = query.searchText || '';
  } catch (error) {
    console.log(error)
    return { props: { questions: [] } };
  } 
}



 
// export async function getStaticProps(context) {
//   try {
//     const query = context.params.query; // Получение значения параметра query
//     // Отправка GET-запроса к вашему API маршруту поиска с текстом запроса
//     const response = await fetch(`http://localhost:3000/api/search?query=${encodeURIComponent(query)}`);
//     const initialQuestions = await response.json(); // Преобразование ответа в JSON
//     console.log(initialQuestions);
//     return { props: { initialQuestions } };
//   } catch (error) {
//     console.error(error);
//     return { props: { initialQuestions: [] } }; // Возвращение пустого массива в случае ошибки
//   }
// }