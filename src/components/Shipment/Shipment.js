import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import './Shipment.css'

const Shipment = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext); 
  const onSubmit = (data) => {
    
    console.log("Form Submitted", data)
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
      <input className="ship-form-input" defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder="Enter Your Name" />
      {errors.name && <span className="error">Name is required</span>}

      <input className="ship-form-input" defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder="Enter Your Email"/>
      {errors.email && <span className="error">Email is required</span>}

      <input className="ship-form-input" {...register("address", { required: true })} placeholder="Enter Your Address"/>
      {errors.address && <span className="error">Address is required</span>}

      <input className="ship-form-input" {...register("phone", { required: true })} placeholder="Enter Your Phone No."/>
      {errors.phone && <span className="error">Phone is required</span>}

      <input className="ship-form-input" {...register("gender", { required: false })} placeholder="Gender"/>
      {errors.gender && <span className="error">Gender is not required</span>}
      <br/>
      <input className="ship-form-input" type="submit" />
    </form>
  );
};

export default Shipment;
