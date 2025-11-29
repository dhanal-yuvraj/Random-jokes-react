import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  let handleInputChange = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;

    setFormData((currData) => {
      return { ...currData, [fieldName]: newValue };
    });
  };

  let handleDefault = (event) => {
    event.preventDefault();
    console.log(formData.fullName);
    console.log(formData.userName);
    console.log(formData.password);
    setFormData({
      fullName: "",
      userName: "",
      password: "",
    });
  };
  return (
    <>
      <form onSubmit={handleDefault}>
        <label htmlFor="fullname">Fullname</label>
        <input
          placeholder="Enter your full name"
          type="text"
          value={formData.fullName}
          onChange={handleInputChange}
          id="fullname"
          name="fullName"
        />
        <br />
        <label htmlFor="username">Username</label>
        <input
          placeholder="Enter your username"
          type="text"
          value={formData.userName}
          onChange={handleInputChange}
          id="username"
          name="userName"
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          placeholder="Enter your password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          id="password"
          name="password"
        />
        <button>Submit</button>
      </form>
    </>
  );
}
