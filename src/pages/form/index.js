import Container from "components/container";
import Input from "components/input";
import Select from "components/select";
import React,{ useRef } from "react";
import { useState } from "react";
import style from "./form.module.scss";

const Form = () => {
  const [name, setname] = useState("");

  const [email, setemail] = useState("");

  const gender = useRef();


  const [phone, setphone] = useState("");

  const submit = (e) => {
    
    let sex = gender.current.value;
    
    if(!sex){
      alert("gender must be selected")
      return
    }
    
    
    if(name===""){
      alert("Name should not be empty")
      return;
    }
    if(name.length <=3){
      alert("Name should be at least 3 characters long")
      return;
    }

    if(email===""){
      alert("The email field should not be empty")
      return
    }
    
    if(phone.length<10){
      alert("The phoneNumber sholud be valid Pakistani phone number")
      return  
    }
    
    fetch("https://react-coding-challenge-dev.herokuapp.com/api/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        gender: sex,
      }),
    });
  };


function set(e){
  alert("y")
}

  return (
    <Container>
      <form onSubmit={submit}>
        <div className={style.grid}>
          <Input
            label="Name"
            error={true}
            errorMessage={"This field is required"}
            name="name"
            type="text"
            placeholder="name"
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <Select
            label="Gender"
            placeHolder="Gender"
            inputRef ={gender}
            options={options}
          />
          <Input
            name="phone"
            type="number"
            label="Phone"
            placeholder="3007689786"
            onChange={(e) => {
              setphone(e.target.value);
            }}
          />
        </div>
        <div className={style.button}>
          <button>Submit</button>
        </div>
      </form>
    </Container>
  );
};
export default Form;

const options = ["Male", "Female"];
