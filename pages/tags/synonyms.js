import Image from 'next/image';

import Head from 'next/head';
import Link from 'next/link';

import iconHome from '@/public/svg/home.svg';
import avatarUser from '@/public/svg/avatar-user.svg';
import LeftSidebar from '@/components/navigation/LeftSidebar';
import Tags from '@/components/tags/AllTags';



export default function Synonyms() {

  return (
    <>
      <div className='container'>
        <LeftSidebar/>
        <div className='content'>
        </div>
      </div>
    </>
  );
}

