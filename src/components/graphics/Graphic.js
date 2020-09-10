import React from "react";

const Graphic = (props) => {
  const month = new Date().toLocaleString("default", { month: "long" });
  const year = new Date().getFullYear();
  return (
    <>
      <div>Grafika</div>
      <h3>{`Current month : ${month} ${year}`}</h3>
    </>
  );
};

export default Graphic;
