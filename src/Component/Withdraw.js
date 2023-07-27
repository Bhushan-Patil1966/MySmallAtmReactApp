import React, { useContext } from 'react'
import { Variables } from './Variable'
import { useNavigate } from 'react-router-dom'

export default function Deposite() {

  const nevigation1 = useNavigate()
  const { id, setId, username, setUsername, balance, setBalance, mainBalance, setMainBalance, setType, mainBalance1, setMainBalance1, balance1, setBalance1 } = useContext(Variables)

  const add1 = (e) => {
    setBalance1(Number(e.target.value))
  }

  function handleSubmit(e) {
    e.preventDefault()
    nevigation1("/home")
  }

  return (
    <div className='main3'>
      <form onSubmit={handleSubmit}>
        <input type="number" value={balance1} placeholder='enter amount you want to withdraw'
          onChange={add1} />
        <button type='submit'
          onClick={() => {
            setMainBalance1([...mainBalance1, balance1])
            setType("withdraw")
            }}>Submit</button>

      </form>

    </div>
  )
}
