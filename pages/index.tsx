import NavBar from "components/navBar";
import { useState } from "react";
import styled from "styled-components";

export default function Home() {
  // next js에서 파일명 index.ts는 홈이다.

  const [counter, setCounter] = useState<number>(1);
  // const handleCounter = ()=>{
  //   setCounter(counter+1)
  // }
  return (
    <Container>
      <MainText>hello</MainText>
      <NavBar></NavBar>
      <SubText onClick={() => setCounter(counter + 1)}>{counter}</SubText>
    </Container>
  );
}

const Container = styled.div`
  background-color: mintcream;
  width: 100vw;
  text-align: center;
`;

const MainText = styled.div`
  color: red;
`;

const SubText = styled.button`
  color: yellow;
`;
