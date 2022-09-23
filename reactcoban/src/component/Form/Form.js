import React from "react";
import useHandleChange from "../hooks/useHandleChange";

const Form = () => {
  const { values, handleChange } = useHandleChange({
    fullName: "",
    email: "",
    hobby: "",
  });
  console.log(values);
  return (
    <div className="p-5">
      <div className="flex gap-x-5">
        <input
          className="w-full max-w-[300px] border border-gray-400 p-3 rounded-lg"
          placeholder="Enter your name"
          type="text"
          name="fullName"
          onChange={handleChange}
        />
        <input
          className="w-full max-w-[300px] border border-gray-400 p-3 rounded-lg"
          placeholder="Enter your email"
          type="email"
          name="email"
          onChange={handleChange}
        />

        <input type="checkbox" name="hobby" onChange={handleChange} />
      </div>
    </div>
  );
};

export default Form;
