import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
    NProgress.start();
  };
  
  Router.onRouteChangeComplete = () => {
    NProgress.done();
  };
  
  Router.onRouteChangeError = () => {
    NProgress.done();
  };
const Logo = styled.h1`
  font-size: 3.5rem;
  margin-left: 2rem;
  font-weight: 500;
  position: relative;
  /* height: 10rem; */
  /* background:${props => props.theme.red}; */
  z-index: 2;
  transform: skew(-10deg);
  a {
    padding: 1rem 1rem;
    text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2);
    background: rgb(218,199,231);
    background: radial-gradient(circle, rgba(218,199,231,1) 0%, rgba(227,155,155,1) 50%, rgba(242,211,167,1) 100%);
    color: ${props => props.theme.black};
    /* text-transform: uppercase; */
    text-decoration: none;
    border-radius: 50%;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
  .bar {
    border-bottom: 5px solid ${props => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>CraftyMoon</a>
        </Link>
      </Logo>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </StyledHeader>
);

export default Header;