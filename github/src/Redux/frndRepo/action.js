import * as types from "./actionTypes";
import Axios from "axios";
export const getRepo=(payload)=>dispatch=>{
  
    dispatch({type:types.REPO_DATA_REQUEST})
    Axios.get(`https://api.github.com/users/${payload}/repos`)
    .then(r=>{
             
            dispatch({type:types.REPO_DATA_SUCCESS,payload:r.data})
       
    })
    .catch(err=>{
        
        dispatch({type:types.REPO_DATA_FAILURE})
})
}