import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import cdLogo from '../assets/cd_logo.svg';

const Main = styled.main`
  display: flex;
  justify-content: center;
  padding: 0 4.8rem;
  /* border: 1px solid var(--color-grey-100); */

  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  padding: 0 3.2rem;
  margin-top: 32px;

  margin: 0 auto;

  @media (max-width: 500px) {
    padding: 0 1.8rem;
    margin-top: 24px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border: 1px solid var(--color-grey-100);
  /* position: relative; */

  @media (max-width: 500px) {
    padding: 0.4rem 1.8rem;
    border: none;
    z-index: 9;

    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    transition: all 0.5s ease-in;

    visibility: ${(props) => (props.$isOpen ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.$isOpen ? 0.95 : 0)};
    pointer-events: ${(props) => (props.$isOpen ? 'auto' : 'none')};
  }
`;

const Img = styled.img`
  width: 4.8rem;
`;

function AppLayout() {
  return (
    <>
      <Nav>
        <Img src={cdLogo} />
      </Nav>
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </>
  );
}

export default AppLayout;
