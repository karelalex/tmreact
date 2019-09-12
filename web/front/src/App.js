import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Content from "./Сontent";

class App extends React.Component {

    render() {
        return (
            <Router>
                <Content/>
            </Router>
        );
    }
}

export default App;
