import React from "react";
import classes from "./button.module.css";

function HandlerButtons({label, clickHandler}){

    let colorValue = "";

    function setColor(){
        switch (label) {
            case "Mayor":
                return colorValue="blue"
            case "Acertaste":
                return colorValue="red"
            case "Menor":
                return colorValue = "green"
            case "Reiniciar":
                return colorValue="blue"
        }
    }

    setColor();

    return(
        <button  className={classes[colorValue]} onClick={clickHandler}>{label}</button> 
    )
}
export default HandlerButtons;