import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import css from './RegistrationForm.module.css'
import { registerThunk } from "../../redux/auth/operations";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
    const dispatch = useDispatch()

    const initialValues = {
        name: '',
        email: '',
        password: '',
    }
    const handleSubmit = (values, options) => {
        // console.log(values);
        dispatch(registerThunk(values))
        options.resetForm();
    }


    return <>
        <div className={css.formWrapper}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className={css.form}>
                    <label>
                        <span>Name:</span>
                        <Field name='name'/>
                    </label>
                    <label>
                        <span>Email:</span>
                        <Field name='email'/>
                    </label>
                    <label>
                        <span>Password:</span>
                        <Field name='password' type='password'/>
                    </label>
                    <button type="submit">Register</button>

                    <p>
                        You already have account? <Link to='/login'>Get IT!</Link>
                    </p>
                </Form>
            </Formik>
    </div>
    </>
}
export default RegistrationForm;