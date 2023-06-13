import React from 'react'
import classes from './Counter.module.scss'

const Counter = () => {
  const [count, setCount] = React.useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div className={classes.btn}>
      <h2>{count}</h2>
      <button onClick={increment}>increment</button>
    </div>
  )
}

export default Counter