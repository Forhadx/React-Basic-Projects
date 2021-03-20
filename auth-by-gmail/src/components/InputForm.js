import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from '../store/actions/index'

const InputFrom =React.memo(props => {
  const [name, setName] = useState("");

  const addProductFromHandler = (event) => {
    event.preventDefault();
    props.onAddPost({
      inputes: name,
      userId: props.userId
    }, props.token);
    setName('');
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
});

const mapStateToProps = (state) => {
  return {
    token : state.auth.token,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: (postData, token) => dispatch(actions.inputIn(postData, token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputFrom);
