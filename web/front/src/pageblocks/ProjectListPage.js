import ProjectTable from "../guicomponents/ProjectTable";
import React from 'react';

class ProjectListPage extends React.Component {

    componentDidMount() {
        this.props.projectHandler();
    }


    render() {
        return <div><ProjectTable
            projects={this.props.projects}
            projectRemover={this.props.projectRemover}
        />
            <button onClick={this.props.projectCreater}>Создать проект</button>
        </div>
    }

}

export default ProjectListPage;