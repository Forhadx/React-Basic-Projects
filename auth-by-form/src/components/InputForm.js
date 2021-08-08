import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

import { useForm } from "react-hook-form";

import "../App.css";

const InputFrom = React.memo((props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const userHandler = (data) => {
    //console.log("data: ", data);
    props.onAddPost({ ...data, userId: props.userId }, props.token);
    reset({ firstName: "", salary: "" });
  };

  return (
    <div>
      <form className="form__input" onSubmit={handleSubmit(userHandler)}>
        <label>NAME</label>
        <input
          type="text"
          placeholder="length should be between 3 to 6"
          {...register("firstName", {
            required: "first name is required",
            minLength: { value: 3, message: "length should be minimum 3" },
            maxLength: { value: 6, message: "length should be maximum 6" },
          })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}

        <label>SALARY</label>
        <input
          type="number"
          placeholder="salary range 120 to 800"
          {...register("salary", {
            required: "Salary is required",
            min: { value: 120, message: "minimum value is 120" },
            max: { value: 800, message: "maximum value is 800" },
          })}
        />
        {errors.salary && <p>{errors.salary.message}</p>}

        <label>GENDER</label>
        <select {...register("gender", { required: "select any option" })}>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>
        {errors.gender && <p>{errors.gender.message}</p>}

        <button type="submit">ADD</button>
      </form>
    </div>
  );
});

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: (postData, token) => dispatch(actions.inputIn(postData, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputFrom);

/*

 event.preventDefault();
    props.onAddPost(
      {
        inputes: name,
        userId: props.userId,
      },
      props.token
    );
    setName("");
  };

  return (
    <div>
      <form onSubmit={addProductFromHandler}>
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
  
*/

/*

        <input
          type="text"
          placeholder="Product name"
          {...register("firstName", { required: true, maxLength: 5 })}
        />
        {errors.firstName?.type === "required" && <p>first name is required</p>}
        {errors.firstName?.type === "maxLength" && (
          <p>length should be minimum 5</p>
        )}

*/
