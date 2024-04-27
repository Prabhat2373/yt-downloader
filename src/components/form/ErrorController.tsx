import { useFormikContext } from "formik";
import { useEffect } from "react";

const ErrorController = () => {
  const { setTouched, values, dirty, touched, errors } = useFormikContext();
  console.log("dirty", dirty);
  console.log("touched", touched);
  console.log("errors", errors);

  useEffect(() => {
    const touchedFields = { ...touched };
    // Iterate through the values object
    Object.keys(values).forEach((field) => {
      // If field has a value, set it as touched
      if (!!values[field] || touchedFields[field]) {
        touchedFields[field] = true;
      }
    });
    // Set touched for all fields with values
    setTouched(touchedFields);
  }, [values, setTouched]);

  return null;
};

export default ErrorController;
