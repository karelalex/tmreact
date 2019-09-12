import ProjectTable from "../guicomponents/ProjectTable";
import React from 'react';
import ProjectEditForm from '../pageblocks/ProjectEditWindow'
import Project from "../model/project";

class ProjectListPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {showEditForm: false};
        this.startEdit = this.startEdit.bind(this);
        this.fieldChangeHandler = this.fieldChangeHandler.bind(this);
        this.saveProject=this.saveProject.bind(this);
        this.closeHandler=this.closeHandler.bind(this);
    }

    componentDidMount() {
        this.props.projectHandler();
    }

    startEdit(id) {
        fetch('/project/' + id)
            .then(responce => {
                if (responce.ok) {
                    return responce.json()
                }
            })
            .then(project => {
                this.setState({
                    showEditForm: true,
                    project: new Project(project.name, project.description, project.finishDate, project.id)
                })
            });

    }
    fieldChangeHandler(projectToEdit) {
        this.setState({project : projectToEdit} );
    }
    saveProject(event) {
        event.preventDefault();
        this.props.projectSaver(this.state.project);
        this.setState({showEditForm : false, project : null});
    }
    closeHandler(){
        this.setState({showEditForm : false});
    }
    render() {
        return <div><ProjectTable
            projects={this.props.projects}
            projectRemover={this.props.projectRemover}
            projectEditorShow={this.startEdit}
        />
            {this.state.showEditForm ? <ProjectEditForm
                projectToEdit={this.state.project}
                handleFormChange={this.fieldChangeHandler}
                saveProject={this.saveProject}
                closeHandler={this.closeHandler}
            /> : null}
            <button onClick={this.props.projectCreater}>Создать проект</button>
        </div>
    }

}

export default ProjectListPage;