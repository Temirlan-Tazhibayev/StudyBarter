import Image from 'next/image';

import Head from 'next/head';
import Link from 'next/link';

import iconHome from '@/public/svg/home.svg';
import avatarUser from '@/public/svg/avatar-user.svg';



export default function Home({ questions }) {

  return (
    <>
      <div className='container'>
        <div className='leftSidebar'>
          <nav className='navigation'>
            <ol>
              <li>
                <a href='#'>
                  <Image src={iconHome} alt='iconHome' className='iconHome'></Image>
                </a>
              </li>
            </ol>
          </nav>
        </div>
        
        <div className='content'>
          
          <div className='mainBar'>
            <div className='d-flex'>
              <h1>All Questions</h1>
              <button>
                <a href='#' className='no-wrap'>Ask Question</a>
              </button>
            </div>
            
            <div className='d-flex mb16 ai-center'>
              <div className='flex--item'>
                <div className='d-flex js-filter-btn'>
                  <a href='#'>New</a>
                  <a href='#'>Week</a>
                  <a href='#'>Month</a>
                </div>
              </div>
            </div>

            <div id='qlist-wrapper' className='flush-left'>
              <div className='question-mini-list'>
                <div>
                {questions.map(question => (
                  <div key={question._id} className='s-post-summary'>
                    <div className='s-post-summary--stats'>
                      <div className='s-post-summary--stats-item'>
                        <span className='s-post-summary--stats-item-number'>{question.likes}</span>
                        <span className='s-post-summary--stats-item-unit'>votes</span>
                      </div>
                      <div className='s-post-summary--stats-item'>
                        <span className='s-post-summary--stats-item-number'>{question.comments}</span>
                        <span className='s-post-summary--stats-item-unit'>answer</span>
                      </div>
                      <div className='s-post-summary--stats-item'>
                        <span className='s-post-summary--stats-item-number'>{question.views}</span>
                        <span className='s-post-summary--stats-item-unit'>views</span>
                      </div>
                    </div>
                    <div className='s-post-summary--content'>
                      <h3 className='s-post-summary--content-title'>
                        <a href="#" className='s-link'>{question.title}</a>
                      </h3>
                      <div className='s-post-summary--content-meta'>
                        <div className='s-post-summary--content-meta-tags tags'>
                          <ul>
                            {question.tags.map(tag => (
                              <li key={tag} className='ml0 list-ls-none js-post-tag-list'>
                                <a className='post-tag flex--item mt0 js-tagname-pandas'>{tag}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className='s-post-summary--content-meta-user'>
                          <a className='avatar'>
                            <Image src={avatarUser} width={16} height={16}></Image>
                          </a>
                          <div className='user-card--info'>
                            <div className='user-card--link d-flex gs4'>
                              <a href='/' >{question.author}</a>
                            </div>
                            <ul className='user-card--awards'>
                              <li className='user-card--rep'>
                                <span className='todo-no-class-here'>{question.likes}</span>
                              </li>
                            </ul>
                          </div>
                          <time className='user-card--time'>
                            <a href='rev' className='s-link'>{question.status}
                              <span className='relativetime'>1 min ago</span>
                            </a>
                          </time>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>

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
