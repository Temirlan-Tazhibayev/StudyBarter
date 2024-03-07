import { useState } from 'react';
import style from '@/styles/pages/login.module.css';
import StudyBarterLogo from '@/components/svg/StudyBarterLogo';
import GoogleLogo from '@/public/svg/Google__G__logo.svg';
import Image from 'next/image';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (!response.ok) {
          throw new Error('Failed to log in');
        }
  
        const data = await response.json();
        const { token } = data;

        // Сохранить токен в состоянии
        localStorage.setItem('token', JSON.stringify(token));

        // Handle successful login, e.g., store user data in state or localStorage
        console.log('User logged in:', data.user._id);
      } catch (error) {
        setError(error.message);
      }
    };

    return (
      <>
        <div className={style.container}>
          <div className={style.content}>
              <div>
                  <StudyBarterLogo height={'180'} width={'180'} fill={'#121111'}/>
              </div>
              <div className={style.authorize_by}>
                  <div className={style.btn}>
                      <Image src={GoogleLogo}></Image>
                      Log in With Google
                  </div>
              </div>
              <form className={style.formContainer}>
                  <div className={style.formContainerElement}>
                      <label className={style.formContainerElementLabel}>
                          Email
                      </label>
                      <input 
                        className={style.formContainerElementInput} 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                  </div>
                  <div className={style.formContainerElement}>
                      <label className={style.formContainerElementLabel}>
                          Password
                      </label>
                      <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                  </div>
                  <div className={style.formContainerElement}>
                      <button className={style.btnLogin} onClick={handleLogin}>Log in</button>
                  </div>
              </form>
          </div>
        </div>
      </>
    );
}
