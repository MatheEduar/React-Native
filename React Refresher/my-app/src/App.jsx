import React, { useState } from "react";

import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/GoalList/NewGoal/NewGoal";

import "./index.css"

function App() {

  const [courseGoals, setCourseGoals] = useState([
      {id: 'cg1', text: "Finish the Course"},
      {id: 'cg2', text: "Learn About the course main topic"},
      {id: 'cg3', text: "Don't kill yourself"}
    ]
  )
  
  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal);
    })
    console.log(courseGoals);
  }


  return (
    <div className="app">
      <h1>Hello React</h1>
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalList goals={courseGoals} />
    </div>
  );
}

export default App;
