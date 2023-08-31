import React, { useState } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { styled } from "styled-components";
import { json } from "react-router-dom";

function Signup() {
  const [userRegistration, setuserRegistration] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });

  const PostUserData = (e) => {
    console.log(e);
    let value = e.target.value;
    let name = e.target.name;
    setuserRegistration({ ...userRegistration, [name]: value });
  };

  const {username,
  email,
  phone,
  password,
  confirmpassword,} = userRegistration;


  const submitData = async (e) =>{
    e.preventDefault();
   const res = fetch ("https://olx-signup-signin-form-default-rtdb.firebaseio.com/userDataRecords.json",{
    method:"POST",
    headers:{
      "Content-Type": "application.json",
    },
    body: JSON.stringify({
      username,
  email,
  phone,
  password,
  confirmpassword,
    }),
   });

   if(res) {
   alert("data stored");
  } else{
    alert("plz fill the data");
  }

  };
  


  
  return (
    <SignupWrapper>
      <Form className="form-style mt-4">
        <h3 style={{ textAlign: "center" }}>Signup</h3>
        <div>
          <label className="mt-3" htmlFor="username">
            Username
          </label>
          <Input
            type="text"
            name="username"
            onChange={PostUserData}
            id="username"
          />
        </div>
        <div>
          <label className="mt-3" htmlFor="email">
            Email
          </label>
          <Input type="text" name="email" onChange={PostUserData} id="email" />
        </div>
        <div>
          <label className="mt-3" htmlFor="phone">
            Phone
          </label>
          <Input type="text" name="phone" onChange={PostUserData} id="phone" />
        </div>
        <div>
          <label className="mt-3" htmlFor="password">
            Password
          </label>
          <Input
            type="text"
            name="password"
            onChange={PostUserData}
            id="password"
          />
        </div>
        <div>
          <label className="mt-3" htmlFor="confirmpasssword">
            Confirm Passsword
          </label>
          <Input
            type="text"
            name="confirmpasssword"
            onChange={PostUserData}
            id="confirmpasssword"
          />
        </div>
        <div className="d-flex justify-content-center">
          <Button className="mt-4 w-100" type="primary" onClick={submitData}>
            Registration
          </Button>
        </div>
      </Form>
    </SignupWrapper>
  );
}

export default Signup;

const SignupWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;

  .form-style {
    width: 25%;
    border: 1px solid black;
    padding: 20px;
    border-radius: 10px 10px 10px 10px;
    background-color: lightblue;
  }

  Input {
    padding: 8px;
  }
`;
