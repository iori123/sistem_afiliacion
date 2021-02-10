import {useState} from 'react'

export const Servicios = () => {

    const [benefices, setBenefices] = useState([
        {
            benefice : 'Coberturas principales',
            list : [
                'Atención de emergencia',
                'Atenciones ambulatorias',
                'maternidad',
                'Hospitalizacion'
            ],
            active : false 
        },
        {
            benefice : 'Servicios Brindados',
            list : [
                'Atención de emergencia',
                'Atenciones ambulatorias',
                'maternidad',
                'Hospitalizacion'
            ],
            active : false
        },
       
    ])
    const handleBenefice = (event : {target : HTMLDivElement}  , index : number ) => {
        benefices[index].active = !benefices[index].active;
        setBenefices([...benefices]);
    }
    return (
        <section className="services">
            <h4 className="services__message">Revisa nuestros <b >Servicios y exclusiones</b></h4>
            <div className="services__beneficios">
             { benefices.map( ( item, index )=> (
                <div 
                    key = {index} 
                    className="services__item"
                    onClick = { (event:any ) =>  handleBenefice( event , index )}
                >
                    { item.benefice }
                    <i className="icon-dropdown-big"></i>
                    <ul 
                        className =
                        { item.active ? 'services__itemList services__itemList--active' : 'services__itemList' } 
                    >
                       { item.list.map( (detail,index )=> <li key={`id-${index}`}>{ detail }</li> ) } 
                    </ul>
                </div>
             ))}
             
              </div>
            
        </section>
    )
}
