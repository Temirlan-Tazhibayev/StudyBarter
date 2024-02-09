import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/svg/logo.svg';
import iconSearch from '@/public/svg/search.svg'

import search from '@/public/svg/search.svg';

import userAvatar from '@/public/png/user.png';
import inboxLogo from '@/public/svg/inbox.svg';
import achivementsLogo from '@/public/svg/achivements.svg';
import logoutLogo from '@/public/svg/logout.svg';

import '@/styles/Header.module.css'
import React, { useState } from 'react'

export default function Header() {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
    // You can perform any additional logic here if needed
  };

  return (
    <header className='top-panel'>
      <div className="top-panel-container" >
          <a href='/' className='top-panel--logo'>
            <span className='img-glyph'>
              <Image src={logo} alt='spanLogo' width={50} height={30}/>
              Study Barter
            </span>
          </a>

          <form className='top-panel--searchbar'>
            <div className='top-panel--searchbar--input-group'>
                <input className='top-panel--searchbar--input-group-input' placeholder='Search...'/>
                <Image className='input-icon' src={iconSearch} alt='Search icon'/>
            </div>
          </form>

          <nav className='authorize'>
            <ol className='top-panel--content'>
              <li className='top-panel--content-element'>
                <a href='/#' className='btn'>Log In</a>
              </li>
              <li className='top-panel--content-element' href='/#'>
                <a className='btn'>Sign Up</a>
              </li>
            </ol>
          </nav>
      </div>
    </header>
  );
}


