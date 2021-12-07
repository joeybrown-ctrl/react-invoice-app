import React, { useState } from "react";
import PDF from '../PDF/PDF';
import './Form.css';


const Form = (props) => {
    const [state, setState] = useState({
        client: '',
        email: '',
        service: '',
        date: '',
        invoice: '',
        payment: '',
        price: '',
        formSubmitted: false
    })

    const onChange = input => (e) => {
        setState(pre => ({
            ...pre,
            [input]: e.target.value
        }));
    }

    const submitForm = (e) => {
        if (!state.client || !state.email || !state.service || !state.date || !state.invoice || !state.payment || !state.price) {
            alert('All fields are required');
            e.preventDefault();
        } else {
            setState(pre => ({
                ...pre,
                formSubmitted: true
            }))
        }
    }

        return (
            <div>

                {!state.formSubmitted ?
                    (<div>
                        <form>
                            <h3>Invoice to PDF</h3>
                            <p>Enter information in each field and click submit to preview your PDF</p>
                            <fieldset>
                                <div>
                                    <label>Client:
                                        <input onChange={onChange('client')} name="client" type="text" placeholder="Enter Client Name"></input>
                                    </label>
                                </div>
                                <hr />
                                <div>
                                    <label>Email:
                                        <input onChange={onChange('email')} name="email" type="email" placeholder="Enter Client Email"></input>
                                    </label>
                                </div>
                                <hr />
                                <div>
                                    <label>Date:
                                        <input onChange={onChange('date')} name="Date" type="date" placeholder="Enter date"></input>
                                    </label>
                                </div>
                                <hr />
                                <div>
                                    <label>Service:
                                        <input onChange={onChange('service')} name="service" type="text" placeholder="Service Rendered"></input>
                                    </label>
                                </div>
                                <hr />
                                <div>
                                    <label>Invoice Number:
                                        <input onChange={onChange('invoice')} name="invoice" type="number" placeholder="Enter Invoice#"></input>
                                    </label>
                                </div>
                                <hr />
                                <div>
                                    <label>Payment Method:
                                        <input onChange={onChange('payment')} name="payment" type="text" placeholder="Card or Check?"></input>
                                    </label>
                                </div>
                                <hr />
                                <div>
                                    <label>Price:
                                        <input onChange={onChange('price')} name="price" type="text" placeholder="Enter Price"></input>
                                    </label>
                                </div>
                                <hr />
                                <div>
                                    <button type="button" onClick={submitForm}>Submit</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>) : (
                        <PDF client={state.client} email={state.email} service={state.service} date={state.date} invoice={state.invoice} payment={state.payment} price={state.price} />
                    )}
            </div>
        )
    


}



export default Form;