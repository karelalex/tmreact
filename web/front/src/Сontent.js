import React from 'react';
import './App.css';
import Footer from './pageblocks/Footer.js'
import Header from "./pageblocks/Header";
import LoginForm from "./pageblocks/LoginForm";
import MainPage from "./pageblocks/MainPage";
import TaskListPage from "./pageblocks/TaskListPage";
import ProjectListPage from "./pageblocks/ProjectListPage";
import {Route} from 'react-router-dom'
import Project from "./model/project";


class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            auth: {showLogin: false}
        };
        this.showLoginFormHandler = this.showLoginFormHandler.bind(this);
        this.loginHandler = this.loginHandler.bind(this);
        this.logoutHandler = this.logoutHandler.bind(this);
        this.hideLoginFormHandler = this.hideLoginFormHandler.bind(this);
        this.loginChangeHandler = this.loginChangeHandler.bind(this);
        this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        this.projectHandler = this.projectHandler.bind(this);
        this.projectRemover=this.projectRemover.bind(this);
        this.projectCreater=this.projectCreater.bind(this);
    }

    loginChangeHandler(event) {
        let authClone = Object.assign({}, this.state.auth, {login: event.target.value});
        this.setState({auth: authClone})
    }

    passwordChangeHandler(event) {
        let authClone = Object.assign({}, this.state.auth, {password: event.target.value});
        this.setState({auth: authClone})
    }

    showLoginFormHandler() {
        this.setState({auth: {showLogin: true}})
    }

    hideLoginFormHandler() {
        this.setState({auth: {showLogin: false}})
    }

    projectHandler() {
        fetch('/project')
            .then(response => {
                if (response.ok) return response
                else return Promise.reject()
            })
            .then(response => response.json())
            .then(json => {
                let projects=json.map((item)=>new Project(item.name, item.description, item.finishDate, item.id));
                this.setState({projects: projects})
            })
    }

    projectRemover(id) {
        fetch('/project/'+id,
            {
                method : "DELETE"
            })
            .then(response=>{
                if(response.ok) {
                    let restOfProjects = this.state.projects.filter(item=>item.id!==id);
                    this.setState({projects : restOfProjects});
                }
            })
    }
    projectCreater(){
        const project = new Project("Имя");
        fetch('project',
            {
                method : 'POST',
                body : JSON.stringify(project),
                headers: {
                    'Content-type' : 'application/json'
                }
            }).then(response=>{
                if(response.ok) {
                    let projects = this.state.projects.slice();
                    projects.unshift(project);
                    this.setState({projects : projects})
                }
        })
    }

    loginHandler(event) {
        const requestBody = 'login=' + this.state.auth.login
            + '&'
            + 'password=' + this.state.auth.password;
        fetch('/auth/login', {
            method: "POST",
            headers: {
                'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: requestBody
        })
            .then(response => {
                if (response.ok) {
                    this.hideLoginFormHandler();
                    this.setState({loggedIn: true})
                }
            });
        event.preventDefault();
    }

    logoutHandler() {
        fetch('/auth/logout')
            .then(() => this.setState({loggedIn: false}))

    }

    render() {
        return (
            <div>
                <Header
                    loggedIn={this.state.loggedIn}
                    username={this.state.username}
                    loginHandler={this.showLoginFormHandler}
                    logoutHandler={this.logoutHandler}
                />
                {this.state.auth.showLogin ? <LoginForm
                    closeHandler={this.hideLoginFormHandler}
                    loginHandler={this.loginHandler}
                    loginChangeHandler={this.loginChangeHandler}
                    passChangeHandler={this.passwordChangeHandler}
                /> : null}
                <div>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/projects" render={() => <ProjectListPage
                        projects={this.state.projects}
                        projectHandler={this.projectHandler}
                        projectRemover={this.projectRemover}
                        projectCreater={this.projectCreater}
                    />}/>
                    <Route path="/tasks" component={TaskListPage}/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Content;
