import {useState} from 'react';
import Head from '../headMessage';
import { Beneficios } from '../Beneficios';
import { Planes } from '../Planes';
import { Servicios } from '../Servicios';
import { Steps } from '../atoms/Steps';
import { ButtonForm } from '../button';
import payLogo2 from '../../../assets/Illustration.png'
import payLogo1 from '../../../assets/plan1.png'
import shadowIcon from '../../../assets/sombra.png'
const initialPlanes = {
    planSelect : 1,
    planes : [
        {   
            id: 1,
            text: 'BÁSICO',
            price : 160,
            range: 'mensual',
            benefice : {
                title: 'Primer beneficio',
                price: 1,
                plan: 'PLAN BÁSICO',
                icon: `${payLogo1}`
            }
        },
        {
            id:2,
            text: 'AVANZADO',
            price : 200,
            range: 'mensual',
            benefice : {
                title: 'Cobertura máxima',
                price: 5,
                plan: 'PLAN AVANZADO',
                icon: `${payLogo2}`
            }
        },
       
        {
            id: 3,
            text: 'PRÉMIUN',
            price : 250,
            range: 'mensual',
            benefice : {
                title: 'Primer beneficio',
                price: 10,
                plan: 'PLAN PRÉMIUN',
                icon: `${payLogo1}`
            }
        },
        {
            id:4,
            text: 'FULL',
            price : 500,
            range: 'mensual',
            benefice : {
                title: 'Primer beneficio',
                price: 25,
                plan: 'PLAN FULL',
                icon: `${payLogo2}`
            }
        },
       
    ]

}
const head = {
    title: '',
    resalt : '',
    subtitle : ''
}
const Template = () =>  {

    const [planes, setPlanes] = useState(initialPlanes)
    const handlePlan = (id : number ) => {
        setPlanes(
           { ...planes ,
            planSelect : id 
        })
    } 
    return (
        
            <main className="template">
            <section className="template__wrapper">
                <div className="template__left">
                    <div className="template__img">
                        <img src={`${shadowIcon}`} alt="shadow"/>
                    </div>
                </div>
                <div  className="template__right" >
                    <Steps 
                    step= '2'
                    /> 
                    <div className="template__content">
                        <Head
                            head = { head }
                        />
                        <Planes 
                            hand = { handlePlan }
                            init = {
                                planes
                            }
                        />
                        <Beneficios
                            benefice = { planes.planes[planes.planSelect-1].benefice }
                            limit = {planes.planSelect}
                        />
                        <Servicios

                        />
                        <footer className="template__footer">
                            <div className="template__cotizar">
                                Envíar cotización por correo
                            </div>
                             <ButtonForm
                                isValid = {true}
                                path = '/register/thanks'
                                type='submit'
                                text='COMPRAR PLAN'
                             />
                        </footer>
                    </div>
                    
                </div>
            </section>

            </main>
        
    )
}
export default Template;