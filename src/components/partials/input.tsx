import {useEffect, useState } from 'react';
import {useValidateInput } from '../../hooks/useValidateInput' 

export const Input = (props : any ) => {
    
    const [  stateInput , handleInputChange ] = useValidateInput({
        name: props.name ,
        value: '',
        error : {
            isError : true,
            isActive: false
        }

    });

    useEffect(() => {
        props.setInputValue( stateInput );
    }, [stateInput])

    return (
        <div 
            onFocus ={ props.onFocus }
            className='elementForm'
        >
            <label 
                className={ props.className } 
                htmlFor={props.name}
            >
                { props.labelText }
            </label>
            <input 
                onBlur = { props.handleType }
                onChange = { (event: { target: HTMLInputElement} ) => handleInputChange ( event ) }
                name = { stateInput.name }
                className = { stateInput.error.isError && stateInput.error.isActive ? 'elementForm__input elementForm__input--error' :'elementForm__input'}
                type = { props.type }
                autoComplete='off'
                value = {stateInput.value}
            />
       </div>
    )
}
