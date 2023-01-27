import { useState } from 'react';
import styles from '../styles/Home.module.css';
import React from 'react';

export default function Home() {

  return (
    <div className={styles.container}>
      <h1>Parent component</h1>
      <LocalState />
      <ChildComponent />
    </div>
  );
}

const ChildComponent = () => {
  return (
    <div className={styles.component}>
      <h2>Child component</h2>
    </div>
  );
}


const LocalState = () => {
  const [value, setValue] = useState<string>('');

  return (
    <div className={styles.component}>
      <h2>Local State</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.input}
      />
    </div>
  );
}
