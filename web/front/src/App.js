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

                </Content>
            </Router>
        );
    }
}

const ProjectRoute = (props) => (
    <Route path ="/projects" render={()=><ProjectListPage {...props} />} />
)
export default App;
