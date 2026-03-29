import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)
  const [amount, setAmount] = useState(0)
  return (
    <div>
      <h1>You clicked {count} times</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <label htmlFor="amount">Amount</label>
      <input
        id="amount"
        type="number"
        name='amount'
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value, 10))}
      />
      <button onClick={() => setCount(amount)}>
        Set Amount
      </button>
    </div>
  )
}
