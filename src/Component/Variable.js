import React, { createContext, useState } from 'react'
const Variables = createContext()


export default function Variable({ children }) {
  const [id, setId] = useState("")
  const [username, setUsername] = useState("")
  const [balance, setBalance] = useState()
  const [balance1, setBalance1] = useState()
  const [mainBalance, setMainBalance] = useState([])
  const [mainBalance1, setMainBalance1] = useState([])
  const [type, setType] = useState("")
  const [num,setNum]=useState("")
  const[data,setData]=useState([])

  


  return (

    <Variables.Provider value={{ id, setId, username, setUsername, balance, setBalance, mainBalance, setMainBalance, mainBalance1, setMainBalance1, type, setType, balance1, setBalance1,num,setNum }}>
      {children}
    </Variables.Provider>


  )
}
export { Variables }
