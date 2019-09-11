import React from 'react';

class ProjectTable extends React.Component {
    projectToRows() {
        const projects = this.props.projects;
        const rows = projects.map((project) =>
            <tr key={project.id}>
                <td>{project.name}</td>
                <td>{project.description}</td>
                <td>{project.finishDate}</td>
            </tr>
        );
        return rows;
    }

    render() {
        return <table>
            <tbody>
            <tr>
                <th>Название</th>
                <th>Описание</th>
                <th>Дата окончания</th>
            </tr>
            {this.props.projects ? this.projectToRows() : <tr>
                <td colSpan={3}>no data</td>
            </tr>}
            </tbody>
        </table>
    }
}

export default ProjectTable;