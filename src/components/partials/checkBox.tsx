import { useState } from 'react'

export const CheckBox = (props : any) => {
    const [state, setstate] = useState(props)
    const handleChecked = () => setstate( {
        ...state ,
        checked : state.checked ? false : true,
        
    })
    return (
        <div 
            className="terminos"
        >
            <input 
                onChange = {handleChecked}
                className= { state.checked ? 'terminos__check' :'terminos__check--active '}
                type="checkbox" />
            <p 
                className='terminos__text'
            >   
               <span> Acepto la {state.conditions}</span>
            </p>
        </div>
    )
}
