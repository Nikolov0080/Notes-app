import React from 'react'


const Input = ({ name, id, label, type,reg }) => {
    return (
        <div>
            <label id={id}>{label} </label>
            <br />
            <input
                type={type}
                name={name}
                id={id}
                ref={reg}

            />
        </div>
    )
}

export default Input
