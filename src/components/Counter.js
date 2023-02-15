import { useState } from "react";
import FormDistance from "./FormDistance";
import FormList from "./FormList";

export default function Counter() {
  const [steps, setState] = useState([]);


  const stepAdd = step => {
    const newSteps = [...steps];
    const stepDate = newSteps.find(o => o.date === step.date);

    if (stepDate) {
      stepDate.distance += step.distance
    } else {
      newSteps.push(step);
      newSteps.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
    }

    setState(newSteps);
  }

  const stepDelete = id => {
    setState(prevState => prevState.filter(o => o.id !== id));
  }



  return (
    <div className="counter-app">
      <FormDistance toAdd={stepAdd} />
      <FormList steps={steps} toDelete={stepDelete} />
    </div>
  )
}