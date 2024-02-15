// pages/questions/edit/[id].js

import LeftSidebar from '@/components/navigation/LeftSidebar'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import iconHome from '@/public/svg/home.svg';
import Image from 'next/image';

import style from '@/styles/components/[id].module.css';

const EditQuestionPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [question, setQuestion] = useState(null);
  const [formData, setFormData] = useState({ title: '', text: '' });

  useEffect(() => {
    // Функция для получения данных о вопросе по его id
    const fetchQuestion = async () => {
      try {
        const response = await fetch(`/api/question?id=${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch question');
        }
        const data = await response.json();
        setQuestion(data);
        setFormData({ title: data.title, text: data.text });
      } catch (error) {
        console.error('Error fetching question:', error);
      }
    };

    if (id) {
      fetchQuestion();
    }
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/question/3_update?id=${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Failed to update question');
      }
      // Если обновление успешно, перенаправляем пользователя на страницу с вопросом
      router.push(`/questions/${id}`);
    } catch (error) {
      console.error('Error updating question:', error);
    }
  };

  if (!question) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className={style.container}>
        <LeftSidebar/>
        <div className={style.content}>
            <div id='question-header' className={style.questionHeader}>
              <h1 className={style.headerInput}>
                  <input
                    className={style.headerInput}
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    
                  />
              </h1>
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
                      <input
                        className={style.textInput}
                        type="text"
                        name="text"
                        value={formData.text}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={style.postdetails}>
                      {question.tags && question.tags.length > 0 && (
                        <ul className={style.postdetailslist}>
                          {question.tags.map(tag => (
                            <li key={tag}>
                              <a className={style.postTag}>{tag}</a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className='mb0'>
                      <div className='mt16 d-flex gs8 gsy fw-wrap jc-end ai-start pt4 mb16'>
                        <div className='mr16 fl1 w96'>
                          <div className='pt2'>
                            <div className='d-flex gs8 fw-wrap'>
                              <button type="submit" onClick={handleSubmit}>Apply Changes</button>
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
};

export default EditQuestionPage;
