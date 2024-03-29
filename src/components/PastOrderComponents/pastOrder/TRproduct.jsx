import React, { useState } from 'react'
import './TRproduct.css'
import PastSummary from '../pastSummary/pastSummary'
import { AiOutlineEye } from 'react-icons/ai';

const TRproduct = ({ product, key, user }) => {

  const closePastSummary = () => setshowPastSummary(false);
  const [showPastSummary, setshowPastSummary] = useState(false)
  // const [CanceDirect, setCanceDirect] = useState('cancel order')
  const [CanceD, setCanceD] = useState('x')
  const Orderid = product._id
  const DateP = product.createdAt

  let dateTime = new Date();
  let time = dateTime.toLocaleTimeString();

  const Timex = DateP.substr(11, 5)



  function timeCal() {
    let hrs = Timex.substr(0, 2)
    let min = Timex.substr(3, 2)
    let timeHrs = time.substr(0, 2)
    let timeTim = time.substr(3, 2)
    let intHrs = parseInt(hrs)
    let intMin = parseInt(min)
    setCanceD(timeTim)

  }



  return (
    <tr className='pastOrdercontainerBody'>
      <td> {Orderid.substr(5, 7)}</ td>
      <td> {DateP.substr(0, 10) + " & " + DateP.substr(11, 5)}</ td>
      <td> Gp nagar</ td>
      <td> {product.storelocation}</ td>
      <td>{user.Phone}</ td>
      <td> {product.totalquantity}</ td>
      <td> {product.totalcost} </ td>
      <td> </ td>
      <td id="eyeIcon">
        <AiOutlineEye onClick={() => { setshowPastSummary(true) }} />
      </ td>
      {showPastSummary ? <PastSummary closePastSummary={closePastSummary} product={product} /> : null}
    </tr>
  )
}

export default TRproduct