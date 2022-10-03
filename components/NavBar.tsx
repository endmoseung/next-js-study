import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function NavBar() {
  const router = useRouter();
  // console.log(router);

  // const handleReload = () => {
  //   router.reload();
  // };
  return (
    <NavContainer>
      <img src="/vercel.svg" alt="" />
      <NavWrapper>
        <Link href="/">
          <a>home</a>
        </Link>
        <Link href="/login">login</Link>
      </NavWrapper>
      {/* <div onClick={handleReload}>reload</div> */}
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.WHITE};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.layouts.SMALL};
`;

const NavWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
