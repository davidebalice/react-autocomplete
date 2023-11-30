import React from 'react'
import logo from "./../assets/img/logo.png";
import classes from "./Description.module.css";

const Description = () => {
  return (
    <div className={classes.descriptionContainer}>
      <img src={logo} alt="db logo" className={classes.logo} />
      <div className={classes.text}>Example of search bar with autocomplete function</div>
    </div>
  )
}

export default Description
