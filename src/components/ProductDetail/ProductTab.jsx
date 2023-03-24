import React from 'react';
import styles from './ProductTab.module.css';
import useMoveScroll from './ProductTab/useMoveScroll';
import { useEffect } from 'react';

const BUTTON_LIST=[
  '상품설명','상세정보','후기','문의'
]

export default function ProductTab({element}){
  
  useEffect(()=>{
    console.log(element)
  },[])

  return (
    <>
      <div className={styles['button-container']}>
      {
        BUTTON_LIST.map((item,index)=>{
          return <button onClick={useMoveScroll(element[index])} className={index===3?[styles['btn-style'], styles['btn-style-border']].join(' '):styles['btn-style']} key={index}>{item}</button>
        })
      }
        {/* <button onClick={tabHandler(props.element)} className={styles['btn-style']}>상품설명</button>
        <button onClick={tabHandler(props.element)} className={styles['btn-style']}>상세정보</button>
        <button onClick={tabHandler(props.element)} className={styles['btn-style']}>후기(1,000)</button>
        <button onClick={tabHandler(props.element)} className={[styles['btn-style'], styles['btn-style-border']].join(' ')}>문의</button> */}
      </div>
    </>
  )
} 