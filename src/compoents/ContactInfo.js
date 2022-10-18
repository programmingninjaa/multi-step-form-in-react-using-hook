import React from 'react';

const ContactInfo   = () => {
    return (
    <div >
      <h2>Contact Info</h2>
      <div className="mb-3">
           <label htmlFor="email" className="form-label">Email</label>
           <input type="text" className="form-control" id="email"  name="email" placeholder="e.g: john@gmail.com" />
       </div>
       <div className="mb-3">
           <label htmlFor="Phone Number" className="form-label">Phone Number</label>
           <input type="text" className="form-control" id="Phone Number"  name="phone_number" placeholder="e.g: 0399222" />
      </div>
    </div>
    ) 
    
}


export default ContactInfo  ;