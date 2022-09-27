import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import styles from './Navbar.module.css';

export default function NavBar() {
  const [navShown, setNavShown] = useState(false);
  return (
    <nav className={`${styles.navbar} ${styles['navbar-container']}`}>
      <a href="/" className={styles['navbar-brand']}>
        Sciπlogy
      </a>
      <ul className={`${styles.navlist}  ${navShown ? styles.show : ''}`}>
        <li className={styles.navitem}>
          <a className={styles.navlink} href="/about">
            Subjects
          </a>
        </li>
        <li className={styles.navitem}>
          <a className={styles.navlink} href="/about">
            Class
          </a>
        </li>
        <li className={styles.navitem}>
          <a className={styles.navlink} href="/about">
            About
          </a>
        </li>
        <li className={styles.navitem}>
          <a className={styles.navlink} href="/about">
            Contact Us
          </a>
        </li>
      </ul>
      <button
        className={styles['nav-toggle']}
        onClick={() => setNavShown((curState) => !curState)}
      >
        <FontAwesomeIcon icon={navShown ? faXmark : faBars} />
      </button>
    </nav>
  );
}
