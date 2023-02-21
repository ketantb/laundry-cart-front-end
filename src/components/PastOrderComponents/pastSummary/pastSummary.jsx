import React, { useEffect, useState } from 'react'
import "./pastSummary.css";
import Cancelsummary from '../cancelSummary/Cancelsummary'
import axios from "axios"

const PastSummary = ({ closePastSummary, product }) => {
    const [cancelAlert, setcancelAlert] = useState(false)
    // console.log(closeOrder)
    let shirtOps = 0;
    if(product.shirts.washing == true) shirtOps += 1
    if(product.shirts.ironing == true) shirtOps += 1
    if(product.shirts.drycleaning == true) shirtOps += 1
    if(product.shirts.chemicalcleaning == true) shirtOps += 1
    
    let tshirtsOps = 0;
    if(product.tshirts.washing == true) tshirtsOps += 1
    if(product.tshirts.ironing == true) tshirtsOps += 1
    if(product.tshirts.drycleaning == true) tshirtsOps += 1
    if(product.tshirts.chemicalcleaning == true) tshirtsOps += 1

    let trousersOps = 0;
    if(product.trousers.washing == true) trousersOps += 1
    if(product.trousers.ironing == true) trousersOps += 1
    if(product.trousers.drycleaning == true) trousersOps += 1
    if(product.trousers.chemicalcleaning == true) trousersOps += 1

    let jeansOps = 0;
    if(product.jeans.washing == true) jeansOps += 1
    if(product.jeans.ironing == true) jeansOps += 1
    if(product.jeans.drycleaning == true) jeansOps += 1
    if(product.jeans.chemicalcleaning == true) jeansOps += 1

    let boxersOps = 0;
    if(product.boxers.washing == true) boxersOps += 1
    if(product.boxers.ironing == true) boxersOps += 1
    if(product.boxers.drycleaning == true) boxersOps += 1
    if(product.boxers.chemicalcleaning == true) boxersOps += 1

    let joggersOps = 0;
    if(product.joggers.washing == true) joggersOps += 1
    if(product.joggers.ironing == true) joggersOps += 1
    if(product.joggers.drycleaning == true) joggersOps += 1
    if(product.joggers.chemicalcleaning == true) joggersOps += 1

    let othersOps = 0;
    if(product.others.washing == true) othersOps += 1
    if(product.others.ironing == true) othersOps += 1
    if(product.others.drycleaning == true) othersOps += 1
    if(product.others.chemicalcleaning == true) othersOps += 1

    let shirtsSubTotal = product.shirts.quantity * shirtOps * 10
    let tshirtsSubTotal = product.tshirts.quantity * tshirtsOps * 10
    let trousersSubTotal = product.trousers.quantity * trousersOps * 10
    let jeansSubTotal = product.jeans.quantity * jeansOps * 10
    let boxersSubTotal = product.boxers.quantity * boxersOps * 10
    let joggersSubTotal = product.joggers.quantity * joggersOps * 10
    let othersSubTotal = product.others.quantity * othersOps * 10
    
    let subTotal = shirtsSubTotal + tshirtsSubTotal + trousersSubTotal + jeansSubTotal + boxersSubTotal + joggersSubTotal + othersSubTotal
    const cancelOrder = async () => {
        await axios.delete(`https://lc-backend.onrender.com/delete/${product._id}`)
        .then((res) => {
            setcancelAlert(true)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
            <div className="model-wrapper"></div>
            <div className="model-container">
                <div className='pastSummaryContainer'>
                    <header className='pastSummaryContainerHeader'>
                        <p>summary</p>
                        <button onClick={closePastSummary}>X</button>
                    </header>
                    <section id="summary-bodynfooter-divider">
                        <div>
                            <main>
                                <section className='orderDetails'>
                                    <h5>order Details</h5>
                                    <table>
                                        <thead>
                                            {product.shirts.quantity ?
                                                <tr>
                                                    <td>Shirts</td>
                                                    <td><span>{product.shirts.washing ? "washing,  " : null}</span>
                                                        <span>{product.shirts.ironing ? "ironing,  " : null}</span>
                                                        <span>{product.shirts.drycleaning ? "drycleaning,  " : null}</span>
                                                        <span>{product.shirts.chemicalcleaning ? "chemicalcleaning" : null}</span>
                                                    </td>
                                                    <td>{product.shirts.quantity} X {shirtOps}</td>
                                                    <td>{shirtsSubTotal}</td>
                                                </tr>
                                                : null}

                                            {product.tshirts.quantity ?
                                                <tr>
                                                    <td>T-shirts</td>
                                                    <td><span>{product.tshirts.washing ? "washing,  " : null}</span>
                                                        <span>{product.tshirts.ironing ? "ironing,  " : null}</span>
                                                        <span>{product.tshirts.drycleaning ? "drycleaning,  " : null}</span>
                                                        <span>{product.tshirts.chemicalcleaning ? "chemicalcleaning" : null}</span>
                                                    </td>
                                                    <td>{product.tshirts.quantity}X{tshirtsOps}</td>
                                                    <td>{tshirtsSubTotal}</td>
                                                </tr>
                                                : null}

                                            {product.trousers.quantity ?
                                                <tr>
                                                    <td>Trousers</td>
                                                    <td><span>{product.trousers.washing ? "washing,  " : null}</span>
                                                        <span>{product.trousers.ironing ? "ironing,  " : null}</span>
                                                        <span>{product.trousers.drycleaning ? "drycleaning,  " : null}</span>
                                                        <span>{product.trousers.chemicalcleaning ? "chemicalcleaning" : null}</span>
                                                    </td>
                                                    <td>{product.trousers.quantity} X {trousersOps}</td>
                                                    <td>{trousersSubTotal}</td>
                                                </tr>
                                                : null}

                                            {product.jeans.quantity ?
                                                <tr>
                                                    <td>Jeans</td>
                                                    <td><span>{product.jeans.washing ? "washing,  " : null}</span>
                                                        <span>{product.jeans.ironing ? "ironing,  " : null}</span>
                                                        <span>{product.jeans.drycleaning ? "drycleaning,  " : null}</span>
                                                        <span>{product.jeans.chemicalcleaning ? "chemicalcleaning" : null}</span>
                                                    </td>
                                                    <td>{product.jeans.quantity} X {jeansOps}</td>
                                                    <td>{jeansSubTotal}</td>
                                                </tr>
                                                : null}

                                            {product.boxers.quantity ?
                                                <tr>
                                                    <td>Boxers</td>
                                                    <td><span>{product.boxers.washing ? "washing,  " : null}</span>
                                                        <span>{product.boxers.ironing ? "ironing,  " : null}</span>
                                                        <span>{product.boxers.drycleaning ? "drycleaning,  " : null}</span>
                                                        <span>{product.boxers.chemicalcleaning ? "chemicalcleaning" : null}</span>
                                                    </td>
                                                    <td>{product.boxers.quantity} X {boxersOps}</td>
                                                    <td>{boxersSubTotal}</td>
                                                </tr>
                                                : null}

                                            {product.joggers.quantity ?
                                                <tr>
                                                    <td>Joggers</td>
                                                    <td><span>{product.joggers.washing ? "washing,  " : null}</span>
                                                        <span>{product.joggers.ironing ? "ironing,  " : null}</span>
                                                        <span>{product.joggers.drycleaning ? "drycleaning,  " : null}</span>
                                                        <span>{product.joggers.chemicalcleaning ? "chemicalcleaning" : null}</span>
                                                    </td>
                                                    <td>{product.joggers.quantity} X {joggersOps}</td>
                                                    <td>{joggersSubTotal}</td>
                                                </tr>
                                                : null}

                                            {product.others.quantity ?
                                                <tr>
                                                    <td>Others</td>
                                                    <td><span>{product.others.washing ? "washing,  " : null}</span>
                                                        <span>{product.others.ironing ? "ironing,  " : null}</span>
                                                        <span>{product.others.drycleaning ? "drycleaning,  " : null}</span>
                                                        <span>{product.others.chemicalcleaning ? "chemicalcleaning" : null}</span>
                                                    </td>
                                                    <td>{product.others.quantity} X {othersOps}</td>
                                                    <td>{othersSubTotal}</td>
                                                </tr>
                                                : null}

                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>sub total</td>
                                                <td>{subTotal}</td>
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
                                                <td>Total</td>
                                                <td><span>₹  </span>   {subTotal + 90}</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </section>
                            </main>
                        </div>
                        <div>
                            <section className='footerdown'>
                                <button onClick={cancelOrder} >Cancel Order</button>
                                {cancelAlert ? <Cancelsummary/> : null}
                            </section>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default PastSummary
