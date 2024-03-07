import Image from 'next/image';
import avatarUser from '@/public/svg/avatar-user.svg';
import iconFilter from '@/public/svg/filter.svg';

import style from '@/styles/components/posts/tposts.module.css'

export default function TopPosts({questions}) {
    return (
        <>
            <div className={style.mainBar}>
                <div className={style.headline}>
                    <h1>Top Questions</h1>
                        <a href='http://localhost:3000/questions/ask' className={style.ask_question}>Ask Question</a>
                </div>

                <div className={style.class_filter}>
                    <div>
                        <div className={style.tab_buttons}>
                            <a href='/?tab=new' className={style.tab_button_left}>New</a>
                            <a href='/?tab=week' className={style.tab_button_center}>Week</a>
                            <a href='/?tab=month' className={style.tab_button_right}>Month</a>
                        </div>
                    </div>
                </div>

                <div className={style.flushLeft}>
                    <div className={style.questionMiniList}>
                        {questions.map(question => (
                            <div key={question._id} className={style.postSummary}>
                                <div className={style.postSummaryStats}>
                                    <div className={style.postSummaryStatsItem}>
                                        <span className={style.postSummaryStatsItemNumber}>{question.votes}</span>
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
                    <h2 className={style.bottomnotice}>
                        Looking for more? Browse the complete list of <a href='/questions'>questions</a>, or popular <a href='/tags'>tags</a>.
                    </h2>
                </div>
            </div>
        </>
    )
}