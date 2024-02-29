import { useState, useEffect } from 'react';


import LeftSidebar from '@/components/navigation/LeftSidebar';
import Posts from '@/components/posts/SearchPosts';
import style from '@/styles/pages/posts.module.css';
import { PostsRightbar } from '@/components/navigation/PostsRightbar';

export default function Questions({ questions, currentPage }) {
  return (
    <>
      <div className={style.container}>
        <LeftSidebar/>
        <div className={style.content}>
          <Posts questions={questions} page={currentPage}/>
          <PostsRightbar questions={questions}/>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { tab, page, query } = context.query;

  const itemsPerPage = 10;

  try {
    let apiUrl = 'http://localhost:3000/api/questions';

    const params = {
      tab: tab,
      page: page,
      limit: itemsPerPage,
      query: query
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