import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from '../store/actions/index';

const InputList = React.memo((props) => {
  const {onInputFetch, token, userId} = props;
  useEffect(()=>{
    onInputFetch(token, userId);
  }, [onInputFetch, token, userId])

  console.log("list..", props.inputData);
  return (
    <div>
      {
        props.inputData.map(p => (
          <p key={p.inputes}>{p.inputes} + +</p>

        ))
      }
    </div>
  );
});

const mapStateToProps = (state) => {
  return {
    inputData: state.inp.inputData,
    token: state.auth.token,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch =>{
  return{
    onInputFetch: (token, userId) => dispatch(actions.InputFetch(token, userId))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(InputList);
