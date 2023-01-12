import React from 'react'
import { UserProject } from '../../context/ProjectsContext'
import ProjectItem from '../ProjectItem'


const ProjectListItem = () => {
    const { projectArr } = UserProject()
    return (
        <div>
            {projectArr.map((project) => (
                <ProjectItem
                    key={project.key}
                    check={true}
                    project={project.project}
                    author={project.author}
                    status={project.status}
                    indicator={project.indicator}>
                </ProjectItem>)
                )
            }

        </div>
    )
}

export default ProjectListItem