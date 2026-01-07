import React from 'react';
import type { ReactNode } from 'react';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          {/* Add your navigation items here */}
          <h1>My Next.js App</h1>
        </nav>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} My Next.js App. All rights reserved.</p>
      </footer>
    </div>
  );
}
