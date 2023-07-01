import React from "react";

function Input({ edit, value }) {
  return (
    <>
      <input
        placeholder="eg: Get eggs from the store"
        type="text"
        value={value}
        disabled={!edit && true}
        className={`mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1`}
        aria-label="Input box for todos"
      />
    </>
  );
}

export default Input;
