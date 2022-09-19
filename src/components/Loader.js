import React from "react";
import LoaderImg from "../images/loader.gif";

const Loader = () => {
  return (
    <main>
      <div className="loader">
        <img src={LoaderImg} alt="loader-img" />
      </div>
    </main>
  );
};

export default Loader;
