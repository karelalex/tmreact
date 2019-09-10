import React from 'react';
import './App.css';
import Footer from './pageblocks/Footer.js'
import Header from "./pageblocks/Header";
import ProjectTable from "./ProjectTable";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loggedIn: false,};
        fetch('/random')
            .then(response => response.json())
            .then(text => this.setState({random: text}));
        this.loginHandler = this.loginHandler.bind(this);
        this.logoutHandler = this.logoutHandler.bind(this);
        this.projectHandler = this.projectHandler.bind(this);
    }

    loginHandler() {
        this.setState({loggedIn: true});
    }

    logoutHandler() {
        this.setState({loggedIn: false});
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
                    loginHandler={this.loginHandler}
                    logoutHandler={this.logoutHandler}
                    projectHandler={this.projectHandler}
                />
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
