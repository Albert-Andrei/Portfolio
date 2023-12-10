'use client';

import React from 'react';
import styles from './footer.module.css';
import Socials from '@components/socials';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NO_FOOTER_PAGES } from '@constants/constants';
import projects from '@data/projects.json';

export const Footer = () => {
  const pathname = usePathname();

  // @TODO: find a better way of doing this...
  const isPageNotFound = checkIfPageNotFound(pathname);

  // Do not render footer on pages where it is not needed or 404 pages
  if (NO_FOOTER_PAGES.includes(pathname) || isPageNotFound) {
    return null;
  }

  return (
    <footer className={styles.footer}>
      <p className={styles.title}>Need some help?</p>
      <h1 className={styles.heading}>Let&#39;s build something together.</h1>
      <Link href="/contact" className={styles.button}>
        <p>Let&#39;s jam</p>
      </Link>

      <div className={styles.additional}>
        <Socials />

        <div>
          <p className={styles.text}>Made with ❤️ by me :D</p>
          <p className={styles.text}>
            © {new Date().getFullYear()} All rights reseved
          </p>
        </div>

        <Link
          href="mailto:moldovanualiberta@gmail.com"
          className={`${styles.text} ${styles.mail}`}
        >
          <p>
            Feel free to contact me any time!{'\n'}moldovanualiberta@gmail.com
          </p>
        </Link>
      </div>
    </footer>
  );
};

// I'm sorry you have to see this 🤦‍♂️
function checkIfPageNotFound(pathname: string) {
  const isDynamicRoute = pathname.includes('project');

  if (isDynamicRoute) {
    const slug = pathname.split('/project/')[1];
    const project = projects?.find((project) => project.slug === slug);

    return !project;
  }

  return false;
}
