
import React from 'react';

const StepFour = ({activePlan, overall}) => {

  return (
    <div>
      <h3>{overall[activePlan].title}</h3>
    </div>
  )
}

export default StepFour;
