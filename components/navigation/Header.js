import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/svg/logo.svg';
import iconSearch from '@/public/svg/search.svg'

import search from '@/public/svg/search.svg';

import userAvatar from '@/public/png/user.png';
import inboxLogo from '@/public/svg/inbox.svg';
import achivementsLogo from '@/public/svg/achivements.svg';
import logoutLogo from '@/public/svg/logout.svg';


import React, { useState } from 'react'
import { useRouter } from 'next/router'; // Импортируем useRouter из Next.js
import style from '@/styles/components/navigation/Header.module.css'; // Import this

export default function Header() {
  const [searchText, setSearchText] = useState('');
  const router = useRouter(); // Инициализируем useRouter


  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/search?query=${searchText}`);
  };
  
  return (
    <header className={style.topPanel}>
        <div className={style.topPanelContainer} >
            <a href='/' className={style.topPanelLogo}>
              <span className={style.imgGlyph}>
                <Image src={logo} alt='spanLogo' width={50} height={30}/>
                Study Barter
              </span>
            </a>

            <form className={style.topPanelSearchbar} onSubmit={handleSubmit}>
              <div className={style.topPanelSearchbarInputGroup}>
                <input 
                  className={style.topPanelSearchbarInputGroupInput} 
                  placeholder='Search...'
                  value={searchText}
                  onChange={handleInputChange}
                />
                <Image className={style.inputIcon} src={iconSearch} alt='Search icon'/>
              </div>
            </form>


            <nav className={style.authorize}>
              <ol className={style.topPanelContent}>
                <li className={style.topPanelContentElement}>
                  <a href='/#' className={style.btn}>Login</a>
                </li>
                <li className={style.topPanelContentElement}>
                  <a href='/#'  className={style.btn}>Sign Up</a>
                </li>
              </ol>
            </nav>
        </div>
      </header>
  );
}


