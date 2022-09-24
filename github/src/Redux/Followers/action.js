import * as types from "./actionTypes";
import Axios from "axios";
export const getfollower=(payload)=>dispatch=>{
  
    dispatch({type:types.FOLLOWERS_DATA_REQUEST})
    Axios.get(`https://api.github.com/users/${payload}/followers`)
    .then(r=>{
             
            dispatch({type:types.FOLLOWERS_DATA_SUCCESS,payload:r.data})
       
    })
    .catch(err=>{
        
        dispatch({type:types.FOLLOWERS_DATA_FAILURE})
})
}