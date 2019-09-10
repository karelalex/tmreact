import React from 'react';
import '../main.css'

function Header(props) {
    let menuComponents ;
    if(!props.loggedIn){
        menuComponents = <span><li>Главная</li><li><a onClick={props.loginHandler} href='#'>Вход</a></li></span>
    }
    else {
        menuComponents = <span><li>Главная</li><li><a onClick={props.projectHandler} href='#'> Проекты</a></li>
                            <li> Задачи </li>
                                <li><a href='#' onClick={props.logoutHandler}>Выход</a></li></span>
    }
    return (
        <div className="header">
            <div className="subheader">
                <h1>Планировщик задач</h1>
                {(props.loggedIn && props.username) ? <p>Приветствуем в системе {props.username}</p> : null }
                <ul>{menuComponents}</ul>
            </div>
        </div>
    )
}



export default Header;