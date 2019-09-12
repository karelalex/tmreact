import React from 'react';
import '../css/main.css'
import {Link} from "react-router-dom";

function Header(props) {
    let menuComponents;
    if (!props.loggedIn) {
        menuComponents = <span><li><Link to="/">Главная</Link></li><li><a onClick={props.loginHandler} href='#'>Вход</a></li></span>
    } else {
        menuComponents = <span>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/projects">Проекты</Link></li>
            <li><Link to="/tasks">Задачи</Link></li>
            <li><Link to="/" onClick={props.logoutHandler}>Выход</Link></li>
        </span>
    }
    return (
        <div className="header">
            <div className="subheader">
                <h1>Планировщик задач</h1>
                {(props.loggedIn && props.username) ? <p>Приветствуем в системе {props.username}</p> : null}
                <ul>{menuComponents}</ul>
            </div>
        </div>
    )
}


export default Header;