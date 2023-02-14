
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PastOrderContainer from './components/PastOrderComponents/pastOrderContainer';
import './App.css';
import RouterLink from './components/RouterLink';
import React,{useEffect,useState} from 'react'



import Order from './components/CreateOrderComponent/Order/Order';
import LandingPage from './components/Landingpage/LandingPage';

function App() {
  const [user, setUser] = useState([])
  const ProductData= async ()=>{

    try {
      const res= await fetch('https://laundarycart.onrender.com/order',{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
      },{mode:'cors'})
      const data =await res.json()
      setUser(data)
      console.log(data._id);
      res.json(data)
      if(!res.status === 200){
        const error = new Error(res.Error);
        throw error
      }
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    ProductData()
  }, [])

  return (

    <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage user={user}/>}/>
          <Route path='/order' element={<Order user={user}/>}/>
          <Route path='/createOrder' element={<RouterLink user={user}/>}/>
          <Route path='/pastOrder' element={<PastOrderContainer user={user}/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
