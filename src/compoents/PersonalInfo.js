import React from 'react';

const PersonalInfo = () => {
   
        return (
            <div >
              <h2>Personal Info</h2>
              <div className="mb-3">
                <label htmlFor="first_name" className="form-label">First name</label>
                <input type="text" className="form-control" id="first_name" name='first_name' placeholder="e.g: john" />
              </div>
              <div className="mb-3">
                <label htmlFor="last_name" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="last_name" name='last_name' placeholder="e.g: john"  />
              </div>
              <select className="form-select" name="gender"  >
                <option value="male">Male</option>
                <option value="female">Female</option>
               </select>
             
            </div>
          );
    
    
}


export default PersonalInfo;