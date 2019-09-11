import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Content from "./Сontent";
import ProjectListPage from "./pageblocks/ProjectListPage";
import MainPage from "./pageblocks/MainPage";
import TaskListPage from "./pageblocks/TaskListPage";

class App extends React.Component {


    render() {
        return (
            <Router>
                <Content>
                    <Route path="/" exact component={MainPage}/>
                    <Route path ="/projects" component = {ProjectListPage} />
                    <Route path = "/tasks" component = {TaskListPage}/>
                </Content>
            </Router>
        );
    }
}

export default App;
