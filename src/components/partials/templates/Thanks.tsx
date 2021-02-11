import Head from '../headMessage';

import shadowIcon from '../../../assets/sombra.png';
import { ButtonForm } from '../button';


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
    title: '¡Gracias por',
    resalt : 'confiar en nosotros!',
    subtitle: 'Queremos conocer mejor la salud de los asegurados .Un asesor se pondrá en contacto contigo las siguientes 48 horas.'
}
const Thanks = () =>  {
    return (
        
        <section className="home">

        <div className="home__wrapper">
            <div className="home__content">
                <div className="home__img">
                    <img src={shadowIcon} alt="shadow"/>
                </div>
            </div>
            <div  className="home__thanks" >
                <Head
                    head = { head }
                />
                <ButtonForm
                    type='text'
                    text = 'IR A SALUD'
                    path = '/'
                    isValid= {true}
                />
            </div>
        </div>


    </section>
       
        
    )
}
export default Thanks;