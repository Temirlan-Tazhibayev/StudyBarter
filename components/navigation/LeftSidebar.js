import Image from 'next/image';


import iconHome from '@/public/svg/home.svg';
import iconQuestions from '@/public/svg/questions.svg';
import iconTags from '@/public/svg/tags.svg';
import profile from '@/public/svg/profile-user-svgrepo-com.svg';
import { useEffect, useState } from 'react';
import style from '@/styles/components/navigation/LeftSidebar.module.css';

import {jwtDecode} from 'jwt-decode';
export default function LeftSidebar() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUser(decodedToken);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);
  return (
    <>
      <div className={style.index}>
        <div className={style.stickyContainer}>
          <nav role='navigation'>
            <ol className={style.navLinks}>
              <li>
                <ol className={style.navLinks}>
                  <li className={style.navElement}>
                    <a href='/' className={style.navElementCon}>
                      {/* <div className={style.navElementCon}> */}
                        <Image src={iconHome} alt='iconHome' className='iconHome'></Image>
                        <span>Home</span>
                      {/* </div> */}
                    </a>
                  </li>

                  <li className={style.navElement}>
                    <a href='/questions'>
                      <div className={style.navElementCon}>
                        <Image src={iconQuestions} alt='iconQuestions' className='iconQuestions'></Image>
                        <span>Questions</span>
                      </div>
                    </a>
                  </li>

                  <li className={style.navElement}>
                    <a href='/tags'>
                      <div className={style.navElementCon}>
                        <Image src={iconTags} alt='iconTags' className='iconTags'></Image>
                        <span>Tags</span>
                      </div>
                    </a>
                  </li>
                  {user ? (
                  <>          
                    <li className={style.navElement}>
                      <a href='/users/user'>
                        <div className={style.navElementCon}>
                          <Image src={profile} width={18} height={18}></Image>
                          <span>Profile</span>
                        </div>
                      </a>
                    </li>
                  </>
                  ) : (
                  <>

                  </>
                  )}
                </ol>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </> 
  )
}