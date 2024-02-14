import { useState, useEffect } from 'react';

import LeftSidebar from '@/components/LeftSidebar';
import Posts from '@/components/Posts';

export default function Questions() {
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(null); // Установите значение по умолчанию для currentPage

  const itemsPerPage = 10; // Количество элементов на странице не изменяется, поэтому не нужно хранить его в состоянии

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');
    const page = parseInt(urlParams.get('page')) || 1; // Парсим строку в целое число


    const fetchData = async () => {
      try {
        let apiUrl = 'http://localhost:3000/api/questions';

        // Добавляем параметры запроса, включая текущую страницу и количество элементов на странице
        const params = {
          tab: tab,
          page: page, // Указываем текущую страницу
          limit: itemsPerPage, // Указываем количество элементов на странице
        };

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
        
        setCurrentPage(params.page);
        setQuestions(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [questions, currentPage]); // Добавляем currentPage в зависимости, чтобы запрос обновлялся при изменении страницы

  return (
    <>
      <div className='container'>
        <LeftSidebar/>
        <div className='content'>
          <Posts questions={questions} page={currentPage}/>
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
