import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addContact } from '../../redux/contacts/operations';
import css from './ContactForm.module.css';


const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required('Required')
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Invalid name format"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required('Required')
    .matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/, "Invalid phone format"),
});


export default function ContactForm() {
  const dispatch = useDispatch();

  
  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact({ name: values.name, number: values.number }))
      .unwrap()
      .then(() => {
        resetForm();
      })
      .catch((error) => {
        
        console.error('Failed to add contact:', error);
      });
  };

  
  const initialValues = {
    name: "",
    number: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className={css.form}>
          <div className={css.fieldWrapper}>
            <Field
              id="name"
              name="name"
              className={`${css.field} ${touched.name && errors.name ? css.errorBorder : ''}`}
              type="text"
              placeholder="John Doe"
              autoComplete="name"
            />
          </div>
          
          <div className={css.fieldWrapper}>
            <Field
              id="number"
              name="number"
              className={`${css.field} ${touched.number && errors.number ? css.errorBorder : ''}`}
              type="text"
              placeholder="+123-333-4444"
              autoComplete="tel"
            />
          </div>
          <ErrorMessage name="number" component="div" className={css.error} />
          <ErrorMessage name="name" component="div" className={css.error} />

          <button className={css.btn} type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
}
