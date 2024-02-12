import Image from 'next/image';
import avatarUser from '@/public/svg/avatar-user.svg';
import iconFilter from '@/public/svg/filter.svg';


import style from '@/styles/components/posts.module.css'

export default function Posts({questions}) {
    if (questions.map == []){
        return (
            <>
                <div className={style.mainBar}>
                    <div>
                        <h1>All Questions</h1>
                        <button>
                            <a href='http://localhost:3000/askquestion' className={style.ask_question}>Ask Question</a>
                        </button>
                    </div>
                </div>
            </>
        )
    }


    return (
        <>
            <div className={style.mainBar}>
                <div className={style.headline}>
                    <h1>All Questions</h1>
                    <button>
                        <a href='http://localhost:3000/askquestion' className={style.ask_question}>Ask Question</a>
                    </button>
                </div>

                <div className={style.class_filter}>
                    <span className={style.count}>0 questions</span>
                    <div>
                        <div className={style.tab_buttons}>
                            <a href='/questions?tab=new' className={style.tab_button_left}>New</a>
                            <a href='/questions?tab=week' className={style.tab_button_center}>Week</a>
                            <a href='/questions?tab=month' className={style.tab_button_right}>Month</a>
                        </div>
                    </div>
                    <div>
                        <button className={style.filter_button}>
                            <Image src={iconFilter} width={16} height={16}/>
                            <span>Filter</span>
                        </button>
                    </div>
                </div>

                <form className={style.add_filters}>
                    <div className={style.add_filter_container}>
                        <div className={style.settings}>
                            <div className={style.settings_sets}>
                                <h4>Filter by</h4>
                                <div>
                                    <input type='checkbox'/>
                                    <label>No answer</label>
                                </div>
                                <div>
                                    <input type='checkbox'/>
                                    <label>No accepted answer</label>
                                </div>
                            </div>

                            <div className={style.settings_sets}>
                                <h4>Sorted by</h4>
                                <div>
                                    <input type='radio'/>
                                    <label>Newest</label>
                                </div>
                                <div>
                                    <input type='radio'/>
                                    <label>Recent activity</label>
                                </div>
                                <div>
                                    <input type='radio'/>
                                    <label>Most Frequent</label>
                                </div>
                            </div>
                            <div className={style.settings_sets}>
                                <h4>Tagged with</h4>
                                <div>
                                    <input type='radio'/>
                                    <label>My watched tags</label>
                                </div>
                                <div>
                                    <input type='radio'/>
                                    <label>The following tags</label>
                                    <input className={style.follow_tags}></input>
                                </div>
                            </div>
                        </div>
                        <div className={style.control}>
                            <button className={style.apply_button}>Apply filter</button>
                            <button className={style.cancel_button}>Cancle</button>
                        </div>
                    </div>
                </form>

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
                                        <span className={style.postSummaryStatsItemNumber}>{question.comments}</span>
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
                                            <ul>
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
                </div>
            </div>
        </>
    )
}