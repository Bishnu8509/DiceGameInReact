import styled from "styled-components";
export const Button = styled.button`
  min-width: 220px;
  height: 44px;
  padding: 10px, 18px, 10px, 18px;
  border-radius: 5px;
  gap: 10px;
  background: #000000;
  color: #ffffff;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;

  &:hover {
    background-color: #fff;
    border: 1px solid black;
    color: #000;
    transition: 0.3s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: #000;
  &:hover {
    background-color: #000;
    border: 1px solid transparent;
    color: #fff;
    /* transition: 0.3s background ease-in; */
  }
`;
