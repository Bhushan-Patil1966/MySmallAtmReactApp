import React, { useContext, useEffect, useState } from 'react'
import { Variables } from './Variable'

export default function Viewdetails() {

  const { id, setId, username, setUsername, balance, setBalance, mainBalance, setMainBalance, type, mainBalance1,num,setNum,setData,data} = useContext(Variables)

  const finalDepositBalance = mainBalance.reduce((prev, current) => prev + current, 0)
  console.log("finalDepositBalance", finalDepositBalance);

  const finalWithdrawBalance = mainBalance1.reduce((prev, current) => prev - current, finalDepositBalance)
  console.log("finalWithdrawBalance", finalWithdrawBalance);

  // const finalDepositBalance1 = mainBalance.reduce((prev, current) => prev - current, 0)
  // console.log("finalDepositBalance", finalDepositBalance);



  console.log("mainBalance", mainBalance);
  console.log("balance", balance);
 
 

  return (
    <div>
      <table  class="table table-striped mt-5 container">
        <thead>
          <tr>
          <td>UserName</td>
          <td>Id</td>
          <td>Available Balance</td>
          
          </tr>
          </thead>
          <tbody>
          <tr>
    <td>{username}</td>
    <td>{num}</td>
    {
      
      type=="deposit"&& <td>{finalDepositBalance}</td>
    }
     {
      
      type=="withdraw"&& <td>{finalWithdrawBalance}</td>
    }
  </tr>
           
          </tbody>

      </table>
      </div>
  )
}
{/* 
<h1>{username}</h1>
      {
        type == "deposit" &&
        <h1>Your Available Balance IS:{finalDepositBalance}</h1>
      }
      {
        type == "withdraw" &&
        <h1>Your Available Balance IS:{finalWithdrawBalance}</h1>
      }
      <h5>last entry is {[...mainBalance, mainBalance[mainBalance.length - 1]]}</h5>
    // </div> */}

   
