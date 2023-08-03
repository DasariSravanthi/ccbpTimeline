// Write your code here
import './index.css'

import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseTimelineItem} = props
  const {courseTitle, description, duration, tagsList} = courseTimelineItem

  return (
    <div>
      <div className="title-duration-container">
        <h1 className="title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle className="duration-icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tag-list-container">
        {tagsList.map(eachTagItem => (
          <li className="tag-item" key={eachTagItem.id}>
            {eachTagItem.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
