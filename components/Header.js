import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/svg/logo.svg';
import search from '@/public/svg/search.svg';
import userAvatar from '@/public/png/user.png';
import inboxLogo from '@/public/svg/inbox.svg';
import achivementsLogo from '@/public/svg/achivements.svg';
import logoutLogo from '@/public/svg/logout.svg';

import '@/styles/Header.module.css'
import React, { useState } from 'react'

export default function Header() {
  const { t } = useTranslation();
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
    // You can perform any additional logic here if needed
  };

  return (
    <header className='header'>
      <div className="topbar" >
          <a href='#' className="logo">
            <span className="glyph">
              {/* <img src={logo.src} alt="Logo Span"/> */}
              <Image className='span-logo' src={logo} alt='spanLogo' width={40} height={30}></Image>
              Study Barter
            </span>
          </a>

          <form className="search">
            <div className="s-topbar-searchbar-input-group">
              <input
                  className="search-input"
                  type="text"
                  value={searchText}
                  onChange={handleInputChange}
                  placeholder="Search..."
                />
                {/* <Image className='search-icon' src={search} alt='searchIcon' ></Image> */}
                <Image className='search-icon' src={search} alt='searchIcon' ></Image>
            </div>
          </form>

          <nav className='user-nav'>
            <ol className='menubar'>
              <li>
                <a href='#' className='user-card'>
                  <div className='user-card-avatar'>
                    <Image src={userAvatar} alt='user' width={24} height={24}></Image>
                  </div>
                  <div className='user-card-info'>
                    <ul className='user-card-awards'>
                      <li className='user-card-rep'>
                        1
                      </li>
                    </ul>
                  </div>
                </a>
              </li>
              <li>
                <a href='#' className='inbox'>
                  <Image src={inboxLogo} alt='inboxLogo' width={20} height={18}></Image>
                </a>
              </li>
              <li>
                <a href='#' className='achivements'>
                  <Image src={achivementsLogo} alt='achivementsLogo' width={20} height={18}></Image>
                </a>
              </li>
              <li>
                <a href='#' className='logout'>
                  <Image src={logoutLogo} alt='logoutLogo' width={20} height={18}></Image>
                </a>
              </li>
            </ol>
          </nav>
      </div>
    </header>
  );
}


