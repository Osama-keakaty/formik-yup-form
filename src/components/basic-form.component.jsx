import { useFormik } from 'formik'
import { basicFormSchema } from '../validations/basic-form.validation';
const onSubmit = async(values,actions) => {
console.log(values);
await new Promise((resolve)=>setTimeout(resolve,1000));
actions.resetForm()

}
const BasicForm = () => {
    const { errors, values, touched,isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            name: '',
            age: '',
        },
        validationSchema: basicFormSchema,
        onSubmit,

    });
    const  handlePaste =  (event)=>{
        event.preventDefault();
    }

    return (
        <div className="basic-form">
            <form autoComplete='off' onSubmit={handleSubmit}>


                <label htmlFor="name"> Name</label>
                <input type="text" id='name' name='name' placeholder='enter your name'
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.name && touched.name ? 'input-error' : ""}
                    spellCheck={false}
                />
                {errors.name && touched.name && <p className='error'>{errors.name}</p>}


                <label htmlFor="email "> Email</label>
                <input type="email" id='email' placeholder='enter your email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && touched.email ? 'input-error' : ""}
                    spellCheck={false}
                />
                {errors.email && touched.email && <p className='error'>{errors.email}</p>}


                <label htmlFor="age "> Age</label>
                <input type="number" id='age' placeholder='enter your age'
                    value={values.age}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.age && touched.age ? 'input-error' : ""}
                />
                {errors.age && touched.age && <p className='error'>{errors.age}</p>}


                <label htmlFor="password "> Password</label>
                <input type="password" id='password' placeholder='enter your password'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.password && touched.password ? 'input-error' : ""}
                />
                {errors.password && touched.password && <p className='error'>{errors.password}</p>}


                <label htmlFor="confirmPassword">Confirm password</label>
                <input type="password" id='confirmPassword' placeholder='confirm your password'
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onPaste={handlePaste}
                    className={errors.confirmPassword && touched.confirmPassword ? 'input-error' : ""}
                />
                {errors.confirmPassword && touched.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}

                <button disabled={isSubmitting} type="submit">Submit</button>
            </form>
        </div>
    );
}

export default BasicForm;