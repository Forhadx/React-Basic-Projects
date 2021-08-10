import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";
import "../App.css";

const InputList = React.memo((props) => {
  const { onInputFetch, token, userId } = props;
  useEffect(() => {
    onInputFetch(token, userId);
  }, [onInputFetch, token, userId]);

  console.log("list..", props.inputData);
  return (
    <div>
      <h1>_____ all data _____</h1>
      <table className="center">
        <thead>
          <tr>
            <th>name</th>
            <th>gender</th>
            <th>gmail</th>
            <th>password</th>
            <th>Confirm password</th>
          </tr>
        </thead>
        <tbody>
          {props.inputData.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.gender}</td>
              <td>{p.email}</td>
              <td>{p.password}</td>
              <td>{p.confirmPassword}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

const mapStateToProps = (state) => {
  return {
    inputData: state.inp.inputData,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInputFetch: (token, userId) =>
      dispatch(actions.InputFetch(token, userId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(InputList);
