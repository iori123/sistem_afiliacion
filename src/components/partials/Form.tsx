import { useState ,Fragment } from 'react';
import { CheckBox } from './checkBox';
import { Input } from './input';
import { ButtonForm } from './button';
import { SelectComponent } from './selectComponent';
import { Radio } from './atoms/Radio';

type ErrorInput = {
    isError : boolean, 
    details: string
}
type Input = {
    name: string,
    labelText : string,
    type: string,
    value : string,
    error : ErrorInput
}
type Check = {
    checked : boolean ,
    condition : string
 }
 type Button =  {
    type : string,
    text : string
}
type Form = {
    path : string,
    isValid: boolean ,
    inputSelect :string,
    select : string,
    inputs : Array<Input>
    checks? : Array<Check>,
    button:Button,
    radios? : Array<Radio>
}
type Radio = {
    names: string,
    title : string ,
    option : Array<string>
}


function Form ( props : {initialState : Form}) {
    const {initialState} = props;
    const [ state , setState ] = useState(initialState);
    const inputFocus = (event: { target: HTMLInputElement}) => {
        const { target } = event ;
        target.name === 'date' && ( state.inputs[1].type = 'date');
        
        setState({
            ...state,
            inputSelect : target.name        
        })
     }
    const selectChange = (event: { target : HTMLSelectElement}) => {
         setState({
            ...state ,
            select: event.target.value
         })

     }
    const setInputValue = ( stateInput : any) => {
        let isValid = false;
        const newInputs = state.inputs.map( (input ) => {
            if( input.name === stateInput.name ) {
                input.value = stateInput.value;
                input.error = stateInput.error;
            };

            isValid = input.error.isError == true ? false : true
            return input 
        });
      
        setState({
            ...state ,
            inputs: newInputs,
            isValid :isValid
        })
     }
    const handleType = (event: { target: HTMLInputElement}) => {
        const {target} = event;
        target.name === 'date' && ( state.inputs[1].type = 'text');
    }
    return (
        <form className='Form'>
            {state.inputs.map( (input ,index ) => 
                { return index === 0 
                    ? 
                    <Fragment key = {index}>
                    <div
                        className="Form__group" 
                    >
                      <SelectComponent
                        selectChange = {selectChange}
                        
                      /> 
                        <Input
                            value = {input.value}
                            setInputValue = { setInputValue  } 
                            onFocus={ inputFocus }
                            className = {`elementForm__label ${state.inputSelect === input.name || input.value !=='' ? 'elementForm__label--active' : ''}`}
                            name ={input.name}
                            type ={input.type}
                            labelText ={input.labelText}
                         /> 
                    </div>
                    { state.inputs[index].error.isError && <div className="Form__error"> { state.inputs[index].error.details }</div> }
                    </Fragment>
                    :
                    <Fragment key = {index}>
                    <Input
                        value = {input.value}
                        handleType = { handleType }
                        setInputValue = { setInputValue } 
                        onFocus={ inputFocus }
                        className = {`elementForm__label ${state.inputSelect === input.name  || input.value !== '' ? 'elementForm__label--active' : ''}`}
                        name={input.name}
                        type={input.type}
                        labelText={input.labelText}
                    /> 
                    { state.inputs[index].error.isError && <div className="Form__error">{ state.inputs[index].error.details }</div> }
                    </Fragment>
                }
                
            )}
            
            {   (!!state.checks)
                 &&
                state.checks.map((check , index) => {
                    return (
                        <CheckBox
                            key = {index}
                            checked = {check.checked}
                            conditions = {check.condition}
                        />
                    ) 
                })
            }
            {
                (!!state.radios)
                &&
                
                state.radios.map( (radio , index ) => {
                    return (
                        <Radio
                            names = {radio.names}
                            key ={`radio-${index}`}
                            title = {radio.title}
                            options = {radio.option}
                        />
                    )
                })
            }
            
            
                <ButtonForm
                    path={state.path}
                    isValid = {state.isValid}
                    type = {state.button.type}
                    text = {state.button.text}
                />
           
        </form>
    )
    
}


export default Form;