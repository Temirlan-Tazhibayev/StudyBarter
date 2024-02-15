import { useState, useEffect } from 'react';
import LeftSidebar from '@/components/navigation/LeftSidebar';
import TopPosts from '@/components/posts/TopPosts';
import { PostsRightbar } from '@/components/navigation/PostsRightbar';

import style from '@/styles/pages/posts.module.css';
export default function Home() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');

    const fetchData = async () => {
      try {
        let apiUrl = 'http://localhost:3000/api/questions';

        // Добавляем параметры запроса, если они заданы
        const params = {};
        if (tab) {
          params.tab = tab;
        }
        // Устанавливаем лимит на количество вопросов
        params.limit = 10;

        // Формируем строку запроса на основе параметров
        const queryString = new URLSearchParams(params).toString();
        if (queryString) {
          apiUrl += `?${queryString}`;
        }

        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Другие заголовки...
          },
          // Другие параметры запроса, если необходимо
          // body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={style.container}>
        <LeftSidebar/>
          <div className={style.content}>
          <TopPosts questions={questions} />
          <PostsRightbar questions={questions}/>
        </div>
      </div>
    </>
  );
}
