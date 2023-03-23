import { Formik, Form, Field } from 'formik';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = ({ text }, actions) => {
    if (text.trim() === '') {
      alert('Введи чтото нормальное ');
    }
    onSubmit(text);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <header className="searchbar">
      <Formik initialValues={{ text: '' }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="form">
            <button type="submit" className="button" disabled={isSubmitting}>
              <span className="button-label">Search</span>
            </button>

            <Field
              name="text"
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </Form>
        )}
      </Formik>
    </header>
  );
};
