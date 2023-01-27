import { useCallback, useMemo, useState } from 'react';
import styles from '../styles/Home.module.css';
import React from 'react';

export default function Home() {
  const [value, setValue] = useState<string>('');
  const [count, setCount] = useState<number>(0);

  const onClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const object = useMemo(() => {return {id: 1, nextCount: count}}, [count]);

  return (
    <div className={styles.container}>
      <h1>Parent component</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.input}
      />
      <p>Value: {value}</p>
      <button onClick={onClick}>+1</button>
      <p>Count: {count}</p>
      <ChildComponent count={count} onClick={onClick} object={object} />
    </div>
  );
}

const ChildComponent = React.memo(({ count, onClick, object }: any) => {
  return (
    <div className={styles.component}>
      <h2>Child component</h2>
      <button onClick={onClick}>+1</button>
      <p>Count: { count }</p>
      <p>Next count: {object.nextCount + 1}</p>
    </div>
  );
});

ChildComponent.displayName = 'ChildComponent';
