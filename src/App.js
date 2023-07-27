import './App.css';
import Loginpage from './Component/Loginpage';
import Variable from './Component/Variable';
import Homepage from './Component/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Viewdetails from './Component/Viewdetails';
import Deposite from './Component/Deposite';
import Deposite1 from './Component/Withdraw';




function App() {
  return (
    <BrowserRouter>
      <Variable>
        <Routes>
          <Route path='/' element={<Loginpage />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/details' element={<Viewdetails />} />
          <Route path='/deposite' element={<Deposite />} />
          <Route path='/width' element={<Deposite1 />} />



          
          


        </Routes>
      </Variable>
    </BrowserRouter>
  );
}

export default App;
