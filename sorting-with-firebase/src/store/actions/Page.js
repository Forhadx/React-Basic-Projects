import * as actionTypes from './actionTypes';
import axios from 'axios';

export const insertSuccess = (id, data) =>{
    return{
        type: actionTypes.INSERT_SUCCESS,
        id: id,
        data: data
    }
}

export const insert = (personData) =>{
    return dispatch =>{
        axios.post('https://practice-database-7dd57-default-rtdb.firebaseio.com/persons.json', personData)
            .then(res =>{
                dispatch(insertSuccess(res.data.name, personData))
            })
            .catch(err =>{
                console.log('error: ',err)
            })
    }
}

export const fetchSuccess = (data) =>{
    return{
        type: actionTypes.FETCH_SUCCESS,
        data: data
    }
}

export const fetch = () =>{
    return dispatch =>{
        axios.get('https://practice-database-7dd57-default-rtdb.firebaseio.com/persons.json')
            .then(res =>{
                const fetchPerson = [];
                for(let key in res.data){
                    fetchPerson.push({
                        ...res.data[key],
                        id: key
                    })
                }
                dispatch(fetchSuccess(fetchPerson))
            })
    }
}

export const nameSortAsce = () =>{
    return{
        type: actionTypes.NAME_SORT_ASCE
    }
}

export const nameSortDsce = () =>{
    return{
        type: actionTypes.NAME_SORT_DSCE
    }
}

export const ageSortAsce = () =>{
    return{
        type: actionTypes.AGE_SORT_ASCE
    }
}

export const ageSortDsce = () =>{
    return{
        type: actionTypes.AGE_SORT_DSCE
    }
}

export const salarySortAsce = () =>{
    return{
        type: actionTypes.SALARY_SORT_ASCE
    }
}

export const salarySortDsce = () =>{
    return{
        type: actionTypes.SALARY_SORT_DSCE
    }
}