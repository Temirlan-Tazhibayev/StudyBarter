import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/svg/logo.svg';
import iconSearch from '@/public/svg/search.svg'

import search from '@/public/svg/search.svg';

import userAvatar from '@/public/png/user.png';
import inboxLogo from '@/public/svg/inbox.svg';
import achivementsLogo from '@/public/svg/achivements.svg';
import logoutLogo from '@/public/svg/logout.svg';

import {jwtDecode} from 'jwt-decode';
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'; // Импортируем useRouter из Next.js
import style from '@/styles/components/navigation/Header.module.css'; // Import this

export default function Header() {
  const [searchText, setSearchText] = useState('');
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUser(decodedToken);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/search?query=${searchText}`);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    router.push('/users/login');
  };

  return (
    <header className={style.topPanel}>
      <div className={style.topPanelContainer}>
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
            {user ? (
              <>
                <li className={style.topPanelContentElement}>
                  <button onClick={handleLogout} className={style.btn}>Log Out</button>
                </li>
              </>
            ) : (
              <>
                <li className={style.topPanelContentElement}>
                  <a href='/users/login' className={style.btn}>Login</a>
                </li>
                <li className={style.topPanelContentElement}>
                  <a href='/users/signup' className={style.btn}>Sign Up</a>
                </li>
              </>
            )}
          </ol>
        </nav>
      </div>
    </header>
  );
}