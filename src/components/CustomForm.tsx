import { Formik, Form } from "formik";

import Spinner from "../components/Spinner";

export const CustomForm = ({
  initialValues,
  validationSchema,
  handleSubmit,
  children,
  style,
}: any) => {
  const onSubmit = ({ values, actions }: any) => {
    handleSubmit(values, actions)
      .then(() => {
        actions.resetForm({
          values: initialValues,
        });
      })
      .finally(() => {
        actions.setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => {
        return (
          <Form style={style}>
            {isSubmitting && <Spinner />}
            {children}
          </Form>
        );
      }}
    </Formik>
  );
};
