import React from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import "../App.css";

const InputFrom = React.memo((props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "length should be minimum 3")
      .max(6, "length should be maximum 6"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Password at least 5 char"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm password doesn't match"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const userHandler = (data) => {
    console.log("data: ", data);
    props.onAddPost({ ...data, userId: props.userId }, props.token);
    reset();
  };

  return (
    <div>
      <form className="form__input" onSubmit={handleSubmit(userHandler)}>
        <label>NAME</label>
        <input
          type="text"
          placeholder="length should be between 3 to 6"
          {...register("name")}
        />
        <p>{errors.name?.message}</p>

        <label>Gender</label>
        <select {...register("gender")}>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>

        <label>Email</label>
        <input
          type="text"
          placeholder="enter your email"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>

        <label>Password</label>
        <input
          type="password"
          placeholder="At least 5 char"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>

        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="At least 5 char"
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword?.message}</p>

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
