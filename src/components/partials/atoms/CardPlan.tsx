import { useState } from 'react';

type Plan = {
    id:number,
    text: string,
    price: number,
    range :string
}
export const CardPlan = (props : { plan : Plan , classNameIcon : string , classNameCard: string, handlePlan: any } ) => {
    const { plan , classNameIcon , handlePlan, classNameCard} = props; 
    const [state, setstate] = useState(
        {
           id : plan.id
        }
    )
    return (
       <div 
       onClick = { (e : any ) => handlePlan(state.id) }
       className={classNameCard} >
           <header>
                <div className={classNameIcon}></div>
           </header>
           <div className='cardPlan__content'>
               <h2 className='cardPlan__title'>{plan.text}</h2>
               <div className="cardPlan__price">
                    <span>s/</span>
                    <span>{plan.price}</span>
               </div>
                <span className='cardPlan__time'>{plan.range}</span>
           </div>
       </div>
    )
}
