
import {useState} from 'react';
import icon1 from '../../../assets/gl_mobile-20x20-1.png';
import icon2 from '../../../assets/gl_mobile-20x20-1.png';
import icon3 from '../../../assets/gl_shield-20x20-1.png';
import icon4 from '../../../assets/gl_shield-20x20-1.png';
export const List = () => {

    const [items, SetItems] = useState([
        {
            icon : `${icon1}`, 
            text : 'Cómpralo de manera fácil y rápida'
        },
        {
            icon : `${icon2}`, 
            text : 'Cotiza y compra tu seguro 100% digital'
        },
        {
            icon : `${icon3}`, 
            text : 'Hasta S/. 12 millones de cobertura anual'
        },
        {
            icon : `${icon4}`, 
            text : 'Más de 300 clínicas en todo el Perú'
        },
    ]);
    return (

        <ul className="publicidad__list">
            {items.map( (item , i )=> (
                <li 
                key = {`item-${i}`} 
                className ="publicidad__item">
                    <img 
                        className="publicidad__icono"
                        src={item.icon} 
                    />
                    {item.text}
                </li>
            ))}
         </ul>
    )
}
