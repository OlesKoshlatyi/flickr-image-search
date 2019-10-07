import React from "react";
import "./../css/styles.css";

const InputForm = ({ getPhotos }) => {
  return (
    <form onSubmit={getPhotos}>
      <div className="form-container">
        <input type="text" placeholder="type title here" name="title" />
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default InputForm;
