import styled from 'styled-components';

const Title = styled.h3`
  margin: 0 1rem;
  text-align: center;
  /* transform: skew(-5deg) rotate(-1deg); */
  margin-top: -3rem;
  text-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
  a {
    background: rgb(228,154,164);
background: radial-gradient(circle, rgba(228,154,164,1) 0%, rgba(246,88,136,1) 53%, rgba(255,0,56,1) 100%);
    display: inline;
    line-height: 1.3;
    font-size: 4rem;
    text-align: center;
    font-weight:100;
    color: white;
    padding: 0 1rem;
  }
`;

export default Title;
