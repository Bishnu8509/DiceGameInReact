import { useState } from "react";
import styled from "styled-components";
import SelectNumber from "./SelectNumber";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import ShowResults from "./ShowResults"
import { Button,OutlineButton } from "../styled/Button";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error,setError]=useState("")
  const [visible,setVisible]=useState(false)

  const generateRandomNumber = (min, max) => {
    // console.log( Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      return setError("you have not selected any number")
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);
   

    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  const resetStore=()=>{
    setScore(0)
  }


  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <SelectNumber
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={resetStore}>Reset</OutlineButton>
        <Button onClick={()=>setVisible((prev)=>!prev)}>Show Rules</Button>
      </div>
     { visible && <ShowResults/>}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 20px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns{
    margin-top: 40px;
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: center;
    flex-direction: column;
  }
`;


