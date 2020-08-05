import React from 'react';
import styled, { css } from 'styled-components';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

const Main = styled.main`
    flex: 1;

    background: var(--black);
    color: var(--white);

    padding-top: 30px;
    padding-left: 5%;
    padding-right: 5%;
    ${({ paddingAll }) => css`
      padding: ${paddingAll};
    `}
`;

function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />

      <Main paddingAll={paddingAll}>{children}</Main>

      <Footer />
    </>
  );
}

export default PageDefault;
