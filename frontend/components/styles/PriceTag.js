import styled from 'styled-components';

const PriceTag = styled.span`
  background: rgb(228,154,164);
  background: radial-gradient(circle, rgba(228,154,164,1) 0%, rgba(246,88,136,1) 53%, rgba(255,0,56,1) 100%);
  transform: rotate(3deg);
  color: white;
  font-weight: 600;
  padding: 10px;
  line-height: 1;
  font-size: 3rem;
  display: inline-block;
  position: absolute;
  top: -3px;
  right: -3px;
  border-radius:50%;
  text-shadow: 4px 4px 0 rgba(0, 0, 0, 0.3);

  /* border: 1px solid ${props => props.theme.black}; */
`;

export default PriceTag;
