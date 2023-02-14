import React,{useState} from 'react'
import './pastOrderHeader.css'
import { Link } from 'react-router-dom'

const PastOrderHeader = () => {

    const [ordersCount, setOrdersCount] = useState(0)
  return (
    <>
    <section className='pastheaderContainer'>
    <div className='pastM'>

        <div className='leftItem'>
        Orders |{ordersCount}        
        </div>
        <div className='rightItem'>
          <Link to={"/createOrder"}>
                <button  className='CreateBtn'>Create</button>
          </Link>
                <section>
                <input  className='Search' type="text" />
                </section>
        </div>
    </div>
    </section>
    </>
  )
}

export default PastOrderHeader