import React from "react";

const ImagesGrid = props => {
  return (
    <div className="container">
      {props.fetchedData.map(data => (
        <div className="box" key={data.id}>
          <img src={data.photos} alt="photos" />
          <p>{data.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ImagesGrid;
