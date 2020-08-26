import React from 'react'
import style from './index.module.css'
const TextArea = ({ name, placeholder,reg }) => {
    return (
        <div>
            <textarea
                className={style.note}
                name={name}
                ref={reg}
                placeholder={placeholder}
            />
        </div>
    )
}

export default TextArea;