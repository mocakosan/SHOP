import { useField, useFormikContext } from "formik";

export const TextField = (props: any) => {
  const [field, meta] = useField(props);
  const { isSubmitting } = useFormikContext();

  return (
    <div>
      <input
        type="text"
        {...field}
        {...props}
        onChange={(event) => {
          field.onChange(event);
        }}
        disabled={isSubmitting}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
};
