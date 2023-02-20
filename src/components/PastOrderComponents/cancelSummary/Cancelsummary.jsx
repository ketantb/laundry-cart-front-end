import React from 'react'
import swal from 'sweetalert';
import './Cancelsummary.css'

const Cancelsummary = () => {
  return (
    <div className=''>
   {
    swal({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
      button: "Procced",
    }).then(function() {
      window.location = "/order";
  })
   }
    </div>
  )
}

export default Cancelsummary