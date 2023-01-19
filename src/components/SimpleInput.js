import React from "react";
import classes from "./SimpleInput.module.css";

const SimpleInput = () => {
  return (
    <form>
      <div className={classes.form_control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.form_actions}>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
