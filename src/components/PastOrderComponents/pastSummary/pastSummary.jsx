import './pastSummary.css'
import Cancelsummary from '../cancelSummary/Cancelsummary'
import { useState } from 'react'

const PastSummary = ({closeOrder}) => {
    const [cancelAlert, setcancelAlert] = useState(false)

    const cancelOrder =()=>setcancelAlert(false)

    const Cancel =()=>{
            setcancelAlert(true)
    }
  return (
      <>
      <div className="model-wrapper"></div>
    <div className="model-container">
    <div className='pastSummaryContainer'>
        <header className='pastSummaryContainerHeader'>
            <p>summary</p>
            <button onClick={closeOrder}>X</button>
        </header>
            <section className='clientDetails'>
                <table>
                    <tbody>
                        <tr>

                        <td> <div>strore Location</div> <div>
                        jp
                            </div> </td>
                        <td><div>strore Address:</div><div>mdksfkvnfkj</div> </td>
                        <td><div>Phone</div><div>0987658909</div> </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        <main>

            <section className='stausBar'>
                <div>
                <input type="radio" />
                <label>pickup</label>
                </div>
                <div>
                <input type="radio" />
                <label>washed</label>
                </div>
                <div>
                <input type="radio" />
                <label>ironed</label>
                </div>
                <div>
                <input type="radio" />
                <label>delivered</label>
                </div>
            </section>
            <section className='orderDetails'>
                <h5>order Details</h5>
                <table>
                    <thead>
                        <tr>
                            <td>Shirts</td>
                            <td>wasing</td>
                            <td>5X20 =</td>
                            <td>100</td>
                        </tr>
                
                    </thead>
                    <tbody>
                    <tr>
                            <td></td>
                            <td></td>
                            <td>sub total</td>
                            <td>90</td>
                            </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>pickup charge</td>
                            <td>90</td>
                            </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Total:</td>
                            <td>560</td>
                            </tr>
                    </tfoot>
                </table>
            </section>


        <footer>
            <section className='footerup'>

            <h5>Address</h5>
            <article className='addressContainer'>
                <h3>Home</h3>
                <p>#222 ,10th road</p>
                <p>Bangalore</p>
            </article>
            </section>

        
        </footer>



        </main>
            <section className='footerdown'>
                <button onClick={Cancel} >Cancel Order</button>
            {cancelAlert&&<Cancelsummary/>}
            </section>
    </div>
            </div>
    </>
  )
}

export default PastSummary