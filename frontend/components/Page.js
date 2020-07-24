import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

import Header from '../components/Header';
import Meta from '../components/Meta';

const theme = {
    red: '#f73859',
    black: '#111d5e',
    grey: '#fe346e',
    lightgrey: '#fe346e',
    offWhite: '#ffcb74',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  };
  
  const StyledPage = styled.div`
    background: rgb(207,234,235);
    background: radial-gradient(circle, rgba(207,234,235,1) 0%, rgba(246,231,199,1) 100%);
    color: ${props => props.theme.black};
  `;
  
  const Inner = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    padding: 2rem;
  `;
injectGlobal`
@font-face {
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: normal;
  font-style: normal;
}
html {
  box-sizing: border-box;
  font-size: 10px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  line-height: 2;
  font-family: 'Open Sans Condensed', sans-serif;;
}
a {
  text-decoration: none;
  color: ${theme.black};
}
`;
class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Meta />
                    <Header />
                <Inner>{this.props.children}</Inner> 
                </StyledPage>
            </ThemeProvider>

        );
    }
}

export default Page;