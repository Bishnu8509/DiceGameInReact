import styled from "styled-components";
import { Button } from "../styled/Button";
const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="/images/dices1.png" />
      </div>
      <div className="content">
        <h1>Dices Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  align-items: center;

  .content h1 {
    font-family: Poppins;
    font-size: 96px;
    font-weight: 700;
    line-height: 144px;
    white-space: nowrap;
    text-align: left;
  }
`;

