import style from '@/styles/components/navigation/PostsRightbar.module.css';

export function PostsRightbar({ questions }) {
    return (
        <>
            <div className={style.sideBar}>
                <div className='sidebar-elements'>
                    <div className={style.sidebarWidgets_tags}>
                        <div className={style.sidebarWidgets_tags_header}>
                            <h2>Current Tags</h2>
                        </div>
                        <div className={style.sidebarWidgets_tags_content}>
                            <div className={style.sidebartags_ss}>
                                <ul className={style.currenttags}>
                                {(() => {
                                    const uniqueTags = new Set();
                                    questions.forEach(question => {
                                    question.tags.forEach(tag => {
                                        uniqueTags.add(tag);
                                    });
                                    });

                                    return Array.from(uniqueTags).map(tag => (
                                    <li key={tag}>
                                        <a className={style.postTag}>{tag}</a>
                                    </li>
                                    ));
                                })()}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}