import React from 'react'
import Link from 'next/link';

import styles from './header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link href={'/'}>
        <h4>Normal Fetch</h4>
      </Link>
      <Link href={'/custom'}>
        <h4>Custom SWR Fetch</h4>
      </Link>
      <Link href={'/swr'}>
        <h4>SWR Fetch</h4>
      </Link>
    </header>
  )
}

export default Header;