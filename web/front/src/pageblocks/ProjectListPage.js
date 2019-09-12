import ProjectTable from "../guicomponents/ProjectTable";
import React from 'react';

class ProjectListPage extends React.Component{

    componentDidMount(){
        this.props.projectHandler();
    }


    render() {
        return <ProjectTable projects = {this.props.projects}/>
    }

}
export default ProjectListPage;