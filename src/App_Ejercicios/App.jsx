import { useState } from 'react';
import workoutsData from './App_Ejercicios/assets/data/workouts';
import { Row, MainImg, Img, BtnLeft, BtnRight, GlobalStyle } from './App_Ejercicios/styles';

const App = () => {
  const [workouts, setWorkouts] = useState(workoutsData);
  const [currentWorkout, setCurrentWorkout] = useState(0);
  const [currentEx, setCurrentEx] = useState(0);

  const workout = workouts[currentWorkout];

  const nextWorkOut = () => {
    setCurrentWorkout(currentWorkout < workouts.length - 1 ? currentWorkout + 1 : currentWorkout);
  }

  const prevWorkout = () => {
    setCurrentWorkout(currentWorkout > 0 ? currentWorkout - 1 : 0);
  }
  return (
    <>
      <GlobalStyle />
      <h1>
        <BtnLeft onClick={prevWorkout}></BtnLeft>
        {workout.title}
        <BtnRight onClick={nextWorkOut}></BtnRight>
      </h1>

      <Row>
        <MainImg src={workout.exercises[currentEx].img} />
        <Row>
          {
            workout.exercises.map((exercise, i) => <Img active={i === currentEx} src={exercise.img} onClick={() => setCurrentEx(i)} />)
          }
        </Row>
      </Row>

    </>
  );
};

export default App;