import React, { useContext } from 'react'
import { Variables } from './Variable'
import { useNavigate } from 'react-router-dom'
import './Home.css'

export default function Deposite() {

  const nevigation1 = useNavigate()
  var { id, setId, username, setUsername, balance, setBalance, mainBalance, setMainBalance,finalBalance, setType } = useContext(Variables)

  const add1 = (e) => {
    setBalance(Number(e.target.value))
  }

  function handleSubmit(e) {
    e.preventDefault()
    nevigation1("/home")
  }
  finalBalance = mainBalance.reduce((prev, current) => prev + current, 0)

  return (
    <div className='main3'>
      <form onSubmit={handleSubmit}>
        <input type="number" value={balance} placeholder='enter amount you want to deposite'
          onChange={add1} />
        <button type='submit'
          onClick={() => {
            setMainBalance([...mainBalance, balance])
            setType("deposit")
            }} className='btn btn-dark btn-lg mt-5'>Submit</button>

      </form>

    </div>

    
  )
}
