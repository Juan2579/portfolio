import React from "react";

export const PopUp = ({ popUp, closeModal, error }) => {
  return (
    <div
      style={{ boxShadow: "0 8px 32px 0 rgb(31 38 135 / 37%" }}
      className={`min-w-[288px] min-h-[200px] popup ${ popUp ? "open-popup" : "" } relative flex flex-col items-center gap-5 px-5 py-10 shadow-xl rounded-lg bg-[#160d45] border-2 border-white z-10 backdrop-blur-sm lg:min-w-[500px] lg:gap-12 lg:py-12`}
    >
      {error ? (
        <svg className="w-14 absolute top-[-28px] bg-red-600 rounded-[50%] border-0 fill-current text-white" viewBox="0 0 128 128">
          <path d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z" />
          <path d="M92.12,35.79a3,3,0,0,0-4.24,0L64,59.75l-23.87-24A3,3,0,0,0,35.88,40L59.76,64,35.88,88a3,3,0,0,0,4.25,4.24L64,68.25l23.88,24A3,3,0,0,0,92.13,88L68.24,64,92.13,40A3,3,0,0,0,92.12,35.79Z" />
        </svg>
      ) : (
        <svg
          className="w-14 absolute top-[-28px] bg-green-600 rounded-[50%] border-0 fill-current text-white"
          viewBox="0 0 128 128"
        >
          <path d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z" />
          <path d="M87.9,42.36,50.42,79.22,40.17,68.43a3,3,0,0,0-4.35,4.13l12.35,13a3,3,0,0,0,2.12.93h.05a3,3,0,0,0,2.1-.86l39.65-39a3,3,0,1,0-4.21-4.28Z" />
        </svg>
      )}

      <h3 className="text-2xl lg:text-4xl text-white font-bold">{!error ? "¡Gracias!" : "Hubo un error"}</h3>
      <p className="lg:text-lg text-gray-300">{!error ? "Tu mensaje ha sido enviado" : "Intentalo de nuevo, por favor"}</p>
      <button
        onClick={closeModal}
        className="form-button w-[50%] relative bg-[#ed05f9] py-2 px-5 font-bold text-white overflow-hidden transition-all duration-500 shadow-2xl rounded-lg lg:w-[30%]"
        type="button"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Cerrar
      </button>
    </div>
  );
};
