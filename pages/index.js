// pages/index.js
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Head from 'next/head';
import Link from 'next/link';

import iconHome from '@/public/svg/home.svg';
import avatarUser from '@/public/svg/avatar-user.svg';

export default function Home({ data }) {
  const { t } = useTranslation('common');

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
              <h1>Top Questions</h1>
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
                  <div className='s-post-summary'>
                    <div className='s-post-summary--stats'>
                      <div className='s-post-summary--stats-item'>
                        <span className='s-post-summary--stats-item-number'>0</span>
                        <span className='s-post-summary--stats-item-unit'>votes</span>
                      </div>
                      <div className='s-post-summary--stats-item'>
                        <span className='s-post-summary--stats-item-number'>0</span>
                        <span className='s-post-summary--stats-item-unit'>answer</span>
                      </div>
                      <div className='s-post-summary--stats-item'>
                        <span className='s-post-summary--stats-item-number'>0</span>
                        <span className='s-post-summary--stats-item-unit'>views</span>
                      </div>
                    </div>

                    <div className='s-post-summary--content'>
                      <h3 className='s-post-summary--content-title'>
                        <a href="#" className='s-link'>Title lorem ipsum</a>
                      </h3>
                      <div className='s-post-summary--content-meta'>
                        <div className='s-post-summary--content-meta-tags'>
                          <ul>
                            <li className='ml0 list-ls-none js-post-tag-list'>
                              <a className='post-tag flex--item mt0 js-tagname-pandas'>
                                Tag
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className='s-post-summary--content-meta-user'>
                          <a className='avatar'>
                            <Image src={avatarUser} width={16} height={16}></Image>
                          </a>
                          <div className='user-card-info'>
                            <div className='user-card--link'>
                              <a href='/' >Username</a>
                            </div>
                          </div>
                          <div className='user-card--awards'>
                            <li className='user-card--rep'>
                              <span className='todo-no-class-here'>1000</span>
                            </li>
                          </div>
                          <time className='user-card--time'>
                            <a href='rev' className='s-'>
                              "status"
                              <span className='relativetime'>1 min ago</span>
                            </a>
                          </time>
                        </div>
                      </div>
                    </div>

                  </div>
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

