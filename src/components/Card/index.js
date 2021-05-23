import React, { useState } from 'react';
import styles from './index.module.css';

const Card = ({
  imgSrc,
  title,
  children
}) => {
  const [showButton, setShowButton] = useState(false);
  return (
    <div
      className={styles.container}
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => { setShowButton(false) }}
    >
      <img src={imgSrc} alt={title} />
      <div className={styles.titleContainer}>
        <p>{title}</p>
        {showButton && <div className={styles.buttonArea}>{children}</div>}
      </div>
    </div>
  )
}

export default Card
