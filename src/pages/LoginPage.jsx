import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { selectAuthError } from "../redux/auth/selectors";
import { ErrorMessage, Form, Field, Formik } from "formik";
import { apiLogin } from "../redux/auth/operations";
import css from "../components/SearchPostsForm/SearchPostsForm.module.css";

const LoginValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Пароль є обов'язковим")
    .min(8, "Пароль має бути мінімум в 8 символи")
    .max(100, "Пароль має бути меншим за 100 символів"),

  email: Yup.string()
    .email("Некоректна електронна адреса")
    .required("Електронна адреса є обов'язковим"),
});

const LoginPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const INITIAL_VALUES = {
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    dispatch(apiLogin(values));
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={LoginValidationSchema}
    >
      {({ errors }) => (
        <Form className={css.form}>
          <label className={css.label}>
            <span>Електронна адреса:</span>
            <Field
              type="text"
              name="email"
              placeholder="kirilo.example@gmail.com"
            />
            <ErrorMessage
              className={css.errorText}
              name="email"
              component="span"
            />
          </label>
          <label className={css.label}>
            <span>Пароль:</span>
            <Field
              type="password"
              name="password"
              placeholder="Введіть свій пароль"
            />
            <ErrorMessage
              className={css.errorText}
              name="password"
              component="span"
            />
          </label>
          <button
            disabled={Object.keys(errors).length > 0}
            className={css.submitBtn}
            type="submit"
          >
            Залогінитися
          </button>

          {error && (
            <p className={css.errorText}>Oops, some error occured... {error}</p>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default LoginPage;