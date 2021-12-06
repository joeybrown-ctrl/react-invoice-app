import React from 'react';
import Pdf from 'react-to-pdf';
// import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const ref = React.createRef();

const PDF = (props) => {
    return (
        <div>
            <div size="A4" className="form" ref={ref}>
                <h3>{props.client}</h3>
                <p>{props.email}</p>
                <p>{props.service}</p>
                <p>{props.date}</p>
                <p>{props.price}</p>
            </div>
            <Pdf targetRef={ref} filename="form.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
                {/* <div style={{width: 500, height: 500, background: 'blue'}} ref={ref}/> */}
            </Pdf>
        </div>
    )
}

export default PDF;




