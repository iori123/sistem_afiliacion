import { useState }from 'react'

interface FormValues {
    name: String;
    email: String;
    pass: String;
}
export const useForm = ( initialValues  : FormValues  )  => {

    const [ values , setValues ] = useState( initialValues );

    const handleChange =  ( e: Event ) =>  { 
        const target : any = e.target;
        setValues({
            ...values ,
            [target.name ] : target.values
        })
    return [values , handleChange];
    }
}