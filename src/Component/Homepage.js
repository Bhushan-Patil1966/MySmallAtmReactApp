import React, { useContext } from 'react'
import './Home.css'
import {useNavigate} from 'react-router-dom'
import { Variables } from './Variable'

export default function Homepage() {
  const nevigation=useNavigate()
  const { id, setId, username, setUsername, balance, setBalance, mainBalance, setMainBalance, type, mainBalance1,num,setNum,setData,data,finalDepositBalance,finalWithdrawBalance} = useContext(Variables)




 
  return (
    <div className='main container'>
        

      <div className='container text-center main2'>
        <h1>Bank</h1>
        <button type="button" class="btn btn-dark btn-lg mt-5" onClick={()=>nevigation('/details')} >View Details</button><br/>
        <button type="button" class="btn btn-dark btn-lg mt-5" onClick={()=>nevigation('/deposite')}>Deposite</button><br/>
        <button type="button" class="btn btn-dark btn-lg mt-5" onClick={()=>nevigation('/width')}>Withdraw</button><br/>
        <button type="button" class="btn btn-dark btn-lg mt-5" onClick={()=>nevigation('/')}>Exit</button><br/>


      </div>
    </div>
  )
}
