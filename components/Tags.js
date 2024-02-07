import Image from 'next/image'
import iconSearch from '@/public/svg/search.svg'

export default function Tags() {
    return (
        <>
            <div className='mainbar-full'>
                <h1 className='headline'>Tags</h1>
                <p className='headline-description'>
                    A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.
                </p>

                {/* <div className='button-container'>
                    <a className='link' href='/tags/synonyms'>Show all tag synonyms</a>
                </div> */}

                <div className='input-container'>
                    <Image className='input-icon' src={iconSearch} alt='Search icon'/>
                    <input className='input' placeholder='Search...'/>
                </div>

                
                <div id='tags_list'>
                    <div className='tag-card'>
                        <div className='tag-card-content'>
                            <div className='tag-name'>
                                <a href='' className='post-tag'>python</a>
                            </div>
                            <div className='tag-description'>
                                Python is a dynamically typed, multi-purpose programming language. It is designed to be quick to learn, understand, and use, and enforces
                            </div>
                            <div className='tag-details'>
                                <div className='question-count'>1 questions</div>
                                <div className='question-activity'>
                                    <a href='/questions/tagged/python'>1 asked today, </a>
                                    <a href='/questions/tagged/python'>1 asked this week</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='tag-card'>
                        <div className='tag-card-content'>
                            <div className='tag-name'>
                                <a href='' className='post-tag'>python</a>
                            </div>
                            <div className='tag-description'>
                                Python is a dynamically typed, multi-purpose programming language. It is designed to be quick to learn, understand, and use, and enforces
                            </div>
                            <div className='tag-details'>
                                <div className='question-count'>0 questions</div>
                                <div className='question-activity'>
                                    <a href='/questions/tagged/python'>0 asked today, </a>
                                    <a href='/questions/tagged/python'>0 asked this week</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}