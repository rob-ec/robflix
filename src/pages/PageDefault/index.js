import React from 'react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import styled from 'styled-components';

const Main = styled.main`
    flex: 1;

    background: var(--black);
    color: var(--white);

    padding-top: 30px;
    padding-left: 5%;
    padding-right: 5%;
`;

function PageDefault({ children }) {
    return (
        <>
            <Menu />

            <Main>
                {children}
            </Main>
            
            <Footer />
        </>
    );
}

export default PageDefault;