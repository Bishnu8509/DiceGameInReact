
import styled from "styled-components";

const SelectNumber = ({error,setError, selectedNumber,setSelectedNumber }) => {
  const arr = [1, 2, 3, 4, 5,6];
  const numberSelecorhandelr=(value)=>{
    setSelectedNumber(value)
    setError("")
  }

  return (
    <SelectNumberContainer>
    <p className="error">{error}</p>
      <div className="flex">
        {arr.map((value, i) => {
          return (
            <Box
              key={i}
              isSelected={value == selectedNumber}
              onClick={()=>numberSelecorhandelr(value)}
            >
              {value}
            </Box>
          );
        })}
      </div>
      <p>Select Number</p>
    </SelectNumberContainer>
  );
};

export default SelectNumber;

const SelectNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
  .error{
    color: red;
  }
`;
const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 1px solid #000;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "Black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
