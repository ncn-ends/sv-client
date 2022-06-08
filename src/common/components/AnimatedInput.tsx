import React from "react";

const AnimatedInput = ( {
    placeholder, tag, onChange
} ) => {
    return (
        <div className="AnimatedInput">
            <input
                type="input"
                placeholder={placeholder}
                name={tag}
                id={`${ tag }_input`}
                required
                onChange={onChange}
            />
            <label htmlFor={`${ tag }_input`}>{placeholder}</label>
        </div>
    );
};

export default AnimatedInput;
