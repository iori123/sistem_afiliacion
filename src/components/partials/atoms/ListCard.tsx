import { useState } from "react"



export const ListCard = ( props : {limit : number }) => {
    const [state, setstate] = useState([
        {
            text:'Lima',
            subtitle : '(zona de cobertura)'
        },
        {
            text: '+30 clínicas',
            subtitle : '(en red afiliada)'
        },
        {
            text:'Médico a domicio'
        },
        {
            text:'Checkeos preventivos'
        },
        {
            text:'Reembolso Nacional'
        },
        {
            text:'Reembolso Internacional'
        },
    ])
    return (
        <ul className="listCard"> 
            {
                state.map( (item , index )=> (
                    <li 
                        key = {index}
                    className={`listCard__item ${( index < props.limit*2 ) ? '': 'listCard__item--inactive'}`}>
                        <div className="listCard__heart"></div>
                        <span className='listCard__text'>{item.text}</span>
                        {item.subtitle &&<small>{item.subtitle}</small> }
                    </li>           
                ))
            }         
          
        </ul>
    )
}
