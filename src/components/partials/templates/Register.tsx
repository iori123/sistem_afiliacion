import { useState, useEffect } from 'react';
import Head from '../headMessage';
import { Steps } from '../atoms/Steps';
import Form from '../Form';
import shadowIcon from '../../../assets/sombra.png';


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
    
   
    useEffect( () => {
        const url = encodeURI(`https://randomuser.me/api`);
        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                const user = data.results[0];
                // stateForm.inputs[1].value =  user.dob.date.slice(0,10);
                // stateForm.inputs[2].value =  user.name.title;
                // stateForm.inputs[3].value =  user.name.first;
                // stateForm.inputs[4].value =  user.name.last;
            });
    },[])

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