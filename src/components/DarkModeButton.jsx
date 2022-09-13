import React from "react";

export default function DarkModeButton(props) {

    function handleClick() {
        props.setDarkMode(oldValue => {return !oldValue})
        console.log(props.darkMode)
        document.body.style.backgroundImage = props.darkMode ? 'url(/pipes-white-bg.webp)' : 'url(/pipes-black-bg.png)';
    }

    return (
        <div class={`darkModeButton ${props.darkMode ? "dark" : ""}`} onClick={handleClick}>
            <i class="fas fa-moon fa-xl"></i>
            &nbsp;
        </div>

    )
}