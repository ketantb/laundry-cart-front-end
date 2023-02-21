import React,{useEffect,useState} from 'react'
import "./SummaryPage.css";
// import { useNavigate } from 'react-router-dom'

import GsumOrderRow from "./GsumOrderRow";
import tickpic from "../images/tick.png";
import { RxCross2 } from 'react-icons/rx';

export default function SummaryPage({
  GcancelSummary,
  user,
  gOrderdata,
  GconfirmOrderSum,
}) {
  // const navaigate = useNavigate()
  const totalitems7 =
    gOrderdata.shirts.quantity *
    (gOrderdata.shirts.washing +
      gOrderdata.shirts.ironing +
      gOrderdata.shirts.drycleaning +
      gOrderdata.shirts.chemicalcleaning);
  const totalitems1 =
    gOrderdata.tshirts.quantity *
    (gOrderdata.tshirts.washing +
      gOrderdata.tshirts.ironing +
      gOrderdata.tshirts.drycleaning +
      gOrderdata.tshirts.chemicalcleaning);
  const totalitems2 =
    gOrderdata.trousers.quantity *
    (gOrderdata.trousers.washing +
      gOrderdata.trousers.ironing +
      gOrderdata.trousers.drycleaning +
      gOrderdata.trousers.chemicalcleaning);
  const totalitems3 =
    gOrderdata.jeans.quantity *
    (gOrderdata.jeans.washing +
      gOrderdata.jeans.ironing +
      gOrderdata.jeans.drycleaning +
      gOrderdata.jeans.chemicalcleaning);
  const totalitems4 =
    gOrderdata.boxers.quantity *
    (gOrderdata.boxers.washing +
      gOrderdata.boxers.ironing +
      gOrderdata.boxers.drycleaning +
      gOrderdata.boxers.chemicalcleaning);
  const totalitems5 =
    gOrderdata.joggers.quantity *
    (gOrderdata.joggers.washing +
      gOrderdata.joggers.ironing +
      gOrderdata.joggers.drycleaning +
      gOrderdata.joggers.chemicalcleaning);
  const totalitems6 =
    gOrderdata.others.quantity *
    (gOrderdata.others.washing +
      gOrderdata.others.ironing +
      gOrderdata.others.drycleaning +
      gOrderdata.others.chemicalcleaning);
  const totalprice =
    10 *
    (totalitems1 +
      totalitems7 +
      totalitems2 +
      totalitems3 +
      totalitems4 +
      totalitems5 +
      totalitems6);
      const USER="new User"

  // console.log("totalprice", totalprice);

  // const [openModel, setOpenModel] = useState(false);
  // console.log( "gOrderdata",gOrderdata)
  return (
    <div id='erorr' className="gorderPrvSummary">
      <section>
      <div className="gHeader1Osum">
        <div className='sum'>Summary</div>
        <span className="gbuttonOsumcloseCont">
          <button className="gbuttonOsumclose" onClick={() => GcancelSummary()}>
          <RxCross2 />
          </button>
        </span>
      </div>
      <div className="goderSummaryheader2">
      <select name="cars" id="cars">
            <option value="Store Location">Store Location</option>
            <option value="Pune">Pune</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Bangalore">Bangalore</option>
          </select>
          <div>
            <div className="thSumry">{user.Address}</div>
            <div>
              _
            </div>
          </div>
          <div>
            <div className="thSumry">{user.Phone}</div>
            <div>
              _
            </div>
          </div>
      </div>
      <div id='xys' className="gorderSummaryHeader3">
        Orders details :
        <div className="gordersumTable">
          <table className="sum-table">
            <tbody>
              {gOrderdata.shirts.quantity !== 0 && (
                <GsumOrderRow
                  elementtype={"Shirts"}
                  elementInfo={gOrderdata.shirts}
                />
              )}
              {gOrderdata.tshirts.quantity !== 0 && (
                <GsumOrderRow
                  elementtype={"T-shirts"}
                  elementInfo={gOrderdata.tshirts}
                />
              )}
              {gOrderdata.trousers.quantity !== 0 && (
                <GsumOrderRow
                  elementtype={"Trousers"}
                  elementInfo={gOrderdata.trousers}
                />
              )}
              {gOrderdata.jeans.quantity !== 0 && (
                <GsumOrderRow
                  elementtype={"Jeans"}
                  elementInfo={gOrderdata.jeans}
                />
              )}
              {gOrderdata.boxers.quantity !== 0 && (
                <GsumOrderRow
                  elementtype={"Boxers"}
                  elementInfo={gOrderdata.boxers}
                />
              )}
              {gOrderdata.joggers.quantity !== 0 && (
                <GsumOrderRow
                  elementtype={"Joggers"}
                  elementInfo={gOrderdata.joggers}
                />
              )}
              {gOrderdata.others.quantity !== 0 && (
                <GsumOrderRow
                  elementtype={"Others"}
                  elementInfo={gOrderdata.others}
                />
              )}
              <tr>
                <td></td>
                <td></td>
                <td>Subtotal:</td>
                <td>{totalprice}</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>Pickup Charges:</td>
                <td>90</td>
              </tr>
              <tr className="GeditedRow">
                <td></td>
                <td></td>
                <td>Total:</td>
                <td>{totalprice + 90}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={{ fontSize: "13px", fontWeight: "700", color: "#3B3737" }}>Address</div>
        <div className="GprevsumaddressCont">
          <div className="Gprevsumaddressmain">
            <div className="homeclassse">
              <b>Home</b>
              <div>
                <img className="tickimage" src={tickpic} alt="selected" />
              </div>
            </div>
            <div>{!user.Address ? "#223, 10th road, Jp Nagar, Bangalore" : user.Address +","+user.State+","+user.District}</div>
          </div>
          <div className="Gprevsumaddress">
            <div>
              <b>Office</b>
            </div>
            <div>#223, 10th road, Jp Nagar, Bangalore</div>
          </div>
          <div className="GaddNewAddress">
            <div>
              <b>Add new</b>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section>
      <div className="GoviConfirmButton">
        {totalprice !==0 && (
          <button
            className="GbuttonforOrder"
            onClick={() => GconfirmOrderSum()}
            // onClick={()=>navaigate('/order')
            
          >
            Confirm
          </button>
        )}
      </div>
      </section>
    </div>
  );
}
