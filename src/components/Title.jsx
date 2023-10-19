import styled from "styled-components";

const Heading1 = styled.h1`
  font-size: 2rem;
  color: #00ff2a;
  font-family: 'Courier New', Courier, monospace;
`;

const Heading2 = styled.h2`
  font-size: 1.5rem;
  color: #00ff2a;
  font-family: 'Courier New', Courier, monospace;
`;

function Title() {
  return (
    <>
      <Heading1>PRAKTIKUM RPLBK</Heading1>
      <Heading1>Tugas Modul 2</Heading1>
      <Heading2>Kelompok 11</Heading2>
    </>
  );
}

export default Title;
