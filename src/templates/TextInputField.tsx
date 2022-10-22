import { ErrorMessage } from 'formik'
import { InputText } from 'primereact/inputtext'
import { useRecoilValue } from 'recoil'
import { formikState } from '../atoms/atomsLogin'

export const TextInputField = ({name, }:any) => {

    const formik: any = useRecoilValue(formikState)
    
    return (
        <div className='w-57'>
            <span className="p-float-label mt-7 w-57">
                <InputText
                    className={`w-full ${formik.errors[name] && formik.touched[name] && "p-invalid"}`}
                    id={name}
                    name={name}
                    value={formik.values[name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <label htmlFor={name}>Ingresa tu {name}</label>
            </span>
            <div className='h-3 text-sm text-red-800 ml-3'>
                {formik.touched[name] && formik.touched[name] && <div className='h-4'>{formik.errors[name]}</div>}
            </div>
        </div>
    )
}
