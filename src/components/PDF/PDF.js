import React, { useRef } from 'react';
import Pdf from 'react-to-pdf';
import './PDF.css';
// import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';



// const PDF = (props) => {
//     const ref = useRef();

//     return (
//         <div>
//             <div size="A4" ref={ref} style={{width: 500, height: 500, color: "black", margin: "auto"}} >
//                 <h3>{props.client}</h3>
//                 <p>{props.email}</p>
//                 <p>{props.service}</p>
//                 <p>{props.date}</p>
//                 <p>{props.price}</p>
//             </div>
//             <Pdf targetRef={ref} filename="invoice.pdf">
//                 {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
//                 {/* <div sref={ref}/> */}
//             </Pdf>
//         </div>
//     )
// }

const options = {
    orientation: 'portrait',
    unit: 'in',
    format: [4,2]
};

const PDF = (props) => {
    const ref = useRef();

    return (
        <div>
            <div size="A4" ref={ref} style={{width: 800, height: 500, color: "black", margin: "auto"}} options={options} >
                {/* <h3>{props.client}</h3>
                <p>{props.email}</p>
                <p>{props.service}</p>
                <p>{props.date}</p>
                <p>{props.price}</p> */}


                <div className="invoice-box">
                    <table cellpadding="0" cellspacing="0">
                        <tr className="top">
                            <td colspan="2">
                                <table>
                                    <tr>

                                        <td>
                                            Invoice #: {props.invoice}<br />
                                            Date: {props.date}<br />
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <tr className="information">
                            <td colspan="2">
                                <table>
                                    <tr>
                                        <td>
                                            My Business, Inc.<br />
                                            My Address<br />
                                            Somewhere, AZ 12345
                                        </td>

                                        <td>
                                            {props.client}<br />
                                            {props.email}
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <tr className="heading">
                            <td>Payment Method</td>

                            {/* <td>Check #</td> */}
                        </tr>

                        <tr className="details">
                            <td>{props.payment}</td>

                            {/* <td>1000</td> */}
                        </tr>

                        <tr className="heading">
                            <td>Service</td>

                            <td>Price</td>
                        </tr>

                        <tr className="item">
                            <td>{props.service}</td>

                            <td>{props.price}</td>
                        </tr>

                        <tr className="total">
                            <td></td>

                            <td>Total: {props.price}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <Pdf targetRef={ref} filename="invoice.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
            </Pdf>
        </div>
    )
}



export default PDF;




