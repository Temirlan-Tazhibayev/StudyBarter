import { useState, useEffect } from 'react';
import LeftSidebar from '@/components/LeftSidebar';
import TopPosts from '@/components/TopPosts';

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
      <div className='container'>
        <LeftSidebar />
        <div className='content'>
          <TopPosts questions={questions} />
          <div className='sideBar'>
            <div className='sidebar-elements'>
              <div className='sidebarWidgets_tags'>
                <div className='sidebarWidgets_tags_header'>
                  <h2>Current Tags</h2>
                </div>
                <div className='sidebarWidgets_tags_content'>
                  <div className='sidebartags_ss'>
                    <ul className='currenttags'>
                    {(() => {
                      const uniqueTags = new Set();
                      questions.forEach(question => {
                        question.tags.forEach(tag => {
                          uniqueTags.add(tag);
                        });
                      });

                      return Array.from(uniqueTags).map(tag => (
                        <li key={tag}>
                          <a className="postTag">{tag}</a>
                        </li>
                      ));
                    })()}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
