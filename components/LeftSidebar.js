import Image from 'next/image';


import iconHome from '@/public/svg/home.svg';
import iconQuestions from '@/public/svg/questions.svg';
import iconTags from '@/public/svg/tags.svg';

export default function LeftSidebar() {
  return (
    <>
      <div className='left-sidebar'>
        <div className='left-sidebar--sticky-container'>
          <nav role='navigation'>
            <ol className='nav-links'>
              <li>
                <ol className='nav-links'>
                  <li className='ps-relative'>
                    <a href='/' className='pl8'>
                      <div className='d-flex ai-center'>
                        <Image src={iconHome} alt='iconHome' className='iconHome'></Image>
                        <span>Home</span>
                      </div>
                    </a>
                  </li>

                  <li className='ps-relative'>
                    <a href='/questions' className='pl8'>
                      <div className='d-flex ai-center'>
                        <Image src={iconQuestions} alt='iconQuestions' className='iconQuestions'></Image>
                        <span>Questions</span>
                      </div>
                    </a>
                  </li>

                  <li className='ps-relative'>
                    <a href='/tags' className='pl8'>
                      <div className='d-flex ai-center'>
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