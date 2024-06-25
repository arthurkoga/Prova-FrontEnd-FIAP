import { useEffect } from 'react';
import logo from "../../assets/svgs/logo-fiap.svg";
import styles from "./navbar.module.css";

export function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      
      const progressBar = document.getElementById('progress-bar');
      progressBar.style.width = scrolled + '%';
      
      const header = document.querySelector(`.${styles.header}`);
      if (window.scrollY > 0) {
        header.style.backgroundColor = '#202121';
      } else {
        header.style.backgroundColor = 'transparent';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={styles.header}>
        <img className={styles.logo} src={logo} alt="Logo da Fiap" />
      </header>
      <div id="progress-bar" className={styles.progressBar}></div>
    </>
  );
}
