import React from 'react'

import styles from './container.module.css';

const Container: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <main className={styles.main}>
      {children}
    </main>
  )
}

export default Container;