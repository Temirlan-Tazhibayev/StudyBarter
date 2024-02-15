import Image from 'next/image';
import avatarUser from '@/public/svg/avatar-user.svg';
import iconFilter from '@/public/svg/filter.svg';

import style from '@/styles/components/posts/aposts.module.css'
import { useState, useEffect } from 'react';

import AComponent from '../a/a';
import { useRouter } from 'next/router';

export default function Posts({ questions, page}) {
    const [showForm, setShowForm] = useState(false);
    const router = useRouter();
      
    const toggleForm = () => {
        setShowForm(!showForm);
    };

    
    const nextPage = () => {
        const { query, tab } = router.query;
        const itemsPerPage = 10;
        let params = {
          limit: itemsPerPage,
          page: page + 1,
        };
          
        switch (true) {
          case tab !== undefined:
            params["tab"] = tab;
            break
          case query !== undefined:
            params["query"] = query
            break  
        }
        const queryString = new URLSearchParams(params).toString();
        
        router.push(`/questions?${queryString}`);
    };
      
    const prevPage = () => {
        const { query, tab } = router.query;

        const itemsPerPage = 10;
        let params = {
          limit: itemsPerPage,
          page: page - 1,
        };
          
        switch (true) {
          case tab !== undefined:
            params["tab"] = tab;
            break
        
          case query !== undefined:
            params["query"] = query
            break  
          
        }
      
        const queryString = new URLSearchParams(params).toString();
        
        router.push(`/questions?${queryString}`);
        
    };


    const handleTabChange = (tab) => {
        const { query, page } = router.query;
        let params = {
            page: page, 
        }; 
        switch (true) {
            case tab !== undefined:
                params["tab"] = tab;
                break
            case page !== undefined:
                params["page"] = page;
                break
            case query !== undefined:
                params["query"] = query
                break    
            default:
                params["page"] = 1;
        }
        const queryString = new URLSearchParams(params).toString();
        
        router.push(`/questions?${queryString}`);
    };
    return (
        <>
            <div className={style.mainBar}>
                <div className={style.headline}>
                    <h1>All Questions</h1>                    
                    <a href='http://localhost:3000/questions/ask' className={style.ask_question}>Ask Question</a>
                </div>

                <div className={style.class_filter}>
                    <span className={style.count}>0 questions</span>
                    <div>
                        <div className={style.tab_buttons}>
                            <a onClick={() => handleTabChange('new')} className={style.tab_button_left}>New</a>
                            <a onClick={() => handleTabChange('week')} className={style.tab_button_center}>Week</a>
                            <a onClick={() => handleTabChange('month')} className={style.tab_button_right}>Month</a>
                        </div>
                    </div>
                    <div>
                        <button className={style.filter_button} onClick={toggleForm}>
                            <Image src={iconFilter} width={16} height={16}/>
                            <span>Filter</span>
                        </button>
                    </div>
                </div>
                {showForm && (
                    <AComponent/>
                )}
                
                <div className={style.flushLeft}>
                    <div className={style.questionMiniList}>
                        {questions.map(question => (
                            <div key={question._id} className={style.postSummary}>
                                <div className={style.postSummaryStats}>
                                    <div className={style.postSummaryStatsItem}>
                                        <span className={style.postSummaryStatsItemNumber}>{question.likes}</span>
                                        <span>votes</span>
                                    </div>
                                    <div className={style.postSummaryStatsItem}>
                                        <span className={style.postSummaryStatsItemNumber}>{question.answers}</span>
                                        <span>answer</span>
                                    </div>
                                    <div className={style.postSummaryStatsItem}>
                                        <span className={style.postSummaryStatsItemNumber}>{question.views}</span>
                                        <span>views</span>
                                    </div>
                                </div>
                                <div className={style.postSummaryContent}>
                                    <h3 className={style.postSummaryContentTitle}>
                                        <a href={'/questions/' + question._id} className={style.link}>{question.title}</a>
                                    </h3>
                                    <div className={style.postSummaryContentMeta}>
                                        <div className={style.post_summary_content}>
                                            <ul className={style.tag_element}>
                                                {question.tags.map(tag => (
                                                <li key={tag}>
                                                    <a className={style.postTag}>{tag}</a>
                                                </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div className={style.postSummaryContentMetaUser}>
                                            <a className={style.avatar}>
                                                <Image src={avatarUser} width={16} height={16}></Image>
                                            </a>
                                            <div className={style.userCardInfo}>
                                                <div className={style.userCardLink}>
                                                    <a href='/' >{question.author}</a>
                                                </div>
                                                <ul className={style.userCardAwards}>
                                                    <li className={style.userCardRep}>
                                                        <span>{question.likes}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <time className={style.userCardTime}>
                                                <a href='rev' className={style.link}>{question.status}
                                                <span className={style.relativetime}> 1 min ago</span>
                                                </a>
                                            </time>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            ))}
                    </div>

                    <div className={style.navigation}>
                        <a className={style.n_button} onClick={prevPage} disabled={page === 1}>Previous Page</a>
                        <span className={style.n_page_number}>{page}</span>
                        <a className={style.n_button} onClick={nextPage}>Next Page</a>
                    </div>
                </div>
            </div>
        </>
    )
}