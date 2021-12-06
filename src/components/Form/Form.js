import React, { Component } from "react";
import PDF from '../PDF/PDF';
import './Form.css';


// class Form extends Component {

//     state = {
//         client: '',
//         email: '',
//         service: '',
//         date: '',
//         price: '',
//         formSubmitted: false
//     }

//     onChange = input => (e) => {
//         this.setState({
//             [input]: e.target.value
//         });
//     }

//     submitForm = (e) => {
//         if (!this.state.client || !this.state.email || !this.state.service || !this.state.price) {
//             alert('All fields are required');
//             e.preventDefault();
//         } else {
//             this.setState({
//                 formSubmitted: true
//             })
//         }
//     }

//     render() {
//         return (
//             <div>

//                 {!this.state.formSubmitted ?
//                     (<div>
//                         <form>
//                             <h3>Invoice to PDF</h3>
//                             <p>Enter information in each field and click submit to preview your PDF</p>
//                             <fieldset>
//                                 <div>
//                                     <label>Client:
//                                         <input onChange={this.onChange('client')} name="client" type="text" placeholder="Enter Client Name"></input>
//                                     </label>
//                                 </div>
//                                 <hr />
//                                 <div>
//                                     <label>Email:
//                                         <input onChange={this.onChange('email')} name="email" type="email" placeholder="Enter Client Email"></input>
//                                     </label>
//                                 </div>
//                                 <hr />
//                                 <div>
//                                     <label>Date:
//                                         <input onChange={this.onChange('date')} name="Date" type="date" placeholder="Enter date"></input>
//                                     </label>
//                                 </div>
//                                 <hr />
//                                 <div>
//                                     <label>Service:
//                                         <input onChange={this.onChange('service')} name="service" type="text" placeholder="Service Rendered"></input>
//                                     </label>
//                                 </div>
//                                 <hr />
//                                 <div>
//                                     <label>Price:
//                                         <input onChange={this.onChange('price')} name="price" type="text" placeholder="Enter Price"></input>
//                                     </label>
//                                 </div>
//                                 <hr />
//                                 <div>
//                                     <button type="button" onClick={this.submitForm}>Submit</button>
//                                 </div>
//                             </fieldset>
//                         </form>
//                     </div>) : (
//                         <PDF client={this.state.client} email={this.state.email} service={this.state.service} date={this.state.date} price={this.state.price} />
//                     )}
//             </div>
//         )
//     }


// }
const Form = (props) => {
    const [state, setState] = React.useState({
        client: '',
        email: '',
        service: '',
        date: '',
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
        if (!state.client || !state.email || !state.service || !state.price) {
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
                        <PDF client={state.client} email={state.email} service={state.service} date={state.date} price={state.price} />
                    )}
            </div>
        )
    


}



export default Form;