import React, { useState } from 'react';
import styles from './InfoList.module.css';
import { Counter } from '../../../Counter/Counter';
import { products } from '../../../../../data';

function InfoList ({type, content, quantity, children, style}){ 

  return (
    <li className={styles['info-list']} style={style}>
      <p className={styles['info-list-title']}>{type}</p>

      {
      content && (
        <p className={styles['info-list-contents']}>{content}</p>
      )
      }
      {children}
    </li>
  );
}

export default InfoList;
