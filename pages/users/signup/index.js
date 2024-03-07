import { useState } from 'react';
import { useRouter } from 'next/router'; // Импортируем useRouter
import style from '@/styles/pages/signup.module.css';
import StudyBarterLogo from '@/components/svg/StudyBarterLogo';
import GoogleLogo from '@/public/svg/Google__G__logo.svg';
import Image from 'next/image';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/signup/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username,  password }),
      });

      if (!response.ok) {
        throw new Error('Failed to sign up');
      }

      const data = await response.json();
      // Handle successful signup
      console.log('User signed up:', data.userId);

      // Сохраняем имя пользователя в LocalStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('username', username);
      }

      // Перенаправляем пользователя на страницу /
      window.location.href = '/';
    } catch (error) {
      setError(error.message);
    }
  };
  
    return (
      <>
        <div className={style.container}>
          <div className={style.content}>
              <div className={style.formContainer}>
                  <h1>Create your account</h1>
                  <div>
                      By clicking “Sign up”, you agree to our terms of service and acknowledge you have read our privacy policy.
                  </div>
                  <div className={style.credentials}>
                      <div className={style.credentialsElement}>
                          <label>Email</label>
                          <input value={email} onChange={(e) => setEmail(e.target.value)} />
                      </div>
                      <div className={style.credentialsElement}>
                          <label>Username</label>
                          <input value={username} onChange={(e) => setUsername(e.target.value)} />
                      </div>
                      <div className={style.credentialsElement}>
                          <label>Password</label>
                          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                          <p className={style.credentialsElementNote}>Must contain 8+ characters, including at least 1 letter and 1 number.</p>
                      </div>
                  </div>
                  <div className={style.authorize_by}>
                      <div className={style.btnSignup} onClick={handleSignup}>
                          Sign Up
                      </div>    
                  </div>
                  <div className={style.authorize_by}>
                      <div className={style.btn}>
                          <Image src={GoogleLogo}/>
                          Sign Up With Google
                      </div>
                  </div>
                  <div>
                      <p className={style.credentialsElementNote}>
                          Already have an account? <a href='/users/login'>Log In</a>
                      </p>
                  </div>
              </div>
          </div>
        </div>
      </>
    );
}
