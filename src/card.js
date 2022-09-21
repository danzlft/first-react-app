import React from "react";

const Card = (props) => {
    const {title, name, age, gender} = props;
    return (
        <div className = "users_container">
            <h1>Users Card</h1>
                <div className = "users">
                    <h3>Title: {title}</h3>
                    <p>Name: {name}</p>
                    <p>Age: {age}</p>
                    <p>Gender: {gender}</p>
                </div>
        </div>
    )
}

export default Card;