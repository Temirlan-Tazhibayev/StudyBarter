import LeftSidebar from '@/components/LeftSidebar';
import iconHome from '@/public/svg/home.svg';
import Image from 'next/image';

import style from '@/styles/components/[id].module.css';

export async function getStaticPaths() {
    const response = await fetch('http://localhost:3000/api/questions'); // Вам нужно создать маршрут для получения списка идентификаторов
    const questions = await response.json();
  
    const paths = questions.map(question => ({
      params: { id: question._id },
    }));
  
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    try {
        const { id } = params;
        const response = await fetch(`http://localhost:3000/api/question?id=${id}`);
        const question = await response.json(); // Преобразование ответа в JSON
        return { props: { question } };
    } catch (error) {
        console.error(error);
        return { props: { question: null } }; // Возвращение пустого объекта в случае ошибки
    }
}
  
export default function Question({ question }) {
    if (!question) {
        return <div>Вопрос не найден</div>;
    }

    return (
        <>
            <div className={style.container}>
                <LeftSidebar/>
                <div className={style.content}>
                    <div>
                        <div id='question-header' className={style.questionHeader}>
                            
                            
                            <h1>
                                <a className={style.questionHyperlink}>
                                    {question.title}
                                </a>
                            </h1>
                            <button href="/questions/ask">
                                Ask Question
                            </button>
                        </div>

                        <div className={style.modeUser}>
                            <div className={style.userInfo}>
                                <div className={style.userAvatar}>
                                    <a>
                                        <div className='gravatar-wrapper-32'>
                                            <Image src={iconHome} height={32} width={32}></Image>
                                        </div>
                                    </a>
                                </div>
                                <div className='user-details'>
                                    <a href='#'>{question.author}</a>
                                </div>
                            </div>
                            <div className={style.statistic}>
                                <div>
                                    <span >Asked </span>
                                    : {question.publish_date}
                                </div>

                                <div>
                                    <span >Modified </span>
                                    : {question.modified_date ? question.modified_date : "no"}
                                </div>

                                <div>
                                    <span >Viewed </span>
                                    : {question.views}
                                </div>
                            </div>
                        </div>
                        <div className='mainbar'>
                            <div className='question'>
                                <div className='post-layout'>
                                    <div className='votecell post-layout--left'></div>
                                    <div className='votecell post-layout--right'>
                                        <div className={style.posttext} itemProp=''>
                                            <p>{question.text}</p> 
                                        </div>
                                         
                                        <div className={style.postdetails}>
                                            <div >
                                                {/* <div> */}
                                                    <ul className={style.postdetailslist}>
                                                    {question.tags.map(tag => (
                                                        <li key={tag}>
                                                            <a className={style.postTag}>{tag}</a>
                                                        </li>
                                                    ))}
                                                    </ul>
                                                {/* </div> */}
                                            </div>
                                        </div>
                                        <div className='mb0'>
                                            <div className='mt16 d-flex gs8 gsy fw-wrap jc-end ai-start pt4 mb16'>
                                                <div className='mr16 fl1 w96'>
                                                    <div className='pt2'>
                                                        <div className='d-flex gs8 fw-wrap'>
                                                            <div>
                                                                <a>Edit</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
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
