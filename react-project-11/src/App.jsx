import { useState } from 'react'
import { useForm } from 'react-hook-form';
import './App.css'

function App() {
  // here it comes
  // In React, when using the react-hook-form library:
  // register: It is a function used to register input fields in the form. It tracks their values and validation rules.
  // handleSubmit: It is a function that handles form submission. It takes the form data and calls the provided function (e.g., for processing or sending data to an API).
  // formState.errors: This provides the errors object, which contains any validation errors for the form fields.
  // Together, these help manage form data, validation, and submission in a clean and efficient way.
  const {
    register,
    handleSubmit,
    // it contains some flag jaise isSubmitting which tells kya form submitting stage m hai kya
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data){
    // this data will be in form of js object 
    await new Promise((resolve)=>{setTimeout(resolve, 5000)});  //When resolve is called, it marks the promise as fulfilled (completed) and allows any code awaiting the promise to proceed.
    console.log("submitting the form", data)
  }
  return (
    // IMP...
    // 1. validation refers to the process of checking user input to ensure it meets certain criteria before submitting the form
    // 2. In React, state refers to an object that stores data or variables that can change over time and affect the rendering of a component. State is used to hold dynamic data that can be modified based on user interaction, API responses, or other factors. When the state changes, React re-renders the component to reflect the updated data. Each component can have its own state.
    <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label>First Name</label>
          {/* i/p ko form ki curr. state se link krna padega
          phir react hook form isko track krega and will keep an eye on validation and other things, error handling ho paaye useEffect
          it is done with help of REGISTER  */}

          {/* required ki validation daal di            VALIDATION....  another val.  */}
          {/* register kr diya input field ko firstName ke naam se  */}

          {/* Good logic if error there then only apply styling */}

          <input type="text" className = {errors.firstName ? 'input-error' : ""} 
            {...register('firstName', {  
              required: true, /* minlenght : 6*/ 
              // L should be capital
              minLength : {value: 6, message:"Len less than 6"},
              maxLength : {value: 10, message:"Atmost len 10"},
              pattern : {value: /^[A-Za-z]+$/i, message:"Only alphabets are allowed both lower and upper Cases"} // means only alpb and both upp low case allowed
              })
            } 
          />
          {/* ERROR HANDLING... */}
          {/* to display msg if validation not fulfilled */}
          {/* means if firstName has errors */}
          {errors.firstName && <p className = "error-msg"> { errors.firstName.message } </p>}

        </div>
        <br />

        <div>
          <label>Middle Name</label>
          <input type="text" {...register('MiddleName')} />
        </div>
        <br />

        <div>
          <label>Last Name</label>
          <input type="text" {...register('LastName')} />
        </div>
        <br />
        {/* if submitting true disable submit button  value-> button pe naam kya likha aaye*/}
        {/* this logic prevents multiple submission */}
        <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting" : "Submit"} />

    </form>
  )
}

export default App
