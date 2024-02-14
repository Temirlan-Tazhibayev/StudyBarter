import { useState, useEffect } from 'react';


import LeftSidebar from '@/components/LeftSidebar';
import Posts from '@/components/Posts';

export default function Questions({data}) {
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');
    const page = parseInt(urlParams.get('page')) || 1;

    setCurrentPage(page);
    const fetchData = async () => {
      try {
        let apiUrl = 'http://localhost:3000/api/questions';

        const params = {
          tab: tab,
          page: page,
          limit: itemsPerPage,
        };

        const queryString = new URLSearchParams(params).toString();
        if (queryString) {
          apiUrl += `?${queryString}`;
        }

        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
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
