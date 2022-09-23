import React from "react";
import { useState } from "react";

const Input = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    hobby: "",
  });
  console.log(values);
  //   console.log(message);
  //handle onchange of tagName input
  const handleInputChange = (event) => {
    if (event.target.type === "checkbox") {
      setValues({
        ...values,
        [event.target.name]: event.target.checked,
      });
    } else {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    }
  };
  return (
    <div className="p-5">
      <div className="flex gap-x-5">
        <input
          className="w-full max-w-[300px] border border-gray-400 p-3 rounded-lg"
          placeholder="Enter your name"
          type="text"
          name="fullName"
          onChange={handleInputChange}
        />
        <input
          className="w-full max-w-[300px] border border-gray-400 p-3 rounded-lg"
          placeholder="Enter your email"
          type="email"
          name="email"
          onChange={handleInputChange}
        />

        <input type="checkbox" name="hobby" onChange={handleInputChange} />
      </div>
    </div>
  );
};

export default Input;
