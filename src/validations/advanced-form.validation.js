import * as yup from 'yup'
export const AdvancedFormSchema = yup.object().shape({
username:yup
.string()
.min(3,'User name must be at least 3 characters')
.required('User name is a required'),
jobType:yup
.string()
.oneOf(['designer','developer','manager','other'])
.required('job type is a required'),
acceptedTos:yup
.boolean()
.oneOf([true],'please accept the terms of service')

});