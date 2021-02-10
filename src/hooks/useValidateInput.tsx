import { useState }from 'react'



export const useValidateInput = ( initialState : any ) => {
    
    const [stateInput, setInputState ] = useState(initialState)
    const handleInputChange = ( event : { target : HTMLInputElement }) => {
        const { value, name } = event.target;
        const error = {
            isError : false ,
            details : ''
        } 
        let inputValue : string = '' ;
        if( name === 'phone' && value !== '') {
            if( /^[0-9]/.test(value)) {
                inputValue = value.length > 9 ? value.slice(0,9) : value;
            }
            if (!/^9/.test(inputValue) || inputValue.length !== 9 ) {
                error.isError = true;
                error.details = 'Debe proporcionar un numero valido';
            } 
        }
        if( name === 'document' && value !== '') {
            if( /^[0-9]/.test(value)) {
                inputValue = value.length > 5 ? value.slice(0,5) : value;
            }
            if (inputValue.length !== 5 ) {
                error.isError = true;
                error.details = 'Debe proporcionar un N° de documento válido';
            } 

        }
        if( (name === 'name') && value !== '') {
            if( /^[A-Za-z]/.test(value)) {
                inputValue = value
            }else {
                error.isError = true;
                error.details = 'Escriba un nombre válido';
            }
        }
        if( (name === 'last_nameFather') && value !== '') {
            if( /^[A-Za-z]/.test(value)) {
                inputValue = value
            }else {
                error.isError = true;
                error.details = 'Escriba su apellido paterno válido';
            }
        }
        if( (name === 'last_nameMother') && value !== '') {
            if( /^[A-Za-z]/.test(value)) {
                inputValue = value
            }else {
                error.isError = true;
                error.details = 'Escriba un apellido materno válido';
            }
        }
        if( name === 'date' && value !== '') {
            
            if( !/\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])/.test(value)) {
                error.isError = true;
                error.details = 'Debe ingresar una fecha válida';
            }else {
                inputValue =  value;
            }
        }
        
        if(inputValue === '') {
            error.isError = true;
        }
        setInputState( {
            ...stateInput,
            value : inputValue,
            error
        })
    };

    return [  stateInput , handleInputChange ] ;
}
