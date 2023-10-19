import styled, { css } from "styled-components";
export default styled.button`
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.3rem;
  border: none;
  padding: 7px 5px;
  background-color: transparent;
  margin: 20px;
  margin-left: 0px;
  transition: all 0.7s;
  ${(props) =>
    props.background &&
    css`
      background: ${(props) => props.background};
    `}
  color:  #00ff2a;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0);
  }
`;
