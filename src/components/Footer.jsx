import React from "react";

export default function Footer(props) {
  const { data, showModal, handleToggleModal } = props;
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h1>NASA API Project</h1>
        <h2>{data?.title}</h2>
      </div>
      <button onClick={handleToggleModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
