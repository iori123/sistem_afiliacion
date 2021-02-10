import {Link} from 'react-router-dom';
export const Steps = ( props : {step : string}) => {
    return (
        
        <div className="steps">
            <Link to= {props.step === '2' ? '/stepOne': ''}>
               {props.step !== '1' && <p className="steps__back"> {'<'}</p>} 
            </Link>
            
            <b className="steps__current">Paso {props.step} </b> de 7
        </div>
    )
}
