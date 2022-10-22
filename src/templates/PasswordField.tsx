import { ErrorMessage } from 'formik'
import { Password } from 'primereact/password'
import { useRecoilValue } from 'recoil';
import { formikState } from '../atoms/atomsLogin';

export const PasswordField = ({ name, }: any) => {
    const formik: any = useRecoilValue(formikState)

    return (
        <div>
            <span className="p-float-label mt-7">
                <Password
                    feedback={false}
                    className={`w-full ${formik.errors[name] && formik.touched[name] && "p-invalid"}`}
                    id={name}
                    name={name}
                    value={formik.values[name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    toggleMask
                />
                <label htmlFor={name}>Ingresa tu contraseña</label>
            </span>
            <div className='h-3 text-sm text-red-800 ml-3'>
                {formik.touched[name] && formik.touched[name] && <div className='h-4'>{formik.errors[name]}</div>}
            </div>
        </div>
    )
}
