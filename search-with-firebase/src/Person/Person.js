import React, { useCallback, useState } from 'react';
import Search from '../Search/Search';
import './Person.css';

const Person = () =>{
    const [totalPersons, setTotalPersons] = useState([]);

    const filteredPersonsHandler =useCallback(persons =>{
        setTotalPersons(persons);
    },[]);


    return(
        <div>
            <Search onLoadPersons= {filteredPersonsHandler} />
            <ul>
                {
                    totalPersons.map(p =>(
                        <li key={p.id}>
                            <span>{p.name} </span>
                            <span>{p.age}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Person;