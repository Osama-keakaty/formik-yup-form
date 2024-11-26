import { useField } from 'formik'

const CustomSelect = ({ lable, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label>{lable}</label>
            <select {...field} {...props}
                className={meta.touched && meta.error ? 'input-error' : ''}
            />
            {meta.error && meta.touched && <p className='error'>{meta.error}</p>}


        </>
    );
}
export default CustomSelect;