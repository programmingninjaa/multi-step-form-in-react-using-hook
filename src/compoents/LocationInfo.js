import React from 'react';

const LocationInfo  = () => {
    return (
    <div >
      <h2>Location Info</h2>
      <div className="mb-3">
           <label htmlFor="state" className="form-label">State</label>
           <input type="text" className="form-control" id="state"  name="state" placeholder="e.g: xyz" />
       </div>
       <div className="mb-3">
           <label htmlFor="city" className="form-label">City</label>
           <input type="text" className="form-control" id="city"  name="city" placeholder="e.g: xyz" />
       </div>
    </div>
    ) 
    
}


export default LocationInfo ;