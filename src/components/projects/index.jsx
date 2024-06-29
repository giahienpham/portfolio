import ProjectLayout from "./ProjectLayout"

const ProjectList = ({projects}) => {
  return (
    <div>
        {projects.map((project, index) => {
            return <ProjectLayout key = {index} {...project} />
        })}
    </div>
  )
}

export default ProjectList