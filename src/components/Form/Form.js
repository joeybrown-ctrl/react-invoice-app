import React,  { Component } from "react";
import PDF from '../PDF/PDF';
import './Form.css';


class Form extends Component {

    state = {
        client: '',
        email: '',
        service: '',
        price: '',
        formSubmitted: false
    }

    onChange = input => (e) => {
        this.setState({
            [input]: e.target.value
        });
    }

    submitForm = (e) => {
        if(!this.state.client || !this.state.email || !this.state.service || !this.state.price) {
            alert('All fields are required');
            e.preventDefault();
        } else {
            this.setState({
                formSubmitted: true
            })
        }
    }

    render(){
        return(
            <div>
                { !this.state.formSubmitted ? 
                (<div>
                    <form>
                        <fieldset>
                                <div>
                                    <label>Client:
                                    <input onChange={this.onChange('client')} name="client" type="text" placeholder="Enter client name"></input>
                                    </label>
                                </div>
                                <hr/>
                                <div>
                                    <label>Email:
                                    <input onChange={this.onChange('email')} name="email" type="email" placeholder="Enter client email"></input>
                                    </label>
                                </div>
                                <hr/>
                                <div>
                                    <label>Service Rendered:
                                    <input onChange={this.onChange('service')} name="service" type="text" placeholder="Service rendered"></input>
                                    </label>
                                </div>
                                <hr/>
                                <div>
                                    <label>Price:
                                    <input onChange={this.onChange('price')} name="price" type="text" placeholder="Enter price"></input>
                                    </label>
                                </div>
                                <hr/>
                                <div>
                                    <button type="button" onClick={this.submitForm}>Submit</button>
                                </div>
                        </fieldset>
                    </form>
                </div>) : (
                    <PDF client={this.state.client} email={this.state.email} service={this.state.service} price={this.state.price} />
                )}
            </div>
        )
    }


}

export default Form;