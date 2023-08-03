// Write your code here
import './index.css'

import {AiFillCalendar} from 'react-icons/ai'

import {Link} from 'react-router-dom'

const ProjectTimelineCard = props => {
  const {projectTimelineItem} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectTimelineItem
  console.log(projectUrl)

  return (
    <div>
      <img src={imageUrl} className="project-img" alt="project" />
      <div className="title-duration-container">
        <h1 className="title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar className="duration-icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <Link to={`${projectUrl}`}>
        <p className="link-item">Visit</p>
      </Link>
    </div>
  )
}

export default ProjectTimelineCard
