import React ,{useState} from "react";
import SummaryPage from "../SummaryPage/SummaryPage";
import SucessfullModal from "../SucessfullModal/SucessfullModal";
// import PastOrderHeader from "../../PastOrderComponents/pastOrderHeader";
import "./Products.css";
import shirt from "../images/shirt.jpg";
import Washmach from "../logo/washing-machine1.svg";
import iron from "../logo/ironing1.svg";
import towel from "../logo/towel.svg";
import blech from "../logo/bleach1.svg";
import tshirt from "../images/tshirt.jpg";
import Trousers from "../images/trosures.jpg";
import jeans from "../images/jeans.jpg";
import Boxers from "../images/boxer.jpg";
import joggers from "../images/jogger.jpg";
import otherImg from "../images/othersimg.jpg";
import Bluemachine from "../logo/blueMachine.svg";
import BlueIron from "../logo/blueIron.svg";
import Bluetowel from "../logo/blueTowel.svg";
import Bluebeach from "../logo/bluebeach.svg";
import { useNavigate } from "react-router-dom";

const Products = (props) => {
    const navigate = useNavigate();
    const gettoken = localStorage.getItem("token");
    console.log(gettoken);
    const token = `test ${gettoken}`;
    const [orderSucessStyle, setorderSucessStyle] = useState("none");
  
    const [count1, setCount1] = useState({
      m: false, i: false, t: false, b: false, sc: 0, bill: 0, total: 0, btn: 0,
    });
    const [count2, setCount2] = useState({
      m: false, i: false, t: false, b: false, sc: 0, bill: 0, total: 0, btn: 0,
    });
    const [count3, setCount3] = useState({
      m: false, i: false, t: false, b: false, sc: 0, bill: 0,total: 0,btn: 0,
    });
    const [count4, setCount4] = useState({
    m: false,i: false, t: false,  b: false, sc: 0,bill: 0, total: 0,btn: 0,
    });
    const [count5, setCount5] = useState({
      m: false,i: false,t: false,b: false, sc: 0,bill: 0,total: 0,btn: 0,
    });
    const [count6, setCount6] = useState({
      m: false,i: false,t: false, b: false,sc: 0,bill: 0,total: 0,btn: 0,
    });
    const [count7, setCount7] = useState({
      m: false,i: false,t: false,b: false, sc: 0, bill: 0,   total: 0,btn: 0,
    });
  
    const [total, setTotal] = useState(0);
    const [GsummaryStyle, setGSummaryStyle] = useState("none");
    
    const CheckNullValue = (num) => {
      if (num) {
        return parseInt(num);
      }
      return 0;
    };
    const GcancelSummary = () => {
      setGSummaryStyle("none");
    };
  
    const [gOrderdata, setgOrderdata] = useState("");
    const handleCorderproceed = () => {
      let shirtQunatity = CheckNullValue(count1.sc);
      let tshirtQunatity = CheckNullValue(count2.sc);
      let trousersQunatity = CheckNullValue(count3.sc);
      let jeansQunatity = CheckNullValue(count4.sc);
      let boxersQunatity = CheckNullValue(count5.sc);
      let joggersQunatity = CheckNullValue(count6.sc);
      let othersQunatity = CheckNullValue(count7.sc);
  
      let Gorderingdata = {
        shirts: {
          quantity: shirtQunatity,
          washing: count1.m,
          ironing: count1.i,
          drycleaning: count1.t,
          chemicalcleaning: count1.b,
          bill: count1.bill,
          subtot: count1.total,
        },
        tshirts: {
          quantity: tshirtQunatity,
          washing: count2.m,
          ironing: count2.i,
          drycleaning: count2.t,
          chemicalcleaning: count2.b,
          bill: count2.bill,
          subtot: count2.total,
        },
        trousers: {
          quantity: trousersQunatity,
          washing: count3.m,
          ironing: count3.i,
          drycleaning: count3.t,
          chemicalcleaning: count3.b,
          bill: count3.bill,
          subtot: count3.total,
        },
        jeans: {
          quantity: jeansQunatity,
          washing: count4.m,
          ironing: count4.i,
          drycleaning: count4.t,
          chemicalcleaning: count4.b,
          bill: count4.bill,
          subtot: count4.total,
        },
        boxers: {
          quantity: boxersQunatity,
          washing: count5.m,
          ironing: count5.i,
          drycleaning: count5.t,
          chemicalcleaning: count5.b,
          bill: count5.bill,
          subtot: count5.total,
        },
        joggers: {
          quantity: joggersQunatity,
          washing: count6.m,
          ironing: count6.i,
          drycleaning: count6.t,
          chemicalcleaning: count6.b,
          bill: count6.bill,
          subtot: count6.total,
        },
        others: {
          quantity: othersQunatity,
          washing: count7.m,
          ironing: count7.i,
          drycleaning: count7.t,
          chemicalcleaning: count7.b,
          bill: count7.bill,
          subtot: count7.total,
        },
      };
  
      // console.log("inhandle", Gorderingdata);
      setgOrderdata(Gorderingdata);
      setGSummaryStyle("block");
    };
  
    const GconfirmOrderSum = async () => {
      let gSenddata = {
        ...gOrderdata,
      };
  
      // console.log(gSenddata, "g send data");
      const res = await fetch("https://laundarycart.onrender.com/createorder", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
          Authorization: token,
        },
        body: JSON.stringify(gSenddata),
      });
  
      // const res = await fetch("/createorder", {
      //   method: "POST",
      //   headers: {
      //     "content-type": "application/json",
      //     Accept: "application/json",
      //     Authorization: token,
      //   },
      //   body: JSON.stringify(gSenddata),
      // });
      // console.log("print");
      setGSummaryStyle("none");
      setorderSucessStyle("block");
    };
    const rowTotal = (prvTotal, state, quant) => {
      // console.log(prvTotal, state, quant);
      let tempTotal;
      if (quant === 0 || !quant) {
        return 0;
      }
      if (state) {
        tempTotal = prvTotal - 5;
      } else {
        tempTotal = prvTotal + 10;
      }
  
      return tempTotal;
    };
  return (
    <div className="containerx">
    <div className="contentx">
      <div className="ccc">
        <table className="tableprv">
          <thead className="thead-dark table-bordered table-striped">
            <tr className=" table-dark">
              <th scope="col">Product Type</th>
              <th scope="col">Qunatity</th>
              <th scope="col"></th>
              <th scope="col">Wash Type</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">Price</th>
              <th scope="col"></th>
            </tr>
          </thead>
          {/* //............................. */}
          <tbody className="tableBody">
          <tr className="mainRow">
            <td>
              <div className="CimageConatiner">
                <div>
                  <img alt="pics" className="ProductImage" src={shirt} />
                </div>

                <div className="ProductDecription">
                  <h6 className="ProductName">Shirt</h6>
                  <p className="ProductDetails">
                    A good laundry room with storage can make life easier
                  </p>
                </div>
              </div>
            </td>
            <td>
              <input className="qunatity"onChange={(e) => {setCount1({ ...count1, sc: e.target.value });}}type="number"min="0"value={count1.sc}maxLength="4"size="2"placeholder="0"/>
            </td>
            <td>
              <img alt="pictures" className="icon"onClick={() =>count1.sc &&setCount1({...count1,m: !count1.m, btn: 1,bill: count1.bill + 1 * 5,
              total: rowTotal(count1.total, count1.m, count1.sc),})}id="icon1" src={count1.m ? Bluemachine : Washmach}/>
            </td>
            <td>
              <img alt="pictures" className="icon" onClick={() =>count1.sc &&
                  setCount1({...count1,i: !count1.i,btn: 1,bill: count1.bill + 1 * 5,total: rowTotal(count1.total, count1.i, count1.sc),})
                }id="icon2"src={count1.i ? BlueIron : iron}/>
            </td>
            <td>
              <img alt="pictures"className="icon"onClick={() =>count1.sc &&
                  setCount1({...count1,t: !count1.t, btn: 1,bill: count1.bill + 1 * 5,total: rowTotal(count1.total, count1.t, count1.sc),})
                }
                id="icon3"src={count1.t ? Bluetowel : towel}/>
            </td>
            <td>
              <img alt="pictures" className="icon" onClick={() => count1.sc &&
                  setCount1({...count1, b: !count1.b, btn: 1, bill: count1.bill + 1 * 5,total: rowTotal(count1.total, count1.b, count1.sc), })
                }id="icon4"src={count1.b ? Bluebeach : blech}/>
            </td>
            <td>
              {!count1.sc ? (<span className="dash1">__</span>) : (
                <span className="calculator1">{count1.sc} x {count1.total} ={" "}
                  <span style={{ fontSize: "20px", color: "#5861AE" }}>{count1.total * count1.sc}</span>
                </span>)}</td>
            <td>
              {count1.sc ? (<button style={{ opacity: count1.btn }}
                onClick={() =>setCount1({m: false,i: false,t: false,b: false,sc: 0,bill: 0,total: 0,})}
                  className="resetBtn">Reset</button>) : ("")}
            </td>
          </tr>
          {/* end here */}
          {/* st2 */}
          <tr className="mainRow">
            <td>
              <div className="CimageConatiner">
                <img alt="shirt" className="ProductImage" src={tshirt} />
                <div className="ProductDecription">
                  <h6 className="ProductName">TShirt</h6>
                  <p className="ProductDetails"> Laundry is the real Neverending Story.</p>
                </div>
              </div>
            </td>

            <td>
              <input
                className="qunatity"
                onChange={(e) => {
                  setCount2({ ...count2, sc: e.target.value });
                }}
                type="number"
                min="0"
                value={count2.sc}
                maxLength="4"
                size="2"
                placeholder="0"
                />
            </td>
            <td>
              <img alt="icon"
                className="icon"
                onClick={() =>
                  count2.sc &&
                  setCount2({
                    ...count2,
                    m: !count2.m,
                    btn: 1,
                    bill: count2.bill + 1 * 5,
                    total: rowTotal(count2.total, count2.m, count2.sc),
                  })
                }
                id="icon1"
                src={count2.m ? Bluemachine : Washmach}
                />
            </td>
            <td>
              <img alt="xyz"
                className="icon"
                onClick={() =>
                  count2.sc &&
                  setCount2({
                    ...count2,
                    i: !count2.i,
                    btn: 1,
                    bill: count2.bill + 1 * 5,
                    total: rowTotal(count2.total, count2.i, count2.sc),
                  })
                }
                id="icon2"
                src={count2.i ? BlueIron : iron}
              />
            </td>
            <td>
              <img alt="xyz"
                className="icon"
                onClick={() =>
                  count2.sc &&
                  setCount2({
                    ...count2,
                    t: !count2.t,
                    btn: 1,
                    bill: count2.bill + 1 * 5,
                    total: rowTotal(count2.total, count2.t, count2.sc),
                  })
                }
                id="icon3"
                src={count2.t ? Bluetowel : towel}
              />
            </td>
            <td>
              <img alt="xyz"
                className="icon"
                onClick={() =>
                  count2.sc &&
                  setCount2({
                    ...count2,
                    b: !count2.b,
                    btn: 1,
                    bill: count2.bill + 1 * 5,
                    total: rowTotal(count2.total, count2.b, count2.sc),
                  })
                }
                id="icon4"
                src={count2.b ? Bluebeach : blech}
                />
            </td>
            <td>
              {!count2.sc ? (
                <span className="dash1">__</span>
                ) : (
                <span className="calculator1">
                  {count2.sc} x {count2.total} ={" "}
                  <span style={{ fontSize: "20px", color: "#5861AE" }}>
                    {count2.total * count2.sc}
                  </span>
                </span>
              )}
            </td>
            <td>
              {count2.sc ? (
                <button
                style={{ opacity: count2.btn }}
                  onClick={() =>
                    setCount2({
                      m: false,
                      i: false,
                      t: false,
                      b: false,
                      sc: 0,
                      bill: 0,
                      total: 0,
                    })
                  }
                  className="resetBtn"
                >
                  Reset
                </button>
              ) : (
                ""
                )}
            </td>
          </tr>
          {/* end2 */}
          {/* start3 */}
          <tr className="mainRow">
            <td>
              <div className="CimageConatiner">
                <img className="ProductImage" alt="xyz" src={Trousers} />
                <div className="ProductDecription">
                  <h6 className="ProductName">Trousers</h6>
                  <p className="ProductDetails">
                    A good laundry room with storage can make life easier
                  </p>
                </div>
              </div>
            </td>
            <td>
              <input
                className="qunatity"
                onChange={(e) => {
                  setCount3({ ...count3, sc: e.target.value });
                }}
                type="number"
                min="0"
                value={count3.sc}
                maxLength="4"
                size="2"
                placeholder="0"
              />
            </td>
            <td>
              <img alt="xyz"
                className="icon"
                onClick={() =>
                  count3.sc &&
                  setCount3({
                    ...count3,
                    m: !count3.m,
                    btn: 1,
                    bill: count3.bill + 1 * 5,
                    total: rowTotal(count3.total, count3.m, count3.sc),
                  })
                }
                id="icon1"
                src={count3.m ? Bluemachine : Washmach}
              />
            </td>
            <td>
              <img alt="xyz"
                className="icon"
                onClick={() =>
                  count3.sc &&
                  setCount3({
                    ...count3,
                    i: !count3.i,
                    btn: 1,
                    bill: count3.bill + 1 * 5,
                    total: rowTotal(count3.total, count3.i, count3.sc),
                  })
                }
                id="icon2"
                src={count3.i ? BlueIron : iron}
              />
            </td>
            <td>
              <img alt="xyz"
                className="icon"
                onClick={() =>
                  count3.sc &&
                  setCount3({
                    ...count3,
                    t: !count3.t,
                    btn: 1,
                    bill: count3.bill + 1 * 5,
                    total: rowTotal(count3.total, count3.t, count3.sc),
                  })
                }
                id="icon3"
                src={count3.t ? Bluetowel : towel}
              />
            </td>
            <td>
              <img alt="xyz"
                className="icon"
                onClick={() =>
                  count3.sc &&
                  setCount3({
                    ...count3,
                    b: !count3.b,
                    btn: 1,
                    bill: count3.bill + 1 * 5,
                    total: rowTotal(count3.total, count3.b, count3.sc),
                  })
                }
                id="icon4"
                src={count3.b ? Bluebeach : blech}
                />
            </td>
            <td>
              {!count3.sc ? (
                <span className="dash1">__</span>
                ) : (
                  <span className="calculator1">
                  {count3.sc} x {count3.total} ={" "}
                  <span style={{ fontSize: "20px", color: "#5861AE" }}>
                    {count3.total * count3.sc}
                  </span>
                </span>
              )}
            </td>
            <td>
              {count3.sc ? (
                <button
                style={{ opacity: count3.btn }}
                onClick={() =>
                  setCount3({
                    m: false,
                    i: false,
                    t: false,
                    b: false,
                    sc: 0,
                    bill: 0,
                    total: 0,
                    })
                  }
                  className="resetBtn"
                  >
                  Reset
                </button>
              ) : (
                ""
              )}
            </td>
          </tr>
          {/* end3 */}
          {/* start4 */}
          <tr className="mainRow">
            <td>
              <div className="CimageConatiner">
                <img alt="xyz" className="ProductImage" src={jeans} />
                <div className="ProductDecription">
                  <h6 className="ProductName">jeans</h6>
                  <p className="ProductDetails">
                    Laundry is the real Neverending Story.
                  </p>
                </div>
              </div>
            </td>
            <td>
              <input
                className="qunatity"
                onChange={(e) => {
                  setCount4({ ...count4, sc: e.target.value });
                }}
                type="number"
                min="0"
                value={count4.sc}
                maxLength="4"
                size="2"
                placeholder="0"
                />
            </td>
            <td>
              <img alt="xyz"
                className="icon"
                onClick={() =>
                  count4.sc &&
                  setCount4({
                    ...count4,
                    m: !count4.m,
                    btn: 1,
                    bill: count4.bill + 1 * 5,
                    total: rowTotal(count4.total, count4.m, count4.sc),
                  })
                }
                id="icon1"
                src={count4.m ? Bluemachine : Washmach}
                />
            </td>
            <td>
              <img alt="xyz"
                className="icon"
                onClick={() =>
                  count4.sc &&
                  setCount4({
                    ...count4,
                    i: !count4.i,
                    btn: 1,
                    bill: count4.bill + 1 * 5,
                    total: rowTotal(count4.total, count4.i, count4.sc),
                  })
                }
                id="icon2"
                src={count4.i ? BlueIron : iron}
                />
            </td>
            <td>
              <img alt="xyz"
                className="icon"
                onClick={() =>
                  count4.sc &&
                  setCount4({
                    ...count4,
                    t: !count4.t,
                    btn: 1,
                    bill: count4.bill + 1 * 5,
                    total: rowTotal(count4.total, count4.t, count4.sc),
                  })
                }
                id="icon3"
                src={count4.t ? Bluetowel : towel}
                />
            </td>
            <td>
              <img alt="xyz"
                className="icon"
                onClick={() =>
                  count4.sc &&
                  setCount4({
                    ...count4,
                    b: !count4.b,
                    btn: 1,
                    bill: count4.bill + 1 * 5,
                    total: rowTotal(count4.total, count4.b, count4.sc),
                  })
                }
                id="icon4"
                src={count4.b ? Bluebeach : blech}
              />
            </td>
            <td>
              {!count4.sc ? (
                <span className="dash1">__</span>
                ) : (
                  <span className="calculator1">
                  {count4.sc} x {count4.total} ={" "}
                  <span style={{ fontSize: "20px", color: "#5861AE" }}>
                    {count4.total * count4.sc}
                  </span>
                </span>
              )}
            </td>
            <td>
              {count4.sc ? (
                <button
                style={{ opacity: count4.btn }}
                onClick={() =>
                  setCount4({
                    m: false,
                    i: false,
                    t: false,
                    b: false,
                      sc: 0,
                      bill: 0,
                      total: 0,
                    })
                  }
                  className="resetBtn"
                >
                  Reset
                </button>
              ) : (
                ""
                )}
            </td>
          </tr>
          {/* end4 */}
          {/* strt5 */}
          <tr className="mainRow">
            <td>
              <div className="CimageConatiner">
                <img alt="xyz" className="ProductImage" src={Boxers} />
                <div className="ProductDecription">
                  <h6 className="ProductName">Boxer</h6>
                  <p className="ProductDetails">
                    A good laundry room with storage can make life easier
                  </p>
                </div>
              </div>
            </td>

            <td>
              <input
                className="qunatity"
                onChange={(e) => {
                  setCount5({ ...count5, sc: e.target.value });
                }}
                type="number"
                min="0"
                value={count5.sc}
                maxLength="4"
                size="2"
                placeholder="0"
              />
            </td>
            <td>
              <img alt="xyz"
                className="icon"
                onClick={() =>
                  count5.sc &&
                  setCount5({
                    ...count5,
                    m: !count5.m,
                    btn: 1,
                    bill: count5.bill + 1 * 5,
                    total: rowTotal(count5.total, count5.m, count5.sc),
                  })
                }
                id="icon1"
                src={count5.m ? Bluemachine : Washmach}
              />
            </td>
            <td>
              <img alt="xyz"
                className="icon"
                onClick={() =>
                  count5.sc &&
                  setCount5({
                    ...count5,
                    i: !count5.i,
                    btn: 1,
                    bill: count5.bill + 1 * 5,
                    total: rowTotal(count5.total, count5.i, count5.sc),
                  })
                }
                id="icon2"
                src={count5.i ? BlueIron : iron}
              />
            </td>
            <td>
              <img alt="xyz"
                className="icon"
                onClick={() =>
                  count5.sc &&
                  setCount5({
                    ...count5,
                    t: !count5.t,
                    btn: 1,
                    bill: count5.bill + 1 * 5,
                    total: rowTotal(count5.total, count5.t, count5.sc),
                  })
                }
                id="icon3"
                src={count5.t ? Bluetowel : towel}
                />
            </td>
            <td>
              <img alt="xyz"
                className="icon"
                onClick={() =>
                  count5.sc &&
                  setCount5({
                    ...count5,
                    b: !count5.b,
                    btn: 1,
                    bill: count5.bill + 1 * 5,
                    total: rowTotal(count5.total, count5.b, count5.sc),
                  })
                }
                id="icon4"
                src={count5.b ? Bluebeach : blech}
                />
            </td>
            <td>
              {!count5.sc ? (
                <span className="dash1">__</span>
                ) : (
                  <span className="calculator1">
                  {count5.sc} x {count5.total} ={" "}
                  <span style={{ fontSize: "20px", color: "#5861AE" }}>
                    {count5.total * count5.sc}
                  </span>
                </span>
              )}
            </td>
            <td>
              {count5.sc ? (
                <button
                style={{ opacity: count5.btn }}
                onClick={() =>
                  setCount5({
                    m: false,
                    i: false,
                    t: false,
                    b: false,
                    sc: 0,
                    bill: 0,
                      total: 0,
                    })
                  }
                  className="resetBtn"
                >
                  Reset
                </button>
              ) : (
                ""
                )}
            </td>
          </tr>
          {/* end5 */}
          {/* strt6 */}
          <tr className="mainRow">
            <td>
              <div className="CimageConatiner">
                <img alt="xyz" className="ProductImage" src={joggers} />
                <div className="ProductDecription">
                  <h6 className="ProductName">joggers</h6>
                  <p className="ProductDetails">
                    Laundry is the real Neverending Story.
                  </p>
                </div>
              </div>
            </td>

            <td>
              <input
                className="qunatity"
                onChange={(e) => {
                  setCount6({ ...count6, sc: e.target.value });
                }}
                type="number"
                min="0"
                value={count6.sc}
                maxLength="4"
                size="2"
                placeholder="0"
              />
            </td>
            <td>
              <img alt="xyz"
                className="icon"
                onClick={() =>
                  count6.sc &&
                  setCount6({
                    ...count6,
                    m: !count6.m,
                    btn: 1,
                    bill: count6.bill + 1 * 5,
                    total: rowTotal(count6.total, count6.m, count6.sc),
                  })
                }
                id="icon1"
                src={count6.m ? Bluemachine : Washmach}
                />
            </td>
            <td>
              <img alt="xyz"
                className="icon"
                onClick={() =>
                  count6.sc &&
                  setCount6({
                    ...count6,
                    i: !count6.i,
                    btn: 1,
                    bill: count6.bill + 1 * 5,
                    total: rowTotal(count6.total, count6.i, count6.sc),
                  })
                }
                id="icon2"
                src={count6.i ? BlueIron : iron}
                />
            </td>
            <td>
              <img alt="xyz"
                className="icon"
                onClick={() =>
                  count6.sc &&
                  setCount6({
                    ...count6,
                    t: !count6.t,
                    btn: 1,
                    bill: count6.bill + 1 * 5,
                    total: rowTotal(count6.total, count6.t, count6.sc),
                  })
                }
                id="icon3"
                src={count6.t ? Bluetowel : towel}
              />
            </td>
            <td>
              <img alt="xyz"
                className="icon"
                onClick={() =>
                  count6.sc &&
                  setCount6({
                    ...count6,
                    b: !count6.b,
                    btn: 1,
                    bill: count6.bill + 1 * 5,
                    total: rowTotal(count6.total, count6.b, count6.sc),
                  })
                }
                id="icon4"
                src={count6.b ? Bluebeach : blech}
                />
            </td>
            <td>
              {!count6.sc ? (
                <span className="dash1">__</span>
                ) : (
                  <span className="calculator1">
                  {count6.sc} x {count6.total} ={" "}
                  <span style={{ fontSize: "20px", color: "#5861AE" }}>
                    {count6.total * count6.sc}
                  </span>
                </span>
              )}
            </td>
            <td>
              {count6.sc ? (
                <button
                style={{ opacity: count6.btn }}
                onClick={() =>
                    setCount6({
                      m: false,
                      i: false,
                      t: false,
                      b: false,
                      sc: 0,
                      bill: 0,
                      total: 0,
                    })
                  }
                  className="resetBtn"
                >
                  Reset
                </button>
              ) : (
                ""
                )}
            </td>
          </tr>
          {/* end6 */}
          {/* strt7 */}
          <tr className="mainRow">
            <td>
              <div className="CimageConatiner">
                <img alt="xyz" className="ProductImage" src={otherImg} />
                <div className="ProductDecription">
                  <h6 className="ProductName">Others</h6>
                  <p className="ProductDetails">
                    A good laundry room with storage can make life easier
                  </p>
                </div>
              </div>
            </td>

            <td>
              <input
                className="qunatity"
                onChange={(e) => {
                  setCount7({ ...count7, sc: e.target.value });
                }}
                type="number"
                min="0"
                value={count7.sc}
                maxLength="4"
                size="2"
                placeholder="0"
              />
            </td>
            <td>
              <img alt="xyz"
                className="icon"
                onClick={() =>
                  count7.sc &&
                  setCount7({
                    ...count7,
                    m: !count7.m,
                    btn: 1,
                    bill: count7.bill + 1 * 5,
                    total: rowTotal(count7.total, count7.m, count7.sc),
                  })
                }
                id="icon1"
                src={count7.m ? Bluemachine : Washmach}
                />
            </td>
            <td>
              <img alt="xyz"
                className="icon"
                onClick={() =>
                  count7.sc &&
                  setCount7({
                    ...count7,
                    i: !count7.i,
                    btn: 1,
                    bill: count7.bill + 1 * 5,
                    total: rowTotal(count7.total, count7.i, count7.sc),
                  })
                }
                id="icon2"
                src={count7.i ? BlueIron : iron}
                />
            </td>
            <td>
              <img alt="xyz"
                className="icon"
                onClick={() =>
                  count7.sc &&
                  setCount7({
                    ...count7,
                    t: !count7.t,
                    btn: 1,
                    bill: count7.bill + 1 * 5,
                    total: rowTotal(count7.total, count7.t, count7.sc),
                  })
                }
                id="icon3"
                src={count7.t ? Bluetowel : towel}
              />
            </td>
            <td>
              <img alt="xyz"
                className="icon"
                onClick={() =>
                  count7.sc &&
                  setCount7({
                    ...count7,
                    b: !count7.b,
                    btn: 1,
                    bill: count7.bill + 1 * 5,
                    total: rowTotal(count7.total, count7.b, count7.sc),
                  })
                }
                id="icon4"
                src={count7.b ? Bluebeach : blech}
                />
            </td>
            <td>
              {!count7.sc ? (
                <span className="dash1">__</span>
                ) : (
                  <span className="calculator1">
                  {count7.sc} x {count7.total} ={" "}
                  <span style={{ fontSize: "20px", color: "#5861AE" }}>
                    {count7.total * count7.sc}
                  </span>
                </span>
              )}
            </td>
            <td>
              {count7.sc ? (
                <button
                  style={{ opacity: count7.btn }}
                  onClick={() =>
                    setCount7({
                      m: false,
                      i: false,
                      t: false,
                      b: false,
                      sc: 0,
                      bill: 0,
                      total: 0,
                    })
                  }
                  className="resetBtn"
                  >
                  Reset
                </button>
              ) : (
                ""
                )}
            </td>
          </tr>
                </tbody>
          {/* end7 */}
        </table>

        {/* <div className='title'>
                    <h6 className='headerName'>Product Type</h6>
                    <h6 className='headerName'>Qunatity</h6>
                    <h6 className='headerName'>Wash type</h6>
                    <h6 className='headerName'>Price</h6>
                  </div> */}
      </div>

      <div className="btnScetion">
        <button onClick={() => navigate("/order")} className="button button1">
          Cancel
        </button>

        <button
          onClick={() => {
            handleCorderproceed();
          }}
          className="button button2"
          >
          Proceed
        </button>
        {/* <Link to='/order/create/summary'><button className="button button2">Proceed</button></Link>   */}
      </div>
    </div>

    {GsummaryStyle === "block" && (
      <div className="GsucessSummary1" style={{ display: GsummaryStyle }}>
        <SummaryPage user={props.user} 
          GcancelSummary={GcancelSummary}
          gOrderdata={gOrderdata}
          GconfirmOrderSum={GconfirmOrderSum}
          />
      </div>
    )}

    {orderSucessStyle === "block" && (
      <div style={{ display: orderSucessStyle }}>
        <SucessfullModal />
      </div>
    )}
  </div>
  )
}

export default Products