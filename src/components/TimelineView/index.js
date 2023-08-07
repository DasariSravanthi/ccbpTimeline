// Write your code here
import './index.css'

import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="background">
      <div className="timeline-card">
        <h1 className="heading-1">MY JOURNEY OF</h1>
        <h1 className="heading-2">CCBP 4.0</h1>
        <div className="chrono-container">
          <Chrono
            mode="VERTICAL_ALTERNATING"
            items={timelineItemsList}
            theme={{
              secondary: '#ffffff',
              cardForeColor: 'red',
            }}
          >
            {timelineItemsList.map(eachTimeline => {
              if (eachTimeline.categoryId === 'COURSE') {
                return (
                  <CourseTimelineCard
                    courseTimelineItem={eachTimeline}
                    key={eachTimeline.id}
                  />
                )
              }
              return (
                <ProjectTimelineCard
                  projectTimelineItem={eachTimeline}
                  key={eachTimeline.id}
                />
              )
            })}
          </Chrono>
        </div>
      </div>
    </div>
  )
}

export default TimelineView
