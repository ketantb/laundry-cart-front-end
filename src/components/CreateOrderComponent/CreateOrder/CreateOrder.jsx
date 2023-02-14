import React,{useEffect,useState} from 'react'
import './CreateOrder.css'
import {useNavigate} from 'react-router-dom'


const CreateOrder = () => {
  // const navigate=useNavigate()
  // const [user, setUser] = useState([])
  // const ProductData= async ()=>{

  //   try {
  //     const res= await fetch('/order',{
  //       method:"GET",
  //       headers:{
  //         Accept:"application/json",
  //         "Content-Type":"application/json"
  //       },
  //       credentials:"include"
  //     },{mode:'cors'})
  //     const data =await res.json()
  //     setUser(data)
  //     // console.log(data);
  //     res.json(data)
  //     if(!res.status === 200){
  //       const error = new Error(res.Error);
  //       throw error
  //     }
  //   } catch (error) {
  //     console.log(error)
  //     navigate('/')
  //   }

  // }
  // useEffect(() => {
  //   ProductData()
  // }, [])
  // // console.log(user.Name)
  
  


  return (
    <>
    <section className='createheaderContainer'>
    <div className='createM'>

        <div className='createleftItem'>
        Create Order
        </div>
        <div className='createrightItem'>
                <section>
                <input  className='createSearch' type="text" />
                </section>
        </div>
    </div>
    </section>
    </>
  )
}

export default CreateOrder