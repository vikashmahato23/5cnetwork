import React from 'react';
import { useSelector } from 'react-redux';
import "./home.css"
const Home = ({data,onClick}) => {

    return (
        <div className='home'>
           
               {data.map((e,i)=>{
             
             return <div key={i} onClick={()=>
             onClick(e)
             }>
                  <h3>{e.name}</h3>
                  <p>{e.description}</p>
                 <div>
                    <p><span style={{color:"blue"}}>Langaue:</span>{e.language}</p>
                    <p><span style={{color:"blue"}}>Forks:</span>{e.forks_count}</p>
                </div>
                </div>   
               })}
        </div>
    );
};

export default Home;