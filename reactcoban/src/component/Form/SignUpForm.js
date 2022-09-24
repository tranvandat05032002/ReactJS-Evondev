import React from "react";
import { useFormik } from "formik";
const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik);
  return (
    <form
      className="w-full max-w-[500px] mx-auto p-10"
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">FirstName</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter your first name"
          className="border border-gray-400 p-4 rounded-md"
          onChange={formik.handleChange}
        />
      </div>
      <button
        className="p-4 bg-blue-500 font-normal w-full rounded-lg text-white"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default SignUpForm;
