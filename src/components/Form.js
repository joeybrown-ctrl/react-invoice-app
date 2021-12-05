import { useState } from "react";
import PDF from './PDF';


function Form() {

    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.prevenDefaul();
        alert(inputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Client Name
            <input
                type="text"
                name="username"
                value={inputs.username || ""}
                onChange={handleChange}
                />
                </label>
                <label>Cost of Services
                    <input 
                        type="number"
                        name="cost"
                        value={inputs.cost || ""}
                        onChange={handleChange}
                        />
                </label>
        </form>
    )



}

export default Form;