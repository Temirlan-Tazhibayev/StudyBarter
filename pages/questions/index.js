import { useState, useEffect } from 'react';


import LeftSidebar from '@/components/navigation/LeftSidebar';

import Posts from '@/components/posts/Posts';
import { PostsRightbar } from '@/components/navigation/PostsRightbar';


import style from '@/styles/pages/posts.module.css';
export default function Questions({ questions, currentPage }) {
  return (
    <>
      <div className={style.container}>
        <LeftSidebar/>
        <div className={style.content}>
          <Posts  questions={questions} page={currentPage}/>
          <PostsRightbar questions={questions}/>
        </div>
      </div>
    </>
  );
}



export async function getServerSideProps(context) {
  const { tab, page, query } = context.query;

  const itemsPerPage = 10;
  // let params = {
  //   limit: itemsPerPage,
  // };
  // const params = {};
  // switch (true) {
  //   case tab !== undefined:
  //     const params = {
  //       page: page,
  //       limit: itemsPerPage, 
  //     };
  //   case query !== undefined:
  //     params["query"] = query
  //     break  
  //   // default:
  //   //   params["page"] = 1;
  // }
  try {
    let apiUrl = 'http://localhost:3000/api/questions';
    
    const params = {
      tab: tab,
      page: page,
      limit: itemsPerPage, 
    };

    const queryString = new URLSearchParams(params).toString();
    if (queryString) {
      apiUrl += `?${queryString}`;
    }

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const questions = await response.json();

    return {
      props: {
        questions,
        currentPage: parseInt(page) || 1
      }
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        questions: [],
        currentPage: 1
      }
    };
  }
}