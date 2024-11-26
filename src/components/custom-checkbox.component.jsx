
import { useField } from 'formik'
const CustomCheckbox = ({ lable, ...props }) => {
    const [field, meta] = useField(props);
    console.log(meta.error)
    console.log(meta.touched)
    return (
        <>
        <div className="checkbox">
        <input {...field} {...props}
                className={meta.touched && meta.error ? 'input-error' : ''}
            />
            <span>I accept the terms of service</span>
        </div>
            {meta.error && meta.touched && <p className='error'>{meta.error}</p>}


        </>
    );
}
export default CustomCheckbox;