import * as types from "./actionTypes";
import Axios from "axios";
export const getData=(payload)=>dispatch=>{
  
    dispatch({type:types.DATA_REQUEST})
    Axios.get(`https://api.github.com/users/${payload}/repos`)
    .then(r=>{
   
            dispatch({type:types.DATA_SUCCESS,payload:r.data})
       
    })
    .catch(err=>{
        
        dispatch({type:types.DATA_FAILURE})
})
}

