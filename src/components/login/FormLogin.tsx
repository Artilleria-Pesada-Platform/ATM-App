import { Form, Formik, ErrorMessage, useFormik } from 'formik'
import { Button } from 'primereact/button'
import { useSetRecoilState, useRecoilState } from 'recoil';
import { valueFormType } from './types';
import { formikState } from '../../atoms/atomsLogin';
import { Password } from 'primereact/password';
import { TextInputField } from '../../templates/TextInputField';
import { useEffect, useState } from 'react';
import { PasswordField } from '../../templates/PasswordField';
import { NavLink } from 'react-router-dom';

export const FormLogin = () => {

    const [formik, setFormik] = useRecoilState<any>(formikState);
    const [loading, setLoading] = useState(false);

    const valuesInitial: valueFormType = {
        email: '',
        password: '',
    }

    const submit = (values: valueFormType) => {
        console.log(values)
    }

    const validation = (values: valueFormType) => {
        let errors: any = {};

        if (!values.email) {
            errors.email = "Por favor, ingrese su email"
        }

        if (!values.password) {
            errors.password = "Por favor, ingrese su contraseña."
        }
        return errors;
    }

    const formikValue = useFormik({
        initialValues: { ...valuesInitial },
        onSubmit: (values: valueFormType) => {
            submit(values)
        },
        validate: validation,
        enableReinitialize: true,
    })

    useEffect(() => {
        setFormik(formikValue)
        setLoading(true);
    }, [formikValue.values, formikValue.errors, formikValue.touched])



    return loading === true ? (<>
        <form className='flex flex-col items-center h-full' onSubmit={formik.handleSubmit}>
            <span className='mt-2'>Por favor, inicia sesión.</span>

            <TextInputField name="email"></TextInputField>

            <PasswordField name = "password"></PasswordField>
            
            <NavLink to="/landing">
               <Button className='my-7  w-57 p-button-sm bg-blueDark hover:bg-light' label="Iniciar sesión" type="submit"></Button> 
            </NavLink>
            
            {/* <span className='mt-2'>¿Olvidaste tu <a href="#">contraseña</a>?</span>
            <span className='mt-6'>¿No tienes cuenta? <a href="#">Crea una.</a></span> */}
        </form>
    </>) : null

}
