

export const ButtonForm = (props : any) => {
    
    return (
        <button 
            
            className = 'button_Form'
            type={ props.type }
        >
            {props.text}
        </button>
    )
}
