import React from 'react'

function RegistrationForm() {
  return (
    <>
    <form >
      <div>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"  
          />
        </label>
      </div>
      <div>
        Gender:
        <label>
          <input
            type="radio"
            name="gender"
           />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"  
          />
          Female
        </label>
      </div>
      <div>
        <label>
          Age:
          <input
            type="number"
            name="age"  
          />
        </label>
      </div>
      <div>
     Terms and conditions
        <input 
        type="checkboxw" />
        {/* type me checkbox dalne pr nhi chl rha  */}
        
      
      </div>
      <button type="submit">Submit</button>
    </form>
    
    </>
    )
}
export default RegistrationForm