import React, { useRef } from 'react';
import Pdf from 'react-to-pdf';
import './PDF.css';
// import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';



const PDF = (props) => {
    const ref = useRef();
    
    return (
        <div>
            <div size="A4" className="form" ref={ref} style={{width: 500, height: 500}} >
                <h3>{props.client}</h3>
                <p>{props.email}</p>
                <p>{props.service}</p>
                <p>{props.date}</p>
                <p>{props.price}</p>
            </div>
            <Pdf targetRef={ref} filename="invoice.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
                {/* <div sref={ref}/> */}
            </Pdf>
        </div>
    )
}

export default PDF;




