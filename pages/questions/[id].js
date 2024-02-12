import LeftSidebar from '@/components/LeftSidebar';
import iconHome from '@/public/svg/home.svg';
import Image from 'next/image';

export async function getStaticPaths() {
    // Fetch список идентификаторов ваших вопросов из вашей базы данных или источника данных
    // Например, если у вас есть список идентификаторов, вы можете его получить из вашего API
    const response = await fetch('http://localhost:3000/api/questions'); // Вам нужно создать маршрут для получения списка идентификаторов
    const questions = await response.json();
  
    // Создание массива путей на основе полученных идентификаторов
    const paths = questions.map(question => ({
      params: { id: question._id },
    }));
  
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    try {
        // Отправка GET-запроса к вашему API маршруту
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
            <div className='container'>
                <LeftSidebar/>
                <div className='content'>
                    <div>
                        <div id='question-header' className='d-flex'>
                            <h1 className='ow-break-word mb8 fl1'>
                                <a className='question-hyperlink'>
                                    {question.title}
                                </a>
                            </h1>
                            <div className='ml12'>
                                <a href='#' className='ws-nowrap s-btn s-btn__filled'>
                                    Ask Question
                                </a>
                            </div>
                        </div>
                        <div className='d-flex fw-wrap pb-8 mb16 bb bc-black-200'>
                            <div className='ws-nowrap mr16 mb8'>
                                <span className='fc-black-400 mr2'>Asked</span>
                                <time itemProp='dateCreated' dateTime=''>today?</time>
                            </div>

                            <div className='ws-nowrap mr16 mb8'>
                                <span className='fc-black-400 mr2'>Modified</span>
                                <a className='s-link' itemProp='dateCreated' dateTime=''>today?</a>
                            </div>

                            <div className='ws-nowrap mr16 mb8'>
                                <span className='fc-black-400 mr2'>Viewed</span>
                                "0 times?"
                            </div>
                        </div>
                        <div className='mainbar'>
                            <div className='question'>
                                <div className='post-layout'>
                                    <div className='votecell post-layout--left'></div>
                                    <div className='votecell post-layout--right'>
                                        <div className='s-prose' itemProp=''>
                                            <p>{question.text}</p> 
                                            
                                        </div>
                                        <pre className='lang-py s-code-block'>
                                            <code className='hljs language-python'><span className='hljs-keyword'>try:</span></code>
                                        </pre>
                                        <div className='mt24 mb12'>
                                            <div className='post-taglist d-flex gs4 gsy fd-column'>
                                                <div className='d-flex ps-relative fw-wrap'>
                                                    <ul className='ml0 list-ls-none js-post-tag-list-wrapper d-inline'>
                                                        <li className='d-inline mr4'>
                                                            <a className='post-tag'>Python</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mb0'>
                                            <div className='mt16 d-flex gs8 gsy fw-wrap jc-end ai-start pt4 mb16'>
                                                <div className='mr16 fl1 w96'>
                                                    <div className='pt2'>
                                                        <div className='d-flex gs8 fw-wrap'>
                                                            <div>
                                                                <a>Share</a>
                                                            </div>
                                                            <div>
                                                                <a>Follow</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='post-signature owner'>
                                                    <div className='user-info'>
                                                        <div className='d-flex'>
                                                            <div className='user-action-time fl-grow1'>
                                                                "asked"
                                                                <span className='relativetime'>Yesterday?</span>
                                                            </div>
                                                        </div>
                                                        <div className='user-gravatar32'>
                                                            <a>
                                                                <div className='gravatar-wrapper-32'>
                                                                    <Image src={iconHome} height={32} width={32}></Image>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className='user-details'>
                                                            <a href='#'>Username</a>
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
