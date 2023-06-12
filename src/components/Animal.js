import React from "react";
import './Animal.css'

// Reusable UI element that displays in Animal's name species photo
const Animal = () => {
    return (
        <section className="Animal">
            <h3>Animal Name: Willow</h3>
            <p>Species: Cat</p>
            <img src="https://placekitten.com/" alt="Photo of Willow"></img>
        </section>
    )
}

export default Animal;