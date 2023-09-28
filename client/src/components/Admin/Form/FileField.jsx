import { ErrorMessage } from "formik";
import propTypes from "prop-types";

const FileField = ({ name, accept, setFieldValue }) => {
  return (
    <>
      <input
        type="file"
        name={name}
        accept={accept}
        onChange={(e) => {
          if (e.target.files) {
            console.log(e.target.files[0]);
            setFieldValue(name, e.target.files[0]);
          }
        }}
      />
      <ErrorMessage component={"p"} className="error" name={name} />
    </>
  );
};

FileField.propTypes = {
  name: propTypes.string,
  accept: propTypes.string,
  setFieldValue: propTypes.func,
};

export default FileField;
