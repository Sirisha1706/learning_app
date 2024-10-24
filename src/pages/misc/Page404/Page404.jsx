import React from 'react';
import styles from './Page404.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

function Page404() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.not_found}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="not found"
      />
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        The page <code>{location.pathname}</code> does not exist.
      </p>
      <button
        onClick={() => {
          navigate('/');
        }}
      className={styles.button} >
        Go to Home
      </button>
    </div>
  );
}

export default Page404;
