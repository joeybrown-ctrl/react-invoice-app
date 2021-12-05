import React from 'react';
import Pdf from 'react-to-pdf';

const ref = React.createRef();

const PDF = (props) => {
    return(
        <div>
            <div className="Form">
                <h3>{props.username}</h3>
                <p>{props.cost}</p>
            </div>
            <Pdf targetRef={ref} filename="form.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
            </Pdf>
        </div>
    )
}

export default PDF;