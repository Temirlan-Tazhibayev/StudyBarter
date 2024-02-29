import { useState, useEffect } from 'react';
import LeftSidebar from '@/components/navigation/LeftSidebar';
import TopPosts from '@/components/posts/TopPosts';
import { PostsRightbar } from '@/components/navigation/PostsRightbar';

import style from '@/styles/pages/posts.module.css';
export default function Home({questions}) {
  
  return (
    <>
      <div className={style.container}>
        <LeftSidebar/>
          <div className={style.content}>
          <TopPosts questions={questions} />
          <PostsRightbar questions={questions}/>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const urlParams = new URLSearchParams(context.req.url.split('?')[1]);
    const tab = urlParams.get('tab');

    let apiUrl = 'http://localhost:3000/api/questions';
    const params = {};
    if (tab) {
      params.tab = tab;
    }
    params.limit = 10;
    const queryString = new URLSearchParams(params).toString();
    if (queryString) {
      apiUrl += `?${queryString}`;
    }

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Other headers...
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();

    // Pass data as props to the component
    return { props: { questions: data } };
  } catch (error) {
    console.error(error);
    // Handle errors or return an empty array
    return { props: { questions: [] } };
  }
}
