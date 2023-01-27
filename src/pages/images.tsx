import React from 'react';
import Image from 'next/legacy/image';
import styles from '../styles/Home.module.css';

export default function Home() {

  return (
    <div className={styles.container}>
      <h1>Next Images</h1>
      <div className={styles.block}>
        <img src={'/1.jpg'} alt='' width={500} height={300} style={{objectFit: 'cover'}} />
        <div className={styles['image-wrapper']}>
          <Image src={'/1.jpg'} alt='' layout='fill' objectFit='cover' />
        </div>
        <div className={styles['image-wrapper']}>
          <Image src={'/2.jpg'} alt='' layout='fill' objectFit='cover' />
        </div>
        <div className={styles['image-wrapper']}>
          <Image src={'/3.jpg'} alt='' layout='fill' objectFit='cover' />
        </div>
        <div className={styles['image-wrapper']}>
          <Image src={'/4.jpg'} alt='' layout='fill' objectFit='cover' />
        </div>
        <div className={styles['image-wrapper']}>
          <Image src={'/5.jpg'} alt='' layout='fill' objectFit='cover' />
        </div>
      </div>
    </div>
  );
}
