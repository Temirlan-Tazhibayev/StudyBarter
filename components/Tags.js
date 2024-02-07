import Image from 'next/image'
import iconSearch from '@/public/svg/search.svg'

export default function Tags() {
    return (
        <>
            <div className='mainbar-full'>
                <h1 className='fs-headline mb16'>Tags</h1>
                <p className='fs-body2 wmx6 mb16'>
                    A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.
                </p>

                <div className='d-flex fw-wrap gs4 mb24 ai-center'>
                    <a clasName='s-link fs-body1' href='/tags/synonyms'>Show all tag synonyms</a>
                </div>

                <div className='d-flex fw-wrap'>
                    <div className='ps-relative mb12'>
                        <input className='s-input'></input>
                        <Image className='s-input-icon' src={iconSearch}></Image>
                    </div>
                </div>
                
                <div id='tags_list'>
                    <div className='d-grid grid__4 g12'>
                        <div className=''></div>
                    </div>
                </div>
            </div>
        </>
    )
}