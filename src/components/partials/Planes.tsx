import React, { useState } from 'react'
import {CardPlan} from './atoms/CardPlan';
import { useEffect } from 'react';

type Plan= {
    id: number,
    text: string
    price : number,
    range: string
    benefice?: any
}
type Planes = {
    planSelect: number ,
    planes :Array<Plan> 
}
export const Planes = ( planes : { init : Planes ,hand : any} ) => {
    const {init , hand } = planes 
    const [planeState, setPlanes] = useState(init)
     
    const handlePlan = (id:number) => {
        setPlanes({
            ...planeState,
            planSelect : id
        })
    } 
    useEffect(() => {
        hand(planeState.planSelect)
    }, [planeState])

    return (
        <section className= 'planes'>
            { planeState.planes.map ( (plan : Plan) => (
                <CardPlan
                    key = { plan.id }
                    handlePlan = { handlePlan }
                    classNameIcon={`cardPlan__icon  ${planeState.planSelect === plan.id  ? 'cardPlan__icon--active' : ''}`}
                    classNameCard={`cardPlan ${planeState.planSelect === plan.id  ? 'cardPlan--active ' : ''}`}
                    plan = {plan}
                />
            ))}
            
        </section>
    )
}
