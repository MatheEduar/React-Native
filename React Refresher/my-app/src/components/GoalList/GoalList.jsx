import React from "react";
import './GoalList.css'

function GoalList(props) {
    const goals = props.courseGoals;

    return (
      <ul className="goal-list"> 
        { props.goals.map((goal) => {
          return <li key={goal.id}>{goal.text}</li>
        })}

      </ul>
    );
}

export default GoalList;