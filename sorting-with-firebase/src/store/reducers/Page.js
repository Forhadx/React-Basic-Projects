import * as actionTypes from '../actions/actionTypes';

const initialState = {
    persons: [],
    personAsce: true,
    AgeAsce: true,
    SalaryAsce: true
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.INSERT_SUCCESS:
            const newP = {
                ...action.data,
                id: action.id
            }
            return{
                ...state,
                persons: state.persons.concat(newP)
            }
        case actionTypes.FETCH_SUCCESS:
            return{
                ...state,
                persons: action.data
            }
        case actionTypes.NAME_SORT_ASCE:
            const ascePerson = [...state.persons].sort(function(a, b) {
                var nameA = a.name.toUpperCase(); 
                var nameB = b.name.toUpperCase(); 
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
                return 0;
              });
            return{
                ...state,
                persons: ascePerson,
                personAsce: false
            }
        case actionTypes.NAME_SORT_DSCE:
            const dscePerson = [...state.persons].sort(function(a, b) {
                var nameA = a.name.toUpperCase(); 
                var nameB = b.name.toUpperCase(); 
                if (nameA < nameB) {
                  return 1;
                }
                if (nameA > nameB) {
                  return -1;
                }
                return 0;
              });
            return{
                ...state,
                persons: dscePerson,
                personAsce: true
            }
        case actionTypes.AGE_SORT_ASCE:
            let asceAge = [...state.persons].sort( (a, b) => {
                return a.age - b.age;
              });
              console.log(asceAge)
            return{
                ...state,
                persons: asceAge,
                AgeAsce: false
            }
        case actionTypes.AGE_SORT_DSCE:
            let dsceAge = [...state.persons].sort( (a, b) => {
                return b.age - a.age ;
            });
            return{
                ...state,
                persons: dsceAge,
                AgeAsce: true
            }
        case actionTypes.SALARY_SORT_ASCE:
                let asceSalary = [...state.persons].sort( (a, b) => {
                    return a.salary - b.salary;
                  });
                return{
                    ...state,
                    persons: asceSalary,
                    SalaryAsce: false
                }
        case actionTypes.SALARY_SORT_DSCE:
                let dsceSalary = [...state.persons].sort( (a, b) => {
                    return b.salary - a.salary ;
                });
                return{
                    ...state,
                    persons: dsceSalary,
                    SalaryAsce: true
                }
        default:
            return state;
    }
}

export default reducer;