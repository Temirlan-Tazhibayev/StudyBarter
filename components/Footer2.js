import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/svg/logo.svg';
import search from '@/public/svg/search.svg';
import userAvatar from '@/public/png/user.png';
import inboxLogo from '@/public/svg/inbox.svg';
import achivementsLogo from '@/public/svg/achivements.svg';
import logoutLogo from '@/public/svg/logout.svg';

import styles from '@/styles/Footer.module.css'
import React, { useState } from 'react'

export default function Footer() {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
    // You can perform any additional logic here if needed
  };

  return (
    <footer className={styles.footer} id='footer'>
      <div className={styles.siteFooterContainer}>
        <div className={styles.siteFooterLogo}>
            <a href='#'>
                <Image src={logo} alt='footer--logo' className={styles.img} width={100}></Image>
            </a>
        </div>
        <nav className={styles.siteFooterNav}>
            <div className={styles.siteFooterCol}>
                <h5 className={styles.siteFooterColTitle}>STUDY BARTER</h5>
                <ul className={styles.siteFooterColList}>
                    <li>
                        <a className={styles.siteFooterLink} href='#'>Questions</a>
                    </li>
                    <li>
                        <a className={styles.siteFooterLink} href='#'>Forum</a>
                    </li>
                    <li>
                        <a className={styles.siteFooterLink} href='#'>Legal</a>
                    </li>
                    <li>
                        <a className={styles.siteFooterLink} href='#'>Help</a>
                    </li>
                </ul>
            </div>

        </nav>
      </div>
    </footer>
  );
}


