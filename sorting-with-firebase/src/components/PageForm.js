import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions/index';

const PageForm = props =>{
    const [name, setName]= useState('');
    const [age, setAge] = useState('');
    const [salary, setSalary] = useState('');

    const addSubmitHandler = event =>{
        event.preventDefault();
        const persontDetails = {
            name: name,
            age: age,
            salary: salary
        }
       // console.log(persontDetails);
        props.onInsert(persontDetails)
        setName('');
        setAge('');
        setSalary('');
    }

    return(
        <div>
            <form onSubmit={addSubmitHandler}>
                <input 
                    type="text" 
                    placeholder="name"
                    value={name}
                    onChange={e => setName(e.target.value)}  />
                <input 
                    type="number" 
                    placeholder="age"
                    value={age}
                    onChange={e => setAge(e.target.value)} />
                <input 
                    type="number" 
                    placeholder="salary"
                    value={salary}
                    onChange={e => setSalary(e.target.value)} />

                <button type="submit">ADD</button>
            </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
      onInsert: (data) => dispatch(actions.insert(data)),
    };
  };
  
export default connect(null, mapDispatchToProps)(PageForm);
