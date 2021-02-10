import React from 'react';
import Head from './partials/headMessage';
import Form from '../components/partials/Form';
import { Publicidad } from './partials/Publicidad';
import shadow from '././../assets/sombra.png';

const stateForm = {
    inputSelect : '',
    select : '',
    inputs : [
        {
           name: 'document',
           type: 'text',
           labelText : 'Numero de documento',
           value : '',
           error : {
               isError : false, 
               details: ''
           }
        },
        {
           name: 'date',
           type: 'text',
           labelText : 'Fecha de Nacimiento',
           value : '',
           error : {
               isError : false,
               details: '' 
           }
        },
        {
           name: 'phone',
           type: 'text',
           labelText : 'Celular',
           value: '',
           error : {
               isError : false ,
               details: ''
           }
        }
    ],
    checks : [
        {
           checked : false ,
           condition : 'Política de protección de datos personales y Términos y condiciones'
        },
        {
           checked : false ,
           condition : 'Política de envío y comunicaciones comerciales'
        }
    ],
    button : {
        type : 'text',
        text : 'Comencemos'
    }
} 
const Home = () =>  {
    const head = {
        title : 'Obtém tu ',
        resalt : 'Seguro ahora',
        subtitle: 'Completa los datos para comenzar'
    }
    return (
        <section className="home">

            <div className="home__wrapper">
                <div className="home__content">
                   <Publicidad/>
                    <div className="home__img">
                        <img src={shadow} alt="shadow"/>
                    </div>
                </div>
                <div  className="home__form" >
                    <Head
                        head  = { head }/>
                    <Form
                        initialState = { stateForm}
                    /> 
                </div>
            </div>


        </section>
    )
}

export default Home;