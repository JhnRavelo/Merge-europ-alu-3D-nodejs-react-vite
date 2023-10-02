import { ErrorMessage } from "formik";
import propTypes from "prop-types";
import folderImg from "../../../assets/png/folder.png"
import fileImg from "../../../assets/png/gallery.png"

const FileField = ({ name, accept, setFieldValue, folder }) => {

  if (!folder) {
    return (
      <>
        <input
          style={{ display: "none" }}
          id={name}
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
        <label htmlFor={name} className="labelInput">
          <img src={fileImg} alt="" />
          <span>Ajouter Image</span>
        </label>
        <ErrorMessage component={"p"} className="error" name={name} />
      </>
    );
  } else {
    return (
      <>
        <input
          style={{ display: "none" }}
          id="fileFolder"
          type="file"
          name={name}
          accept={accept}
          onChange={(e) => {
            if (e.target.files) {
              console.log(e.target.files);
              setFieldValue(name, e.target.files);
            }
          }}
          webkitdirectory=""
          mozdirectory=""
          directory=""
        />
        <label htmlFor="fileFolder" className="labelInput">
          <img src={folderImg} alt="" />
        <span>Ajouter Fichier</span>
        </label>
        <ErrorMessage component={"p"} className="error" name={name} />
      </>
    );
  }
};

FileField.propTypes = {
  name: propTypes.string,
  accept: propTypes.string,
  setFieldValue: propTypes.func,
  folder: propTypes.bool,
};

export default FileField;
