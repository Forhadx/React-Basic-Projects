import axios from "axios";
import React, { useState, useEffect, useRef } from "react";

const Search = (props) => {
  const { onLoadPersons } = props;
  const [enteredFilter, setEnteredFilter] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const query =
          enteredFilter.length === 0
            ? ""
            : `?orderBy="name"&equalTo="${enteredFilter}"`;
        axios
          .get(
            "https://practice-database-7dd57-default-rtdb.firebaseio.com/serchPerson.json" +
              query
          )
          .then((res) => {
            console.log("res: ", res.data);
            const loadPersons = [];
            for (let key in res.data) {
              loadPersons.push({
                ...res.data[key],
                id: key,
              });
            }
            onLoadPersons(loadPersons);
          });
      }
    }, 1000);

    return ()=>{
        clearTimeout(timer);
      }
      
  }, [onLoadPersons, inputRef, enteredFilter]);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={enteredFilter}
        onChange={(e) => setEnteredFilter(e.target.value)}
        placeholder="search"
      />
    </div>
  );
};

export default Search;
