import { Formik } from 'formik'
import { AdvancedFormSchema } from '../validations/advanced-form.validation';
import CustomInput from './custom-input.component';
import CustomSelect from './custom-selector.component';
import CustomCheckbox from './custom-checkbox.component';
const onSubmit = async (values, actions) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm()

}
const AdvancedForm = () => {
    return (
        <Formik
            initialValues={{
                name: '',
                jobType: '',
                acceptedTos: false,
            }}
            validationSchema={AdvancedFormSchema}
            onSubmit={onSubmit}
        >
            {props => (
                <form onSubmit={props.handleSubmit} >
                    {/* <Field
                        type='text'
                        // onChange={props.handleChange}
                        // onBlur={props.handleBlur}
                        // value={props.values.name}
                        name='name'
                        placeholder='Name'
                    /> */}

                    <CustomInput
                        label="Username"
                        name="username"
                        type="text"
                        placeholder="Enter your username"
                    />

                    <CustomSelect label={'Job type'} name='jobType' placeholder='select the job type'>
                        <option value={""}>please enter the job type</option>
                        <option value={"developer"}>Developer</option>
                        <option value={"designer"}>Designer</option>
                        <option value={"manager"}>Manager</option>
                        <option value={"other"}>Other</option>

                    </CustomSelect>

                    <CustomCheckbox className='checkbox' type='checkbox' name='acceptedTos' />

                    <button disabled={props.isSubmitting} type='submit'>Submit</button>
                </form>
            )
            }
        </Formik>
    );

}
export default AdvancedForm;