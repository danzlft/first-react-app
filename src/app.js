import React from "react";

import "./app.css";

import Card from "./card";

const App = () => {
    return (
        <div className = "app_main">
            <Card title = "Student" name = "Akari" age = {22} gender = "Male"/>
            <Card title = "Student" name = "Taki" age = {20} gender = "Male"/>
            <Card title = "Student" name = "Mitsuha" age = {20} gender = "Female"/>
            <Card title = "Student" name = "Senjougahara" age = {17} gender = "Female"/>
        </div>
    )
}

export default App;