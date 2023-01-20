/* So let's start with fetching the entered value,the user input.
And there are two main ways for doing that.We can listen on every 
keystroke and store the value in some state variable,
or we use a ref to fetch the input once the user is done typing in 
a value. And I'll show both here. Of course, in reality,we would 
only use one of the two approaches,but here I'll use both.  */

import { useState, useRef } from "react";
import classes from "./SimpleInput.module.css";

const SimpleInput = () => {
  /*An alternative way to  read the value from user Input is 
      useRef()* If you want to read value once only the form is 
      submitted, we can use useRef however if we want to read 
      the user input in each keystroke we need to use other way */
  const nameInputRef = useRef();

  /*we need to use useState beucase whenever the keystroke by the 
    user, the state is updated. Currently useState is assigned to empty
    string and enteredName is the snapshot of the user Input and 
    setEnteredName is the final snapshot of userInput which will set
    the enteredName.
    */
  const [enteredName, setEnteredName] = useState("");
  /* Add a nameInputChangeHandler function to extract the user input and set
    as enteredUserName.This function received default event object   
    */

  //to manage some validation we can add more state
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  /*formSubmissionHandler will be triggered once the form is 
    submitted  */
  const formSubmissionHandler = (event) => {
    /* we are telling browser not to send http request as default.
    Now the request will not be sent when the page is reloaded.
    becuase we need to send request when the form is submitted 
    */
    event.preventDefault();

    /*We need an if check to be sure the form is not submitted blank
    if the form is blank we need to return the function and stop 
    execution */
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
    }
    //if we pass the if check above we need to set the entered name is true
    setEnteredNameIsValid(true);

    console.log(enteredName);
    //refs are always objects with the current property
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    /* setEnteredName to empty string to clear form once it is submitted
     besides we need to bind this inside the input field value={enteredName}*/

    //nameInputRef.current.value="" this is not ideal bc it manupulates the DOM
    setEnteredName("");
  };
  /*
    I want to style my form control conditionally. If enteredNameIsValid
    I would like to ue dynamically form_control if not valid I want to
    use form_control_invalid css classes. 
    */

  return (
    /*bind the form using onSubmit prop*/
    <form onSubmit={formSubmissionHandler}>
      {/* I am gonna use dynamic classname.*/}
      <div
        className={`${classes.form_control} ${
          enteredNameIsValid && classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        {/*bind the nameInputChangeHandler using onChange prop */}
        <input
          /*set nameInput ref as a referance of the below input
          with the special ref prop which react allows us to set on any
          html element */
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {/* adding a p tag to display the error message and 
        I only wanna display the message if the enteredNameIsValid 
        is false, so I need to render conditionally*/}
        {/* I also implement className here becuase I want to display
        input label dinamicly. If there is an error the label will 
        warn the user with some css styling*/}
        {/* So I got the error message on the screen even before writing
        so I need to fix it. Becuase I need to receive the error if I do not
        write anything when I hit the submit button or whenever I click out of input
        label*/}
        {enteredNameIsValid && (
          <p className={classes.error_text}>Name must not be empty</p>
        )}
      </div>
      <div className={classes.form_actions}>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
