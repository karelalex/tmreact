import React from 'react';
import './App.css';
import Footer from './pageblocks/Footer.js'
import Header from "./pageblocks/Header";
import ProjectTable from "./ProjectTable";
import LoginForm from "./pageblocks/LoginForm";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            auth: {showLogin: false}
        };
        fetch('/random')
            .then(response => response.json())
            .then(text => this.setState({random: text}));
        this.showLoginFormHandler = this.showLoginFormHandler.bind(this);
        this.loginHandler=this.loginHandler.bind(this);
        this.logoutHandler = this.logoutHandler.bind(this);
        this.projectHandler = this.projectHandler.bind(this);
        this.hideLoginFormHandler = this.hideLoginFormHandler.bind(this);
        this.loginChangeHandler=this.loginChangeHandler.bind(this);
        this.passwordChangeHandler=this.passwordChangeHandler.bind(this);
    }

    loginChangeHandler(event){
        let authClone = Object.assign({}, this.state.auth, {login: event.target.value});
        this.setState({auth:authClone})
    }

    passwordChangeHandler(event){
        let authClone = Object.assign({}, this.state.auth, {password: event.target.value});
        this.setState({auth:authClone})
    }
    showLoginFormHandler() {
        this.setState({auth: {showLogin: true}})
    }

    hideLoginFormHandler() {
        this.setState({auth: {showLogin: false}})
    }

    loginHandler(event){
        const requestBody ='login='+this.state.auth.login
            +'&'
            + 'password='+this.state.auth.password;
        fetch('/auth/login', {
            method : "POST",
            headers : {
                'Content-type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: requestBody
        })
            .then(response => {
                if (response.ok) {
                    this.hideLoginFormHandler();
                    this.setState({loggedIn : true})
                }
            });
        event.preventDefault();
    }

    logoutHandler() {
        fetch('/auth/logout')
            .then( ()=>this.setState({loggedIn: false}))

    }

    projectHandler() {
        fetch('/project')
            .then(response => {
                if (response.ok) return response
                else return Promise.reject()
            })
            .then(response => response.json())
            .then(json => {
                this.setState({projects: json})
            })
    }

    render() {
        return (
            <div>
                <Header
                    loggedIn={this.state.loggedIn}
                    username={this.state.username}
                    loginHandler={this.showLoginFormHandler}
                    logoutHandler={this.logoutHandler}
                    projectHandler={this.projectHandler}
                />
                {this.state.auth.showLogin ?  <LoginForm
                    closeHandler={this.hideLoginFormHandler}
                    loginHandler={this.loginHandler}
                    loginChangeHandler={this.loginChangeHandler}
                    passChangeHandler={this.passwordChangeHandler}
                /> : null}
                {this.state.random}
                {this.state.loggedIn.toString()}
                <ProjectTable
                    projects={this.state.projects}
                />
                <Footer/>
            </div>
        );
    }
}

export default App;
