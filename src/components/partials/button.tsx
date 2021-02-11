import {Link} from 'react-router-dom';

export const ButtonForm = (props : any) => {
    
 
    return (
        <Link to={props.isValid == true ? props.path : '/'}>
                
            <button 
                className = 'button_Form'
                type={ props.type }
            >

                {props.text}
            </button>
    
        </Link>
        )
}
