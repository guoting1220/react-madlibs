import React, { useState } from 'react';
// import storyOptions from './storyOptions';
import './MadlibsForm.css';

const MadlibsForm = ({ collectData }) => {
    const initialFormData = {
        noun1: "",
        noun2: "",
        adjective: "",
        color: ""
    }
    const [formData, setFormData] = useState(initialFormData)

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data, 
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        collectData(formData);
    }

    return (
        <div className="MadlibsForm">
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        id="noun1"
                        type="text"
                        name="noun1"
                        placeholder="noun 1"
                        value={formData.noun1}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <input
                        id="noun2"
                        type="text"
                        name="noun2"
                        placeholder="noun 2"
                        value={formData.noun2}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <input
                        id="adjective"
                        type="text"
                        name="adjective"
                        placeholder="adjective"
                        value={formData.adjective}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <input
                        id="color"
                        type="text"
                        name="color"
                        placeholder="color"
                        value={formData.color}
                        onChange={handleChange}
                        required
                    />
                </div>
                {/* <div className="MadlibsForm-storySelect">
                    <select onChange={handleChange}>
                        {storyOptions.map((s, idx) => 
                            <option key={idx} value={s}>
                                {s}
                            </option>
                        )}
                    </select>
                </div> */}
                <button className="MadlibsForm-submitBtn">Get Story</button>
            </form>
        </div>
    )
}


export default MadlibsForm;