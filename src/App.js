import styled, { keyframes } from "styled-components";
const Wrappered = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
from {
  transform:rotate(0edg);
}
to {
  transform:rotate(360edg);
}
`;
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display:flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  span{
    font-size: 20px;
    &:hover{
      font-size: 50px;
    }
    &:active{
      opacity: 0;
    }
  }  
`;

function App() {
  return (
    <Wrappered>
      <Box>
        <span>Hello</span>
      </Box>
    </Wrappered>
  );
}
export default App;
