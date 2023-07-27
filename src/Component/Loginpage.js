import React, { useContext } from 'react'
import './login.css';
import { Variables } from './Variable';
import { useNavigate } from 'react-router-dom'

export default function Loginpage() {

    const navigate = useNavigate()

    const { id, setId, username, setUsername, balance, setBalance,num,setNum,data,setData } = useContext(Variables)

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random() 
                * (max - min + 1)) + min;}

    const ronadom=()=>{
        setNum(randomNumberInRange(20000000, 300000000))
        console.log(setNum);
        console.log(num)
    }
    
    return (
        <>
            <div className="box">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <div className="box1">
                <div className="shape1"></div>
                <div className="shape1"></div>
            </div>
            <div className="box2">
                <div className="shape2"></div>
                <div className="shape2"></div>
            </div>
            <form className='form1' onSubmit={() => navigate('/home') } >
                <div className='container feild'>
                    <h5>Create Your Account</h5>
                    <input type="text" className="mt-5" placeholder='Enter Your Username' value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                    <input type='password' className="mt-5" placeholder="Enter your Password" />
                    <button type="submit" class="btn btn-danger btn-lg mt-5 ms-5"
                    onClick={ronadom}>Submit</button>

                </div>


            </form>
        </>
    )
}
