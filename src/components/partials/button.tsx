import {useState} from 'react';

export const ButtonForm = (props : any) => {
    const [state, setstate] = useState({

    })
    console.log('---')
    return (
        <button 
            
            className = 'button_Form'
            type={ props.type }
        >
            {props.text}
        </button>
    )
}
