import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const UserSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Must be min 3 chars")
    .required("This field is required"),
  number: Yup.string()
    .matches(/^\+?\d{7,15}$/, "Invalid phone number")
    .required("This field is required"),
});

export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    console.log("Form submitted with values:", values);
    onAdd({
      id: Date.now().toString(),
      name: values.username,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        username: "",
        number: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.group}>
          <label className={css.label}>Name:</label>
          <Field className={css.input} type="text" name="username" />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </div>

        <div className={css.group}>
          <label className={css.label}>Number:</label>
          <Field className={css.input} type="tel" name="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
