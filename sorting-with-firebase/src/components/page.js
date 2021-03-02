import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";

const Page = (props) => {
  const { onFetch } = props;

  useEffect(() => {
    onFetch();
  }, [onFetch]);

  console.log(props.persons);
  const NameSortHandler = () => {
    //console.log(props.personAsce)
    props.personAsce ? props.onNameSortAsce() : props.onNameSortDsce();
  };

  const AgeSortHandler = () => {
    props.AgeAsce ? props.onAgeSortAsce() : props.onAgeSortDsce();
  };

  const salarySortHandler = () =>{
    props.SalaryAsce ? props.onSalarySortAsce() : props.onSalarySortDsce();
  }
  return (
    <div>
      <table id="customers">
        <thead>
          <tr>
            <th>
              Name 
              {props.personAsce ? (
                <i
                  onClick={NameSortHandler}
                  className="fas fa-sort-amount-up"
                ></i>
              ) : (
                <i
                  onClick={NameSortHandler}
                  className="fas fa-sort-amount-up-alt"
                ></i>
              )}
            </th>
            <th>
              Age
              {props.AgeAsce ? (
                <i
                  onClick={AgeSortHandler}
                  className="fas fa-sort-amount-up"
                ></i>
              ) : (
                <i
                  onClick={AgeSortHandler}
                  className="fas fa-sort-amount-up-alt"
                ></i>
              )}
            </th>
            <th>
              Salary 
              {props.SalaryAsce ? (
                <i
                  onClick={salarySortHandler}
                  className="fas fa-sort-amount-up"
                ></i>
              ) : (
                <i
                  onClick={salarySortHandler}
                  className="fas fa-sort-amount-up-alt"
                ></i>
              )}
            </th>
          </tr>
        </thead>

        <tbody>
          {props.persons.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.age} yr</td>
              <td>{p.salary} tk</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    persons: state.persons,
    personAsce: state.personAsce,
    AgeAsce: state.AgeAsce,
    SalaryAsce: state.SalaryAsce,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetch: () => dispatch(actions.fetch()),
    onNameSortAsce: () => dispatch(actions.nameSortAsce()),
    onNameSortDsce: () => dispatch(actions.nameSortDsce()),
    onAgeSortAsce: () => dispatch(actions.ageSortAsce()),
    onAgeSortDsce: () => dispatch(actions.ageSortDsce()),
    onSalarySortAsce: () => dispatch(actions.salarySortAsce()),
    onSalarySortDsce: () => dispatch(actions.salarySortDsce())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
