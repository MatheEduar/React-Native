import React from "react";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/GoalList/NewGoal/NewGoal";

import "./index.css"

function App() {

  const courseGoals = [
    {id: 'cg1', text: "Finish the Course"},
    {id: 'cg2', text: "Learn About the course main topic"},
    {id: 'cg3', text: "Don't kill yourself"}
  ];

  return (
    <div className="app">
      <h1>Hello React</h1>
      <NewGoal />
      <GoalList goals={courseGoals} />
    </div>
  );
}

export default App;
