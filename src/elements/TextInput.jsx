import styled, { css } from "styled-components";
export default styled.input`
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.3rem;
  border: none;
  
  padding: 0.5rem 1rem;
  margin: 1rem;
  background-color: #F8F6F4;
  ${(props) =>
    props.border &&
    css`
      border-color: ${(props) => props.border};
    `}
  color: lightgreen;
  &:focus {
    background: dark;
    outline: none;
  }
  &::placeholder {
    color:  #00ff2a;
  }
`;
