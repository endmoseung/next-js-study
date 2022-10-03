import { useRouter } from "next/router";
import styled from "styled-components";
import NavBar from "./NavBar";
import Seo from "./Seo";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  console.log(router);

  return (
    <Container>
      <Seo title={router.pathname.split("/")[1]}></Seo>
      <NavBar></NavBar>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Container>
  );
};

const Container = styled.div`
  border: 0.5px solid ${({ theme }) => theme.colors.BLACK};
  max-width: 500px;
  background-color: beige;
  margin: auto;
  min-height: 100vh;
`;

const ChildrenWrapper = styled.div`
  height: 100%;
  padding: ${({ theme }) => theme.layouts.SMALL};
`;
