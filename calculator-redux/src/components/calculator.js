import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../store/actions/index";

import "./calculator.css";

const Calculator = (props) => {
  const [storeVal, setStoreVal] = useState("");
  const [operator, setOperator] = useState("");
  const [displayVal, setDisplayVal] = useState("");
  const [resultDisplay, setResultDisplay] = useState("");
  const [opFlag, setOpFlag] = useState(false);

  const { result } = props;


  const clickedHandler = (val) => {
    if (operator === "=") {
      props.onReset();
      setOperator("");
    }
    setStoreVal(storeVal + val);
    setDisplayVal(displayVal + val);
    setOpFlag(true);
  };

  const operationHandler = (op) => {
    let x = +storeVal;
    if (operator === "=") {
      props.onReset();
      setOperator("");
    }
    if (op === "+") {
      if (operator === "+" || operator === '') props.onAdd(x);
      if (operator === "-") props.onSubtract(x);
      if (operator === "x") props.onMultipy(x);
      if (operator === "/") props.onDivision(x);
      setOperator("+");
      setOpFlag(false);
      setDisplayVal(displayVal + " + ");
      setStoreVal("");
    } else if (op === "-") {
      if (operator === "+" || operator === '') props.onAdd(x);
      if (operator === "-") props.onSubtract(x);
      if (operator === "x") props.onMultipy(x);
      if (operator === "/") props.onDivision(x);
      setOperator("-");
      setOpFlag(false);
      setDisplayVal(displayVal + " - ");
      setStoreVal("");
    } else if (op === "x") {
        if(operator === '+' || operator === '')props.onAdd(x);
        if(operator === '-')props.onSubtract(x);
        if(operator === 'x')props.onMultipy(x);
        if(operator === '/')props.onDivision(x);
      setOperator("x");
      setOpFlag(false);
      setDisplayVal(displayVal + " x ");
      setStoreVal("");
    } else if (op === "/") {
        if(operator === '+'|| operator === '')props.onAdd(x);
        if(operator === '-')props.onSubtract(x);
        if(operator === 'x')props.onMultipy(x);
        if(operator === '/')props.onDivision(x);
      setOperator("/");
      setOpFlag(false);
      setDisplayVal(displayVal + " / ");
      setStoreVal("");
    } else if (op === "=") {
      if (operator === "+") props.onAdd(x);
      if (operator === "-") props.onSubtract(x);
      if (operator === "x") props.onMultipy(x);
      if (operator === "/") props.onDivision(x);
      props.onStoreResult();
      setOperator("=");
      setOpFlag(false);
      setStoreVal("");
      setDisplayVal("");
    }else if(op === 'AC'){
        props.onReset();
        setStoreVal('');
        setOperator('');
        setDisplayVal('');
        setResultDisplay('');
        setOpFlag(false);
    }
  };

  useEffect(() => {
    if (operator === "=") {
      //console.log("res: ", result);
      setResultDisplay(result);
    }
  }, [resultDisplay, operator, result]);

  return (
    <div className="calculator">
      <div className="result">
        {operator === "=" ? resultDisplay : displayVal}
      </div>
      <div className="row1">
        <button onClick={() => operationHandler("AC")}>AC</button>
      </div>
      <div className="row2">
        <button onClick={() => clickedHandler("7")}>7</button>
        <button onClick={() => clickedHandler("8")}>8</button>
        <button onClick={() => clickedHandler("9")}>9</button>
        <button onClick={opFlag ? () => operationHandler("+") : null}>
          {" "}
          +
        </button>
      </div>
      <div className="row3">
        <button onClick={() => clickedHandler("4")}>4</button>
        <button onClick={() => clickedHandler("5")}>5</button>
        <button onClick={() => clickedHandler("6")}>6</button>
        <button onClick={opFlag ? () => operationHandler("-") : null}>-</button>
      </div>
      <div className="row4">
        <button onClick={() => clickedHandler("1")}>1</button>
        <button onClick={() => clickedHandler("2")}>2</button>
        <button onClick={() => clickedHandler("3")}>3</button>
        <button onClick={opFlag ? () => operationHandler("x") : null}>x</button>
      </div>
      <div className="row5">
        <button onClick={() => clickedHandler(".")}>.</button>
        <button onClick={() => clickedHandler("0")}>0</button>
        <button onClick={ () => operationHandler("=") }>=</button>
        <button onClick={opFlag ? () => operationHandler("/") : null}>/</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    result: state.result,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (val) => dispatch(actionCreator.add(val)),
    onSubtract: (val) => dispatch(actionCreator.subtract(val)),
    onMultipy: (val) => dispatch(actionCreator.multipy(val)),
    onDivision: (val) => dispatch(actionCreator.division(val)),
    onStoreResult: () => dispatch(actionCreator.store_result()),
    onReset: () => dispatch(actionCreator.reset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);

/* const [storeVal, setStoreVal] = useState("");
  const [operator, setOperator] = useState('');
  const [displayVal, setDisplayVal] = useState("");
  const [resultDisplay, setResultDisplay] = useState('');
  const [opFlag, setOpFlag] = useState(false);

  const { result } = props;

  const clickedHandler = (val) => {
    if(operator === '='){
        props.onReset();
        setOperator('');
    }
    //console.log("val: ", val);
    setStoreVal(storeVal + val);
    setDisplayVal(displayVal + val);
    setOpFlag(true);
     
  };

  const operationHandler = (op) => {
      let x = +(storeVal)
      console.log(x,' op: ', op);
    if(operator === '='){
        props.onReset();
        setOperator('');
    }
    if (op === "+") {
      props.onAdd(x);
      setOperator('+');
      setOpFlag(false)
      setDisplayVal(displayVal + " + ");
      setStoreVal("");
    }else if (op === "-") {
        if(operator === '-'){
            props.onSubtract(x);
        }else{
            props.onSubtract(-x);
        }
        setOperator('-');
        setOpFlag(false)
        setDisplayVal(displayVal + " - ");
        setStoreVal("");
    }else if (op === "x") {
        props.onMultipy(x);
        setOperator('x');
        setOpFlag(false)
        setDisplayVal(displayVal + " x ");
        setStoreVal("");
    }else if (op === "/") {
        props.onDivision(x);
        setOperator('/');
        setOpFlag(false)
        setDisplayVal(displayVal + " / ");
        setStoreVal("");
    }else if (op === "=") {
        if(operator === '+')props.onAdd(x);
        if(operator === '-')props.onSubtract(x);
        if(operator === 'x')props.onMultipy(x);
        if(operator === '/')props.onDivision(x);
        props.onStoreResult();
        setOperator('=');
        setStoreVal('');
        setDisplayVal('');
    }
  };

  //console.log("result: ", result);

 useEffect(()=>{
     if(operator === '='){
         console.log('res: ',result);
         setResultDisplay(result);
     }
 }, [resultDisplay, operator, result])
*/
