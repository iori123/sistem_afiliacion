
import { ListCard } from './atoms/ListCard';

type Benefice = {
    title: string,
    price: number,
    plan:string,
    icon: string
}

export const Beneficios = ( beneficio: {benefice :Benefice , limit:number}) => {
    const { benefice } = beneficio;
    return (

        <div className="beneficios">
            <header className='beneficios__top'>
                Cuentas con estos beneficios
            </header>
            <div className="beneficios__container">
                <div className="beneficios__content">
                    <div className="beneficios__info">
                        <h2 className='beneficios__title'>{benefice.title}</h2>
                        <div className="beneficios__price"> S/ {benefice.price}MM</div>
                        <button className='beneficios__button'>{ benefice.plan}</button>
                    </div>
                    <img 
                    src={benefice.icon}
                    alt=""/>
                </div>
                <ListCard
                    limit = {beneficio.limit}
                />
            </div>
        </div>
    )
}
