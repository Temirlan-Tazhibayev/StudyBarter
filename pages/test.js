import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { jwtDecode } from "jwt-decode";


function Test() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    
    if (!token) {
      router.push('/users/login');
      return;
    }

    try {
        const decodedToken =  jwtDecode(token);
        console.log(decodedToken)
        setUser(decodedToken);
    } catch (error) {
      setError('Invalid token');
    }
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.userId}</h1>
          <p>Email: {user.email}</p>
          {/* Другие данные пользователя, если они есть */}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Test;
