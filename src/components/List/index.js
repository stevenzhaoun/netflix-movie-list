import React from 'react'
import Card from '../Card';
import styles from './index.module.css'

const List = ({
  title,
  data,
  buttonText,
  onButtonClick
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className={styles.list}>
        {data.map(movie => {
          return (
            <Card
              imgSrc={movie.img}
              title={movie.title}
              key={movie.id}
            >
              <button onClick={() => onButtonClick(movie)}>{buttonText}</button>
            </Card>)
        })}
      </div>
    </div>
  )
}

export default List
