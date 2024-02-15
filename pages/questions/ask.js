import Head from 'next/head';
import Header from '@/components/navigation/Header';
import LeftSidebar from '@/components/navigation/LeftSidebar';
import Footer from '@/components/navigation/Footer';
import { useState } from 'react';
import style from '@/styles/pages/posts.module.css';

export default function Ask() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [expectations, setExpectations] = useState('');
  const [tags, setTags] = useState('');

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Check if any field is empty
    if (!title || !text || !expectations || !tags) {
      alert('Please fill in all fields before submitting the question.');
      return; // Don't submit the form
    }

    const formData = {
      title,
      text,
      expectations,
      tags
    };

    try {
      // Send the form data to the server
      const response = await fetch('/api/uploadq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Question submitted successfully!');
      } else {
        console.error('Failed to submit question:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting question:', error);
    }
  };

  return (
    <>
      <div className={style.container}>
        <LeftSidebar/>    

        <div className={style.content}>
          <div className=''>
            <div className=''>
              <div className="s-notice s-notice__info p24 w70 lg:w100" style={{ paddingLeft: '20px' }}>
                <br />
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

              <div className='s-notice s-notice__info p24 w70 lg:w100' style={{ paddingLeft: '20px' }}>
                <p>Please write down your question:</p><br />
                <form onSubmit={handleSubmit}>
                  <input type="text" name="title" placeholder="Enter your Title" value={title} onChange={(e) => setTitle(e.target.value)} className={style.inputBox} style={{ width: '100%' }} /> <br /><br />
                  <input type="text" name="text" placeholder="What are the text of your problem?" value={text} onChange={(e) => setText(e.target.value)} className={style.inputBox} style={{ width: '100%' }} /><br /><br />
                  <input type="text" name="expectations" placeholder="What did you try and what were you expecting?" value={expectations} onChange={(e) => setExpectations(e.target.value)} className={style.inputBox} style={{ width: '100%' }} /><br /><br />
                  <input type="text" name="tags" placeholder="Enter the related Tags for question" value={tags} onChange={(e) => setTags(e.target.value)} className={style.inputBox} style={{ width: '100%' }} /><br /><br />
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

  
export async function getServerSideProps(context) {
  try {
    return { props: {} };
  } catch (error) {
    return { props: { error: error } };
  }
}
