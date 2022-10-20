import React from "react";

function ChangeColor() {

    function changeColor(e) {
        if (e.target.parentNode.classList.contains("greenCard") === true) {
            e.target.parentNode.classList.add("greyCard");
            e.target.parentNode.classList.remove("greenCard");
        } else if (e.target.parentNode.classList.contains("greyCard") === true) {
            e.target.parentNode.classList.add("yellowCard");
            e.target.parentNode.classList.remove("greyCard");
        } else {
            e.target.parentNode.classList.add("greenCard");
            e.target.parentNode.classList.remove("yellowCard");
        }
    }

    return (
           <button className="button" onClick={(e) => {changeColor(e)}}>Change Color</button>
    )
}

export default ChangeColor;