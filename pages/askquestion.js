import Head from 'next/head';
import Header from '@/components/Header';
import LeftSidebar from '@/components/LeftSidebar';
import Footer from '@/components/Footer';

import style from '@/styles/components/posts.module.css'

const YourPage = () => {
  return (
    <>
      <Head>
        <title>Ask Question</title>
        <meta name="description" content="Description of your page" />
        {/* Add any other meta tags or links to external resources here */}
      </Head>
      
      <div className='container'>
        <LeftSidebar/>    

        <div className='content'>
          <div className=''>
            <div className=''>
              <div className="s-notice s-notice__info p24 w70 lg:w100">
                <h2 className="fs-title fw-normal mb8">Writing a good question</h2>
                <p className="fs-body2 mb0">
                  You’re ready to <a href="#">ask</a> a <a href="#">programming-related question</a> and this form will help guide you through the process.
                </p>
                <p className="fs-body2 mt0">
                  Looking to ask a non-programming question? See <a href="#">the topics here</a> to find a relevant site.
                </p><br />
                <h5 className="fw-bold mb8">Steps:</h5>
                <ul className="mb0 fs-body2 mt0">
                  <li>Summarize your problem in a one-line title.</li>
                  <li>Describe your problem in more detail.</li>
                  <li>Describe what you tried and what you expected to happen.</li>
                  <li>Add “tags” which help surface your question to members of the community.</li>
                  <li>Review your question and post it to the site.</li>
                </ul>
              </div><br />

              <div className='s-notice s-notice__info p24 w70 lg:w100'>
                <p>Please write down your question:</p><br />
                <form>
                  <input type="text" name="title" placeholder="Enter your Title" className={style.inputBox} style={{ width: '100%' }} /> <br /><br />
                  <input type="text" name="details" placeholder="What are the details of your problem?" className={style.inputBox} style={{ width: '100%' }} /><br /><br />
                  <input type="text" name="expectations" placeholder="What did you try and what were you expecting?" className={style.inputBox} style={{ width: '100%' }} /><br /><br />
                  <input type="text" name="tags" placeholder="Enter the related Tags for question" className={style.inputBox} style={{ width: '100%' }} /><br /><br />
                  <button type="submit" className={style.submitButton}>Submit</button>
                </form>
              </div>

            </div>
          </div>
        </div>

      </div>
      
    </>
  );
}

export default YourPage;
