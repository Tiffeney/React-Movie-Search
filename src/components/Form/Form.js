import React from 'react';

const Form = ({handleSubmit, handleChange, item}) => {
        return(
            <form onSubmit={handleSubmit}>
                <input 
                onChange={handleChange}
                type="text" 
                name="item" 
                placeholder="Enter a Movie..."
                value={item}/>
                <input type="submit"/>
            </form>
    )
};

export default Form;