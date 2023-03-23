import { Formik } from 'formik';

import {
  ConteinerBar,
  Button,
  LabelBtn,
  Input,
  FormsSt,
} from './Searchbar.styled';

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
    <ConteinerBar>
      <Formik initialValues={{ text: '' }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <FormsSt className="form">
            <Button type="submit" disabled={isSubmitting}>
              <LabelBtn>Search</LabelBtn>
            </Button>

            <Input
              name="text"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </FormsSt>
        )}
      </Formik>
    </ConteinerBar>
  );
};
