import React from 'react';
import PersonalInfo from './PersonalInfo';

const Multiform = () => {
 
    return (
        <div className="bg-dark vh-100">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="card p-3 w-50 mt-5"> 
           <PersonalInfo />
          <div className="d-flex justify-content-around px-5 mt-5">
            <button className="btn btn-warning" >
                Back
            </button>
            <button className="btn btn-warning" >
             Next
            </button>
          </div>
        </div>
      </div>
    </div>

    ) 
    
}


export default Multiform;