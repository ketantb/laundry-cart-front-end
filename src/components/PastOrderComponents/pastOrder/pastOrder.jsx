import React, { useState,useEffect } from 'react'
import './pastOrder.css'
import PastSummary from '../pastSummary/pastSummary'
import { AiOutlineEye } from 'react-icons/ai';
import TRproduct from './TRproduct';

// import { Link } from 'react-router-dom'
const PastOrder = (props) => {

  const [products,setProducts]=useState([])
  useEffect(() => {
    fetch('https://laundarycart.onrender.com/products').then((res)=>res.json()).then((product)=>{
      setProducts(product)
    }).catch((err)=>{
      console.log(err)
    })
  }, [])
  console.log(products)
  

  return (
    <>


      <table className='pastOrdercontainer'>
        <thead className='pastOrdercontainerHead'>
          <tr>
            <th> order id</  th>
            <  th> order Date&Time</  th>
            < th> storeLocation</ th>
            < th> city</ th>
            < th> store phone</ th>
            < th> total Item</ th>
            < th>price</ th>
            < th> status</ th>
            < th></ th>
            < th> view</ th>
          </tr>
        </thead>
        <tbody>
          {products.map((product,index)=>{
           return(
            <TRproduct user={props.user}  key={index} product={product}/>
           )
          })
            
          }
         

        </tbody>

      </table>
    </>
  )
}

export default PastOrder