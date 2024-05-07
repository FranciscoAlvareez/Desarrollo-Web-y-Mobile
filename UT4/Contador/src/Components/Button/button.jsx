import React from "react";
import classes from "./button.module.css";

function HandlerButtons({label, clickHandler}){

    let colorValue = "";

    function setColor(){
    if (label=== "ADD") {
        colorValue = "blue"
        return
    }else if(label === "SUBSTRACT"){
        colorValue = "red"
        return
    }else(label === "CLEAR")
    {
        colorValue = "green"
    }
    }

    setColor();

    return(
        <button  className={classes[colorValue]} onClick={clickHandler}>{label}</button> 
    )
}
export default HandlerButtons;