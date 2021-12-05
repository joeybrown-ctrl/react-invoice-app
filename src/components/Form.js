import React,  { Component } from "react";
import PDF from './PDF';


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
                            <legend>
                                <div>
                                    <input onChange={this.onChange('client')} name="client" type="text" placeholder="Enter client name"></input>
                                </div>
                                <div>
                                    <input onChange={this.onChange('email')} name="email" type="text" placeholder="Enter client email"></input>
                                </div>
                                <div>
                                    <input onChange={this.onChange('service')} name="service" type="text" placeholder="Service rendered"></input>
                                </div>
                                <div>
                                    <input onChange={this.onChange('price')} name="price" type="text" placeholder="Enter price"></input>
                                </div>
                                <div>
                                    <button type="button" onClick={this.submitForm}>Submit</button>
                                </div>
                            </legend>
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