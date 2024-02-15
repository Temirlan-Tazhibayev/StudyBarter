import Image from 'next/image';


import iconHome from '@/public/svg/home.svg';
import iconQuestions from '@/public/svg/questions.svg';
import iconTags from '@/public/svg/tags.svg';

import style from '@/styles/components/navigation/LeftSidebar.module.css';

export default function LeftSidebar() {
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
                </ol>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </> 
  )
}