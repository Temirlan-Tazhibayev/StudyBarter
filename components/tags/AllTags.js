import Image from 'next/image'
import iconSearch from '@/public/svg/search.svg'

// import style from '@/styles/AllTags.module.css';

export default function Tags({tags}) {
    return (
        <>
            <div className='mainbar-full'>
                <h1 className='headline'>Tags</h1>
                <p className='headline-description'>
                    A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.
                </p>

                <div className='input-container'>
                    <Image className='input-icon' src={iconSearch} alt='Search icon'/>
                    <input className='input' placeholder='Search...'/>
                </div>

                <div id='tags_list'>
                    {tags.map(tag => (
                        <div key={tag._id} className='tag-card'>
                            <div className='tag-card-content'>
                                <div className='tag-name'>
                                <a href={`/questions/tagged/${tag.name}`} className='post-tag'>{tag.name}</a>
                                </div>
                                <div className='tag-description'>
                                { tag.description.length > 30 ? tag.description.slice(0, 80) + '...' : tag.description}
                                </div>
                                <div className='tag-details'>
                                <div className='question-count'>{tag.questionCount} questions</div>
                                <div className='question-activity'>
                                    <a href={`/questions/tagged/${tag.name}`}>{tag.questionCountToday} asked today, </a>
                                    <a href={`/questions/tagged/${tag.name}`}>{tag.questionCountThisWeek} asked this week</a>
                                </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}