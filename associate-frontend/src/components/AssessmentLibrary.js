import React from 'react'

const AssessmentLibrary = ({ user }) => {

  // console.log(user.reflections)
  // console.log(user.assessments)

  // const reflections = user.reflections.map((reflection) => {
  //   console.log(reflection)
  //   return (
  //     <div>
  //       <h6>{reflection.date}</h6>
  //     </div>
  //   )
  // })

  return (
    <div className="library">
      <div className="library-container">
        <h4>Reflection and Assessment Library</h4>
        <p>Reflections and assessments should be visible here. Ordered by date and conditionally rendered with state and button to display.</p>
      </div>
    </div>
  )
}

export default AssessmentLibrary;
