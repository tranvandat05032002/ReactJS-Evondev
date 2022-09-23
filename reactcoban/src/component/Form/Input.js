import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Input = () => {
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [selectInput, setSelectInput] = useState("");
  console.log(selectInput);
  //   console.log(message);
  //handle onchange of tagName input
  const handleInputChange = (event) => {
    setFullName(event.target.value);
  };
  const handleTextareaChange = (event) => {
    setMessage(event.target.value);
  };
  const handleSelectChange = (event) => {
    setSelectInput(event.target.value);
  };
  useEffect(() => {
    document.title = fullName;
    document.title = message;
    document.title = selectInput;
  }, [fullName, message, selectInput]);
  return (
    <div className="p-5 grid grid-cols-1 gap-y-20">
      <input
        className="w-full max-w-[300px] border border-gray-400 p-3 rounded-lg"
        placeholder="Enter your name"
        type="text"
        name="fullName"
        value={fullName}
        onChange={handleInputChange}
      />
      <textarea
        className="w-full max-w-[300px] border border-gray-400 p-5 rounded-lg"
        placeholder="Enter your message"
        onChange={handleTextareaChange}
        // value={message}
        name="message"
        id=""
        cols="30"
        rows="10"
      ></textarea>

      <select
        name=""
        id=""
        className="w-full max-w-[300px] border border-gray-400 p-5 rounded-lg"
        onChange={handleSelectChange}
      >
        <option value="VN">Việt Nam</option>
        <option value="USA">USA</option>
        <option value="JP">JaPan</option>
        <option value="TQ">China</option>
      </select>
    </div>
  );
};

export default Input;
