import {useState} from 'react';
import Head from '../headMessage';

import { Steps } from '../atoms/Steps';
import payLogo2 from '../../../assets/Illustration.png'
import payLogo1 from '../../../assets/plan1.png'
import Form from '../Form';
import shadowIcon from '../../../assets/sombra.png';

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
const stateForm = {
    path: '/register/stepTwo',
    isValid: false,
    inputSelect : '',
    select : '',
    inputs : [
        {
            name: 'document',
            type: 'text',
            labelText : 'Numero de documento',
            value : '',
            error : {
                isError : true, 
                details: ''
            }
        },
        {
            name: 'date',
            type: 'text',
            labelText : 'Fecha de Nacimiento',
            value : '',
            error : {
                isError : true,
                details: '' 
            }
         },
        {
           name: 'name',
           type: 'text',
           labelText : 'Nombres',
           value : '',
           error : {
               isError : true, 
               details: ''
           }
        },
        {
           name: 'last_nameFather',
           type: 'text',
           labelText : 'Apellido Paterno',
           value : '',
           error : {
               isError : true, 
               details: ''
           }
        },
        {
           name: 'last_nameMother',
           type: 'text',
           labelText : 'Apellido Materno',
           value : '',
           error : {
               isError : false, 
               details: ''
           }
        },
    ],
    radios : [
        {
            title:'Género',
            names: 'genero',
            option : [
                'masculino','femenido'
            ]
        },
        {
            names:'afiliados',
            title: 'A quién vamos a asegurar',
            option: ['Solo a mí', 'A mí y a mi familia']
        }
    ],
    button : {
        type : 'text',
        text : 'CONTINUAR'
    }
} 
const head = {
    title: 'Hola ,',
    resalt : 'Pepito',
    subtitle: 'valida que los datos sean correctos'
}
const RegisterTemplate = () =>  {

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
                        step='1'
                    /> 
                    <div className="template__content">
                        <Head
                            head = { head }
                        />
                        <Form
                             initialState = { stateForm}
                        />
                       
                    </div>
                    
                </div>
            </section>

            </main>
        
    )
}
export default RegisterTemplate;